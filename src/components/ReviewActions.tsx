import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Rating } from '../types';

interface ReviewActionsProps {
  rating: Rating;
  onHelpful: (ratingId: string) => void;
  onDisagree: (ratingId: string) => void;
}

export function ReviewActions({ rating, onHelpful, onDisagree }: ReviewActionsProps) {
  return (
    <div className="flex items-center space-x-4 mt-4">
      <button
        onClick={() => onHelpful(rating.id)}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600"
      >
        <ThumbsUp className="w-4 h-4" />
        <span>{rating.helpfulCount} Helpful</span>
      </button>
      
      <button
        onClick={() => onDisagree(rating.id)}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-red-600"
      >
        <ThumbsDown className="w-4 h-4" />
        <span>{rating.disagreeCount} Disagree</span>
      </button>
    </div>
  );
}