// rating modal to allow rating professors on site

import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import { Professor } from '../types';
import { containsProfanity, containsSlander } from '../utils/profanityFilter';

interface RatingModalProps {
  professor: Professor;
  onClose: () => void;
  onSubmit: (rating: {
    rating: number;
    difficulty: number;
    course: string;
    comment: string;
    wouldTakeAgain: boolean;
    isAnonymous: boolean;
    reviewerName?: string;
  }) => void;
}

export function RatingModal({ professor, onClose, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [course, setCourse] = useState('');
  const [comment, setComment] = useState('');
  const [wouldTakeAgain, setWouldTakeAgain] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reviewerName, setReviewerName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for profanity and slander
    if (containsProfanity(comment) || containsSlander(comment)) {
      setError('Your review contains inappropriate content. Please revise your comment.');
      return;
    }

    onSubmit({
      rating,
      difficulty,
      course,
      comment,
      wouldTakeAgain,
      isAnonymous,
      reviewerName: isAnonymous ? undefined : reviewerName
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Rate {professor.name}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overall Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  className={`w-8 h-8 cursor-pointer ${
                    value <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(value)}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a course</option>
              {professor.coursesTaught.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty (1-5)
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={difficulty}
              onChange={(e) => setDifficulty(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Easy</span>
              <span>Hard</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comments
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              required
              placeholder="Share your experience with this professor..."
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={wouldTakeAgain}
                onChange={(e) => setWouldTakeAgain(e.target.checked)}
                className="h-4 w-4 text-blue-600"
              />
              <label className="ml-2 text-sm text-gray-700">
                Would take again
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="h-4 w-4 text-blue-600"
              />
              <label className="ml-2 text-sm text-gray-700">
                Post anonymously
              </label>
            </div>
          </div>

          {!isAnonymous && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit Rating
          </button>
        </form>
      </div>
    </div>
  );
}

// Update the existing RatingModal component to include new fields

interface RatingFormData {
  rating: number;
  difficulty: number;
  course: string;
  grade?: string;
  status: 'completed' | 'dropped' | 'withdrawn' | 'failed';
  comment: string;
  tags: ReviewTag[];
  wouldTakeAgain: boolean;
  isAnonymous: boolean;
  reviewerName?: string;
}

export function RatingModal({ professor, onClose, onSubmit }: RatingModalProps) {
  const [formData, setFormData] = useState<RatingFormData>({
    rating: 0,
    difficulty: 0,
    course: '',
    grade: undefined,
    status: 'completed',
    comment: '',
    tags: [],
    wouldTakeAgain: false,
    isAnonymous: true,
    reviewerName: undefined
  });

  // ... existing code ...

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        {/* ... existing fields ... */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({
              ...formData,
              status: e.target.value as RatingFormData['status']
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="completed">Completed</option>
            <option value="dropped">Dropped</option>
            <option value="withdrawn">Withdrawn</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grade Received (Optional)
          </label>
          <select
            value={formData.grade || ''}
            onChange={(e) => setFormData({
              ...formData,
              grade: e.target.value || undefined
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Prefer not to say</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <ReviewTags
            tags={Object.values(ReviewTag)}
            selectedTags={formData.tags}
            onTagSelect={(tag) => {
              const newTags = formData.tags.includes(tag)
                ? formData.tags.filter(t => t !== tag)
                : [...formData.tags, tag];
              setFormData({ ...formData, tags: newTags });
            }}
            selectable
          />
        </div>

        {/* ... rest of the form ... */}
      </div>
    </div>
  );
}