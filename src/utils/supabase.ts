import { createClient, PostgrestResponse } from '@supabase/supabase-js';
import { Professor, gradeDist } from '../types';
import { Database } from '../supabase.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

type professorRow = Database['public']['Tables']['professorlist']['Row'];
type smcprofessorlist = Database['public']['Tables']['smcprofessorlist']['Row'];

const PAGE_SIZE = 1000;
const SMC_SCHOOL = 'Santa Monica College';

// Supabase caps a select at 1000 rows, so page through the whole table.
async function fetchAllRows<T>(table: 'professorlist' | 'smcprofessorlist'): Promise<T[]> {
  const { count } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true });

  if (!count) return [];

  const totalPages = Math.ceil(count / PAGE_SIZE);
  const promises: Promise<PostgrestResponse<T>>[] = [];

  for (let i = 0; i < totalPages; i++) {
    const from = i * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    promises.push(
      Promise.resolve(
        supabase.from(table).select('*').range(from, to).then(response => response)
      ) as Promise<PostgrestResponse<T>>
    );
  }

  const rows: T[] = [];
  for (const result of await Promise.all(promises)) {
    if (!result.data) {
      console.error(`No data found in ${table} result`, result.error);
      continue;
    }
    rows.push(...result.data);
  }
  return rows;
}

// Lower bound of a ~95% interval, so a 5.0 from one review doesn't outrank a 4.8 from fifty.
function popularityScore(rating: number, numEvals: number): number {
  if (numEvals <= 0) return 0;
  return rating - 1.96 / Math.sqrt(numEvals);
}

// The CSV import flattened arrays and objects into "courses/0".."courses/40"
// and "tags/<name>" columns, so rebuild them here.
function professorFromRow(row: professorRow): Professor | null {
  if (!row.id || !row.firstName || !row.lastName) return null;

  const coursesTaught: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const course = row[`courses/${i}` as keyof professorRow];
    if (!course) break;
    coursesTaught.push(String(course));
  }

  const tags: Record<string, number> = {};
  for (const [key, value] of Object.entries(row)) {
    if (!key.startsWith('tags/') || value == null) continue;
    const n = Number(value);
    if (!Number.isNaN(n)) tags[key.slice('tags/'.length)] = n;
  }

  const rating = row.overallRating ?? 0;
  const numEvals = row.numEvals ?? 0;

  return {
    id: row.id,
    firstName: row.firstName,
    lastName: row.lastName,
    department: row.department ?? '',
    school: '',
    numEvals,
    averageRating: rating,
    popularityScore: popularityScore(rating, numEvals),
    coursesTaught,
    tags,
  };
}

// SMC names come as either "Last, First" or "First Last".
function splitName(name: string): { firstName: string; lastName: string } {
  const trimmed = name.trim().replace(/\s+/g, ' ');
  if (trimmed.includes(',')) {
    const [last, first] = trimmed.split(',', 2).map(part => part.trim());
    return { firstName: first ?? '', lastName: last };
  }
  const space = trimmed.lastIndexOf(' ');
  if (space === -1) return { firstName: '', lastName: trimmed };
  return { firstName: trimmed.slice(0, space), lastName: trimmed.slice(space + 1) };
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// smcprofessorlist has one grade-count row per class section, not one row per
// professor. Group sections into a single Professor with per-course grade distributions.
function professorsFromSMCRows(rows: smcprofessorlist[]): Professor[] {
  type Counts = gradeDist['distribution'];
  const byProfessor = new Map<string, {
    name: string;
    department: string;
    courses: Map<string, Counts>;
  }>();

  for (const row of rows) {
    const name = row.Professor?.trim();
    if (!name) continue;

    const key = name.toLowerCase();
    let entry = byProfessor.get(key);
    if (!entry) {
      entry = { name, department: row.Department ?? '', courses: new Map() };
      byProfessor.set(key, entry);
    }

    const course = row.Course?.trim() || 'Unknown course';
    const counts = entry.courses.get(course) ?? { A: 0, B: 0, C: 0, D: 0, F: 0, W: 0 };
    counts.A += row.A ?? 0;
    counts.B += row.B ?? 0;
    counts.C += row.C ?? 0;
    counts.D += row.D ?? 0;
    counts.F += row.F ?? 0;
    counts.W += (row.W ?? 0) + (row.EW ?? 0);
    entry.courses.set(course, counts);
  }

  const professors: Professor[] = [];
  for (const entry of byProfessor.values()) {
    const { firstName, lastName } = splitName(entry.name);

    const gradeDistributions: gradeDist[] = [];
    for (const [course, counts] of entry.courses) {
      const graded = counts.A + counts.B + counts.C + counts.D + counts.F;
      const points = 4 * counts.A + 3 * counts.B + 2 * counts.C + counts.D;
      gradeDistributions.push({
        courseId: course,
        courseName: course,
        semester: '',
        distribution: counts,
        averageGPA: graded ? Math.round((points / graded) * 100) / 100 : 0,
      });
    }

    professors.push({
      id: `smc-${slugify(entry.name)}`,
      firstName,
      lastName,
      department: entry.department,
      school: SMC_SCHOOL,
      numEvals: 0,
      averageRating: 0,
      popularityScore: 0,
      coursesTaught: [...entry.courses.keys()],
      gradeDistributions,
    });
  }
  return professors;
}

async function fetchAllProfessors(): Promise<Professor[]> {
  const rows = await fetchAllRows<professorRow>('professorlist');
  return rows.map(professorFromRow).filter((p): p is Professor => p !== null);
}

async function fetchAllSMCProfessors(): Promise<Professor[]> {
  const rows = await fetchAllRows<smcprofessorlist>('smcprofessorlist');
  return professorsFromSMCRows(rows);
}

const [data, smcData] = await Promise.all([fetchAllProfessors(), fetchAllSMCProfessors()]);

export { supabase, data, smcData };
