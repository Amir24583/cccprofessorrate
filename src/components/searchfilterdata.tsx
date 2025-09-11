import React from 'react';
import { Professor, SMCProfessor } from '../types';
import { ProfessorCard } from './ProfessorCard';
//import fuzzysearch from 'fuzzysearch';


interface SearchProfProps {
  data: (Professor | SMCProfessor)[];
  department?: string;
  course?: string;
  searchterm: string;
}


export function SearchedProfessors({ data, searchterm }: SearchProfProps) {
  const searchTermLower = searchterm.toLowerCase();

  const filteredProfessors = React.useMemo(() => {
    console.log(searchTermLower)
    if (!searchTermLower) return data;
    return data.filter(prof => {
    if ('firstName' in prof) {
      return (
        prof.firstName.toLowerCase().includes(searchTermLower) ||
        prof.lastName.toLowerCase().includes(searchTermLower) ||
        prof.department?.toLowerCase().includes(searchTermLower) ||
        prof.coursesTaught?.some(course => course.toLowerCase().includes(searchTermLower))
      );
    } else {
      return (
        prof.Professor?.toLowerCase().includes(searchTermLower) ||
        prof.Department?.toLowerCase().includes(searchTermLower) ||
        prof.Course?.toLowerCase().includes(searchTermLower)
      );
    }
  }).slice(0, 100);
}, [data, searchTermLower]);

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <p className="text-gray-600">Based on your search criteria</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProfessors.map((professor, index) => (
          <ProfessorCard
            key={'id' in professor ? professor.id : `smc-${index}`}
            professor={professor}
            onClick={() => console.log(professor)}
            showPopularityBadge
          />
        ))}
      </div>
    </div>
  );
}