import { createClient } from '@supabase/supabase-js';
import { Professor } from '../types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

  
    var { data, error } = await supabase
      .from('professorlist') // Replace with your table name
      .select('*'); // Replace with specific columns if needed, e.g., 'id, name'
  
    var data2: Professor[]= [];
    if (error) {
      console.error('Error fetching data:', error);
    } else  if (data != null){
      console.log('Fetched data:', data);

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


export { supabase, data2 as data };
        