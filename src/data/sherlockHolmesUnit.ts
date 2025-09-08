// Sherlock Holmes unit information
import { sherlockHolmesLesson1, sherlockHolmesLesson1Activity } from './sherlockHolmesLesson1';

export const sherlockHolmesUnitInfo = {
  title: "Sherlock Holmes: Detective Fiction and Deductive Reasoning",
  yearGroup: "Year 9",
  duration: "12 lessons",
  overview: "Students explore the craft of detective fiction through Arthur Conan Doyle's Sherlock Holmes stories, developing analytical thinking, deductive reasoning skills, and sophisticated writing techniques to create compelling mystery narratives.",
  themes: [
    "Deductive Reasoning and Logic",
    "Victorian Society and Context", 
    "Character Development and Relationships",
    "Narrative Structure and Pacing",
    "Evidence and Investigation",
    "Atmosphere and Setting"
  ],
  coreTexts: [
    "A Study in Scarlet by Arthur Conan Doyle",
    "The Adventure of the Speckled Band",
    "The Red-Headed League", 
    "The Adventure of the Blue Carbuncle"
  ]
};

// Complete Sherlock Holmes lesson structure with allocated templates
export const sherlockHolmesLessons = [
  // Lesson 1: Introduction - Interactive Exploration
  {
    lessonNumber: 1,
    title: "Enter the World of Sherlock Holmes",
    phase: "Detective Fiction Foundation",
    learningObjective: "I can understand the key features of detective fiction and recognize how Sherlock Holmes established the genre conventions",
    weekDay: "Monday",
    template: "InteractiveExplorationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-1-starter",
        title: "Detective Fiction Genre Discovery",
        description: "Explore the essential elements of detective fiction through interactive analysis of clues, characters, and mystery structures",
        duration: "10 mins",
        type: "Interactive Exploration",
        activity_type: "starter",
        template: "InteractiveExplorationTemplate",
        exploration_focus: "Hands-on exploration of detective fiction conventions and mystery-solving techniques",
        interactive_elements: [
          {
            element_type: 'hands_on_activity',
            title: 'Mystery Element Analysis Sprint',
            description: 'Rapidly identify key elements of detective stories through visual and textual clues',
            materials: ['Detective story covers and excerpts', 'Mystery element identification sheets', 'Genre convention checklists']
          },
          {
            element_type: 'scenario_analysis',
            title: 'Crime Scene Investigation Challenge',
            description: 'Analyze mock crime scenes to understand how detectives gather and interpret evidence',
            materials: ['Crime scene photographs', 'Evidence analysis templates', 'Deduction worksheets']
          }
        ],
        discovery_questions: [
          "What makes a good detective story compelling and engaging?",
          "How do detectives use observation and deduction to solve mysteries?",
          "What role does the Victorian setting play in Sherlock Holmes stories?",
          "How do detective fiction conventions help readers follow the mystery?"
        ]
      },
      main: {
        id: "sherlock-lesson-1-main",
        title: "Victorian Detective Context Workshop",
        description: "Analyze Victorian society and understand how it shapes Sherlock Holmes stories through historical context and character development",
        duration: "40 mins",
        type: "Collaborative Investigation",
        activity_type: "main",
        template: "CollaborativeInvestigationTemplate",
        investigation_type: 'text_analysis_workshop',
        investigation_focus: "Collaborative analysis of Victorian context and its influence on detective fiction"
      },
      plenary: {
        id: "sherlock-lesson-1-plenary",
        title: "Detective Fiction Elements Gallery",
        description: "Consolidate understanding of detective fiction elements and evaluate their effectiveness in creating engaging mysteries",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "detective fiction element identification and genre understanding"
      }
    }
  },
  
  // Lesson 2: Character Analysis - Quick-Fire Discussion
  {
    lessonNumber: 2,
    title: "Holmes and Watson: The Perfect Partnership",
    phase: "Character Analysis and Relationships",
    learningObjective: "I can analyze the relationship between Holmes and Watson and understand how their partnership drives the narrative",
    weekDay: "Wednesday",
    template: "QuickFireDiscussionTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-2-starter",
        title: "Character Partnership Analysis",
        description: "Examine how Holmes and Watson complement each other and create an effective detective partnership",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_type: 'speed_challenge',
        discussion_questions: [
          "What unique skills does Holmes bring to their partnership?",
          "How does Watson support and complement Holmes's abilities?",
          "Why is their friendship important to the stories?",
          "How do their different personalities create interesting dynamics?"
        ]
      },
      main: {
        id: "sherlock-lesson-2-main",
        title: "Character Development Deep Dive",
        description: "Analyze character traits, motivations, and development through close reading of key scenes and dialogue",
        duration: "40 mins",
        type: "Scaffolded Practice",
        activity_type: "main",
        template: "ScaffoldedPracticeTemplate",
        practice_type: 'guided_skill_development',
        skill_focus: "Character analysis through textual evidence and inference"
      },
      plenary: {
        id: "sherlock-lesson-2-plenary",
        title: "Partnership Dynamics Showcase",
        description: "Present character analysis findings and evaluate the effectiveness of the Holmes-Watson partnership",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "character analysis and partnership dynamics"
      }
    }
  },

  // Lesson 3: Deductive Reasoning - Knowledge Retrieval Game
  {
    lessonNumber: 3,
    title: "The Art of Deduction",
    phase: "Logical Thinking and Analysis",
    learningObjective: "I can understand and apply deductive reasoning techniques to solve problems and analyze evidence",
    weekDay: "Friday",
    template: "KnowledgeRetrievalGameTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-3-starter",
        title: "Deduction Speed Challenge",
        description: "Practice logical reasoning and evidence analysis through rapid-fire deduction exercises",
        duration: "10 mins",
        type: "Knowledge Retrieval Game",
        activity_type: "starter",
        template: "KnowledgeRetrievalGameTemplate",
        game_type: 'challenge_matching',
        game_content: {
          matches: [
            {
              item: "A man's shoes are muddy and wet...",
              match: "...he has recently walked through puddles or wet ground."
            },
            {
              item: "A woman carries a medical bag and has ink stains on her fingers...",
              match: "...she is likely a doctor who writes detailed patient notes."
            },
            {
              item: "A person's coat has dog hair and they smell of tobacco...",
              match: "...they own a dog and smoke a pipe or cigarettes."
            }
          ]
        },
        timer_duration: 480
      },
      main: {
        id: "sherlock-lesson-3-main",
        title: "Deductive Reasoning Workshop",
        description: "Master the techniques of logical deduction through structured analysis of evidence and systematic reasoning",
        duration: "40 mins",
        type: "Scaffolded Practice",
        activity_type: "main",
        template: "ScaffoldedPracticeTemplate",
        practice_type: 'progressive_difficulty',
        skill_focus: "Deductive reasoning and logical analysis techniques"
      },
      plenary: {
        id: "sherlock-lesson-3-plenary",
        title: "Master Detective Showcase",
        description: "Present most impressive deduction and analyze the logical reasoning process used",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "deductive reasoning mastery and logical analysis"
      }
    }
  },

  // Lesson 4: Victorian Setting - Interactive Exploration
  {
    lessonNumber: 4,
    title: "Victorian London: The Perfect Setting for Mystery",
    phase: "Historical Context and Atmosphere",
    learningObjective: "I can analyze how Victorian London provides the ideal backdrop for detective fiction and creates atmospheric tension",
    weekDay: "Tuesday",
    template: "InteractiveExplorationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-4-starter",
        title: "Victorian London Atmosphere Discovery",
        description: "Explore how the Victorian setting enhances mystery and creates the perfect atmosphere for detective stories",
        duration: "10 mins",
        type: "Interactive Exploration",
        activity_type: "starter",
        template: "InteractiveExplorationTemplate",
        exploration_focus: "Hands-on exploration of Victorian London's role in creating mystery atmosphere",
        interactive_elements: [
          {
            element_type: 'hands_on_activity',
            title: 'Victorian London Image Analysis',
            description: 'Analyze historical images to understand how the setting creates mystery and atmosphere',
            materials: ['Victorian London photographs', 'Setting analysis templates', 'Atmosphere identification guides']
          },
          {
            element_type: 'scenario_analysis',
            title: 'Historical Context Investigation',
            description: 'Investigate how Victorian society, technology, and culture influence the detective stories',
            materials: ['Historical context cards', 'Social analysis frameworks', 'Cultural comparison charts']
          }
        ],
        discovery_questions: [
          "How does Victorian London's fog and gaslight create mystery atmosphere?",
          "What aspects of Victorian society make it perfect for detective stories?",
          "How do the social classes and technology of the era affect the mysteries?",
          "Why is the historical setting important for understanding the characters?"
        ]
      },
      main: {
        id: "sherlock-lesson-4-main",
        title: "Setting and Atmosphere Workshop",
        description: "Create atmospheric descriptions of Victorian London that enhance mystery and tension in detective fiction",
        duration: "40 mins",
        type: "Creative Application",
        activity_type: "main",
        template: "CreativeApplicationTemplate",
        creation_type: 'design_challenge',
        creation_brief: "Create atmospheric descriptions of Victorian London settings that enhance mystery and support detective fiction narratives"
      },
      plenary: {
        id: "sherlock-lesson-4-plenary",
        title: "Atmospheric Setting Showcase",
        description: "Present most atmospheric Victorian setting description and analyze how setting enhances mystery",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "atmospheric setting creation and mystery enhancement"
      }
    }
  },

  // Lesson 5: Mystery Structure - Collaborative Investigation
  {
    lessonNumber: 5,
    title: "The Anatomy of a Perfect Mystery",
    phase: "Narrative Structure Mastery",
    learningObjective: "I can understand and analyze the structure of detective fiction and how it creates suspense and engagement",
    weekDay: "Thursday",
    template: "CollaborativeInvestigationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-5-starter",
        title: "Mystery Structure Speed Analysis",
        description: "Rapidly identify the key structural elements of detective fiction and understand their purpose",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_questions: [
          "What are the essential stages of a detective story?",
          "How does the structure create suspense and keep readers engaged?",
          "Why is the revelation scene so important in detective fiction?",
          "How do red herrings and false clues enhance the mystery?"
        ]
      },
      main: {
        id: "sherlock-lesson-5-main",
        title: "Mystery Structure Investigation Workshop",
        description: "Collaborate to analyze how Sherlock Holmes stories are structured and how each element contributes to the overall mystery",
        duration: "40 mins",
        type: "Collaborative Investigation",
        activity_type: "main",
        template: "CollaborativeInvestigationTemplate",
        investigation_type: 'text_analysis_workshop',
        investigation_focus: "Collaborative analysis of mystery structure and narrative techniques"
      },
      plenary: {
        id: "sherlock-lesson-5-plenary",
        title: "Perfect Mystery Blueprint Showcase",
        description: "Present analysis of mystery structure and evaluate how different elements work together to create effective detective fiction",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "mystery structure analysis and narrative effectiveness"
      }
    }
  },

  // Lesson 6: Writing Your Own Mystery - Creative Application
  {
    lessonNumber: 6,
    title: "Create Your Own Sherlock Holmes Adventure",
    phase: "Creative Writing Application",
    learningObjective: "I can create an original detective story using the conventions and techniques learned from Sherlock Holmes",
    weekDay: "Monday",
    template: "CreativeApplicationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-6-starter",
        title: "Mystery Planning Workshop",
        description: "Plan and structure an original detective story using Sherlock Holmes conventions and techniques",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_questions: [
          "What makes a compelling mystery plot that will engage readers?",
          "How can you create believable clues that lead to a satisfying solution?",
          "What Victorian setting would work best for your mystery?",
          "How will you develop the relationship between your detective and assistant?"
        ]
      },
      main: {
        id: "sherlock-lesson-6-main",
        title: "Detective Story Creation Workshop",
        description: "Write an original Sherlock Holmes-style mystery story, applying all learned techniques for maximum reader engagement",
        duration: "40 mins",
        type: "Creative Application",
        activity_type: "main",
        template: "CreativeApplicationTemplate",
        creation_type: 'creative_challenge',
        creation_brief: "Write an original Sherlock Holmes-style mystery story that demonstrates mastery of detective fiction conventions, deductive reasoning, and atmospheric Victorian setting"
      },
      plenary: {
        id: "sherlock-lesson-6-plenary",
        title: "Master Detective Story Showcase",
        description: "Present original mystery story and analyze how it uses detective fiction techniques effectively",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "original mystery story effectiveness and technique application"
      }
    }
  },

  // Lesson 7: Evidence and Investigation - Scaffolded Practice
  {
    lessonNumber: 7,
    title: "The Science of Detection",
    phase: "Evidence Analysis Mastery",
    learningObjective: "I can analyze evidence systematically and draw logical conclusions like a Victorian detective",
    weekDay: "Wednesday",
    template: "ScaffoldedPracticeTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-7-starter",
        title: "Evidence Analysis Foundation",
        description: "Learn systematic approaches to analyzing evidence and drawing logical conclusions",
        duration: "10 mins",
        type: "Knowledge Retrieval Game",
        activity_type: "starter",
        template: "KnowledgeRetrievalGameTemplate",
        game_type: 'speed_sorting',
        game_content: {
          items: [
            "Muddy footprints leading to the window",
            "A torn piece of fabric caught on the fence", 
            "The victim's watch stopped at 11:47 PM",
            "A half-finished letter on the desk",
            "Strange tobacco ash in the fireplace",
            "The door was locked from the inside"
          ],
          categories: ["Physical Evidence", "Circumstantial Evidence"]
        }
      },
      main: {
        id: "sherlock-lesson-7-main",
        title: "Systematic Evidence Analysis Workshop",
        description: "Practice analyzing evidence systematically using Holmes's methods of observation and deduction",
        duration: "40 mins",
        type: "Scaffolded Practice",
        activity_type: "main",
        template: "ScaffoldedPracticeTemplate",
        practice_type: 'progressive_difficulty',
        skill_focus: "Systematic evidence analysis and logical deduction techniques"
      },
      plenary: {
        id: "sherlock-lesson-7-plenary",
        title: "Master Detective Analysis Showcase",
        description: "Present most impressive evidence analysis and demonstrate mastery of deductive reasoning",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "evidence analysis mastery and deductive reasoning skills"
      }
    }
  },

  // Lesson 8: Dialogue and Voice - Creative Application
  {
    lessonNumber: 8,
    title: "Capturing Holmes's Voice",
    phase: "Character Voice and Dialogue",
    learningObjective: "I can write authentic dialogue that captures the distinctive voices of Holmes and Watson",
    weekDay: "Friday",
    template: "CreativeApplicationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-8-starter",
        title: "Character Voice Analysis",
        description: "Analyze how Doyle creates distinctive character voices through dialogue and speech patterns",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_questions: [
          "What makes Holmes's way of speaking distinctive and memorable?",
          "How does Watson's voice differ from Holmes's in tone and style?",
          "What Victorian language patterns do the characters use?",
          "How does dialogue reveal character personality and relationships?"
        ]
      },
      main: {
        id: "sherlock-lesson-8-main",
        title: "Authentic Dialogue Creation Workshop",
        description: "Write original dialogue that authentically captures Holmes and Watson's distinctive voices and Victorian speech patterns",
        duration: "40 mins",
        type: "Creative Application",
        activity_type: "main",
        template: "CreativeApplicationTemplate",
        creation_type: 'creative_challenge',
        creation_brief: "Create authentic dialogue scenes between Holmes and Watson that demonstrate understanding of their character voices and Victorian language"
      },
      plenary: {
        id: "sherlock-lesson-8-plenary",
        title: "Authentic Voice Showcase",
        description: "Perform dialogue scenes and analyze how effectively they capture the characters' authentic voices",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "authentic character voice creation and dialogue effectiveness"
      }
    }
  },

  // Lesson 9: Plot Twists and Red Herrings - Interactive Exploration
  {
    lessonNumber: 9,
    title: "Misdirection and Revelation",
    phase: "Advanced Plot Techniques",
    learningObjective: "I can understand how plot twists and red herrings create suspense and surprise in detective fiction",
    weekDay: "Monday",
    template: "InteractiveExplorationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-9-starter",
        title: "Plot Twist Discovery Workshop",
        description: "Explore how authors use misdirection and surprise to create engaging and unpredictable mysteries",
        duration: "10 mins",
        type: "Interactive Exploration",
        activity_type: "starter",
        template: "InteractiveExplorationTemplate",
        exploration_focus: "Hands-on exploration of plot twist techniques and misdirection strategies",
        interactive_elements: [
          {
            element_type: 'scenario_analysis',
            title: 'Red Herring Investigation',
            description: 'Analyze how false clues mislead readers while maintaining fair play in mystery writing',
            materials: ['Red herring examples', 'Misdirection analysis templates', 'Fair play guidelines']
          },
          {
            element_type: 'collaborative_investigation',
            title: 'Plot Twist Engineering',
            description: 'Collaborate to design effective plot twists that surprise but satisfy readers',
            materials: ['Plot twist frameworks', 'Surprise element checklists', 'Reader satisfaction guides']
          }
        ]
      },
      main: {
        id: "sherlock-lesson-9-main",
        title: "Misdirection Mastery Workshop",
        description: "Create effective red herrings and plot twists that enhance mystery without unfairly misleading readers",
        duration: "40 mins",
        type: "Creative Application",
        activity_type: "main",
        template: "CreativeApplicationTemplate",
        creation_type: 'design_challenge',
        creation_brief: "Design plot twists and red herrings that create suspense while maintaining fair play for readers"
      },
      plenary: {
        id: "sherlock-lesson-9-plenary",
        title: "Plot Twist Effectiveness Showcase",
        description: "Present most effective plot twist and analyze how it creates surprise while maintaining story logic",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "plot twist effectiveness and narrative surprise techniques"
      }
    }
  },

  // Lesson 10: Language and Style - Scaffolded Practice
  {
    lessonNumber: 10,
    title: "Writing Like Conan Doyle",
    phase: "Author Style and Technique",
    learningObjective: "I can analyze and emulate Conan Doyle's writing style and narrative techniques",
    weekDay: "Thursday",
    template: "ScaffoldedPracticeTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-10-starter",
        title: "Doyle's Style Analysis",
        description: "Identify and analyze the distinctive features of Conan Doyle's writing style and narrative voice",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_questions: [
          "What makes Conan Doyle's writing style distinctive and recognizable?",
          "How does he create suspense through his narrative techniques?",
          "What Victorian language features appear in his writing?",
          "How does his style serve the detective fiction genre?"
        ]
      },
      main: {
        id: "sherlock-lesson-10-main",
        title: "Style Emulation Workshop",
        description: "Practice writing in Conan Doyle's style, mastering his techniques for creating atmosphere and suspense",
        duration: "40 mins",
        type: "Scaffolded Practice",
        activity_type: "main",
        template: "ScaffoldedPracticeTemplate",
        practice_type: 'guided_skill_development',
        skill_focus: "Emulating Conan Doyle's writing style and narrative techniques"
      },
      plenary: {
        id: "sherlock-lesson-10-plenary",
        title: "Style Mastery Showcase",
        description: "Present writing that best captures Doyle's style and analyze the techniques used",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "style emulation effectiveness and technique mastery"
      }
    }
  },

  // Lesson 11: Final Mystery Project - Creative Application
  {
    lessonNumber: 11,
    title: "The Case of the Missing Manuscript",
    phase: "Independent Creative Application",
    learningObjective: "I can create a complete detective story that demonstrates mastery of all learned techniques and conventions",
    weekDay: "Tuesday",
    template: "CreativeApplicationTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-11-starter",
        title: "Final Project Planning",
        description: "Plan a comprehensive detective story that showcases all learned skills and techniques",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_questions: [
          "How will you incorporate all the detective fiction elements we've studied?",
          "What unique mystery will showcase your creative and analytical skills?",
          "How will you balance familiar conventions with original creativity?",
          "What will make your detective story memorable and engaging?"
        ]
      },
      main: {
        id: "sherlock-lesson-11-main",
        title: "Complete Mystery Story Creation",
        description: "Write a complete detective story that demonstrates mastery of character, setting, plot, and style",
        duration: "40 mins",
        type: "Creative Application",
        activity_type: "main",
        template: "CreativeApplicationTemplate",
        creation_type: 'innovation_project',
        creation_brief: "Create a complete detective story that demonstrates mastery of all unit elements: character development, Victorian setting, deductive reasoning, plot structure, and authentic dialogue"
      },
      plenary: {
        id: "sherlock-lesson-11-plenary",
        title: "Master Detective Story Showcase",
        description: "Present complete detective story and analyze how it demonstrates mastery of all unit techniques",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "complete story mastery and technique integration"
      }
    }
  },

  // Lesson 12: Unit Reflection and Extension - Consolidation Connection
  {
    lessonNumber: 12,
    title: "The Legacy of Sherlock Holmes",
    phase: "Unit Culmination and Reflection",
    learningObjective: "I can reflect on my development as a detective fiction writer and connect Holmes's influence to modern mystery writing",
    weekDay: "Friday",
    template: "ConsolidationConnectionTemplate",
    activities: {
      starter: {
        id: "sherlock-lesson-12-starter",
        title: "Holmes's Influence Analysis",
        description: "Analyze how Sherlock Holmes influenced modern detective fiction and popular culture",
        duration: "10 mins",
        type: "Quick-fire Discussion",
        activity_type: "starter",
        template: "QuickFireDiscussionTemplate",
        discussion_questions: [
          "How has Sherlock Holmes influenced modern detective stories and TV shows?",
          "What elements from the original stories still appear in contemporary mysteries?",
          "Why do Holmes and Watson remain popular characters after 130+ years?",
          "How have detective fiction conventions evolved since Conan Doyle's time?"
        ]
      },
      main: {
        id: "sherlock-lesson-12-main",
        title: "Unit Reflection and Connection Workshop",
        description: "Reflect on learning journey and connect Sherlock Holmes techniques to broader writing and thinking skills",
        duration: "40 mins",
        type: "Consolidation Connection",
        activity_type: "main",
        template: "ConsolidationConnectionTemplate",
        key_insights: [
          "Detective fiction teaches systematic thinking and logical analysis that applies beyond literature",
          "Character partnerships like Holmes and Watson show how different strengths can complement each other",
          "Victorian setting demonstrates how historical context enhances narrative authenticity and atmosphere",
          "Deductive reasoning skills developed through detective fiction improve critical thinking in all subjects"
        ],
        unit_connections: [
          "Detective fiction analysis skills transfer to analyzing any narrative structure and character development",
          "Deductive reasoning techniques learned through Holmes apply to scientific method and mathematical problem-solving",
          "Victorian context understanding connects to history studies and cultural analysis across time periods",
          "Creative writing skills developed here enhance expression and communication in all academic areas"
        ]
      },
      plenary: {
        id: "sherlock-lesson-12-plenary",
        title: "Detective Fiction Legacy Showcase",
        description: "Present reflection on learning journey and demonstrate understanding of Holmes's lasting influence on literature and culture",
        duration: "10 mins",
        type: "Showcase Analysis",
        activity_type: "plenary",
        template: "ShowcaseAnalysisTemplate",
        showcase_focus: "unit reflection and cultural legacy understanding"
      }
    }
  }
];

