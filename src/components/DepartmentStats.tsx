import React from 'react';
import { Professor } from '../types';
import { calculateAverageRating, calculateAverageGPA } from '../utils/calculations';

interface DepartmentStatsProps {
  department: string;
  professors: Professor[];
}

export function DepartmentStats({ department, professors }: DepartmentStatsProps) {
  const avgRating = calculateAverageRating(professors);
  const avgGPA = calculateAverageGPA(professors);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-lg font-semibold">Department Statistics</h2>
      
      <div>
        <p className="text-sm text-gray-600 mb-1">Average Rating</p>
        <p className="text-2xl font-bold text-blue-600">{avgRating.toFixed(1)}</p>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-1">Average GPA</p>
        <p className="text-2xl font-bold text-green-600">{avgGPA.toFixed(2)}</p>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-1">Total Professors</p>
        <p className="text-2xl font-bold text-gray-900">{professors.length}</p>
      </div>
    </div>
  );
}