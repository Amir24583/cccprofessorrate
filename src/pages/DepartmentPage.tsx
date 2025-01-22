import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Professor } from '../types';
import { ProfessorCard } from '../components/ProfessorCard';
//import { data } from '../data/data';
import { DepartmentStats } from '../components/DepartmentStats';
import { SearchBar } from '../components/SearchBar';
import { supabase, data } from '../utils/supabase';

interface DepartmentPageProps {
  department: string;
  onBack: () => void;
}

export function DepartmentPage({ department, onBack }: DepartmentPageProps) {
  const departmentProfessors = data.filter(
    prof => prof.department === dept2abv(department)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{department}</h1>
          <p className="text-gray-600">
            Find and rate professors in the {department} department
          </p>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={() => {}} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <DepartmentStats department={department} professors={departmentProfessors} />
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              {departmentProfessors.map((professor) => (
                <ProfessorCard
                  key={professor.id}
                  professor={professor}
                  onClick={() => {}}
                  showPopularityBadge
                />
              ))}
            </div>

            {departmentProfessors.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500">No professors found in this department</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function dept2abv(input: string){
  if (input == "Computer Science")
    return "CSC"
  if (input =="Mathematics")
    return "MATH"
  if (input =="Physics")
    return "PHYS"
  if (input =="Chemistry")
    return "CHEM"
  if (input =='Biology')
    return "BIO"
  if (input =='Engineering')
    return "ENGR"
  if (input =='Business')
    return "BUS"
  if (input =='Psychology')
    return "PSY"
}