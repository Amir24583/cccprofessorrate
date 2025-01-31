import { Professor } from '../types';
import { ProfessorCard } from './ProfessorCard';
//import fuzzysearch from 'fuzzysearch';





interface SearchProfProps {
  data: Professor[];
  department?: string;
  course?: string;
  searchterm: string;
}

export function SearchedProfessors({ data, searchterm }: SearchProfProps) {
  const searchTermLower = searchterm.toLowerCase();  
  
  // Filter and sort professors by most relevant
  const filteredProfessors = data
    .filter(prof => 
      //fuzzysearch(prof.firstName, searchterm) || fuzzysearch(prof.lastName, searchterm))
      prof.firstName.toLowerCase().includes(searchTermLower) || 
      prof.lastName.toLowerCase().includes(searchTermLower) ||
      prof.department?.toLowerCase().includes(searchTermLower) ||
      prof.coursesTaught?.some(course => 
        course.toLowerCase().includes(searchTermLower)
      )
    )
    .sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))
    .slice(0, 10); // Show top 10

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">
          Popular Professors
          
        </h2>
        <p className="text-gray-600">Based on student ratings and grade distributions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProfessors.map((professor) => (
          <ProfessorCard
              onClick={function(){
                console.log(professor)
              }
            }
            key={professor.id}
            professor={professor}
            showPopularityBadge
          />
        ))}
      </div>
    </div>
  );
}