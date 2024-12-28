import { Professor } from '../types';

export function calculateAverageRating(professors: Professor[]): number {
  if (professors.length === 0) return 0;
  return professors.reduce((sum, prof) => sum + prof.averageRating, 0) / professors.length;
}

export function calculateAverageGPA(professors: Professor[]): number {
  if (professors.length === 0) return 0;
  
  const validGrades = professors.filter(prof => 
    prof.gradeDistribution && prof.gradeDistribution.length > 0
  );
  
  if (validGrades.length === 0) return 0;

  const totalGPA = validGrades.reduce((sum, prof) => 
    sum + prof.gradeDistribution.reduce((gpaSum, dist) => 
      gpaSum + dist.averageGPA, 0
    ) / prof.gradeDistribution.length
  , 0);

  return totalGPA / validGrades.length;
}