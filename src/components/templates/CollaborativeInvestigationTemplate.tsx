"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Target, Clock, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { LessonLayout } from '../LessonLayout';
import { NavigationArrow } from '../NavigationArrow';
import { MidAssistant } from '../MidAssistant';
import { MiniAssistant } from '../MiniAssistant';

// THEME COLOR SYSTEM
const getThemeColors = (theme?: string) => {
  switch (theme) {
    case 'dystopian':
    case 'Dystopian Fiction':
    case 'dark':
      return {
        primary: 'bg-gray-900',
        secondary: 'bg-gray-800/50', 
        text: 'text-white',
        accent: 'text-yellow-400',
        border: 'border-gray-600',
        hover: 'hover:bg-gray-700',
        backgroundGradient: 'rgba(75, 85, 99, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-gray-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    case 'nature':
    case 'science':
    case 'Creative Writing':
    case 'Energy Transfer':
      return {
        primary: 'bg-green-900',
        secondary: 'bg-green-800/50',
        text: 'text-white', 
        accent: 'text-green-300',
        border: 'border-green-600',
        hover: 'hover:bg-green-700',
        backgroundGradient: 'rgba(34, 197, 94, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-green-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    case 'technology':
    case 'Shakespeare':
      return {
        primary: 'bg-blue-900',
        secondary: 'bg-blue-800/50',
        text: 'text-white',
        accent: 'text-blue-300', 
        border: 'border-blue-600',
        hover: 'hover:bg-blue-700',
        backgroundGradient: 'rgba(30, 64, 175, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-blue-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    case 'history':
    case 'Industrial Revolution':
    case 'War Poetry':
      return {
        primary: 'bg-amber-900',
        secondary: 'bg-amber-800/50',
        text: 'text-white',
        accent: 'text-amber-300',
        border: 'border-amber-600', 
        hover: 'hover:bg-amber-700',
        backgroundGradient: 'rgba(180, 83, 9, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-amber-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
    default:
      return {
        primary: 'bg-green-900',
        secondary: 'bg-green-800/50',
        text: 'text-white', 
        accent: 'text-green-300',
        border: 'border-green-600',
        hover: 'hover:bg-green-700',
        backgroundGradient: 'rgba(34, 197, 94, 0.95)',
        inputBg: 'bg-white',
        inputText: 'text-gray-900',
        inputBorder: 'border-green-300',
        inputPlaceholder: 'placeholder-gray-500',
        cardBg: 'bg-white/95',
        cardText: 'text-gray-900',
        categoryBg: 'bg-white/90',
        categoryText: 'text-gray-800',
        headerText: 'text-gray-900'
      };
  }
};

interface CollaborativeInvestigationProps {
  lessonData: {
    title: string;
    learning_objective: string;
    investigation_type: 'text_analysis_workshop' | 'research_project' | 'problem_solving_challenge';
    investigation_focus: string;
    materials?: {
      texts?: string[];
      resources?: string[];
    };
    collaboration_structure: {
      group_size: number;
      roles: string[];
    };
    theme?: string;
  };
  navigationData: {
    previousRoute: string;
    nextRoute: string;
  };
}

export default function CollaborativeInvestigationTemplate({ lessonData, navigationData }: CollaborativeInvestigationProps) {
  const router = useRouter();
  const themeColors = getThemeColors(lessonData.theme);
  
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [investigationNotes, setInvestigationNotes] = useState<Record<string, string>>({});
  const [findings, setFindings] = useState<string>('');

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleNotesChange = (role: string, notes: string) => {
    setInvestigationNotes(prev => ({
      ...prev,
      [role]: notes
    }));
  };

  const getInvestigationIcon = () => {
    switch (lessonData.investigation_type) {
      case 'text_analysis_workshop': return <Target className="w-6 h-6" />;
      case 'research_project': return <BookOpen className="w-6 h-6" />;
      case 'problem_solving_challenge': return <Users className="w-6 h-6" />;
      default: return <Users className="w-6 h-6" />;
    }
  };

  const getInvestigationTitle = () => {
    switch (lessonData.investigation_type) {
      case 'text_analysis_workshop': return 'Text Analysis Workshop';
      case 'research_project': return 'Research Project';
      case 'problem_solving_challenge': return 'Problem Solving Challenge';
      default: return 'Collaborative Investigation';
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            ${themeColors.backgroundGradient} 0%,
            ${themeColors.backgroundGradient.replace('0.95', '0.85')} 15%,
            ${themeColors.backgroundGradient.replace('0.95', '0.85')} 85%,
            ${themeColors.backgroundGradient} 100%
          ),
          url('https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80')
        `,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className={`${themeColors.cardBg} backdrop-blur-sm rounded-lg shadow-lg p-6`}>
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="text-[#FFB800] font-medium">Learning Objective:</span>
              <span className={`ml-2 font-bold ${themeColors.headerText}`}>{lessonData.learning_objective}</span>
            </div>
            <MidAssistant context={{ topic: 'collaboration' }} />
          </div>

          {/* Investigation Overview */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl">🔍</span>
              <h2 className="text-xl font-bold text-blue-900">{getInvestigationTitle()}</h2>
            </div>
            <p className="text-base text-blue-800">
              Investigation Focus: {lessonData.investigation_focus}
            </p>
          </div>

          {/* 40-Minute Structure Indicator */}
          <div className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">40-Minute Investigation</h3>
              </div>
              <div className="flex space-x-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-blue-800">10 mins</div>
                  <div className="text-blue-600">Role Assignment</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-800">20 mins</div>
                  <div className="text-blue-600">Investigation</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-800">10 mins</div>
                  <div className="text-blue-600">Sharing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Investigation Area - Left Side */}
            <div className="col-span-8 space-y-4">
              <div className={`p-6 ${themeColors.primary} rounded-lg shadow-lg ${themeColors.text}`}>
                <div className="flex items-center space-x-2 mb-4">
                  {getInvestigationIcon()}
                  <h3 className={`text-xl font-bold ${themeColors.text}`}>Collaborative Investigation</h3>
                </div>

                <div className={`${themeColors.secondary} p-6 rounded-lg space-y-4`}>
                  <h4 className={`font-semibold mb-3 ${themeColors.text}`}>Investigation Materials:</h4>
                  
                  {/* Text Materials */}
                  {lessonData.materials?.texts && (
                    <div className="space-y-3">
                      <h5 className={`font-medium ${themeColors.text}`}>Text Extracts:</h5>
                      {lessonData.materials.texts.map((text, index) => (
                        <div key={index} className={`p-3 ${themeColors.inputBg} rounded-lg border ${themeColors.inputBorder}`}>
                          <p className={`text-sm ${themeColors.inputText}`}>{text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Investigation Workspace */}
                  <div className="space-y-3">
                    <h5 className={`font-medium ${themeColors.text}`}>Your Investigation Notes:</h5>
                    <textarea
                      value={investigationNotes[selectedRole] || ''}
                      onChange={(e) => handleNotesChange(selectedRole, e.target.value)}
                      placeholder="Record your investigation findings..."
                      className={`w-full h-32 p-4 ${themeColors.inputBg} border ${themeColors.inputBorder} rounded-lg ${themeColors.inputText} ${themeColors.inputPlaceholder} resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>

                  {/* Findings Summary */}
                  <div className="space-y-3">
                    <h5 className={`font-medium ${themeColors.text}`}>Key Findings to Share:</h5>
                    <textarea
                      value={findings}
                      onChange={(e) => setFindings(e.target.value)}
                      placeholder="Summarize your most important discoveries..."
                      className={`w-full h-24 p-3 ${themeColors.inputBg} border ${themeColors.inputBorder} rounded-lg ${themeColors.inputText} ${themeColors.inputPlaceholder} resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Roles and Support - Right Side */}
            <div className="col-span-4 space-y-4">
              <div className={`p-4 ${themeColors.categoryBg} rounded-lg border ${themeColors.border}`}>
                <h3 className={`text-lg font-semibold mb-3 ${themeColors.categoryText}`}>Investigation Roles</h3>
                <div className="space-y-2">
                  {lessonData.collaboration_structure.roles.map((role, index) => (
                    <button
                      key={index}
                      onClick={() => handleRoleSelect(role)}
                      className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                        selectedRole === role
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className={`font-medium ${selectedRole === role ? 'text-blue-800' : themeColors.categoryText}`}>
                        {role}
                      </div>
                      <div className={`text-xs ${selectedRole === role ? 'text-blue-600' : 'text-gray-600'}`}>
                        Group size: {lessonData.collaboration_structure.group_size}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`p-4 ${themeColors.categoryBg} rounded-lg border ${themeColors.border}`}>
                <h3 className={`text-lg font-semibold mb-3 ${themeColors.categoryText}`}>Investigation Tips</h3>
                <ul className={`space-y-2 text-sm ${themeColors.categoryText}`}>
                  <li>• Focus on your specialist role</li>
                  <li>• Gather specific evidence</li>
                  <li>• Prepare to teach others</li>
                  <li>• Listen to other specialists</li>
                  <li>• Build collective understanding</li>
                </ul>
              </div>

              <div className={`p-4 ${themeColors.categoryBg} rounded-lg border ${themeColors.border}`}>
                <h3 className={`text-lg font-semibold mb-3 ${themeColors.categoryText}`}>Assessment Focus</h3>
                <p className={`text-sm ${themeColors.categoryText}`}>
                  Quality of collaborative investigation and specialist expertise development
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className={`p-4 ${themeColors.categoryBg} rounded-lg mt-6`}>
            <p className={`text-base ${themeColors.categoryText}`}>
              💬 Through collaborative investigation, we become experts in different areas and teach each other, building deeper understanding together.
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
  );
}