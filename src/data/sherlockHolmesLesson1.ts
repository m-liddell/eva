// Sherlock Holmes Unit - Lesson 1: Character Detective Work
// Complete lesson content with interactive exploration and collaborative investigation

export const sherlockHolmesLesson1 = {
  // Basic Lesson Information
  lessonInfo: {
    subject: 'English',
    yearGroup: 'Year 7',
    lessonNumber: 1,
    unitTitle: 'Sherlock Holmes Short Stories',
    subjectTheme: 'Reading and Analysis',
    lessonsInUnit: 22,
    spelling: 'British English spelling'
  },

  // Core Lesson Content
  learningObjectives: {
    primary: 'I can investigate character traits and make predictions about Sherlock Holmes using textual clues and deductive reasoning.',
    secondary: 'I can work collaboratively to analyse character presentation in Victorian detective fiction.'
  },

  lessonDetails: {
    starterTitle: 'Detective Evidence Hunt',
    mainTitle: 'The Art of Character Investigation',
    plenaryTitle: 'Sherlock\'s Method Revealed',
    
    starterHookSummary: 'Students become detectives themselves, examining mysterious objects and images to make deductions about their owners. This mirrors Holmes\' observational skills and prepares students for character analysis through evidence-based reasoning. The tactile investigation creates immediate engagement while building the foundational skill of inference from evidence that they\'ll apply to textual analysis.',
    
    mainHookSummary: 'Collaborative investigation teams analyse different aspects of Holmes\' character presentation using specialist roles. Students engage with authentic Victorian text extracts, building understanding through peer dialogue and expert analysis. Each team becomes the class expert in one aspect of characterisation, creating interdependence and deeper learning through teaching others.',
    
    plenaryHookSummary: 'Students present their findings like Holmes presenting a case solution, synthesising their discoveries about character presentation methods and reflecting on their investigative process. The detective presentation format celebrates their expertise while consolidating learning through teaching others and building confidence for future analytical work.'
  },

  // Success Criteria
  successCriteria: {
    greenLevel: [
      'I can identify obvious character traits from explicit textual evidence with guided support',
      'I can make simple predictions about Holmes based on clear, direct clues from the text'
    ],
    amberLevel: [
      'I can analyse how Conan Doyle presents Holmes through multiple literary techniques working together',
      'I can make plausible inferences about character motivation from subtle textual clues and implications'
    ],
    redLevel: [
      'I can evaluate the effectiveness of Conan Doyle\'s character presentation methods for different purposes',
      'I can synthesise evidence from multiple sources to create sophisticated predictions about Holmes\' future behaviour'
    ]
  },

  // Activity Configurations
  starterActivity: {
    type: 'interactive_exploration',
    explorationFocus: 'Deductive reasoning through object analysis and mystery solving',
    interactiveElements: [
      {
        type: 'hands_on_activity',
        title: 'Mystery Object Investigation',
        description: 'Students examine mysterious objects and images, making deductions about their owners using observation skills and logical reasoning methods',
        materials: [
          'Victorian pocket watch with scratches and engraving',
          'Modern smartphone with specific apps visible',
          'Library books with bookmarks and margin notes'
        ]
      },
      {
        type: 'collaborative_investigation',
        title: 'Deduction Discussion Circle',
        description: 'Teams share observations and reasoning, building understanding of detective methodology through structured peer dialogue',
        materials: [
          'Discussion prompt cards',
          'Evidence recording templates',
          'Logical reasoning frameworks'
        ]
      }
    ]
  },

  mainActivity: {
    type: 'collaborative_investigation',
    specialistRoles: [
      'Physical Description Analyst',
      'Behaviour and Mannerism Expert',
      'Speech and Dialogue Specialist',
      'Setting and Context Investigator'
    ],
    investigationMaterials: {
      level1Foundation: [
        'Holmes stood tall and thin by the window. His eyes were sharp and bright. He wore a long coat and held a pipe.',
        'Holmes picked up the letter. He looked at it carefully. He smiled when he found a clue.',
        '\'This is simple,\' said Holmes to Watson. \'The answer is clear to me.\'',
        'Holmes lived in a messy room. Books were everywhere. Strange smells came from his experiments.',
        'Vocabulary bank: tall, thin, sharp, careful, messy, smart'
      ],
      level2Developing: [
        'Holmes\' lean frame dominated the doorway, his aquiline features sharp in the gaslight. His grey eyes missed nothing.',
        'With methodical precision, Holmes examined the evidence, his long fingers tracing patterns invisible to others.',
        '\'I perceive,\' Holmes announced with characteristic confidence, \'that our visitor has recently travelled from India.\'',
        'The cluttered study reflected its owner\'s priorities: intellectual pursuit over domestic comfort.',
        'Analysis guide: direct characterisation, indirect characterisation, dialogue, setting'
      ],
      level3Advanced: [
        'There was something almost predatory in Holmes\' stillness, as if he were a hawk studying its prey with supernatural intensity.',
        'His deductive process followed chains of logic so intricate that Watson could barely comprehend the connections between seemingly unrelated details.',
        'The subtle arrogance in Holmes\' tone suggested a mind that had grown weary of explaining obvious truths to inferior intellects.',
        'His unconventional lifestyle marked him as both invaluable to society and fundamentally apart from it.',
        'Advanced framework: authorial intent, reader response, Victorian context, literary conventions'
      ]
    }
  },

  plenaryActivity: {
    type: 'showcase_and_analysis',
    showcaseFocus: 'Character analysis findings and prediction validation through expert presentations',
    evaluationCriteria: [
      'Use of specific textual evidence to support analytical claims',
      'Quality of deductive reasoning connecting evidence to conclusions',
      'Understanding of Victorian social and historical context',
      'Sophistication of character trait identification and interpretation',
      'Effectiveness of collaborative investigation methods and peer learning'
    ]
  },

  // Specialist Role Details
  specialistRoles: {
    physicalDescriptionAnalyst: {
      name: 'Physical Description Analyst',
      description: 'Examines how appearance reveals character and social status',
      focusAreas: [
        'Clothing choices and their social significance in Victorian society',
        'Physical features and their symbolic or psychological implications',
        'Victorian dress codes and class communication',
        'Body language descriptions and posture as character indicators',
        'Symbolic use of physical attributes to suggest personality traits'
      ],
      sentenceStarters: [
        'Conan Doyle presents Holmes\' appearance as... which suggests he is...',
        'The description of Holmes\' [feature] implies that he...',
        'Victorian readers would have recognised this appearance as indicating...',
        'The physical detail that stands out is... because it reveals...',
        'This appearance choice suggests Holmes\' character is... evidenced by...'
      ],
      exampleAnalysis: 'When Conan Doyle describes Holmes as \'lean and tall\' with \'sharp, penetrating eyes\', he establishes Holmes as physically imposing yet intellectual. The word \'penetrating\' suggests Holmes can see through deception, while \'lean\' implies discipline rather than self-indulgence.',
      keyConcepts: [
        'Victorian clothing signified social class, profession, and personal values to contemporary readers',
        'Physical descriptions in literature carry symbolic meaning beyond literal appearance',
        'First impressions in Victorian fiction established character roles and reader expectations immediately'
      ]
    },
    
    behaviourMannerismExpert: {
      name: 'Behaviour and Mannerism Expert',
      description: 'Analyses actions and habits for character insight and motivation',
      focusAreas: [
        'Repeated behaviours and their psychological significance',
        'Social interactions and Victorian etiquette adherence or rejection',
        'Problem-solving approaches and methodological preferences',
        'Emotional responses and self-control under pressure',
        'Professional habits revealing priorities and values'
      ],
      sentenceStarters: [
        'Holmes\' behaviour when [situation] demonstrates his...',
        'The way Holmes [action] reveals his attitude towards...',
        'This mannerism is significant because it shows Holmes...',
        'Conan Doyle shows Holmes\' character through his habit of...',
        'The repetition of this behaviour suggests Holmes...'
      ],
      exampleAnalysis: 'Holmes\' habit of making rapid deductions and explaining his reasoning reveals both intellectual confidence and compulsive need to demonstrate superiority. This shows his brilliance but also social awkwardness and potential isolation.',
      keyConcepts: [
        'Character habits and routines reveal underlying personality traits and core values',
        'Victorian gentlemen followed specific social codes that characters could embrace or reject',
        'Professional behaviour indicates character priorities and moral compass orientation'
      ]
    },
    
    speechDialogueSpecialist: {
      name: 'Speech and Dialogue Specialist',
      description: 'Examines how characters reveal themselves through language choices and patterns',
      focusAreas: [
        'Vocabulary choices indicating education level and social background',
        'Tone and attitude in conversation revealing personality',
        'Treatment of different social classes through speech patterns',
        'Technical language use to include or exclude others',
        'Emotional expression or suppression through dialogue choices'
      ],
      sentenceStarters: [
        'Holmes\' choice of words when discussing... shows his...',
        'The way Holmes addresses [character] indicates his...',
        'Conan Doyle uses Holmes\' dialogue to reveal...',
        'Holmes\' tone when explaining... suggests he...',
        'The contrast in Holmes\' speech to different people demonstrates...'
      ],
      exampleAnalysis: 'When Holmes uses scientific terminology and Latin phrases, Conan Doyle establishes his education while showing his tendency to intellectually intimidate others. His formal vocabulary creates distance from less educated characters.',
      keyConcepts: [
        'Victorian speech patterns and vocabulary indicated social background and education level',
        'Dialogue reveals power dynamics and relationship hierarchies between characters',
        'Technical language demonstrates expertise while potentially excluding or intimidating others'
      ]
    },
    
    settingContextInvestigator: {
      name: 'Setting and Context Investigator',
      description: 'Explores how environment reflects and shapes character development',
      focusAreas: [
        'Living space organisation and decoration as personality indicators',
        'Location choices and activities revealing character preferences',
        'Relationship with Victorian London society and conventions',
        'Professional environment preferences and their significance',
        'Social class indicators in settings and character presentation impact'
      ],
      sentenceStarters: [
        'Holmes\' environment reflects his priorities because...',
        'The setting details Conan Doyle includes suggest Holmes...',
        'Holmes\' choice of [location/activity] shows his...',
        'The contrast between Holmes and his surroundings reveals...',
        'Victorian society would view this setting as... making Holmes appear...'
      ],
      exampleAnalysis: 'Holmes\' cluttered, chemical-stained study filled with scientific equipment reveals his prioritising intellectual pursuits over social conventions or domestic comfort. The chaos suggests brilliance operating outside normal expectations.',
      keyConcepts: [
        'Victorian domestic spaces reflected personal values and social aspirations clearly',
        'Social settings indicate character relationships and class positioning within society',
        'Professional environments reveal character priorities and life choice motivations'
      ]
    }
  },

  // Support Materials
  supportMaterials: {
    generalSentenceStarters: {
      foundationLevel: [
        'I think Holmes is... because the text says...',
        'This tells me that Holmes... because...',
        'Holmes seems like someone who... evidenced by...',
        'From this description, I can see Holmes is... which means...',
        'This makes me predict Holmes will... because...',
        'The evidence for this is when...'
      ],
      developingLevel: [
        'Conan Doyle presents Holmes as... through his use of...',
        'This suggests Holmes\' character is... which influences...',
        'The evidence I\'ve analysed indicates Holmes...',
        'Based on these clues, I can infer Holmes...',
        'This characterisation technique reveals...',
        'Making connections between details shows Holmes...'
      ],
      secureLevel: [
        'Conan Doyle\'s sophisticated presentation demonstrates...',
        'The subtle implications of this evidence suggest...',
        'Synthesising these details reveals the complexity...',
        'This layered portrayal indicates Doyle\'s intention...',
        'The characterisation techniques work together to...',
        'Evaluating this evidence in Victorian context shows...'
      ]
    },

    keyVocabulary: {
      generalTerms: ['deduction', 'inference', 'observation'],
      subjectSpecific: ['characterisation', 'Victorian context', 'detective fiction', 'social class', 'gentleman detective', 'forensic reasoning']
    },

    vocabularyDefinitions: {
      deduction: 'Drawing logical conclusions from available evidence using systematic reasoning',
      characterisation: 'The way authors present and develop characters through description, actions, and speech',
      inference: 'A conclusion reached through evidence and reasoning rather than direct statements',
      victorianContext: 'The social and historical background of Britain during Queen Victoria\'s reign (1837-1901)',
      forensicReasoning: 'Using scientific methods and logical analysis to solve problems or mysteries',
      gentlemanDetective: 'A Victorian character who solves crimes as intellectual pursuit rather than profession'
    }
  },

  // MiniAssistant Responses
  miniAssistantResponses: {
    starterSupport: {
      generalGuidance: 'Focus on observable details rather than guessing. Look for evidence that tells you about the owner\'s lifestyle, interests, or personality. Good detectives make logical connections between what they see and what it means.',
      activitySpecific: 'Try the \'because\' test: \'I think this person is... because I can see...\' This connects your observations to logical conclusions and strengthens your reasoning skills.'
    },
    
    mainSupport: {
      generalGuidance: 'Authors make deliberate choices about character presentation. Every detail Doyle includes about Holmes serves a purpose. Look for patterns in how Holmes is described across different situations.',
      roleSpecific: 'Focus on your specialist area but listen to other teams. Character analysis works best when different types of evidence combine. Your expertise contributes to everyone\'s understanding.',
      stageSpecific: 'Start with direct textual statements, then move to implications. Ask: what would Victorian readers think? How does this compare to modern expectations of detectives?'
    },
    
    plenarySupport: {
      generalGuidance: 'Strong analysis uses specific textual evidence to support points. Explain not just what you found, but why it\'s significant for understanding Holmes and how it affects readers.',
      reflectionSupport: 'Compare your predictions with your discoveries about Holmes. What does this teach you about how Doyle builds character mystery and reader engagement?',
      analysisSupport: 'Consider how different specialist findings connect. How do Holmes\' appearance, behaviour, speech, and environment create a complete, believable character?'
    }
  },

  // Discussion Questions
  discussionQuestions: {
    starterQuestions: [
      'What can you deduce about someone from their possessions? Give specific examples.',
      'How do we judge people in real life? How might this be similar to reading characters?',
      'What makes someone mysterious or intriguing? How might authors create this effect?'
    ],
    mainQuestions: [
      'Why might Doyle present Holmes this way? What effect does it have on readers?',
      'How does Holmes compare to modern TV detectives? What\'s remained the same?',
      'What would Victorian readers think about Holmes? How might reactions differ today?'
    ],
    plenaryQuestions: [
      'Which character presentation aspect was most effective? Why did it work?',
      'How has your character analysis understanding developed through collaborative investigation?',
      'What predictions can you make about Holmes in future stories?'
    ]
  },

  // Differentiation Strategies
  differentiationStrategies: {
    forSupport: {
      starter: [
        'Provide objects with clear, obvious clues leading to straightforward deductions',
        'Offer sentence starters and question frameworks for logical connections',
        'Allow pair work before larger group sharing'
      ],
      main: [
        'Use foundation text extracts with clearer character indicators',
        'Provide vocabulary banks with definitions and visual supports',
        'Offer structured note-taking templates with guided questions'
      ],
      plenary: [
        'Support students to present one key finding with help',
        'Provide response frames for evaluation and reflection',
        'Enable group rather than individual presentations'
      ]
    },
    
    forChallenge: {
      starter: [
        'Provide objects with subtle, contradictory clues requiring deeper analysis',
        'Ask for multiple interpretations and likelihood evaluation'
      ],
      main: [
        'Include advanced extracts with complex techniques and vocabulary',
        'Encourage analysis of authorial purpose and historical context'
      ],
      plenary: [
        'Request evaluation of characterisation method effectiveness',
        'Challenge sophisticated predictions about character development'
      ]
    },
    
    forEALStudents: {
      starter: [
        'Provide visual aids and images alongside verbal instructions',
        'Allow home language use for initial discussion'
      ],
      main: [
        'Supply Victorian context background with visual supports',
        'Provide vocabulary with visual representations or translations'
      ],
      plenary: [
        'Enable visual presentations instead of purely verbal ones',
        'Allow extra processing time for response formulation'
      ]
    }
  },

  // Assessment Focus
  assessmentFocus: {
    formativeAssessment: {
      starterIndicators: [
        'Logical connections between evidence and conclusions',
        'Quality of observation skills and detail attention'
      ],
      mainIndicators: [
        'Appropriate textual evidence use in character analysis',
        'Understanding of literary techniques for character presentation'
      ],
      plenaryIndicators: [
        'Ability to synthesise findings from multiple sources',
        'Quality of predictions based on character evidence'
      ]
    },
    
    successIndicators: {
      engagement: [
        'Active participation in detective role-play and discussions',
        'Enthusiastic discussion about character discoveries'
      ],
      learning: [
        'Understanding of characterisation techniques and effects',
        'Evidence-based predictions about Holmes\' behaviour'
      ],
      skillDevelopment: [
        'Improved analytical reasoning and inference skills',
        'Enhanced collaborative investigation abilities'
      ]
    }
  },

  // Theme-Specific Content
  themeSpecificContent: {
    visualElements: {
      backgroundTheme: 'Victorian detective atmosphere with dark blues, browns, gaslight yellows',
      colorScheme: 'Detective navy, parchment cream, magnifying glass gold, leather brown',
      iconography: 'Magnifying glasses, pipes, deerstalker hats, pocket watches, gas lamps'
    },
    
    contentExamples: {
      themeAlignedExamples: [
        'Victorian calling card as character indicator',
        '221B Baker Street study revealing priorities',
        'Scientific equipment showing modern investigation approach'
      ],
      culturalConnections: [
        'Modern detective shows\' debt to Holmes archetype',
        'Victorian scientific advances influencing detective fiction'
      ]
    }
  },

  // Timing and Structure
  lessonTiming: {
    starterDuration: 10,
    mainDuration: 40,
    plenaryDuration: 10,
    
    starterBreakdown: {
      phase1: '5 minutes - Individual object examination and deduction recording',
      phase2: '3 minutes - Pair discussion and reasoning sharing',
      phase3: '2 minutes - Class discussion linking to Holmes analysis'
    },
    
    mainBreakdown: {
      phase1: '10 minutes - Role assignment, text distribution, individual investigation',
      phase2: '20 minutes - Collaborative analysis, evidence gathering, peer discussion',
      phase3: '10 minutes - Cross-team sharing, findings synthesis, presentation preparation'
    },
    
    plenaryBreakdown: {
      phase1: '5 minutes - Specialist team presentations of key insights',
      phase2: '5 minutes - Reflection on process and prediction formulation'
    }
  },

  // Resources and Materials
  resourcesMaterials: {
    digitalRequirements: [
      'Victorian London images and historical maps',
      'Audio extracts from Holmes story readings',
      'Interactive character analysis templates'
    ],
    
    physicalMaterials: [
      'Victorian object images/replicas: watches, hats, magnifying glasses',
      'Differentiated text extract booklets with vocabulary support',
      'Specialist role badges and task guidance sheets'
    ],
    
    backupMaterials: [
      'Character analysis sheets with structured questions',
      'Alternative extracts for different reading levels',
      'Visual character trait cards for additional support'
    ]
  },

  // Lesson Connections
  lessonConnections: {
    priorLearning: 'Builds on basic character description and inference skills from previous narrative units',
    futureLearning: 'Prepares for deeper character analysis and mystery-solving in subsequent lessons',
    crossCurricular: 'Links to History (Victorian society), Science (observation, reasoning), Drama (character voice)',
    realWorldApplications: 'Develops critical thinking for media literacy, problem-solving, evidence-based reasoning'
  },

  // Reflection Notes
  reflectionNotes: {
    whyThisMatters: 'Character analysis develops sophisticated reading skills while building collaborative investigation abilities essential for academic success',
    learningImpact: 'Students gain transferable skills in evidence-based reasoning and analytical communication serving all subjects',
    communityBuilding: 'Specialist roles create interdependence and respect for different analytical perspectives',
    metacognitiveElements: 'Students reflect on reasoning processes and learn to evaluate evidence quality'
  },

  bottomReflection: 'This lesson transforms students into literary detectives, developing analytical skills through collaborative investigation while building engagement with classic literature through active, dialogic learning celebrating both individual expertise and collective discovery.'
};

