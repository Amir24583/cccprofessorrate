import React from 'react';
import { Star, ThumbsUp, BookOpen, Trophy } from 'lucide-react';
import { Professor } from '../types';

interface ProfessorCardProps {
  professor: Professor;
  onClick: (professor: Professor) => void;
  showPopularityBadge?: boolean;
}

export function ProfessorCard({ professor, onClick, showPopularityBadge }: ProfessorCardProps) {
  // Safely calculate average GPA if grade distribution exists
  const averageGPA = professor.gradeDistribution?.length 
    ? professor.gradeDistribution.reduce((sum, dist) => sum + dist.averageGPA, 0) / professor.gradeDistribution.length
    : null;

  return (
    <div 
      onClick={() => onClick(professor)}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer relative"
    >
      {showPopularityBadge && professor.popularityScore && professor.popularityScore > 0.8 && (
        <div className="absolute -top-3 -right-3 bg-yellow-400 text-white p-2 rounded-full">
          <Trophy className="w-4 h-4" />
        </div>
      )}
      
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={professor.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(professor.name)}&background=random`}
            alt={professor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{professor.name}</h3>
          <p className="text-gray-600">{professor.department}</p>
          <p className="text-sm text-gray-500">{professor.school}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-medium">{professor.averageRating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm">({professor.numRatings} ratings)</span>
        </div>
        {averageGPA !== null && (
          <div className="text-sm text-gray-600">
            Avg. GPA: {averageGPA.toFixed(2)}
          </div>
        )}
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
    </div>
  );
}