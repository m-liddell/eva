"use client";
import React, { useState } from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { Clock, Target, BookOpen, MapPin, ChevronLeft, Brain, CheckCircle2, ChevronRight, Calendar, ChevronDown, Users, Eye, ExternalLink, Shield } from 'lucide-react';
import { useTimetableStore } from '../store/timetableStore';
import { TERMS } from '../store/termStore';
import { ActivityDetailsModal } from '../components/ActivityDetailsModal';
import { LessonViewModal } from '../components/LessonViewModal';
import { FullLessonView } from '../components/FullLessonView';
import { OnboardingTour } from '../components/OnboardingTour';
import { useOnboarding } from '../hooks/useOnboarding';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'
];

export default function WeeklyTimetable() {
  const { navigate } = useNavigation();
  const { showOnboarding, setShowOnboarding, completeOnboarding, setOnboardingStep } = useOnboarding();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentTerm, setCurrentTerm] = useState('Autumn 1');
  const [viewingLesson, setViewingLesson] = useState<any>(null);
  const [viewingActivity, setViewingActivity] = useState<any>(null);
  const [viewingFullActivity, setViewingFullActivity] = useState<any>(null);
  const { getWeekApprovalStatus, getLessonsByTerm } = useTimetableStore();
  const { goBack } = useNavigation()
  
  // Check approval status for current week
  const weekApprovalStatus = getWeekApprovalStatus(currentTerm, currentWeek);

  // Get actual lessons from the store for the current week
  const allLessons = getLessonsByTerm(currentTerm);
  const thisWeeksLessons = allLessons.filter(lesson => lesson.week === currentWeek);

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const period = Number(hours) >= 12 ? 'PM' : 'AM';
    const displayHours = Number(hours) > 12 ? Number(hours) - 12 : Number(hours);
    return `${displayHours}:${minutes || '00'} ${period}`;
  };

  // Check if a lesson has all three activity types
  const isLessonFullyPlanned = (lesson: any) => {
    return lesson.activities?.starter && 
           lesson.activities?.main && 
           lesson.activities?.plenary;
  };

  const getLessonForTimeSlot = (day: string, timeSlot: string) => {
    return thisWeeksLessons.find(lesson => 
      lesson.day === day && 
      lesson.startTime === timeSlot
    );
  };

  const handleViewLesson = (lesson: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setViewingLesson(lesson);
  };

  const handleViewActivity = (lesson: any, type: 'starter' | 'main' | 'plenary', e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Check if this is a dystopian lesson that should open interactive version
    if (lesson.theme === 'Dystopian Fiction') {
      // First try to route by activity title
      if (lesson.activities?.[type]) {
        const activityTitle = lesson.activities[type].title.toLowerCase();
        
        if (activityTitle.includes('dystopian world discovery') || activityTitle.includes('future vision')) {
          navigate(`/lesson/dystopian-lesson-1/${type}`);
          return;
        } else if (activityTitle.includes('complete sentence') || activityTitle.includes('sentence foundation')) {
          navigate(`/lesson/dystopian-lesson-2/${type}`);
          return;
        } else if (activityTitle.includes('simple vs compound') || activityTitle.includes('sentence power')) {
          navigate(`/lesson/dystopian-lesson-3/${type}`);
          return;
        } else if (activityTitle.includes('complex sentence') || activityTitle.includes('sophistication')) {
          navigate(`/lesson/dystopian-lesson-4/${type}`);
          return;
        } else if (activityTitle.includes('personification') || activityTitle.includes('atmosphere')) {
          navigate(`/lesson/dystopian-lesson-5/${type}`);
          return;
        } else if (activityTitle.includes('simile') || activityTitle.includes('impact analysis')) {
          navigate(`/lesson/dystopian-lesson-6/${type}`);
          return;
        }
      }
      
      // If no activity title match, use week number for dystopian lessons
      if (lesson.week >= 1 && lesson.week <= 6) {
        navigate(`/lesson/dystopian-lesson-${lesson.week}/${type}`);
        return;
      }
    }
    
    // Check for general interactive activities
    if (lesson.activities?.[type]) {
      const activityTitle = lesson.activities[type].title.toLowerCase();
      
      if (activityTitle.includes('think-pair-share with a twist') || activityTitle.includes('think-pair-share')) {
        navigate('/lesson/think-pair-share-twist');
        return;
      }
      
      if (activityTitle.includes('word association')) {
        navigate('/lesson/word-association-speed-game');
        return;
      }
      
      if (activityTitle.includes('two minute perspective') || activityTitle.includes('perspective challenge')) {
        navigate('/lesson/two-minute-perspective-challenge');
        return;
      }
      
      if (activityTitle.includes('press conference')) {
        navigate('/lesson/press-conference-simulation');
        return;
      }
      
      if (activityTitle.includes('socratic circle')) {
        navigate('/lesson/socratic-circle-reflection');
        return;
      }
      
      if (activityTitle.includes('character conversations')) {
        navigate('/lesson/character-conversations');
        return;
      }
      
      if (activityTitle.includes('alternative endings')) {
        navigate('/lesson/alternative-endings');
        return;
      }
      
      if (activityTitle.includes('compare contrast') || activityTitle.includes('compare and contrast')) {
        navigate('/lesson/compare-contrast');
        return;
      }
    }
    
    // Fallback to activity details modal for non-interactive activities
    const activity = lesson.activities[type];
    if (!activity) {
      console.error('No activity found for type:', type);
      return;
    }
    
    const fullActivity = {
      ...activity,
      activity_type: type,
      subject: lesson.subject,
      year_group: lesson.yearGroup,
      dialogic_structure: activity.dialogic_structure || 'Discussion'
    };
    
    setViewingActivity(fullActivity);
  };

  const handleViewFullActivity = (lesson: any, type: 'starter' | 'main' | 'plenary', e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Get the activity from the lesson
    const activity = lesson.activities[type];
    
    // Set activity type in the activity object
    const fullActivity = {
      ...activity,
      activity_type: type
    };
    
    // Show the full activity view
    setViewingFullActivity(fullActivity);
  };

  // Function to start a lesson
  const startLesson = (lesson: any, activityType: 'starter' | 'main' | 'plenary') => {
    if (lesson.activities?.[activityType]) {
      // Update onboarding step when they start teaching
      setOnboardingStep('assessment');
      
      // Navigate to the teaching interface with the specific phase
      navigate('/teach/lesson', { 
        state: { 
          lesson: {
            ...lesson,
            startingPhase: activityType
          }
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={goBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-[#768396]">This Week's Lessons</h1>
              <div className="flex items-center gap-3">
                <p className="text-sm text-gray-600">Week {currentWeek}, {TERMS[currentTerm].name}</p>
                {weekApprovalStatus === 'approved' && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs font-medium">Approved for Teaching</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentWeek(prev => Math.max(1, prev - 1))}
                disabled={currentWeek === 1}
                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="px-3 py-1.5 bg-[#FFC83D]/10 text-[#FFC83D] rounded-lg font-medium">
                Week {currentWeek}
              </div>
              <button
                onClick={() => setCurrentWeek(prev => Math.min(TERMS[currentTerm].weeks, prev + 1))}
                disabled={currentWeek === TERMS[currentTerm].weeks}
                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700">
                <Calendar className="w-4 h-4" />
                <span>{TERMS[currentTerm].name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <select
                value={currentTerm}
                onChange={(e) => setCurrentTerm(e.target.value)}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
              >
                {Object.entries(TERMS).map(([key, term]) => (
                  <option key={key} value={key}>{term.name}</option>
                ))}
              </select>
            </div>
            {weekApprovalStatus !== 'approved' && (
              <button
                onClick={() => navigate('/approve-week')}
                className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Approve Week
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden overflow-x-auto">
          <div className="min-w-[1000px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-r border-gray-200 bg-gray-50 w-32"></th>
                  {DAYS.map(day => (
                    <th key={day} className="p-4 border-b border-gray-200 bg-gray-50 font-medium text-gray-700">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIME_SLOTS.map((timeSlot) => (
                  <tr key={timeSlot}>
                    <td className="p-4 border-r border-b border-gray-200 text-sm text-gray-600">
                      {formatTime(timeSlot)}
                    </td>
                    {DAYS.map(day => {
                      const lesson = getLessonForTimeSlot(day, timeSlot);
                      const isFullyPlanned = lesson && isLessonFullyPlanned(lesson);
                      
                      return (
                        <td key={`${day}-${timeSlot}`} className="p-4 border-b border-gray-200">
                          {lesson ? (
                            <div 
                              className={`space-y-3 p-3 rounded-lg border relative ${
                                isFullyPlanned 
                                  ? 'bg-green-50 border-green-500' 
                                  : 'bg-white border-gray-200'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="px-3 py-1.5 bg-[#FFF9E7] text-[#FFC83D] rounded font-medium">
                                  {lesson.subject}
                                </div>
                                <div className="flex items-center gap-2">
                                  {isFullyPlanned && (
                                    <button
                                      onClick={(e) => handleViewLesson(lesson, e)}
                                      className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                      title="View lesson details"
                                    >
                                      <Eye className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Users className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm text-gray-600">{lesson.yearGroup} {lesson.class}</span>
                                </div>
                                
                                {lesson.objectives && lesson.objectives.length > 0 && (
                                  <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-[#FFC83D]" />
                                    <span className="text-sm text-gray-700 font-medium leading-tight">{lesson.objectives[0].description}</span>
                                  </div>
                                )}
                                
                                {lesson.theme && (
                                  <div className="flex items-center gap-2 mb-2">
                                    <BookOpen className="w-4 h-4 text-[#FFC83D]" />
                                    <span className="text-sm text-gray-600">{lesson.theme}</span>
                                  </div>
                                )}
                              </div>

                              {/* Display activity summaries if lesson is fully planned */}
                              {isFullyPlanned && (
                                <div className="space-y-2 pt-2 border-t border-gray-100">
                                  {lesson.activities?.starter && (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                          <Brain className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-medium text-blue-600">Starter ({lesson.activities.starter.duration})</div>
                                          <div className="text-xs text-gray-700 leading-tight">{lesson.activities.starter.description}</div>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {lesson.activities?.main && (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-[#FFF9E7] rounded-lg flex items-center justify-center flex-shrink-0">
                                          <BookOpen className="w-4 h-4 text-[#FFC83D]" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-medium text-[#FFC83D]">Main ({lesson.activities.main.duration})</div>
                                          <div className="text-xs text-gray-700 leading-tight">{lesson.activities.main.description}</div>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {lesson.activities?.plenary && (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-medium text-green-600">Plenary ({lesson.activities.plenary.duration})</div>
                                          <div className="text-xs text-gray-700 leading-tight">{lesson.activities.plenary.description}</div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Contextual Onboarding */}
      <OnboardingTour
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        onComplete={completeOnboarding}
        currentContext="teaching"
      />
    </div>
  );
}