// Enhanced activity for the lesson library
export const sherlockHolmesLesson1Activity = {
  id: 'sherlock-lesson-1-character-detective-work',
  title: 'Character Detective Work: Investigating Sherlock Holmes',
  description: 'Students become literary detectives, using collaborative investigation to analyse how Conan Doyle presents Holmes through appearance, behaviour, speech, and setting',
  duration: '60 mins',
  type: 'collaborative investigation',
  activity_type: 'main',
  subject: 'English',
  year_group: 'Year 7',
  dialogic_structure: 'Collaborative Problem Solving',
  created_at: new Date().toISOString(),
  keywords: ['character analysis', 'detective fiction', 'Victorian literature', 'collaborative investigation', 'textual evidence'],
  phase: 'Detective Fiction Foundation',
  unit_context: {
    title: 'Sherlock Holmes Short Stories',
    overview: 'Explore detective fiction through character analysis, deductive reasoning, and Victorian context to develop analytical thinking and creative writing skills.',
    themes: [
      'Character Development and Analysis',
      'Deductive Reasoning and Logic',
      'Victorian Society and Context',
      'Detective Fiction Conventions',
      'Evidence-Based Analysis',
      'Collaborative Investigation'
    ]
  },
  details: {
    preparation: [
      'Students have basic understanding of character description techniques',
      'Familiarity with inference and evidence-based reasoning',
      'Introduction to Victorian historical context',
      'Experience with collaborative group work and discussion'
    ],
    steps: [
      'Transform students into literary detectives investigating character presentation',
      '**Phase 1 - Detective Training (10 minutes):**',
      '• Assign specialist investigation roles to teams of 4-5 students',
      '• Distribute differentiated text extracts based on reading levels',
      '• Explain investigation focus areas and evidence-gathering methods',
      '**Phase 2 - Collaborative Investigation (20 minutes):**',
      '• Teams analyse texts from their specialist perspective',
      '• Gather evidence about Holmes\' character using role-specific frameworks',
      '• Record findings and prepare to teach other teams their discoveries',
      '**Phase 3 - Expert Teaching Exchange (10 minutes):**',
      '• Each specialist team teaches their findings to other teams',
      '• Students record learning from all specialist perspectives',
      '• Synthesise complete character analysis from multiple viewpoints'
    ],
    tips: [
      'Encourage students to use specific textual evidence in their analysis',
      'Help teams see connections between different aspects of character presentation',
      'Support development of analytical vocabulary and reasoning skills',
      'Facilitate respectful peer teaching and active listening'
    ],
    differentiation: [
      'Provide foundation, developing, and advanced text extracts for different reading levels',
      'Offer vocabulary banks and sentence starters for analytical writing',
      'Use visual aids and character analysis templates for additional support',
      'Include extension activities connecting to modern detective fiction'
    ],
    assessment: [
      'Monitor quality of textual evidence use in character analysis',
      'Assess understanding of characterisation techniques and their effects',
      'Evaluate collaborative investigation skills and peer teaching effectiveness',
      'Track development of analytical reasoning and inference abilities'
    ],
    success_criteria: [
      'Use specific textual evidence to support character analysis claims',
      'Understand how different literary techniques reveal character traits',
      'Collaborate effectively to investigate and teach character analysis',
      'Make logical predictions about Holmes based on evidence gathered'
    ],
    real_world_connections: [
      'Character analysis skills transfer to understanding people in real-life situations',
      'Evidence-based reasoning applies to scientific method and critical thinking',
      'Collaborative investigation mirrors professional teamwork and research methods',
      'Victorian context understanding enhances historical and cultural literacy'
    ],
    answers: {
      'How do I analyse character effectively?': 'Look for patterns in how the character is described, what they say and do, how others react to them, and what their environment reveals. Use specific quotes as evidence for your conclusions.',
      'What should I focus on as Physical Description Analyst?': 'Examine clothing, physical features, posture, and appearance details. Consider what these would have meant to Victorian readers and how they establish character traits.',
      'How do I work effectively in my specialist role?': 'Become the class expert in your area, gather strong evidence, prepare to teach others clearly, and listen actively when other specialists share their findings.',
      'What makes a good character prediction?': 'Base predictions on evidence you\'ve gathered, consider multiple possibilities, explain your reasoning clearly, and connect to what you know about the character and Victorian context.'
    }
  }
};