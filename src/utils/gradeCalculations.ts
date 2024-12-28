import { GradeDistribution } from '../types';

export function calculateAverageGPA(distribution: GradeDistribution['distribution']): number {
  const gradePoints = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0.0
  };

  const totalStudents = Object.values(distribution).reduce((sum, count) => sum + count, 0) - distribution.W;
  if (totalStudents === 0) return 0;

  const totalPoints = (
    distribution.A * gradePoints.A +
    distribution.B * gradePoints.B +
    distribution.C * gradePoints.C +
    distribution.D * gradePoints.D
  );

  return Number((totalPoints / totalStudents).toFixed(2));
}

export function calculatePopularityScore(
  averageRating: number,
  numRatings: number,
  averageGPA: number
): number {
  // Weight factors
  const RATING_WEIGHT = 0.4;
  const VOLUME_WEIGHT = 0.3;
  const GPA_WEIGHT = 0.3;

  // Normalize ratings (0-5 to 0-1)
  const normalizedRating = averageRating / 5;
  
  // Normalize number of ratings (logarithmic scale to handle varying volumes)
  const normalizedVolume = Math.log10(numRatings + 1) / Math.log10(1000); // Assumes 1000 is max expected ratings
  
  // Normalize GPA (0-4 to 0-1)
  const normalizedGPA = averageGPA / 4;

  return Number((
    (normalizedRating * RATING_WEIGHT) +
    (normalizedVolume * VOLUME_WEIGHT) +
    (normalizedGPA * GPA_WEIGHT)
  ).toFixed(2));
}