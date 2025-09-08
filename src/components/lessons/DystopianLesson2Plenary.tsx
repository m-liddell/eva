"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, BookOpen, CheckCircle2 } from 'lucide-react';
import SocraticCircleTemplate from '../../components/templates/SocraticCircleTemplate';
import { StudentActivityModal } from '../../components/StudentActivityModal';
import { getStudentActivityByLessonAndPhase } from '../../data/studentActivities';

export default function DystopianLesson2Plenary() {
  const router = useRouter();
  const [showStudentActivity, setShowStudentActivity] = useState(false);

  // Extract lesson data from sessionStorage for Next.js
  const lessonData = {
    yearGroup: 'Year 10',
    class: 'A',
    subject: 'English',
    theme: 'Dystopian Fiction'
  };

  const templateLessonData = {
    title: "Sentence Construction Socratic Circle",
    learning_objective: "I can engage in structured dialogue to deepen understanding of sentence construction through questioning, active listening, and collaborative reflection",
    activity_type: "Socratic Circle Reflection",
    discussion_focus: "Reflect on sentence construction mastery and how complete sentences enhance dystopian writing effectiveness",
    reflection_questions: [
      "What makes a sentence truly complete and effective in dystopian writing?",
      "How did mastering sentence construction change your confidence as a writer?",
      "Which sentence construction techniques will you continue to develop?",
      "How do complete sentences enhance the atmosphere in dystopian descriptions?"
    ],
    observation_prompts: [
      "Notice how students connect sentence construction to writing confidence",
      "Observe which sentence techniques students find most valuable",
      "Listen for evidence of deeper understanding about sentence effectiveness",
      "Watch how students build on each other's insights about atmospheric writing"
    ],
    success_criteria: [
      "Engage thoughtfully in Socratic dialogue when in inner circle",
      "Observe actively and take meaningful notes when in outer circle", 
      "Build respectfully on others' ideas about sentence construction",
      "Demonstrate understanding of sentence effectiveness through questioning and reflection"
    ],
    theme: "Dystopian Fiction"
  };

  const navigationData = {
    previousRoute: '/lesson/dystopian-lesson-2/main',
    nextRoute: '/lesson/dystopian-lesson-3/starter'
  };

  const studentActivity = getStudentActivityByLessonAndPhase('dystopian-lesson-2', 'plenary');

  return (
    <>
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(30, 41, 59, 0.95) 0%,
              rgba(30, 41, 59, 0.85) 15%,
              rgba(30, 41, 59, 0.85) 85%,
              rgba(30, 41, 59, 0.95) 100%
            ),
            url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80')
          `,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          {/* Lesson Navigation Bar */}
          <div className="mb-8 p-6 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Sentence Construction Socratic Circle</h3>
                  <p className="text-sm text-gray-600">Structured dialogue and reflection</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push('/lesson/dystopian-lesson-2/starter')}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2"
                >
                  <Brain className="w-4 h-4" />
                  <span>Starter</span>
                </button>
                <button
                  onClick={() => router.push('/lesson/dystopian-lesson-2/main')}
                  className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Main</span>
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Plenary</span>
                </button>
              </div>
            </div>
          </div>

        <SocraticCircleTemplate
          lessonData={templateLessonData}
          navigationData={navigationData}
        />
        </div>
      </div>

      {showStudentActivity && studentActivity && (
        <StudentActivityModal
          activity={studentActivity}
          onClose={() => setShowStudentActivity(false)}
        />
      )}
    </>
  );
}