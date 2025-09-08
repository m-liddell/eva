"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, BookOpen, Brain, CheckCircle2, Clock, Users, Target, ChevronDown, ChevronUp, Play, Eye, Download, FileText, GraduationCap, Search, Lightbulb } from 'lucide-react';
import { sherlockHolmesUnitInfo, sherlockHolmesLessons, sherlockHolmesEnhancedActivities } from '../data/sherlockHolmesUnit';
import { ActivityDetailsModal } from './ActivityDetailsModal';
import { StudentActivityModal } from './StudentActivityModal';
import InteractiveExplorationTemplate from './templates/InteractiveExplorationTemplate';

interface SherlockHolmesUnitViewerProps {
  onClose: () => void;
  showInPopup?: boolean;
}

export function SherlockHolmesUnitViewer({ onClose, showInPopup = false }: SherlockHolmesUnitViewerProps) {
  const router = useRouter();
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [viewingActivity, setViewingActivity] = useState<any>(null);
  const [showStudentActivity, setShowStudentActivity] = useState<any>(null);
  const [expandedLessons, setExpandedLessons] = useState<Set<number>>(new Set());
  const [showInteractiveLesson, setShowInteractiveLesson] = useState<any>(null);

  const toggleLessonExpansion = (lessonNumber: number) => {
    setExpandedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonNumber)) {
        newSet.delete(lessonNumber);
      } else {
        newSet.add(lessonNumber);
      }
      return newSet;
    });
  };

  const handleActivityView = (activity: any) => {
    setViewingActivity(activity);
  };

  const handleStudentActivityView = (lessonNumber: number, phase: string) => {
    // Create a generic student activity for Sherlock Holmes lessons
    const lesson = sherlockHolmesLessons.find(l => l.lessonNumber === lessonNumber);
    if (!lesson) return;

    const activity = lesson.activities[phase as keyof typeof lesson.activities];
    if (!activity) return;

    const studentActivity = {
      id: `sherlock-lesson-${lessonNumber}-${phase}-student`,
      lessonNumber: lessonNumber,
      title: activity.title,
      description: activity.description,
      phase: phase as 'starter' | 'main' | 'plenary',
      duration: activity.duration,
      type: 'worksheet',
      subject: 'English',
      year_group: 'Year 9',
      learning_objective: lesson.learningObjective,
      instructions: [
        'Read all instructions carefully before beginning',
        'Work systematically through each section',
        'Use evidence from the texts to support your analysis',
        'Ask for help if you need clarification on any task'
      ],
      tasks: [
        {
          id: 'main-task',
          title: `${activity.title} Analysis`,
          description: activity.description,
          type: 'text_input' as const,
          guidance: 'Provide detailed analysis using specific examples from the Sherlock Holmes stories'
        }
      ],
      success_criteria: [
        'Demonstrate understanding of detective fiction conventions',
        'Use textual evidence to support analysis',
        'Apply deductive reasoning techniques effectively',
        'Show understanding of Victorian context and its importance'
      ],
      differentiation: {
        support: [
          'Provide vocabulary banks for detective fiction terms',
          'Offer sentence starters for analysis',
          'Use visual aids and character maps for support',
          'Provide additional context about Victorian society'
        ],
        extension: [
          'Compare with modern detective fiction',
          'Research historical accuracy of the stories',
          'Analyze influence on contemporary mystery writers',
          'Create additional mystery scenarios'
        ]
      },
      assessment_rubric: [
        {
          level: 'Secure',
          descriptors: [
            'Demonstrates sophisticated understanding of detective fiction',
            'Uses textual evidence effectively and analytically',
            'Shows clear grasp of deductive reasoning principles'
          ]
        },
        {
          level: 'Developing',
          descriptors: [
            'Shows good understanding of key concepts',
            'Uses some textual evidence appropriately',
            'Demonstrates basic analytical thinking skills'
          ]
        }
      ],
      pdf_content: {
        header: activity.title,
        instructions: [
          'Read all instructions carefully before beginning',
          'Work systematically through each section',
          'Use evidence from the texts to support your analysis',
          'Ask for help if you need clarification on any task'
        ],
        worksheet_sections: [
          {
            title: `${activity.title} Analysis`,
            content: `${activity.description}\n\nUse specific examples from the Sherlock Holmes stories to support your analysis.`,
            space_for_answers: true
          }
        ],
        footer: 'Elementary, my dear student! Good detective work requires careful observation and logical thinking.'
      }
    };

    setShowStudentActivity(studentActivity);
  };

  const getActivityIcon = (type: 'starter' | 'main' | 'plenary') => {
    switch (type) {
      case 'starter': return <Brain className="w-4 h-4 text-blue-600" />;
      case 'main': return <BookOpen className="w-4 h-4 text-amber-600" />;
      case 'plenary': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
    }
  };

  const getActivityColor = (type: 'starter' | 'main' | 'plenary') => {
    switch (type) {
      case 'starter': return 'border-blue-200 bg-blue-50';
      case 'main': return 'border-amber-200 bg-amber-50';
      case 'plenary': return 'border-green-200 bg-green-50';
    }
  };

  const getPhaseColor = (phase: string) => {
    if (phase.includes('Foundation')) return 'bg-blue-100 text-blue-700';
    if (phase.includes('Analysis')) return 'bg-purple-100 text-purple-700';
    if (phase.includes('Context')) return 'bg-amber-100 text-amber-700';
    if (phase.includes('Structure')) return 'bg-green-100 text-green-700';
    if (phase.includes('Creative')) return 'bg-pink-100 text-pink-700';
    if (phase.includes('Mastery')) return 'bg-indigo-100 text-indigo-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-7xl max-h-[95vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{sherlockHolmesUnitInfo.title}</h1>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{sherlockHolmesUnitInfo.yearGroup}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{sherlockHolmesUnitInfo.duration}</span>
                    </div>
                    <div className="px-2 py-1 bg-white/20 rounded text-xs font-medium">
                      {sherlockHolmesEnhancedActivities.length} Activities
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Unit Overview */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 mb-6 border border-amber-200">
              <h2 className="text-xl font-bold text-amber-900 mb-3">Unit Overview</h2>
              <p className="text-amber-800 mb-4">{sherlockHolmesUnitInfo.overview}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Key Themes</h3>
                  <div className="space-y-1">
                    {sherlockHolmesUnitInfo.themes.map((theme, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        <span className="text-sm text-amber-700">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800 mb-2">Core Texts</h3>
                  <div className="space-y-1">
                    {sherlockHolmesUnitInfo.coreTexts.map((text, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm text-amber-700">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Lesson Breakdown</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{sherlockHolmesLessons.length} lessons</span>
                  <span>•</span>
                  <span>{sherlockHolmesEnhancedActivities.length} enhanced activities</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {sherlockHolmesLessons.map((lesson) => (
                  <div key={lesson.lessonNumber} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div 
                      className="p-4 cursor-pointer"
                      onClick={() => toggleLessonExpansion(lesson.lessonNumber)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold">
                            {lesson.lessonNumber}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{lesson.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{lesson.learningObjective}</p>
                            <div className="flex items-center gap-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPhaseColor(lesson.phase)}`}>
                                {lesson.phase}
                              </span>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="w-3 h-3" />
                                <span>60 mins</span>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Target className="w-3 h-3" />
                                <span>{lesson.template}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                             if (lesson.lessonNumber === 1) {
                               setShowInteractiveLesson({
                                 component: `SherlockLesson${lesson.lessonNumber}Starter`,
                                 route: `/lesson/sherlock-lesson-${lesson.lessonNumber}/starter`,
                                 lesson: {
                                   yearGroup: 'Year 9',
                                   class: 'A',
                                   subject: 'English',
                                   theme: 'Sherlock Holmes',
                                   title: lesson.title,
                                   learningObjective: lesson.learningObjective,
                                   phase: lesson.phase,
                                   lessonNumber: lesson.lessonNumber
                                 }
                               });
                             } else {
                               alert('This lesson is not yet available as an interactive lesson.');
                             }
                           }}
                           className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                             lesson.lessonNumber === 1 
                               ? 'bg-[#FFC83D] text-white hover:bg-[#E6B434]' 
                               : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                           }`}
                           disabled={lesson.lessonNumber !== 1}
                         >
                           {lesson.lessonNumber === 1 ? 'View Lesson' : 'View Lesson Plan'}
                         </button>
                         <button
                           onClick={(e) => {
                             e.stopPropagation();
                              handleStudentActivityView(lesson.lessonNumber, 'starter');
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2"
                          >
                            <GraduationCap className="w-4 h-4" />
                            <span>Student Activity</span>
                          </button>
                          <div className="p-2">
                            {expandedLessons.has(lesson.lessonNumber) ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Lesson Details */}
                    {expandedLessons.has(lesson.lessonNumber) && (
                      <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="grid grid-cols-3 gap-4">
                          {/* Starter Activity */}
                          <div className={`p-4 rounded-lg border ${getActivityColor('starter')}`}>
                            <div className="flex items-center gap-2 mb-3">
                              {getActivityIcon('starter')}
                              <h4 className="font-semibold text-blue-800">Starter Activity</h4>
                              <span className="text-xs text-blue-600">{lesson.activities.starter.duration}</span>
                            </div>
                            <h5 className="font-medium text-gray-800 mb-2">{lesson.activities.starter.title}</h5>
                            <p className="text-sm text-gray-600 mb-3">{lesson.activities.starter.description}</p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleActivityView(lesson.activities.starter)}
                                className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                              >
                                View Details
                              </button>
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                {lesson.activities.starter.type}
                              </span>
                            </div>
                          </div>

                          {/* Main Activity */}
                          <div className={`p-4 rounded-lg border ${getActivityColor('main')}`}>
                            <div className="flex items-center gap-2 mb-3">
                              {getActivityIcon('main')}
                              <h4 className="font-semibold text-amber-800">Main Activity</h4>
                              <span className="text-xs text-amber-600">{lesson.activities.main.duration}</span>
                            </div>
                            <h5 className="font-medium text-gray-800 mb-2">{lesson.activities.main.title}</h5>
                            <p className="text-sm text-gray-600 mb-3">{lesson.activities.main.description}</p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleActivityView(lesson.activities.main)}
                                className="px-3 py-1 bg-amber-600 text-white rounded text-xs hover:bg-amber-700 transition-colors"
                              >
                                View Details
                              </button>
                              <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">
                                {lesson.activities.main.type}
                              </span>
                            </div>
                          </div>

                          {/* Plenary Activity */}
                          <div className={`p-4 rounded-lg border ${getActivityColor('plenary')}`}>
                            <div className="flex items-center gap-2 mb-3">
                              {getActivityIcon('plenary')}
                              <h4 className="font-semibold text-green-800">Plenary Activity</h4>
                              <span className="text-xs text-green-600">{lesson.activities.plenary.duration}</span>
                            </div>
                            <h5 className="font-medium text-gray-800 mb-2">{lesson.activities.plenary.title}</h5>
                            <p className="text-sm text-gray-600 mb-3">{lesson.activities.plenary.description}</p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleActivityView(lesson.activities.plenary)}
                                className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 transition-colors"
                              >
                                View Details
                              </button>
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                {lesson.activities.plenary.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Lesson Learning Objective */}
                        <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4 text-gray-600" />
                            <h5 className="font-medium text-gray-800">Learning Objective</h5>
                          </div>
                          <p className="text-sm text-gray-700">{lesson.learningObjective}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Activities Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Enhanced Activities</h2>
              <div className="grid grid-cols-2 gap-4">
                {sherlockHolmesEnhancedActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleActivityView(activity)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {getActivityIcon(activity.activity_type)}
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          activity.activity_type === 'starter' ? 'bg-blue-100 text-blue-700' :
                          activity.activity_type === 'main' ? 'bg-amber-100 text-amber-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {activity.activity_type.charAt(0).toUpperCase() + activity.activity_type.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {activity.dialogic_structure}
                      </span>
                      {activity.phase && (
                        <span className={`px-2 py-1 rounded text-xs ${getPhaseColor(activity.phase)}`}>
                          {activity.phase}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Tips */}
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-900">Teaching Tips for Sherlock Holmes Unit</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-blue-800 mb-2">Engagement Strategies</h3>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Use dramatic readings to bring Victorian atmosphere to life</li>
                    <li>• Create mystery scenarios for students to solve collaboratively</li>
                    <li>• Encourage students to adopt Holmes's observational techniques</li>
                    <li>• Connect deductive reasoning to real-world problem-solving</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800 mb-2">Assessment Focus</h3>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Monitor development of analytical thinking skills</li>
                    <li>• Assess understanding of narrative structure and conventions</li>
                    <li>• Evaluate creative application of detective fiction techniques</li>
                    <li>• Track progress in logical reasoning and evidence analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Details Modal */}
      {viewingActivity && (
        <ActivityDetailsModal
          activity={viewingActivity}
          onClose={() => setViewingActivity(null)}
          readOnly={true}
        />
      )}

      {/* Student Activity Modal */}
      {showStudentActivity && (
        <StudentActivityModal
          activity={showStudentActivity}
          onClose={() => setShowStudentActivity(null)}
        />
      )}

      {/* Interactive Lesson Popup */}
      {showInteractiveLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-7xl max-h-[95vh] overflow-hidden m-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-xl font-semibold text-gray-800">Interactive Lesson - {showInteractiveLesson.lesson?.title}</h2>
              <button
                onClick={() => setShowInteractiveLesson(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="h-[calc(95vh-80px)] overflow-y-auto">
              {showInteractiveLesson.lesson?.lessonNumber === 1 && (
                <InteractiveExplorationTemplate
                  lessonData={{
                    title: "Detective Evidence Hunt",
                    learning_objective: "I can investigate character traits and make predictions about Sherlock Holmes using textual clues and deductive reasoning",
                    activity_type: "Detective Investigation",
                    exploration_focus: "Hands-on exploration of detective methodology and character analysis through evidence examination",
                    interactive_elements: [
                      {
                        element_type: 'hands_on_activity' as const,
                        title: 'Mystery Object Investigation',
                        description: 'Examine mysterious objects and make deductions about their owners using Holmes-style observation and logical reasoning',
                        materials: ['Victorian pocket watch with scratches and engraving', 'Modern smartphone with detective apps visible', 'Library books with bookmarks and margin notes']
                      },
                      {
                        element_type: 'collaborative_investigation' as const,
                        title: 'Character Analysis Investigation',
                        description: 'Work in teams to analyze how Conan Doyle presents Holmes through appearance, behavior, speech, and environment',
                        materials: ['Character analysis templates', 'Victorian context guides', 'Textual evidence worksheets']
                      }
                    ],
                    discovery_questions: [
                      "What can you deduce about someone from their possessions and appearance?",
                      "How does Conan Doyle make Holmes seem both brilliant and mysterious?",
                      "What Victorian details help us understand Holmes's character?",
                      "How do detective skills help us analyze literary characters?"
                    ],
                    collaboration_structure: [
                      "Work in specialist teams to analyze different aspects of Holmes's character",
                      "Share findings about physical description, behavior, speech, and setting",
                      "Build complete character profile through collaborative investigation",
                      "Connect detective methodology to literary character analysis techniques"
                    ],
                    theme: "detective fiction"
                  }}
                  navigationData={{
                    previousRoute: '/admin/lesson-library',
                    nextRoute: '/admin/lesson-library'
                  }}
                  showEditButtons={false}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}