import React from 'react';
import { X, Star, BookOpen, ThumbsUp, Award, Clock } from 'lucide-react';
import { Professor } from '../types';

interface ProfessorModalProps {
    professor: Professor;
    onClose: () => void;
}

export function ProfessorModal({ professor, onClose }: ProfessorModalProps) {
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-2xl font-bold">{professor.firstName} {professor.lastName}</h2>
                        <p className="text-gray-600">{professor.department}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rating Overview</h3>
                    <div className="flex items-center space-x-2 mb-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-x1 font-bold">{professor.averageRating?.toFixed(1)}</span>
                        <span className="text-gray-500">({professor.numEvals} ratings)</span>
                    </div>
                   </div> 

                   <div>
                    <h3 className="text-lg font-semibold mb-2">Course Details</h3>
                    <div className="space-y-2">
                        {professor.coursesTaught.map((course, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <BookOpen className="w-4 h-4 text-blue-500" />
                                <span className="text-gray-700">{course}</span>
                            </div>
                        ))}
                   </div>
                </div>
            </div>
        </div>
    </div>
);
}