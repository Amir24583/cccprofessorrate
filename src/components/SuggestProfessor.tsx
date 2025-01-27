import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../utils/supabase';

interface SuggestProfessorProps {
  onClose: () => void;
  onSubmit: (suggestion: {
    firstName: string;
    lastName: string;
    department: string;
    email: string;
    courses: string[];
    reason: string;
  }) => void;
}

interface Sugprofsupabase {
  
}

export function SuggestProfessor({ onClose, onSubmit }: SuggestProfessorProps) {
  const [suggestion, setSuggestion] = useState({
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    courses: [''],
    reason: ''
  });

  async function handleSubmit (e: React.FormEvent){
    e.preventDefault();
    onSubmit(suggestion);
    console.log("handleSubmit")

while (suggestion.courses.length < 3){
  suggestion.courses.push("NULL");
}

  var sugprof = {
    firstName: suggestion.firstName, 
    lastName: suggestion.lastName, 
    department: suggestion.department, 
    Email: suggestion.email, 
    "courses/1": suggestion.courses[0], 
    "courses/2": suggestion.courses[1],
    "courses/3": suggestion.courses[2],
  }




  const { error } = await supabase
  .from('SuggestedProfessors')
  .insert(sugprof)
  if (error != null){console.log(error)}
    return;
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

        <h2 className="text-2xl font-bold mb-4">Suggest a Professor</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professor First Name
            </label>
            <input
              type="text"
              value={suggestion.firstName}
              onChange={(e) => setSuggestion({ ...suggestion, firstName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professor Last Name
            </label>
            <input
              type="text"
              value={suggestion.lastName}
              onChange={(e) => setSuggestion({ ...suggestion, lastName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <input
              type="text"
              value={suggestion.department}
              onChange={(e) => setSuggestion({ ...suggestion, department: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professor's Email
            </label>
            <input
              type="email"
              value={suggestion.email}
              onChange={(e) => setSuggestion({ ...suggestion, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Courses Taught
            </label>
            {suggestion.courses.map((course, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={course}
                  onChange={(e) => {
                    const newCourses = [...suggestion.courses];
                    newCourses[index] = e.target.value;
                    setSuggestion({ ...suggestion, courses: newCourses });
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Course name"
                  required
                />
                {index === suggestion.courses.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setSuggestion({
                      ...suggestion,
                      courses: [...suggestion.courses, '']
                    })}
                    className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    +
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const newCourses = suggestion.courses.filter((_, i) => i !== index);
                      setSuggestion({ ...suggestion, courses: newCourses });
                    }}
                    className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Why should this professor be added?
            </label>
            <textarea
              value={suggestion.reason}
              onChange={(e) => setSuggestion({ ...suggestion, reason: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit Suggestion
          </button>
        </form>
      </div>
    </div>
  );
}