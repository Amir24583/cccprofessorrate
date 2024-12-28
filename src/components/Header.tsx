import React, { useState } from 'react';
import { GraduationCap, PlusCircle } from 'lucide-react';
import { SuggestProfessor } from './SuggestProfessor';

export function Header() {
  const [showSuggestModal, setShowSuggestModal] = useState(false);

  const handleSuggestSubmit = (suggestion: any) => {
    console.log('Professor suggested:', suggestion);
    setShowSuggestModal(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">ProfessorRate</h1>
          </div>
          <button
            onClick={() => setShowSuggestModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Suggest Professor
          </button>
        </div>
      </div>

      {showSuggestModal && (
        <SuggestProfessor
          onClose={() => setShowSuggestModal(false)}
          onSubmit={handleSuggestSubmit}
        />
      )}
    </header>
  );
}