'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { SlidingMenu } from '@/components/SlidingMenu'
import { AIAssistant } from '@/components/AIAssistant'
import Home from '../src/components/Home'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAIAssistant, setShowAIAssistant] = useState(false)

  // Extract lesson info from URL if needed
  const lessonInfo = undefined // This would be extracted from URL params in a real implementation

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Header 
        onMenuClick={() => setIsMenuOpen(true)} 
        onAIClick={() => setShowAIAssistant(true)}
        lessonInfo={lessonInfo}
      />
      <main className="flex-1">
        <Home />
      </main>
      <SlidingMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
      {showAIAssistant && (
        <AIAssistant 
          onClose={() => setShowAIAssistant(false)} 
        />
      )}
    </div>
  )
}