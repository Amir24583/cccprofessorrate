import React from 'react';
import { Professor } from '../types';
import { ProfessorCard } from './ProfessorCard';
import { ProfessorModal } from './ProfessorModal';

interface PopularProfessorsProps {
  professors: Professor[];
  department?: string;
  course?: string;
}

export function PopularProfessors({ professors, department, course }: PopularProfessorsProps) {
  // Filter and sort professors by popularity score
  const filteredProfessors = professors
    .filter(prof => 
      (!department || prof.department === department) &&
      (!course || prof.coursesTaught.includes(course)) 
    )
    .sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))
    .slice(0, 10); // Show top 10

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">
          Popular Professors
          {department && ` in ${department}`}
          {course && ` teaching ${course}`}
        </h2>
        <p className="text-gray-600">Based on student ratings and grade distributions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProfessors.map((professor) => (
          <ProfessorCard
              onClick={() => {{}}}
                /*setSelectedProfessor(professor)
                console.log(professor);
              }}*/
            key={professor.id}
            professor={professor}
            showPopularityBadge
          />
        ))}
      </div>

      {/*{selectedProfessor && (
        <ProfessorModal
          professor={selectedProfessor}
          onClose={() => setSelectedProfessor(null)}
        />
      )}*/}
    </div>
  );
}