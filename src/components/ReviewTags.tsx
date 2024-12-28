import React from 'react';
import { Tag } from 'lucide-react';
import { ReviewTag } from '../types';

interface ReviewTagsProps {
  tags: ReviewTag[];
  onTagSelect?: (tag: ReviewTag) => void;
  selectable?: boolean;
}

const TAG_LABELS: Record<ReviewTag, string> = {
  tough_grader: 'Tough Grader',
  exam_heavy: 'Exam Heavy',
  group_projects: 'Group Projects',
  clear_lectures: 'Clear Lectures',
  homework_intensive: 'Lots of Homework',
  attendance_mandatory: 'Attendance Required',
  extra_credit: 'Extra Credit',
  accessible: 'Accessible',
  test_heavy: 'Test Heavy',
  participation_matters: 'Participation Matters'
};

export function ReviewTags({ tags, onTagSelect, selectable = false }: ReviewTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          onClick={() => selectable && onTagSelect?.(tag)}
          className={`
            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            ${selectable ? 'cursor-pointer hover:bg-blue-100' : ''}
            ${getTagColor(tag)}
          `}
        >
          <Tag className="w-3 h-3 mr-1" />
          {TAG_LABELS[tag]}
        </div>
      ))}
    </div>
  );
}

function getTagColor(tag: ReviewTag): string {
  switch (tag) {
    case 'tough_grader':
    case 'exam_heavy':
    case 'test_heavy':
      return 'bg-red-100 text-red-800';
    case 'extra_credit':
    case 'clear_lectures':
    case 'accessible':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
}