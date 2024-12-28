// Add to existing types.ts
export interface Rating {
  id: string;
  professorId: string;
  rating: number;
  difficulty: number;
  course: string;
  comment: string;
  grade?: string;
  courseStatus: 'completed' | 'withdrawn' | 'failed' | 'dropped';
  tags: string[];
  helpfulCount: number;
  disagreeCount: number;
  createdAt: Date;
  isAnonymous: boolean;
  reviewerName?: string;
}

export interface Tag {
  id: string;
  name: string;
  category: 'teaching' | 'coursework' | 'personality';
}

export interface RatingContext {
  grade?: string;
  courseStatus: 'completed' | 'withdrawn' | 'failed' | 'dropped';
  tags: string[];
}

// Existing interfaces...

export interface Review {
  id: string;
  professorId: string;
  rating: number;
  comment: string;
  courseId: string;
  grade?: string;
  tags: ReviewTag[];
  status: 'completed' | 'dropped' | 'withdrawn' | 'failed';
  helpfulCount: number;
  disagreeCount: number;
  createdAt: Date;
  isAnonymous: boolean;
  reviewerName?: string;
}

export type ReviewTag = 
  | 'tough_grader'
  | 'exam_heavy'
  | 'group_projects'
  | 'clear_lectures'
  | 'homework_intensive'
  | 'attendance_mandatory'
  | 'extra_credit'
  | 'accessible'
  | 'test_heavy'
  | 'participation_matters';

export interface ReviewVote {
  reviewId: string;
  userId: string;
  type: 'helpful' | 'disagree';
  createdAt: Date;
}