import { Professor, FilterOptions } from '../types';

// Search by name, department, or courses
function matchesSearchQuery(professor: Professor, searchQuery: string): boolean {
  if (!searchQuery) return true;
  
  const query = searchQuery.toLowerCase();
  return (
    professor.name.toLowerCase().includes(query) ||
    professor.department.toLowerCase().includes(query) ||
    professor.coursesTaught.some(course => course.toLowerCase().includes(query))
  );
}

// Filter by department
function matchesDepartment(professor: Professor, department: string): boolean {
  return !department || professor.department === department;
}

// Filter by course
function matchesCourse(professor: Professor, course: string): boolean {
  return !course || professor.coursesTaught.includes(course);
}

// Filter by minimum rating
function matchesMinRating(professor: Professor, minRating: number): boolean {
  return professor.averageRating >= minRating;
}

// Sort professors based on criteria
function sortProfessors(professors: Professor[], sortBy: FilterOptions['sortBy']): Professor[] {
  return [...professors].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.averageRating - a.averageRating;
      case 'difficulty':
        // Note: Lower difficulty = easier
        return a.averageRating - b.averageRating;
      case 'recent':
        // For mock data we'll use number of ratings as a proxy for recency
        return b.numRatings - a.numRatings;
      default:
        return 0;
    }
  });
}

// Main filter function that combines all filtering logic
export function filterProfessors(
  professors: Professor[],
  filters: FilterOptions,
  searchQuery: string
): Professor[] {
  const filtered = professors.filter(professor => 
    matchesSearchQuery(professor, searchQuery) &&
    matchesDepartment(professor, filters.department) &&
    matchesCourse(professor, filters.course) &&
    matchesMinRating(professor, filters.minRating)
  );

  return sortProfessors(filtered, filters.sortBy);
}