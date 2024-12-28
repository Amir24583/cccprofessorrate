import { Professor } from '../types';

export const mockProfessors: Professor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    school: 'School of Engineering',
    averageRating: 4.5,
    numRatings: 127,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200',
    coursesTaught: ['CS101', 'CS201', 'CS301'],
    officeHours: 'Monday/Wednesday 2-4pm',
    email: 'sarah.johnson@university.edu',
    gradeDistribution: [
      {
        courseId: 'CS101',
        courseName: 'Introduction to Programming',
        semester: 'Fall 2023',
        distribution: {
          A: 15,
          B: 20,
          C: 10,
          D: 3,
          F: 2,
          W: 1
        },
        averageGPA: 3.2
      }
    ],
    popularityScore: 0.85
  }
];