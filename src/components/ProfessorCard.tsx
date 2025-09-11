import React, { useState } from 'react';
import { Star, ThumbsUp, BookOpen, Trophy } from 'lucide-react';
import { Professor, SMCProfessor } from '../types';
import { ProfessorModal } from './ProfessorModal';

interface ProfessorCardProps {
  professor: Professor | SMCProfessor;
  onClick: (professor: Professor | SMCProfessor) => void;
  showPopularityBadge?: boolean;
}

export function ProfessorCard({ professor, onClick, showPopularityBadge }: ProfessorCardProps) {
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);

  const isRegularProfessor = (professor: Professor | SMCProfessor): professor is Professor => {
    return (professor as Professor).firstName !== undefined;
  };

  const handleClick = () => {
    if (isRegularProfessor(professor)) {
      setSelectedProfessor(professor);
    }
    onClick(professor);
  };

  const handleCloseModal = () => {
    setSelectedProfessor(null);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer relative"
        onClick={handleClick}
      >
        {isRegularProfessor(professor) ? (
          <>          
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={professor.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(professor.firstName.charAt(0) + professor.lastName.charAt(0))}&background=random`}
                  alt={professor.firstName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{professor.firstName} {professor.lastName}</h3>
                <p className="text-gray-600">{professor.department}</p>
                <p className="text-sm text-gray-500">{professor.school}</p>
              </div>
            </div>
            {showPopularityBadge && professor.popularityScore > 0.8 && (
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-white p-2 rounded-full">
                <Trophy className="w-4 h-4" />
              </div>
            )}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                {professor.averageRating !== undefined && (
                <span className="font-medium">{professor.averageRating.toFixed(1)}</span>
                )}
              <span className="text-gray-500 text-sm">({professor.numEvals} ratings)</span>
            </div>
          </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={professor.Professor ? `https://ui-avatars.com/api/?name=${encodeURIComponent(professor.Professor.charAt(professor.Professor.length - 1) + professor.Professor.charAt(0) || '')}&background=random` : 'https://ui-avatars.com/api/?name=Unknown&background=random'}
                  alt={professor.Professor ?? 'Professor Image'}
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{professor.Professor}</h3>
                <p className="text text-gray-600">{professor.Department}</p>
                <p className="text-sm text-gray-500">Course: {professor.Course}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {selectedProfessor && (
        <ProfessorModal
          professor={selectedProfessor}
          onClose={handleCloseModal}

        />
      )}
    </>
  );
}






























/*

export function ProfessorCard(props: SMCProfessorCardProps | ProfessorCardProps) {
  const isRegularProfessor = (professor: Professor ): professor is Professor => {
   return (professor as Professor).firstName !== undefined; 
  };

  const isSMCProfessor = (smcprofessor: SMCProfessor): smcprofessor is SMCProfessor => {
    return (smcprofessor as SMCProfessor).Professor !== undefined;
  };


  const handleClick =() => {
    if ('professor' in props && isRegularProfessor(props.professor)) {
      props.onClick(props.professor);
    } else if ('smcprofessor' in props) {
    props.smconClick(props.smcprofessor);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer relative"
      onClick={handleClick}
    >
      
      {showPopularityBadge && professor.popularityScore && professor.popularityScore > 0.8 && (
        <div className="absolute -top-3 -right-3 bg-yellow-400 text-white p-2 rounded-full">
          <Trophy className="w-4 h-4" />
        </div>
      )}

      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={professor.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(professor.firstName.charAt(0)+professor.lastName.charAt(0))}&background=random`}
            alt={professor.firstName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{professor.firstName+" "+professor.lastName}</h3>
          <p className="text-gray-600">{professor.department}</p>
          <p className="text-sm text-gray-500">{professor.school}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          {professor.averageRating !== undefined && (
          <span className="font-medium">{professor.averageRating.toFixed(1)}</span>
        )}
          <span className="text-gray-500 text-sm">({professor.numEvals} ratings)</span>
        </div>
      </div>
      <div className="mt-2 flex space-x-4">
        <div className="flex items-center text-gray-600">
          <ThumbsUp className="w-4 h-4 mr-1" />
          <span className="text-sm">Would take again</span>
        </div>
        <div className="flex items-center text-gray-600">
          <BookOpen className="w-4 h-4 mr-1" />
          <span className="text-sm">Course info</span>
        </div>
      </div>
      {selectedProfessor && (
        <ProfessorModal
          professor={selectedProfessor}
          // Set timeout to allow the click tht opens modal to finish before triggering the close of modal
          onClose={() => {setTimeout(() => {setSelectedProfessor(null)}, 0)
        console.log("closing", selectedProfessor)}}
        />
      )}
    </div>
  );
}

*/