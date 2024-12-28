import React from 'react';
import { Tag } from '../types';
import { availableTags } from '../data/tags';

interface RatingContextProps {
  grade: string;
  setGrade: (grade: string) => void;
  courseStatus: string;
  setCourseStatus: (status: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export function RatingContext({
  grade,
  setGrade,
  courseStatus,
  setCourseStatus,
  selectedTags,
  setSelectedTags,
}: RatingContextProps) {
  const grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'];
  const statuses = [
    { value: 'completed', label: 'Completed' },
    { value: 'withdrawn', label: 'Withdrawn' },
    { value: 'failed', label: 'Failed' },
    { value: 'dropped', label: 'Dropped' },
  ];

  const handleTagToggle = (tagId: string) => {
    setSelectedTags(
      selectedTags.includes(tagId)
        ? selectedTags.filter(id => id !== tagId)
        : [...selectedTags, tagId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What grade did you receive?
        </label>
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select grade</option>
          {grades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Course Status
        </label>
        <select
          value={courseStatus}
          onChange={(e) => setCourseStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select status</option>
          {statuses.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Tags
        </label>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag: Tag) => (
            <button
              key={tag.id}
              onClick={() => handleTagToggle(tag.id)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}