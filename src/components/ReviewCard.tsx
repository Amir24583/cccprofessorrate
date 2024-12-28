import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Review } from '../types';
import { ReviewTags } from './ReviewTags';
import { formatDate } from '../utils/formatters';

interface ReviewCardProps {
  review: Review;
  onVote: (reviewId: string, type: 'helpful' | 'disagree') => void;
}

export function ReviewCard({ review, onVote }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold">
              {review.isAnonymous ? 'Anonymous' : review.reviewerName}
            </span>
            <span className="text-sm text-gray-500">
              • {formatDate(review.createdAt)}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Course: {review.courseId} • Grade: {review.grade || 'Not Disclosed'}
          </div>
        </div>
        <div className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-gray-100">
          {review.status}
        </div>
      </div>

      <ReviewTags tags={review.tags} />

      <p className="my-4 text-gray-700">{review.comment}</p>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <button
          onClick={() => onVote(review.id, 'helpful')}
          className="flex items-center gap-1 hover:text-blue-600"
        >
          <ThumbsUp className="w-4 h-4" />
          Helpful ({review.helpfulCount})
        </button>
        <button
          onClick={() => onVote(review.id, 'disagree')}
          className="flex items-center gap-1 hover:text-red-600"
        >
          <ThumbsDown className="w-4 h-4" />
          Disagree ({review.disagreeCount})
        </button>
      </div>
    </div>
  );
}