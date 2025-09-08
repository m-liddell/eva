"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, BookOpen, CheckCircle2 } from 'lucide-react';
import { default as QuickFireDiscussionTemplate } from '../../components/templates/QuickFireDiscussionTemplate';
import { StudentActivityModal } from '../../components/StudentActivityModal';
import { getStudentActivityByLessonAndPhase } from '../../data/studentActivities';

export default function DystopianLesson3Starter() {
  const router = useRouter();
  const [showStudentActivity, setShowStudentActivity] = useState(false);

  const lessonData = {
    title: "Simple vs Compound Sentence Power",
    learning_objective: "I can compare simple and compound sentences to understand their different impacts in dystopian writing",
    activity_type: "Sentence Variety Analysis",
    visual_stimulus: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80",
    discussion_questions: [
      "What's the difference between simple and compound sentences?",
      "When should you use simple sentences in dystopian writing?",
      "When are compound sentences more effective?",
      "How does sentence variety affect reader engagement?"
    ],
    think_pair_share_prompts: [
      "Compare the impact of simple versus compound sentence examples",
      "Discuss when each sentence type is most effective",
      "Share your analysis of how sentence variety creates engagement",
      "Explain which sentence structure works best for different dystopian effects"
    ],
    theme: "Dystopian Fiction"
  };

  const navigationData = {
    previousRoute: '/lesson/dystopian-lesson-2/plenary',
    nextRoute: '/lesson/dystopian-lesson-3/main'
  };

  const studentActivity = getStudentActivityByLessonAndPhase('dystopian-lesson-3', 'starter');

  return (
    <>
      <QuickFireDiscussionTemplate 
        lessonData={lessonData}
        navigationData={navigationData}
        onStudentActivityClick={() => setShowStudentActivity(true)}
        miniAssistantAnswers={{
          "What's the difference between simple and compound sentences?": "Teaching Support: Simple sentences have one complete thought (subject + verb). Compound sentences join two complete thoughts with coordinating conjunctions (and, but, or, so, yet).\n\nStudent Help: Look for connecting words like 'and', 'but', 'or' - if you can split the sentence into two complete thoughts, it's compound. If it's just one thought, it's simple.\n\nExamples:\nSimple: 'Guards watched.' (one complete thought)\nCompound: 'Guards watched, but citizens ignored them.' (two complete thoughts joined by 'but')\nSimple: 'The alarm screamed.' (subject: alarm, verb: screamed)\nCompound: 'The alarm screamed, and citizens ran for cover.' (two thoughts connected)",
          "When should you use simple sentences in dystopian writing?": "Teaching Support: Simple sentences create dramatic impact through brevity and directness. They're perfect for building tension, showing urgency, and emphasizing key moments.\n\nStudent Help: Use simple sentences when you want immediate impact and drama.\n\nExamples:\nDrama: 'The alarm screamed.' (short and shocking)\nUrgency: 'Citizens ran.' (quick action)\nTension: 'Freedom died.' (powerful statement)\nFear: 'Hope vanished.' (emotional impact)\nThreat: 'Cameras watched.' (ominous presence)\nControl: 'Doors slammed shut.' (trapped feeling)",
          "When are compound sentences more effective?": "Teaching Support: Compound sentences excel at showing relationships between ideas and creating sophisticated flow. They're ideal for contrast, cause-effect relationships, and building complex atmospheric descriptions.\n\nStudent Help: Use compound sentences to show connections and contrasts between ideas.\n\nExamples:\nContrast: 'Cameras watched, but citizens ignored them.' (surveillance vs. defiance)\nCause-effect: 'Propaganda echoed, and people hurried past.' (sound causes movement)\nFlow: 'Lights flickered, and shadows danced.' (connected atmospheric details)\nComplexity: 'Doors opened, and officials emerged.' (sequence of events)\nIrony: 'Safety was promised, yet fear filled the streets.' (contradiction)",
          "How does sentence variety affect reader engagement?": "Teaching Support: Sentence variety is crucial for maintaining reader engagement. It creates natural rhythm, prevents monotony, and allows writers to control pacing strategically.\n\nStudent Help: Mix sentence types like a DJ mixes music - variety keeps people interested!\n\nExamples:\nMonotonous (all simple): 'The alarm screamed. Citizens ran. Guards appeared. Order returned.'\nMonotonous (all compound): 'The alarm screamed, and citizens ran, but guards appeared, so order returned.'\nEngaging (mixed): 'The alarm screamed. Guards appeared, and order was restored. Citizens ran.' (drama + connection + urgency)\nPerfect flow: 'Silence fell. Cameras watched, but no one moved. Fear had won.' (builds tension through variety)"
        }}
      />
      
      {showStudentActivity && studentActivity && (
        <StudentActivityModal
          activity={studentActivity}
          onClose={() => setShowStudentActivity(false)}
        />
      )}
    </>
  );
}