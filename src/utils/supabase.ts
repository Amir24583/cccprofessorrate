import { createClient, PostgrestResponse } from '@supabase/supabase-js';
import { Professor } from '../types'
import { Database } from '../supabase.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

type professorRow = Database['public']['Tables']['professorlist']['Row'];

async function fetchAllProfessors() {
  const pageSize = 1000;
  const promises: Promise<PostgrestResponse<professorRow>>[] = [];
  
  // get the count of total rows
  const { count } = await supabase
    .from('professorlist')
    .select('*', { count: 'exact', head: true });

    if (!count) return []; 

    const totalPages = Math.ceil(count / pageSize);

    for (let i =0; i < totalPages; i++){
      const from = i * pageSize;
      const to = from + pageSize - 1;
      promises.push(
        Promise.resolve(
        supabase.from('professorlist').select('*').range(from, to).then(response => response)
      ) as Promise<PostgrestResponse<professorRow>>
    );
    }


    const results = await Promise.all(promises);

    const data2: Professor[] = [];

    for (const result of results){
      const data = result.data;
      if (!data) {
        console.error('No data found in result'); 
        continue;
      }
      console.log('Fetched data:', data);

      for (const row of data){
        const coursesTaught: string[] = [];
        for (let i = 1; i <= 40; i++){
          const course = row[`courses/${i}` as keyof typeof row];
          if (!course) break;
          coursesTaught.push(course as string);           
          }

        const professor: Professor = {
          id: row.id!,
          firstName: row.firstName!,
          lastName: row.lastName!,
          department: row.department!,
          school: row.school!,
          numEvals: row.numEvals!,
          averageRating: row.overallRating!,
          popularityScore: (row.overallRating! - (1.96 / Math.sqrt(row.numEvals!))),
          coursesTaught: coursesTaught,
        };

        data2.push(professor);
      }
    }

    return data2;
}

const data = await fetchAllProfessors();

export { supabase, data };
  

      
  
    /*

  var data2: Array<Professor> = [];

  for (var l = 0; l < results.length; l++){
    var data = results[l].data;
    if (data == null){
      continue
    }
    for (var j = 0; j < data.length; j++){
      var coursesTaught: Array<string> = [];
      var i =1;
      while (i < 40){
        var x = data[j]['courses/'+ i];
        if (x == null){
          break
        }
        coursesTaught.push(x);
        i++
      }
      var p: Professor = { id: data[j].id, firstName: data[j].firstName, lastName: data[j].lastName, 
        department: data[j].department, school: data[j].school, numEvals: data[j].numEvals, 
      averageRating: data[j].overallRating, popularityScore: (data[j].overallRating+data[j].studentDifficulties)/2, coursesTaught: coursesTaught
    };
    data2.push(p);
   }
  }
}*/
        