'use client'

import { useState } from 'react'
import { Header } from '../../src/components/Header'
import { SlidingMenu } from '../../src/components/SlidingMenu'
import { AIAssistant } from '../../src/components/AIAssistant'
import ApproveWeek from '../../src/components/ApproveWeek'

export default function ApproveWeekPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAIAssistant, setShowAIAssistant] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Header 
        onMenuClick={() => setIsMenuOpen(true)} 
        onAIClick={() => setShowAIAssistant(true)}
      />
      <main className="flex-1">
        <ApproveWeek />
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