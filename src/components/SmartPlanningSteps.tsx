"use client";
import React from 'react';
import { CheckCircle2, Plus, Target, Edit2, Play } from 'lucide-react';

interface SmartPlanningStepsProps {
  currentStep: number;
  lessons: any[];
  selectedLessons: any[];
  currentTerm: string;
  currentWeek: number;
  weekApprovalStatus: boolean;
  onStep1AddLessons: () => void;
  onStep2AddThemes: () => void;
  onStep3EditLessons: () => void;
  onStep4ApproveWeek: () => void;
  stepCompletion: {
    getCompletedStepsForTerm: (term: string) => Set<number>;
    markStepComplete: (term: string, step: number, message?: string) => void;
    isStepCompleted: (term: string, step: number) => boolean;
  };
  navigate: (path: string) => void;
}

export function SmartPlanningSteps({
  currentStep,
  lessons,
  selectedLessons,
  currentTerm,
  currentWeek,
  weekApprovalStatus,
  onStep1AddLessons,
  onStep2AddThemes,
  onStep3EditLessons,
  onStep4ApproveWeek,
  stepCompletion,
  navigate
}: SmartPlanningStepsProps) {
  const [completedSteps, setCompletedSteps] = React.useState<Set<number>>(new Set([1, 2]));

  const handleManualComplete = (step: number) => {
    setCompletedSteps(prev => new Set([...prev, step]));
    if (step === 3) {
      setTimeout(() => {
        navigate(`/approve-week?term=${currentTerm.toLowerCase().split(' ')[0]}&week=${currentWeek}`);
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#A4AAB2] p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Planning Steps</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{completedSteps.size}/4</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Step 1: Add Lessons */}
        <div className="border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mb-3 font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Add Lessons</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Create your lesson schedule</p>
            <button
              onClick={onStep1AddLessons}
              className="w-full px-3 sm:px-4 py-2 bg-[#FFC83D] text-white rounded-lg hover:bg-[#E6B535] transition-colors flex items-center justify-center gap-2 mb-2 text-xs sm:text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Lessons
            </button>
            <button
              className="w-full px-3 sm:px-4 py-2 bg-green-500 text-white rounded-lg cursor-default flex items-center justify-center gap-2 text-xs sm:text-sm"
              disabled
            >
              <CheckCircle2 className="w-4 h-4" />
              Completed
            </button>
          </div>
        </div>

        {/* Step 2: Add Themed Units */}
        <div className="border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mb-3 font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Add Themed Units</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Group lessons into themes</p>
            <button
              className="w-full px-3 sm:px-4 py-2 bg-[#FFC83D] text-white rounded-lg hover:bg-[#E6B535] transition-colors flex items-center justify-center gap-2 mb-2 text-xs sm:text-sm"
            >
              <Target className="w-4 h-4" />
              Add Themes
            </button>
            <button
              className="w-full px-3 sm:px-4 py-2 bg-green-500 text-white rounded-lg cursor-default flex items-center justify-center gap-2 text-xs sm:text-sm"
              disabled
            >
              <CheckCircle2 className="w-4 h-4" />
              Completed
            </button>
          </div>
        </div>

        {/* Step 3: Edit Individual Lessons */}
        <div className="border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-all">
          <div className="flex flex-col items-center text-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 font-bold ${
              completedSteps.has(3) 
                ? 'bg-green-500 text-white' 
                : 'bg-[#FFC83D] text-white'
            }`}>
              {completedSteps.has(3) ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                '3'
              )}
            </div>
            <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Edit Individual Lessons</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Add activities and content</p>
            <button
              onClick={onStep3EditLessons}
              className="w-full px-3 sm:px-4 py-2 bg-[#FFC83D] text-white rounded-lg hover:bg-[#E6B535] transition-colors flex items-center justify-center gap-2 mb-2 text-xs sm:text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit Lessons
            </button>
            <button
              onClick={() => handleManualComplete(3)}
              className={`w-full px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm ${
                completedSteps.has(3)
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
              disabled={completedSteps.has(3)}
            >
              <CheckCircle2 className="w-4 h-4" />
              {completedSteps.has(3) ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>

        {/* Step 4: Approve for Teaching */}
        <div className="border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#FFC83D] text-white flex items-center justify-center mb-3 font-bold">
              4
            </div>
            <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Approve for Teaching</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Launch into teach module</p>
            <button
              onClick={onStep4ApproveWeek}
              className="w-full px-3 sm:px-4 py-2 bg-[#FFC83D] text-white rounded-lg hover:bg-[#E6B535] transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <Play className="w-4 h-4" />
              Approve Week
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}