// Enhanced activities for the lesson library
export const sherlockHolmesEnhancedActivities = [
  sherlockHolmesLesson1Activity,
  {
    id: 'sherlock-character-analysis',
    title: 'Holmes and Watson Character Partnership Analysis',
    description: 'Analyze the complementary relationship between Holmes and Watson and how their partnership drives detective fiction narratives',
    duration: '10 mins',
    type: 'discussion',
    activity_type: 'starter',
    subject: 'English',
    year_group: 'Year 9',
    dialogic_structure: 'Think-Pair-Share',
    created_at: new Date().toISOString(),
    keywords: ['character analysis', 'partnership', 'detective fiction', 'relationships', 'Victorian literature'],
    phase: 'Character Analysis and Relationships',
    unit_context: {
      title: 'Sherlock Holmes: Detective Fiction and Deductive Reasoning',
      overview: 'Explore detective fiction through character analysis, deductive reasoning, and Victorian context to develop analytical thinking and creative writing skills.',
      themes: [
        'Character Development and Relationships',
        'Deductive Reasoning and Logic',
        'Victorian Society and Context',
        'Narrative Structure and Pacing',
        'Evidence and Investigation',
        'Atmosphere and Setting'
      ]
    },
    details: {
      preparation: [
        'Students have read at least one Sherlock Holmes story',
        'Understanding of character analysis techniques',
        'Knowledge of Victorian social context',
        'Familiarity with detective fiction conventions'
      ],
      steps: [
        'Introduce the concept of character partnerships in literature',
        '**Think Phase (3 minutes):**',
        '• Consider what makes Holmes unique as a detective character',
        '• Think about Watson\'s role beyond just being a sidekick',
        '• Reflect on how their different skills complement each other',
        '**Pair Phase (4 minutes):**',
        '• Share observations about each character\'s strengths and weaknesses',
        '• Discuss how their partnership creates dramatic tension and resolution',
        '• Analyze specific examples from the stories you\'ve read',
        '**Share Phase (3 minutes):**',
        '• Present insights about the effectiveness of their partnership',
        '• Connect their relationship to other famous literary partnerships',
        '• Evaluate how their dynamic serves the detective fiction genre'
      ],
      tips: [
        'Encourage students to use specific textual evidence from the stories',
        'Help students see beyond surface-level character traits to deeper motivations',
        'Guide discussion toward how character relationships drive plot development',
        'Support connections between Victorian context and character behavior'
      ],
      differentiation: [
        'Provide character trait vocabulary banks for less confident students',
        'Offer relationship analysis frameworks for structured thinking',
        'Use visual character maps to support analysis',
        'Provide extension questions about literary partnerships for advanced students'
      ],
      assessment: [
        'Monitor understanding of character analysis techniques',
        'Assess ability to use textual evidence effectively',
        'Evaluate quality of insights about character relationships',
        'Track development of analytical discussion skills'
      ],
      success_criteria: [
        'Identify distinctive characteristics of both Holmes and Watson',
        'Analyze how their different skills create an effective partnership',
        'Use specific textual evidence to support character analysis',
        'Understand how character relationships drive detective fiction narratives'
      ],
      answers: {
        'What makes Holmes unique as a detective character?': 'Holmes combines scientific observation with logical deduction, has encyclopedic knowledge, uses unconventional methods, and possesses both brilliant intellect and human flaws that make him compelling.',
        'How does Watson support Holmes beyond being a sidekick?': 'Watson provides emotional grounding, represents the reader\'s perspective, asks clarifying questions, offers medical expertise, and serves as Holmes\'s moral compass and loyal friend.',
        'How do their different skills complement each other?': 'Holmes provides analytical brilliance and deductive reasoning while Watson offers practical wisdom, emotional intelligence, medical knowledge, and the ability to communicate with ordinary people.',
        'Why is their friendship important to the stories?': 'Their friendship humanizes Holmes, creates emotional stakes, provides opportunities for explanation and dialogue, and demonstrates how different strengths can work together to achieve greater success.'
      }
    }
  },
  {
    id: 'sherlock-deduction-game',
    title: 'Deductive Reasoning Challenge',
    description: 'Practice logical deduction and evidence analysis through interactive mystery-solving exercises',
    duration: '10 mins',
    type: 'game',
    activity_type: 'starter',
    subject: 'English',
    year_group: 'Year 9',
    dialogic_structure: 'Collaborative Problem Solving',
    created_at: new Date().toISOString(),
    keywords: ['deductive reasoning', 'logic', 'evidence analysis', 'problem solving', 'critical thinking'],
    phase: 'Logical Thinking and Analysis',
    unit_context: {
      title: 'Sherlock Holmes: Detective Fiction and Deductive Reasoning',
      overview: 'Develop logical thinking and analytical skills through detective fiction study and practical application of deductive reasoning techniques.',
      themes: [
        'Deductive Reasoning and Logic',
        'Evidence and Investigation',
        'Critical Thinking Development',
        'Problem-Solving Strategies'
      ]
    },
    details: {
      preparation: [
        'Understanding of basic logical reasoning principles',
        'Familiarity with Sherlock Holmes\'s methods',
        'Knowledge of evidence types and analysis',
        'Experience with collaborative problem-solving'
      ],
      steps: [
        'Present a series of observation-based deduction challenges',
        '**Setup Phase (2 minutes):**',
        '• Form teams of 3-4 students for collaborative deduction',
        '• Explain the rules: observe carefully, reason logically, justify conclusions',
        '**Challenge Rounds (6 minutes):**',
        '• Round 1: Simple observations (muddy shoes = recent outdoor activity)',
        '• Round 2: Multiple clues (ink stains + medical bag + tired appearance = busy doctor)',
        '• Round 3: Complex scenarios requiring multiple logical steps',
        '**Deduction Showcase (2 minutes):**',
        '• Teams present their most impressive deduction',
        '• Explain the logical reasoning process used',
        '• Evaluate the strength of evidence and conclusions'
      ],
      tips: [
        'Encourage systematic observation before jumping to conclusions',
        'Model the logical reasoning process with clear examples',
        'Help students distinguish between observation and inference',
        'Celebrate creative but logical thinking approaches'
      ],
      differentiation: [
        'Provide observation checklists for students who need structure',
        'Offer simpler scenarios for students developing logical thinking skills',
        'Include visual aids and diagrams to support reasoning',
        'Provide extension challenges with multiple possible solutions'
      ],
      assessment: [
        'Monitor systematic approach to evidence analysis',
        'Assess quality of logical reasoning and justification',
        'Evaluate ability to distinguish between facts and inferences',
        'Track development of collaborative problem-solving skills'
      ],
      success_criteria: [
        'Observe details carefully and systematically',
        'Apply logical reasoning to draw valid conclusions',
        'Distinguish between direct observation and inference',
        'Justify deductions with clear evidence and reasoning'
      ],
      answers: {
        'How do you make a good deduction?': 'Start with careful observation of all available evidence, consider multiple possible explanations, apply logical reasoning to eliminate unlikely possibilities, and choose the conclusion best supported by evidence.',
        'What\'s the difference between observation and inference?': 'Observation is what you can directly see, hear, or detect (muddy shoes). Inference is what you conclude based on observations (the person walked through mud recently).',
        'How do you avoid jumping to wrong conclusions?': 'Consider multiple possible explanations, look for additional evidence to support or contradict your theory, avoid assumptions based on stereotypes, and be willing to change your mind when new evidence appears.',
        'What makes evidence strong or weak?': 'Strong evidence is specific, verifiable, directly relevant to the question, and supports only one logical conclusion. Weak evidence is vague, circumstantial, or could support multiple different conclusions.'
      }
    }
  },
  {
    id: 'sherlock-victorian-setting',
    title: 'Victorian London Atmosphere Creation',
    description: 'Create atmospheric descriptions of Victorian London that enhance mystery and support detective fiction narratives',
    duration: '40 mins',
    type: 'creative',
    activity_type: 'main',
    subject: 'English',
    year_group: 'Year 9',
    dialogic_structure: 'Collaborative Problem Solving',
    created_at: new Date().toISOString(),
    keywords: ['Victorian setting', 'atmosphere', 'historical context', 'descriptive writing', 'mystery enhancement'],
    phase: 'Historical Context and Atmosphere',
    unit_context: {
      title: 'Sherlock Holmes: Detective Fiction and Deductive Reasoning',
      overview: 'Understand how Victorian London provides the perfect backdrop for detective fiction and learn to create atmospheric settings that enhance mystery narratives.',
      themes: [
        'Victorian Society and Context',
        'Atmosphere and Setting',
        'Historical Context Integration',
        'Descriptive Writing Techniques'
      ]
    },
    details: {
      preparation: [
        'Knowledge of Victorian London\'s social structure and daily life',
        'Understanding of how setting influences narrative mood',
        'Familiarity with descriptive writing techniques',
        'Basic knowledge of Sherlock Holmes stories and their settings'
      ],
      steps: [
        'Explore how Victorian London creates the perfect atmosphere for detective fiction',
        '**Historical Context Analysis (10 minutes):**',
        '• Examine photographs and descriptions of Victorian London',
        '• Identify elements that create mystery and intrigue (fog, gaslight, narrow streets)',
        '• Discuss how social conditions contribute to crime and detection',
        '**Atmospheric Writing Workshop (25 minutes):**',
        '• Practice describing Victorian settings using sensory details',
        '• Create descriptions that enhance mystery and tension',
        '• Focus on how environment reflects character emotions and plot developments',
        '**Peer Review and Refinement (5 minutes):**',
        '• Share atmospheric descriptions with partners',
        '• Provide feedback on effectiveness of mood creation',
        '• Refine descriptions based on peer suggestions'
      ],
      tips: [
        'Encourage use of all five senses in setting descriptions',
        'Help students connect historical details to emotional atmosphere',
        'Guide students to show how setting influences character behavior',
        'Support development of sophisticated vocabulary for atmosphere creation'
      ],
      differentiation: [
        'Provide Victorian vocabulary banks and historical context sheets',
        'Offer sentence starters for atmospheric description',
        'Use visual aids and historical images for inspiration',
        'Include extension tasks connecting to broader Victorian literature'
      ],
      assessment: [
        'Monitor effective use of historical context in writing',
        'Assess quality of atmospheric description and mood creation',
        'Evaluate understanding of setting\'s role in detective fiction',
        'Track development of descriptive writing skills'
      ],
      success_criteria: [
        'Create vivid descriptions of Victorian London settings',
        'Use historical context accurately to enhance atmosphere',
        'Demonstrate understanding of how setting supports mystery narratives',
        'Apply sophisticated vocabulary and descriptive techniques effectively'
      ],
      real_world_connections: [
        'Understanding how historical context shapes literature helps analyze any time period\'s cultural products',
        'Atmospheric writing skills enhance creative expression in all forms of storytelling',
        'Research and historical analysis skills transfer to history, social studies, and cultural studies',
        'Descriptive writing techniques improve communication and presentation skills across subjects'
      ]
    }
  }
];

// All Sherlock Holmes activities combined for easy access
export const allSherlockHolmesActivities = sherlockHolmesLessons.flatMap(lesson => [
  lesson.activities.starter,
  lesson.activities.main,
  lesson.activities.plenary
]);

// Export unit configuration for lesson library integration
export const sherlockHolmesUnitConfig = {
  unitInfo: sherlockHolmesUnitInfo,
  lessons: sherlockHolmesLessons,
  enhancedActivities: sherlockHolmesEnhancedActivities,
  totalActivities: allSherlockHolmesActivities.length,
  interactiveLessons: sherlockHolmesLessons.filter(lesson => 
    lesson.lessonNumber <= 6 // First 6 lessons have full interactive implementations
  ).length
};