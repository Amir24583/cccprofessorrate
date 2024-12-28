import React from 'react';
import { Search, TrendingUp, Filter, School } from 'lucide-react';
import { PopularProfessors } from '../components/PopularProfessors';
import { SearchBar } from '../components/SearchBar';
import { mockProfessors } from '../data/mockData';

interface MainPageProps {
  onDepartmentSelect: (department: string) => void;
}

export function MainPage({ onDepartmentSelect }: MainPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find the Best Professors for Your Courses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Make informed decisions with real student reviews and grade distributions
          </p>
          <SearchBar onSearch={() => {}} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="w-8 h-8 text-blue-500" />}
              title="Search & Filter"
              description="Find professors by name, department, or course"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-blue-500" />}
              title="Grade Distribution"
              description="View detailed grade breakdowns for each course"
            />
            <FeatureCard
              icon={<School className="w-8 h-8 text-blue-500" />}
              title="Anonymous Reviews"
              description="Share your experiences safely and honestly"
            />
          </div>
        </div>
      </section>

      {/* Popular Professors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top-Rated Professors
          </h2>
          <PopularProfessors professors={mockProfessors} />
        </div>
      </section>

      {/* Department Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Browse by Department
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => onDepartmentSelect(dept)}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left hover:bg-blue-50"
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const departments = [
  'Computer Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Engineering',
  'Business',
  'Psychology'
];