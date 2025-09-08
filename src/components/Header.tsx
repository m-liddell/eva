"use client";
'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Bell, Search, Users, Brain, BookOpen, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onAIClick?: () => void;
  lessonInfo?: {
    yearGroup?: string;
    classGroup?: string;
    phase?: 'Starter' | 'Main' | 'Plenary';
    subject?: string;
    theme?: string;
  };
}

export function Header({ onMenuClick, onAIClick, lessonInfo }: HeaderProps) {
  const pathname = usePathname();
  const isLessonPage = pathname.includes('/lesson/');
  const [userData, setUserData] = useState<any>(null);
  const [displayName, setDisplayName] = useState('Teacher');
  
  // Move browser-specific code to useEffect to prevent hydration errors
  useEffect(() => {
    try {
      const pocUser = sessionStorage.getItem('pocUser');
      if (pocUser) {
        const parsedUserData = JSON.parse(pocUser);
        setUserData(parsedUserData);
        setDisplayName(parsedUserData?.name || 'Teacher');
        return;
      }
      
      const mockSession = localStorage.getItem('eva-mock-session');
      if (mockSession) {
        const parsedUserData = JSON.parse(mockSession);
        setUserData(parsedUserData);
        setDisplayName(parsedUserData?.name || 'Teacher');
      }
    } catch (error) {
      console.warn('Error parsing user data:', error);
    }
  }, []);

  const getPhaseIcon = () => {
    if (!lessonInfo?.phase) return null;
    
    switch (lessonInfo.phase) {
      case 'Starter':
        return <Brain className="w-4 h-4 text-blue-600" />;
      case 'Main':
        return <BookOpen className="w-4 h-4 text-[#FFC83D]" />;
      case 'Plenary':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#FFC83D]" />;
    }
  };

  const getPhaseColor = () => {
    if (!lessonInfo?.phase) return '';
    
    switch (lessonInfo.phase) {
      case 'Starter':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Main':
        return 'bg-[#FFF9E7] text-[#FFC83D] border-[#FFC83D]/20';
      case 'Plenary':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu 
            className="w-5 h-5 text-gray-600 cursor-pointer" 
            onClick={onMenuClick}
          />
          <Link 
            href="/"
            className="text-lg font-bold text-[#FFC83D]"
          >
            EVA
          </Link>
          
          {isLessonPage && lessonInfo && (
            <div className="hidden md:flex items-center gap-4 ml-4">
              {lessonInfo.yearGroup && lessonInfo.classGroup && (
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-medium text-gray-700">
                    {lessonInfo.yearGroup} Class {lessonInfo.classGroup}
                  </span>
                </div>
              )}
              
              {lessonInfo.subject && (
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-medium text-gray-700">
                    {lessonInfo.subject}
                  </span>
                </div>
              )}
              
              {lessonInfo.theme && (
                <div className="px-2 py-1 bg-[#FFF9E7] text-[#B17F17] rounded text-xs">
                  {lessonInfo.theme}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Demo Mode Indicator */}
          {userData && (
            <div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>Demo Mode</span>
            </div>
          )}
          
          {/* Mobile lesson info - condensed */}
          {isLessonPage && lessonInfo && (
            <div className="md:hidden flex items-center gap-2">
              {lessonInfo.yearGroup && lessonInfo.classGroup && (
                <div className="text-xs font-medium text-gray-700">
                  {lessonInfo.yearGroup}{lessonInfo.classGroup}
                </div>
              )}
              {lessonInfo.theme && (
                <div className="px-2 py-1 bg-[#FFF9E7] text-[#B17F17] rounded text-xs">
                  {lessonInfo.theme}
                </div>
              )}
            </div>
          )}
          
          <button 
            onClick={onAIClick}
            className="w-7 h-7 bg-[#FFCFCF] rounded-full flex items-center justify-center"
            aria-label="Open AI Assistant"
          >
            <span className="text-[#828F9E] font-['Sofia'] text-base leading-none">A</span>
          </button>
          <Search className="hidden sm:block w-4 h-4 text-gray-600" />
          <Bell className="hidden sm:block w-4 h-4 text-gray-600" />
          <div className="w-7 h-7 rounded-full overflow-hidden" title={userData ? `${userData.name} (Demo)` : 'Teacher Avatar'}>
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop" 
              alt={`${displayName} Avatar`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}