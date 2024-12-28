import { Rating } from '../types';

export function sortRatingsByHelpfulness(ratings: Rating[]): Rating[] {
  return [...ratings].sort((a, b) => {
    // Calculate helpfulness ratio
    const aRatio = a.helpfulCount / (a.helpfulCount + a.disagreeCount || 1);
    const bRatio = b.helpfulCount / (b.helpfulCount + b.disagreeCount || 1);
    
    // Sort by ratio first, then by total interactions
    if (Math.abs(aRatio - bRatio) < 0.1) {
      return (b.helpfulCount + b.disagreeCount) - (a.helpfulCount + a.disagreeCount);
    }
    return bRatio - aRatio;
  });
}

export function getMostCommonTags(ratings: Rating[]): string[] {
  const tagCounts = ratings
    .flatMap(rating => rating.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([tag]) => tag);
}