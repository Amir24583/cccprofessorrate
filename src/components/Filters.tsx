import React from 'react';
import { FilterOptions } from '../types';

interface FiltersProps {
  options: FilterOptions;
  departments: string[];
  courses: string[];
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({ options, departments, courses, onFilterChange }: FiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Department
        </label>
        <select
          value={options.department}
          onChange={(e) => onFilterChange({ ...options, department: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course
        </label>
        <select
          value={options.course}
          onChange={(e) => onFilterChange({ ...options, course: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Courses</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select
          value={options.sortBy}
          onChange={(e) => onFilterChange({ 
            ...options, 
            sortBy: e.target.value as FilterOptions['sortBy']
          })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="rating">Highest Rated</option>
          <option value="difficulty">Easiest</option>
          <option value="recent">Most Recent</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Minimum Rating
        </label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.5"
          value={options.minRating}
          onChange={(e) => onFilterChange({ 
            ...options, 
            minRating: Number(e.target.value) 
          })}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>1</span>
          <span>{options.minRating}</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
}