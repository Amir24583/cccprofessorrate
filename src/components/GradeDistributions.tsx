// the grade distribution commponent for site

import React from 'react';
import { GradeDistribution } from '../types';

interface GradeDistributionChartProps {
  distribution: GradeDistribution;
}

export function GradeDistributionChart({ distribution }: GradeDistributionChartProps) {
  const total = Object.values(distribution.distribution).reduce((sum, count) => sum + count, 0);
  
  const getPercentage = (count: number) => ((count / total) * 100).toFixed(1);
  const getBarHeight = (count: number) => `${(count / total) * 200}px`;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{distribution.courseName}</h3>
        <p className="text-sm text-gray-600">{distribution.semester}</p>
        <p className="text-sm font-medium">Average GPA: {distribution.averageGPA}</p>
      </div>
      
      <div className="flex items-end justify-between h-52 gap-2">
        {Object.entries(distribution.distribution).map(([grade, count]) => (
          <div key={grade} className="flex flex-col items-center flex-1">
            <div className="w-full bg-blue-100 rounded-t relative" style={{ height: getBarHeight(count) }}>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">
                {getPercentage(count)}%
              </span>
            </div>
            <span className="mt-2 font-medium">{grade}</span>
          </div>
        ))}
      </div>
    </div>
  );
}