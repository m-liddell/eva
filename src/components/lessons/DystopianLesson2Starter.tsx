"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Clock, Users, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { NavigationArrow } from '../../components/NavigationArrow';
import { MidAssistant } from '../../components/MidAssistant';
import { MiniAssistant } from '../../components/MiniAssistant';
import { StudentActivityModal } from '../../components/StudentActivityModal';
import { getStudentActivityByLessonAndPhase } from '../../data/studentActivities';

export default function DystopianLesson2Starter() {
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
    title: "Sentence Construction Speed Challenge",
    learning_objective: "I can construct complete sentences quickly and accurately using dystopian vocabulary",
    activity_type: "Quick-Fire Discussion",
    discussion_type: 'speed_challenge' as const,
    discussion_prompt: "Build complete sentences using dystopian vocabulary and themes. Focus on accuracy, variety, and atmospheric language that creates tension and unease.",
    discussion_questions: [
      "Create a simple sentence describing a dystopian setting",
      "Build a compound sentence about government control",
      "Construct a complex sentence showing character rebellion",
      "Form a sentence using dystopian vocabulary (surveillance, oppression, conformity)",
      "Write a sentence that creates an atmosphere of fear or unease"
    ],
    success_criteria: [
      "Construct grammatically correct complete sentences",
      "Use appropriate dystopian vocabulary and themes",
      "Demonstrate understanding of sentence variety",
      "Create atmospheric language that builds tension",
      "Show accuracy in grammar and punctuation"
    ],
    theme: "Dystopian Fiction"
  };

  const navigationData = {
    previousRoute: '/lesson/dystopian-lesson-1/plenary',
    nextRoute: '/lesson/dystopian-lesson-2/main'
  };

  const studentActivity = getStudentActivityByLessonAndPhase('dystopian-lesson-2', 'starter');

  return (
    <>
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(75, 85, 99, 0.95) 0%,
              rgba(75, 85, 99, 0.85) 15%,
              rgba(75, 85, 99, 0.85) 85%,
              rgba(75, 85, 99, 0.95) 100%
            ),
            url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80')
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
                  <h3 className="text-lg font-bold text-gray-800">Sentence Construction Speed Challenge</h3>
                  <p className="text-sm text-gray-600">Quick-fire discussion and sentence building</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg flex items-center gap-2"
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
                  onClick={() => router.push('/lesson/dystopian-lesson-2/plenary')}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Plenary</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8">
            {/* Learning Objective */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-[#FFB800] font-medium">Learning Objective:</span>
                <span className="ml-2 font-bold text-gray-900">{templateLessonData.learning_objective}</span>
              </div>
              <MidAssistant context={{ topic: 'sentence construction' }} />
            </div>

            {/* Hook Summary */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h2 className="text-xl font-bold text-blue-900">Sentence Construction Speed Challenge</h2>
              </div>
              <p className="text-base text-blue-800">
                Build complete sentences using dystopian vocabulary and themes. Focus on accuracy, variety, and atmospheric language that creates tension and unease.
              </p>
            </div>

            {/* Success Criteria */}
            <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Success Criteria</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                {templateLessonData.success_criteria.map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full mt-1"></span>
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 10-Minute Structure Indicator */}
            <div className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 shadow-inner">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">10-Minute Speed Challenge</h3>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-800">2 mins</div>
                    <div className="text-blue-600">Think</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-800">3 mins</div>
                    <div className="text-blue-600">Pair</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-800">5 mins</div>
                    <div className="text-blue-600">Share</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Main Content Area */}
              <div className="col-span-8">
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <Target className="w-6 h-6 text-[#FFB800]" />
                    <h3 className="text-xl font-bold text-white">Your Response</h3>
                  </div>

                  <div className="bg-blue-800/50 p-6 rounded-lg space-y-6">
                    <div>
                      <p className="text-blue-100 mb-4">Analyze the image and text extracts above. What do you notice?</p>
                    </div>

                    {/* Discussion Questions */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <label className="font-medium text-blue-100 flex-1">Create a simple sentence describing a dystopian setting</label>
                          <MiniAssistant answer="A simple sentence has one complete thought with a subject and verb. Example: 'Surveillance cameras watched.' (subject: cameras, verb: watched). Try: 'The city [verb]' or 'Citizens [verb]' or 'Technology [verb]'. Keep it short and direct for maximum impact." />
                        </div>
                        <textarea
                          placeholder="Write your thoughts here..."
                          className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <label className="font-medium text-blue-100 flex-1">Build a compound sentence about government control</label>
                          <MiniAssistant answer="A compound sentence joins two complete thoughts with 'and', 'but', 'or', 'so', or 'yet'. Example: 'Guards appeared, and order was restored.' Try: '[First complete thought], and/but [second complete thought]'. Use 'but' to show contrast, 'and' to add information." />
                        </div>
                        <textarea
                          placeholder="Write your thoughts here..."
                          className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <label className="font-medium text-blue-100 flex-1">Construct a complex sentence showing character rebellion</label>
                          <MiniAssistant answer="A complex sentence has one main idea and one dependent clause starting with words like 'although', 'because', 'while', 'when'. Example: 'Although the cameras watched, citizens still whispered.' Try: 'Although [situation], [character action]' or 'Because [reason], [character rebels]'." />
                        </div>
                        <textarea
                          placeholder="Write your thoughts here..."
                          className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <label className="font-medium text-blue-100 flex-1">Form a sentence using dystopian vocabulary (surveillance, oppression, conformity)</label>
                          <MiniAssistant answer="Use powerful dystopian words to create atmosphere. Examples: 'Surveillance cameras monitored every movement.' 'Oppression crushed individual spirit.' 'Conformity replaced creativity.' Try combining: 'The [dystopian element] [strong verb] [what it affects]'." />
                        </div>
                        <textarea
                          placeholder="Write your thoughts here..."
                          className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <label className="font-medium text-blue-100 flex-1">Write a sentence that creates an atmosphere of fear or unease</label>
                          <MiniAssistant answer="Use sensory details and threatening imagery. Examples: 'Cold metal doors slammed shut.' 'Whispers echoed through empty corridors.' 'Shadows moved where no one should be.' Focus on sounds, textures, and movements that feel wrong or threatening." />
                        </div>
                        <textarea
                          placeholder="Write your thoughts here..."
                          className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-span-4 space-y-4">
                {/* Quick Tips */}
                <div className="bg-white/90 rounded-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Sentence Building Tips
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-blue-800">Simple Sentences</h4>
                      <p className="text-sm text-gray-600">One complete thought. Subject + Verb. Creates direct impact.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">Compound Sentences</h4>
                      <p className="text-sm text-gray-600">Two complete thoughts joined by 'and', 'but', 'or', 'so', 'yet'.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800">Complex Sentences</h4>
                      <p className="text-sm text-gray-600">Main idea + dependent clause starting with 'although', 'because', 'while'.</p>
                    </div>
                  </div>
                </div>

                {/* Key Vocabulary */}
                <div className="bg-white/90 rounded-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Dystopian Vocabulary</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['surveillance', 'oppression', 'conformity', 'control', 'resistance', 'fear'].map((term, index) => (
                      <div key={index} className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">
                        {term}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="p-4 bg-gray-50 rounded-lg mt-6">
              <p className="text-base text-gray-800">
                💬 Through quick sentence construction practice, we build confidence and accuracy in creating atmospheric dystopian descriptions.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <NavigationArrow direction="left" onClick={() => router.push(navigationData.previousRoute)} />
              <NavigationArrow direction="right" onClick={() => router.push(navigationData.nextRoute)} />
            </div>
          </div>
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