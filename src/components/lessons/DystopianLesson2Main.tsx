"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, BookOpen, CheckCircle2 } from 'lucide-react';
import CollaborativeInvestigationTemplate from '../../components/templates/CollaborativeInvestigationTemplate';
import { StudentActivityModal } from '../../components/StudentActivityModal';
import { getStudentActivityByLessonAndPhase } from '../../data/studentActivities';

const DystopianLesson2Main: React.FC = () => {
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
    title: "Dystopian Sentence Construction Workshop",
    learning_objective: "I can master complete sentence components using dystopian examples and practice atmospheric writing",
    subject: "English",
    year_group: "Year 10",
    stage_of_lesson: "Main",
    duration_of_lesson_stage: "40 minutes",
    lesson_number: "2",
    unit_title: "Dystopian Fiction: Setting Descriptions",
    subject_theme: "Dystopian Fiction",
    lessons_in_unit: "16",
    
    lesson_structure: {
      main_activity_input: "15 minutes",
      student_activity: "25 minutes"
    },
    
    hook_summary: "Master the building blocks of powerful writing! Every great dystopian story starts with sentences that grab readers and don't let go. Today you'll become sentence construction experts, learning how to build complete, atmospheric sentences that make dystopian worlds feel real and threatening. Your writing will transform from basic to brilliant!",
    
    success_criteria: [
      "Identify subjects, verbs, and objects in dystopian sentences",
      "Write complete sentences with clear atmospheric language",
      "Apply sentence construction rules with increasing confidence",
      "Create atmospheric effects using sophisticated sentence structures",
      "Demonstrate mastery of advanced sentence construction techniques",
      "Teach sentence construction expertise to other specialist groups"
    ],
    
    jigsaw_instructions: {
      phase_1: {
        title: "Form Specialist Teams (5 mins)",
        instruction: "Get into groups of 6 students. Each group becomes specialists in one analysis area:",
        specialisms: [
          "Sentence Structure Analysis",
          "Atmospheric Language Creation", 
          "Grammar Accuracy Checking",
          "Dystopian Context Understanding"
        ]
      },
      phase_2: {
        title: "Become Experts (20 mins)",
        instruction: "Work collaboratively to analyse all texts from your specialist perspective. Gather evidence, take detailed notes, and prepare to teach others what you've discovered. Your group will become the class experts on your assigned focus area."
      },
      phase_3: {
        title: "Teach Other Groups (15 mins)",
        instruction: "Each specialist group teaches their findings to other groups. You'll learn from all specialist perspectives, gaining insights you couldn't develop alone. This creates complete understanding through collaborative expertise."
      }
    },
    
    team_roles: {
      role_1: {
        name: "Sentence Structure Analysis",
        description: "Subjects, verbs, objects, sentence completeness"
      },
      role_2: {
        name: "Atmospheric Language Creation",
        description: "Mood words, sensory details, emotional impact"
      },
      role_3: {
        name: "Grammar Accuracy Checking",
        description: "Punctuation, spelling, technical correctness"
      },
      role_4: {
        name: "Dystopian Context Understanding",
        description: "Control themes, oppression, social commentary"
      }
    },
    
    investigation_workspace: {
      level_1: {
        texts: [
          "The surveillance cameras watched every movement with mechanical precision.",
          "Citizens hurried through sterile corridors in complete silence.",
          "Propaganda speakers broadcast approved messages throughout the day."
        ]
      },
      level_2: {
        texts: [
          "The omnipresent surveillance cameras, symbols of governmental overreach, watched citizens with the relentless hunger of predators stalking their prey.",
          "Frightened citizens hurried through the sterile, windowless corridors while their footsteps echoed ominously in the oppressive silence.",
          "The harsh propaganda speakers, instruments of psychological manipulation, broadcast their approved messages with mechanical persistence."
        ]
      },
      level_3: {
        texts: [
          "Although the surveillance cameras promised safety and security for all citizens, they actually created an inescapable prison where privacy became extinct and fear dominated every aspect of daily life.",
          "While frightened citizens hurried through the sterile corridors of their urban prison, their synchronized footsteps created a haunting rhythm that echoed the loss of individual expression and personal freedom.",
          "Because the propaganda speakers had become instruments of sophisticated psychological manipulation, their constant broadcasts filled the air with false promises that masked the systematic destruction of independent thought and critical reasoning."
        ]
      }
    },
    
    key_vocabulary: [
      "surveillance", "oppression", "atmosphere", "propaganda", "control", "resistance"
    ],
    
    collaboration_structure: {
      group_size: 6,
      roles: [
        "Sentence Structure Analysis",
        "Atmospheric Language Creation", 
        "Grammar Accuracy Checking",
        "Dystopian Context Understanding"
      ]
    },
    
    differentiation: {
      support: [
        "Pre-highlighted key phrases for struggling readers",
        "Sentence starters for analysis",
        "Partner support with stronger reader",
        "Extended time for completion"
      ],
      extension: [
        "Additional context materials",
        "Cross-role analysis challenges",
        "Advanced vocabulary exploration"
      ],
      eal_students: [
        "Vocabulary pre-teaching session",
        "Visual analysis templates",
        "Peer buddy support",
        "Key terms glossary with definitions"
      ]
    },
    theme: "Dystopian Fiction"
  };

  const navigationData = {
    previousRoute: '/lesson/dystopian-lesson-2/starter',
    nextRoute: '/lesson/dystopian-lesson-2/plenary'
  };

  const studentActivity = getStudentActivityByLessonAndPhase('dystopian-lesson-2', 'main');

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
                  <h3 className="text-lg font-bold text-gray-800">Dystopian Sentence Construction Workshop</h3>
                  <p className="text-sm text-gray-600">Collaborative investigation and analysis</p>
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
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg shadow-lg flex items-center gap-2"
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

          <CollaborativeInvestigationTemplate 
            lessonData={templateLessonData}
            navigationData={navigationData}
          />

          {showStudentActivity && studentActivity && (
            <StudentActivityModal
              activity={studentActivity}
              onClose={() => setShowStudentActivity(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DystopianLesson2Main;