import type { ResultProfile } from './resultProfiles';

export type ResultProfileTranslation = Pick<
  ResultProfile,
  'profile' | 'label' | 'adult' | 'kids'
>;

export const resultProfilesEn: ResultProfileTranslation[] = [
  // SINGLE
  {
    profile: 'vision',
    label: 'The Visionary',
    adult: {
      insight:
        'You perform at your best when you have a clear life purpose. Having a defined direction helps you endure long processes and sustained pressure.',
      details: [
        'The Vision type tends to be choleric: decisive, quick to make decisions, and uncomfortable staying in the comfort zone. They are ambitious, growth-oriented, and focused on results, direction, and achievement.',
        'The Vision mindset is future-oriented. They connect today’s actions with long-term goals and feel most alive when pursuing clear targets.',
        'They are not indifferent to others, but they prioritize purpose. When vision is combined with meaning, they can grow into transformative leaders.',
      ],
      goodFuels: [
        'Clear and measurable goals',
        'A clear picture of their ideal future self',
        'Dreams they want to realize',
      ],
      badFuels: [
        'Excessive praise feels empty',
        'Threats trigger resistance',
        'Rules without purpose feel meaningless',
      ],
      suggestions: [
        'Help them build a healthy vision',
        'Give them space to make decisions',
        'Avoid excessive control',
      ],
      strength: [
        'Highly goal-focused',
        'Resilient under long-term pressure',
        'Natural leader',
        'Fast-moving and progressive',
      ],
      weakness: [
        'Less able to enjoy the process',
        'Can be stubborn',
        'Frustrated by slow progress',
        'Tends to over-pursue targets',
      ],
      opportunity: [
        'Strong leadership and driving potential',
        'Well-suited for strategy and management',
        'Can become a role model for others',
        'High impact when guided by meaning',
      ],
      threat: [
        'Burnout from constant goal pursuit',
        'Decreasing empathy',
        'Midlife meaning crisis',
        'Relationship conflicts due to result fixation',
      ],
    },
    kids: {
      insight:
        'You feel most excited when you know what you want to become. Having goals makes you strong and helps you not give up easily.',
      details: [
        'Vision-oriented children are usually brave, quick to decide, and dislike staying in one place. They enjoy challenges, want to move forward, and often take the lead during play or learning.',
        'Their mindset looks ahead. They enjoy having targets, knowing the next steps, and feel motivated when working toward clear goals.',
        'They do care about friends, but focus more on direction and results. With positive goals, they can become leaders who bring change.',
      ],
      goodFuels: [
        'Clear goals',
        'A picture of their future self',
        'Dreams they want to achieve',
      ],
      badFuels: [
        'Too much praise feels empty',
        'Threats trigger resistance',
        'Rules without purpose cause boredom',
      ],
      suggestions: [
        'Help define small, achievable goals',
        'Give opportunities to choose',
        'Avoid excessive restriction',
      ],
      strength: [
        'Goal-oriented',
        'Resilient in facing challenges',
        'Brave in leadership',
        'Quick to take action',
      ],
      weakness: [
        'Impatient with the process',
        'Sometimes stubborn',
        'Gets annoyed by delays',
        'Overly focused on winning',
      ],
      opportunity: [
        'Potential to become a strong leader',
        'Well-suited for guiding roles',
        'Can become a role model among peers',
        'High impact when goals are positive',
      ],
      threat: [
        'Exhaustion from constant goal chasing',
        'Low emotional sensitivity',
        'Confusion when losing direction',
        'Conflicts due to desire to win',
      ],
    },
  },
  {
    profile: 'meaning',
    label: 'The Guardian',
    adult: {
      insight:
        'You move most strongly when you feel that what you do has meaning. Meaning helps you stay consistent and emotionally grounded.',
      details: [
        'The Meaning type tends to be phlegmatic: calm, stable, and empathetic. They avoid haste, value harmony, and often act as quiet stabilizers within groups.',
        'Their mindset focuses on values and impact. They ask whether something is right, good, and beneficial—not just successful or fast.',
        'They deeply care about people and relationships. With a strong sense of meaning, they become guardians of values and moral support for their environment.',
      ],
      goodFuels: [
        'Feeling needed',
        'Understanding the impact of their actions',
        'Values aligned with their conscience',
      ],
      badFuels: [
        'Pressure and threats',
        'Empty targets without values',
        'Aggressive competition',
      ],
      suggestions: [
        'Connect tasks to real impact',
        'Assign meaningful roles',
        'Appreciate their consistency',
      ],
      strength: [
        'High empathy',
        'Stable and consistent',
        'Maintains harmony',
        'Trusted by many',
      ],
      weakness: [
        'Lack of assertiveness',
        'Difficulty saying no',
        'Overly self-sacrificing',
        'Slow to act',
      ],
      opportunity: [
        'Guardian of values and culture',
        'Well-suited for supportive roles',
        'Long-term team stabilizer',
        'Strong impact through example',
      ],
      threat: [
        'Being taken advantage of',
        'Neglecting personal needs',
        'Stuck in the comfort zone',
        'Loss of personal direction',
      ],
    },
    kids: {
      insight:
        'You feel most excited when you feel useful. Doing good things makes you feel calm and comfortable.',
      details: [
        'Meaning-oriented children are usually gentle, caring, and helpful. They avoid conflict and often become calming friends.',
        'Their mindset focuses on whether something is good or helpful. They enjoy activities that benefit others.',
        'They care deeply about friends and emotions. With proper guidance, they grow into children with strong values and positive influence.',
      ],
      goodFuels: [
        'Feeling needed',
        'Knowing the benefit of their actions',
        'Values they believe are right',
      ],
      badFuels: [
        'Being scolded or pressured',
        'Targets without meaning',
        'Harsh competition',
      ],
      suggestions: [
        'Explain the purpose of tasks',
        'Give helping roles',
        'Appreciate sincerity',
      ],
      strength: [
        'Caring',
        'Patient and stable',
        'Trustworthy',
        'Compassionate',
      ],
      weakness: [
        'Difficulty refusing others',
        'Often gives in',
        'Slow to start',
        'Avoids conflict',
      ],
      opportunity: [
        'Calming companion',
        'Guardian of class values',
        'Group stabilizer',
        'Strong impact through kindness',
      ],
      threat: [
        'Being taken advantage of by peers',
        'Forgetting personal needs',
        'Becoming too comfortable',
        'Confusion when making choices',
      ],
    },
  },
  {
    profile: 'validation',
    label: 'The Influencer',
    adult: {
      insight:
        'You perform best when your efforts are recognized. Appreciation gives you the confidence to show up and continue growing.',
      details: [
        'The Validation type tends to be sanguine: expressive, warm, and socially engaging. They bring positive energy and enliven social environments.',
        'Their mindset focuses on connection and response. They are motivated when they feel seen, heard, and acknowledged.',
        'They have strong potential as social drivers. With proper direction, appreciation can become motivation for positive impact.',
      ],
      goodFuels: [
        'Genuine appreciation',
        'Positive feedback',
        'Feeling accepted and valued',
      ],
      badFuels: [
        'Prolonged neglect',
        'Cold criticism without empathy',
        'Overly rigid environments',
      ],
      suggestions: [
        'Offer sincere recognition',
        'Guide toward larger purposes',
        'Build healthy self-confidence',
      ],
      strength: [
        'Communicative and expressive',
        'Strong relationship-building skills',
        'Brings positive energy',
        'Highly adaptable',
      ],
      weakness: [
        'Sensitive to feedback',
        'Easily distracted',
        'Emotionally dependent',
        'Strongly influenced by mood',
      ],
      opportunity: [
        'Community motivator',
        'Well-suited for public-facing roles',
        'Connector between individuals',
        'Strong impact through inspiration',
      ],
      threat: [
        'Self-doubt when support fades',
        'Overdependence on external validation',
        'Suppressed potential',
        'Loss of long-term direction',
      ],
    },
    kids: {
      insight:
        'You feel most excited when you are appreciated. Attention builds your confidence and courage to try new things.',
      details: [
        'Validation-oriented children are cheerful, active, and socially friendly. They enjoy sharing stories and energizing the atmosphere.',
        'They thrive on quick responses and encouragement. Recognition boosts their motivation.',
        'They have strong potential to spread positivity. With guidance, they grow into confident and caring individuals.',
      ],
      goodFuels: ['Sincere praise', 'Support from others', 'Feeling accepted'],
      badFuels: [
        'Being ignored for too long',
        'Correction without empathy',
        'Rigid environments',
      ],
      suggestions: [
        'Appreciate small efforts',
        'Encourage shared roles',
        'Build healthy confidence',
      ],
      strength: [
        'Cheerful and expressive',
        'Socially skilled',
        'Confident in performing',
        'Quick to feel motivated',
      ],
      weakness: [
        'Emotionally sensitive',
        'Difficulty sustaining focus',
        'Needs reassurance',
        'Mood-dependent',
      ],
      opportunity: [
        'Mood booster for groups',
        'Peer connector',
        'Source of enthusiasm',
        'Positive influence through example',
      ],
      threat: [
        'Declining self-confidence',
        'Dependence on approval',
        'Suppressed potential',
        'Loss of direction',
      ],
    },
  },
  {
    profile: 'fear',
    label: 'The Architect',
    adult: {
      insight:
        'You function most steadily when you feel safe and clear about expectations. Certainty helps you stay organized, careful, and consistent.',
      details: [
        'The Fear type tends to be melancholic: structured, cautious, and responsible. They pay attention to details, assess risks, and aim to do things correctly.',
        'Their mindset focuses on safety and clarity. They perform best when rules are clear, expectations are defined, and consequences are understood early.',
        'They are not fearful, but guardians of quality. With proper guidance, they become reliable pillars of structured systems.',
      ],
      goodFuels: [
        'Clear rules',
        'Structure and certainty',
        'Measurable standards',
      ],
      badFuels: [
        'Unclear direction',
        'Sudden changes',
        'Pressure without guidance',
      ],
      suggestions: [
        'Clarify expectations from the start',
        'Provide step-by-step guidance',
        'Build confidence gradually',
      ],
      strength: [
        'Detail-oriented and organized',
        'High sense of responsibility',
        'Quality-focused',
        'Consistent in execution',
      ],
      weakness: [
        'Prone to anxiety',
        'Reluctant to try new things',
        'Overly perfectionistic',
        'Slow decision-making',
      ],
      opportunity: [
        'System and quality guardian',
        'Well-suited for operational roles',
        'Stable team supporter',
        'Long-term reliability',
      ],
      threat: [
        'Excessive overthinking',
        'Fear of taking action',
        'Prolonged stress',
        'Trapped in the comfort zone',
      ],
    },
    kids: {
      insight:
        'You feel calmest when everything is clear. A sense of safety helps you confidently complete tasks.',
      details: [
        'Fear-oriented children are usually neat, rule-abiding, and cautious. They want to do things correctly and dislike making mistakes.',
        'They prefer clarity and structure. Clear instructions and expectations help them feel comfortable.',
        'They are actually reliable children. With gentle guidance, they grow into confident individuals.',
      ],
      goodFuels: ['Clear rules', 'Definite guidance', 'Consistent examples'],
      badFuels: [
        'Sudden changes',
        'Being scolded without explanation',
        'Confusing situations',
      ],
      suggestions: [
        'Explain steps patiently',
        'Provide concrete examples',
        'Build courage gradually',
      ],
      strength: [
        'Neat and orderly',
        'Responsible',
        'Careful in tasks',
        'Dependable',
      ],
      weakness: [
        'Fear of mistakes',
        'Reluctant to try',
        'Easily worried',
        'Needs more time',
      ],
      opportunity: [
        'Order keeper',
        'Reliable helper',
        'Classroom rule enforcer',
        'Trusted by teachers',
      ],
      threat: [
        'Fear of taking steps',
        'Excessive anxiety',
        'Hidden potential',
        'Over-comfort dependency',
      ],
    },
  },

  // HYBRID
  {
    profile: 'vision+meaning',
    label: 'The Idealist',
    adult: {
      insight:
        'You perform at your best when your life goals align with the values you deeply believe in. Direction and meaning give you long-term resilience.',
      details: [
        'The Vision + Meaning type combines choleric and phlegmatic traits. They are firm in direction, calm in attitude, and able to lead without dominating.',
        'Their mindset operates with long-term vision grounded in values. They want progress, but only when it feels right and meaningful.',
        'They have strong potential as leaders with integrity. When vision and values align, they can drive healthy and sustainable change.',
      ],
      goodFuels: [
        'Clear long-term goals',
        'Personally held values',
        'Real impact on others',
      ],
      badFuels: [
        'Big targets without meaning',
        'Pressure that conflicts with values',
        'Unclear life direction',
      ],
      suggestions: [
        'Integrate vision with values',
        'Provide space for reflection and direction',
        'Entrust meaningful responsibilities',
      ],
      strength: [
        'Visionary and principled',
        'Calm under pressure',
        'Leader with integrity',
        'Long-term consistency',
      ],
      weakness: [
        'Overly idealistic',
        'Difficulty compromising values',
        'Delays due to perfectionism',
        'Heavy moral burden',
      ],
      opportunity: [
        'Healthy change leader',
        'Values-based decision maker',
        'Influential role model',
        'Sustainable social impact',
      ],
      threat: [
        'Burnout from idealism',
        'Disappointment with systems',
        'Withdrawal during conflict',
        'High expectations burden',
      ],
    },
    kids: {
      insight:
        'You feel most motivated when your goals are good and meaningful. Knowing the direction and reason makes you strong.',
      details: [
        'Vision + Meaning children usually have clear goals and kind hearts. They want to move forward while caring about what is right for others.',
        'Their mindset prefers clear goals supported by good reasons. They enjoy activities that feel useful.',
        'They can become wise young leaders. With guidance, they grow into principled and resilient children.',
      ],
      goodFuels: ['Clear goals', 'Positive values', 'Feeling helpful'],
      badFuels: [
        'Being told to act without reasons',
        'Targets without meaning',
        'Forcing pressure',
      ],
      suggestions: [
        'Explain goals and reasons clearly',
        'Involve them in decisions',
        'Entrust responsibility',
      ],
      strength: [
        'Goal-oriented',
        'Strong principles',
        'Calm and mature',
        'Trustworthy',
      ],
      weakness: [
        'Overly serious',
        'Resistant to change',
        'Fear of value mistakes',
        'Internalized pressure',
      ],
      opportunity: [
        'Wise young leader',
        'Guardian of class values',
        'Peer guide',
        'Long-term positive impact',
      ],
      threat: [
        'Fatigue from idealism',
        'Disappointment with environment',
        'Social withdrawal',
        'Heavy expectations',
      ],
    },
  },
  {
    profile: 'vision+validation',
    label: 'The Luminary',
    adult: {
      insight:
        'You perform at your best when your life goals are visible and recognized. Clear direction and appreciation keep you moving forward.',
      details: [
        'The Vision + Validation type blends choleric and sanguine traits. They are ambitious, expressive, and comfortable leading from the front.',
        'Their mindset focuses on achieving big goals while gaining visible recognition. Progress and social response provide extra energy.',
        'They have strong potential as inspirational leaders. When guided well, recognition becomes fuel for meaningful impact.',
      ],
      goodFuels: [
        'Clear goals worth celebrating',
        'Recognition for progress',
        'Opportunities to be seen and contribute',
      ],
      badFuels: [
        'Ignored efforts',
        'Targets without recognition',
        'Environments that suppress expression',
      ],
      suggestions: [
        'Channel recognition toward purpose',
        'Celebrate both process and results',
        'Strengthen internal motivation',
      ],
      strength: [
        'Visionary and communicative',
        'Confident in visibility',
        'Mobilizes others',
        'Quick to seize opportunities',
      ],
      weakness: [
        'Craves recognition excessively',
        'Sensitive to criticism',
        'Easily distracted',
        'Overcommits for image',
      ],
      opportunity: [
        'Inspirational public leader',
        'Strong representative roles',
        'Natural brand builder',
        'Wide impact through visibility',
      ],
      threat: [
        'Losing direction without praise',
        'Burnout from image maintenance',
        'Impulsive decisions',
        'Values replaced by popularity',
      ],
    },
    kids: {
      insight:
        'You feel most excited when you have goals and receive attention. Direction and praise build your confidence.',
      details: [
        'Vision + Validation children are confident and goal-driven. They enjoy stepping forward and want their efforts to be noticed.',
        'Their mindset prefers clear targets and quick feedback. Recognition from peers or teachers boosts motivation.',
        'They can become cheerful class motivators. With guidance, they grow into confident and impactful children.',
      ],
      goodFuels: ['Clear goals', 'Sincere praise', 'Opportunities to perform'],
      badFuels: [
        'Ignored efforts',
        'Goals without appreciation',
        'Restricted self-expression',
      ],
      suggestions: [
        'Acknowledge effort and direction',
        'Encourage shared roles',
        'Build inner motivation',
      ],
      strength: [
        'Confident',
        'Willing to perform',
        'Motivates peers',
        'Highly enthusiastic',
      ],
      weakness: [
        'Attention-seeking',
        'Emotionally sensitive',
        'Limited sustained focus',
        'Overly praise-driven',
      ],
      opportunity: [
        'Inspirational young leader',
        'Classroom energizer',
        'Peer role model',
        'Impact through example',
      ],
      threat: [
        'Low motivation without praise',
        'Image obsession',
        'Loss of direction',
        'Attention-driven conflict',
      ],
    },
  },
  {
    profile: 'vision+fear',
    label: 'The Strategist',
    adult: {
      insight:
        'You perform most steadily when your goals are clear and the path feels secure. Direction and structure support consistency.',
      details: [
        'The Vision + Fear type combines choleric and melancholic traits. They have strong direction, strategic thinking, and cautious execution.',
        'Their mindset works with long-term goals translated into structured plans. Clear systems provide comfort.',
        'They have strong potential as reliable planners. When vision is supported by structure, they execute change with minimal risk.',
      ],
      goodFuels: [
        'Clear goals with structured plans',
        'Safe systems and structure',
        'Measured step-by-step progress',
      ],
      badFuels: [
        'Sudden changes',
        'Big goals without planning',
        'Pressure without clarity',
      ],
      suggestions: [
        'Help design roadmaps',
        'Provide clear next steps',
        'Build courage gradually',
      ],
      strength: [
        'Visionary and structured',
        'Strategic thinker',
        'Quality-focused',
        'Planned execution',
      ],
      weakness: [
        'Overcautious',
        'Risk-averse',
        'Overthinking plans',
        'Slow initiation',
      ],
      opportunity: [
        'Strategic planner',
        'Systemic leader',
        'Direction quality guardian',
        'Sustainable success',
      ],
      threat: [
        'Stalled by doubt',
        'Fear of bold moves',
        'Prolonged stress',
        'Loss of momentum',
      ],
    },
    kids: {
      insight:
        'You feel calm when you have goals and know the steps. Clear direction gives you confidence to move forward.',
      details: [
        'Vision + Fear children have goals but move carefully. They want progress while ensuring safety.',
        'Their mindset prefers clear goals and orderly steps.',
        'With gentle guidance, they grow into brave and well-organized children.',
      ],
      goodFuels: ['Clear goals', 'Organized steps', 'Certain guidance'],
      badFuels: [
        'Sudden changes',
        'Tasks without guidance',
        'Overwhelming targets',
      ],
      suggestions: [
        'Break goals into small steps',
        'Explain sequences clearly',
        'Provide reassurance',
      ],
      strength: [
        'Goal-oriented',
        'Organized and careful',
        'Responsible',
        'Dependable',
      ],
      weakness: [
        'Fear of trying',
        'Overcautious',
        'Slow pacing',
        'Easily worried',
      ],
      opportunity: [
        'Young planner',
        'Activity organizer',
        'Order keeper',
        'Teacher trust',
      ],
      threat: [
        'Fear of taking action',
        'Excessive anxiety',
        'Suppressed potential',
        'Missed opportunities',
      ],
    },
  },
  {
    profile: 'meaning+validation',
    label: 'The Caregiver',
    adult: {
      insight:
        'You perform best when you feel appreciated and needed. Meaning and recognition help you stay consistent.',
      details: [
        'The Meaning + Validation type blends phlegmatic and sanguine traits. They are warm, empathetic, and naturally relational.',
        'Their mindset focuses on meaningful relationships. They seek acceptance while wanting to contribute goodness.',
        'They have strong potential as sincere connectors. With healthy recognition, they spread positive impact.',
      ],
      goodFuels: [
        'Genuine appreciation',
        'Feeling needed',
        'Warm relationships',
      ],
      badFuels: [
        'Emotional neglect',
        'Cold criticism',
        'Indifferent environments',
      ],
      suggestions: [
        'Acknowledge sincerity',
        'Assign helping roles',
        'Build healthy boundaries',
      ],
      strength: [
        'Empathetic and warm',
        'Trustworthy',
        'Harmony keeper',
        'Good listener',
      ],
      weakness: [
        'Difficulty saying no',
        'Over-accommodating',
        'Sensitive to rejection',
        'Self-neglect',
      ],
      opportunity: [
        'Community connector',
        'Warm supporter',
        'Positive culture keeper',
        'Impact through care',
      ],
      threat: [
        'Being taken advantage of',
        'Emotional exhaustion',
        'Boundary loss',
        'Validation dependency',
      ],
    },
    kids: {
      insight:
        'You feel happiest when you are loved and needed. Feeling appreciated makes you want to do good.',
      details: [
        'Meaning + Validation children are warm and caring. They enjoy helping and bonding with friends.',
        'Their mindset values emotional connection and recognition.',
        'With guidance, they grow into caring and confident children.',
      ],
      goodFuels: ['Sincere praise', 'Feeling needed', 'Emotional closeness'],
      badFuels: ['Emotional neglect', 'Cold scolding', 'Uncaring environments'],
      suggestions: [
        'Appreciate good intentions',
        'Encourage helping roles',
        'Teach personal boundaries',
      ],
      strength: ['Caring', 'Warm and friendly', 'Compassionate', 'Trustworthy'],
      weakness: [
        'Fear of disappointing others',
        'Over-accommodating',
        'Emotionally sensitive',
        'Self-forgetful',
      ],
      opportunity: [
        'Calming companion',
        'Group supporter',
        'Atmosphere keeper',
        'Impact through empathy',
      ],
      threat: [
        'Peer exploitation',
        'Emotional fatigue',
        'Low self-confidence',
        'Overdependence',
      ],
    },
  },
  {
    profile: 'meaning+fear',
    label: 'The Custodian',
    adult: {
      insight:
        'You perform most steadily when you feel safe and valued. Security and meaning sustain your consistency.',
      details: [
        'The Meaning + Fear type combines phlegmatic and melancholic traits. They are calm, empathetic, and highly cautious.',
        'Their mindset focuses on protecting values safely. They want to do good without causing harm or conflict.',
        'They have strong potential as careful value keepers. With safety assured, they nurture environments consistently.',
      ],
      goodFuels: ['Safe environments', 'Clear values', 'Fair rules'],
      badFuels: ['Emotional pressure', 'Sudden changes', 'Uncertainty'],
      suggestions: [
        'Establish safety first',
        'Connect rules with values',
        'Encourage gradual courage',
      ],
      strength: [
        'Empathetic and careful',
        'Harmony-focused',
        'Values consistency',
        'Trustworthy',
      ],
      weakness: [
        'Overcautious',
        'Conflict avoidance',
        'Decision difficulty',
        'Emotional suppression',
      ],
      opportunity: [
        'Team value guardian',
        'Stable supporter',
        'Culture caretaker',
        'Long-term trust',
      ],
      threat: [
        'Comfort zone entrapment',
        'Excessive anxiety',
        'Suppressed potential',
        'Change avoidance',
      ],
    },
    kids: {
      insight:
        'You feel most comfortable when you are safe and doing good. Calmness gives you courage.',
      details: [
        'Meaning + Fear children are gentle and caring. They want to help while staying cautious.',
        'They prefer clear rules with good reasons.',
        'With gentle guidance, they grow into caring and confident children.',
      ],
      goodFuels: ['Safety', 'Positive values', 'Clear guidance'],
      badFuels: ['Harsh scolding', 'Sudden situations', 'Confusing rules'],
      suggestions: [
        'Create safety',
        'Explain reasons clearly',
        'Practice small courage',
      ],
      strength: ['Caring', 'Careful', 'Rule-abiding', 'Trustworthy'],
      weakness: [
        'Fear of mistakes',
        'Low confidence',
        'Easily worried',
        'Emotionally reserved',
      ],
      opportunity: [
        'Order keeper',
        'Value supporter',
        'Loyal friend',
        'Teacher trust',
      ],
      threat: [
        'Fear of trying',
        'Excessive anxiety',
        'Hidden potential',
        'Challenge avoidance',
      ],
    },
  },
  {
    profile: 'validation+fear',
    label: 'The Diplomat',
    adult: {
      insight:
        'You perform most steadily when you feel appreciated and safe. Recognition and clarity support your consistency.',
      details: [
        'The Validation + Fear type blends sanguine and melancholic traits. They are warm in relationships yet cautious in action.',
        'Their mindset focuses on safe social responses. They want acceptance without mistakes or conflict.',
        'They have strong potential as emotional stabilizers. With appreciation and safety, they contribute reliably.',
      ],
      goodFuels: [
        'Clear appreciation',
        'Safe environments',
        'Structured guidance',
      ],
      badFuels: ['Harsh criticism', 'Unclear rules', 'Social pressure'],
      suggestions: [
        'Balance praise and guidance',
        'Build emotional safety',
        'Encourage gradual courage',
      ],
      strength: [
        'Warm and orderly',
        'Socially aware',
        'Relationship-focused',
        'Conscientious',
      ],
      weakness: [
        'Easily anxious',
        'Fear of negative judgment',
        'Risk avoidance',
        'High certainty needs',
      ],
      opportunity: [
        'Safe connector',
        'Team supporter',
        'Positive atmosphere keeper',
        'Environmental trust',
      ],
      threat: [
        'Emotional fatigue',
        'Challenge avoidance',
        'Validation dependence',
        'Suppressed potential',
      ],
    },
    kids: {
      insight:
        'You feel safest when encouraged and supported. Appreciation gives you courage to try.',
      details: [
        'Validation + Fear children are friendly and rule-abiding. They want to be liked while staying cautious.',
        'They prefer clear praise and stable rules.',
        'With gentle guidance, they grow into confident and well-adjusted children.',
      ],
      goodFuels: ['Clear praise', 'Safe guidance', 'Positive examples'],
      badFuels: ['Harsh scolding', 'Inconsistent rules', 'Peer pressure'],
      suggestions: [
        'Give directed praise',
        'Explain rules calmly',
        'Build small courage',
      ],
      strength: [
        'Friendly',
        'Rule-abiding',
        'Emotionally aware',
        'Well-intentioned',
      ],
      weakness: [
        'Fear of mistakes',
        'Needs reassurance',
        'Low confidence',
        'Judgment anxiety',
      ],
      opportunity: [
        'Classroom stabilizer',
        'Rule supporter',
        'Group helper',
        'Teacher trust',
      ],
      threat: [
        'Fear of trying',
        'Excessive anxiety',
        'Hidden potential',
        'Challenge avoidance',
      ],
    },
  },

  // COMBINATION / TRIPLE
  {
    profile: 'vision+meaning+validation',
    label: 'The Visionary Influencer',
    adult: {
      insight:
        'You move with the greatest strength when your life goals are meaningful and recognized. Direction, values, and appreciation keep you resilient.',
      details: [
        'The Vision + Meaning + Validation type blends choleric, phlegmatic, and sanguine traits. They have clear direction, a caring heart, and strong presence.',
        'Their mindset focuses on big goals that create positive impact and visible results. Progress feels alive when it benefits others and receives response.',
        'They have strong potential as inspirational leaders. When vision, values, and recognition are balanced, they mobilize many people.',
      ],
      goodFuels: [
        'Meaningful big goals',
        'Genuine appreciation',
        'Real impact on others',
      ],
      badFuels: [
        'Recognition without values',
        'Big targets without direction',
        'Environments that suppress empathy',
      ],
      suggestions: [
        'Maintain balance between direction and heart',
        'Channel recognition toward impact',
        'Build regular self-reflection',
      ],
      strength: [
        'Visionary and empathetic',
        'Communicative and influential',
        'Highly inspiring',
        'Strong long-term drive',
      ],
      weakness: [
        'Heavy expectation burden',
        'Difficulty pleasing everyone',
        'Emotional fatigue risk',
        'Too many roles',
      ],
      opportunity: [
        'Inspirational leader',
        'Social change driver',
        'Broad role model',
        'Sustainable large-scale impact',
      ],
      threat: [
        'Burnout from expectations',
        'Loss of personal focus',
        'Overreliance on feedback',
        'Values eroded by popularity',
      ],
    },
    kids: {
      insight:
        'You feel most excited when your goals are good and you are appreciated. Knowing your direction and feeling loved builds confidence.',
      details: [
        'Vision + Meaning + Validation children usually have goals, kind hearts, and the courage to stand out.',
        'Their mindset enjoys clear goals that bring goodness and attention to effort.',
        'They can become classroom motivators when guided with balance.',
      ],
      goodFuels: ['Positive goals', 'Sincere praise', 'Opportunities to help'],
      badFuels: [
        'Empty praise',
        'Commands without reasons',
        'Ignored feelings',
      ],
      suggestions: [
        'Explain goals and meaning',
        'Appreciate effort and intention',
        'Teach rest and emotional pauses',
      ],
      strength: [
        'Confident',
        'Caring',
        'Willing to perform',
        'Motivates peers',
      ],
      weakness: [
        'Easily tired',
        'People-pleasing',
        'Scattered focus',
        'Emotional overload',
      ],
      opportunity: [
        'Inspirational young leader',
        'Goodness motivator',
        'Peer role model',
        'Wide positive influence',
      ],
      threat: [
        'Emotional exhaustion',
        'Priority confusion',
        'Praise dependence',
        'Self-neglect',
      ],
    },
  },
  {
    profile: 'vision+meaning+fear',
    label: 'The Principled Strategist',
    adult: {
      insight:
        'You move most steadily when your life goals are meaningful and feel safe. Direction, values, and certainty support consistency.',
      details: [
        'The Vision + Meaning + Fear type blends choleric, phlegmatic, and melancholic traits. They are directional, caring, and highly structured thinkers.',
        'Their mindset focuses on long-term goals executed carefully and ethically.',
        'They have strong potential as guardians of direction and integrity.',
      ],
      goodFuels: [
        'Clear meaningful goals',
        'Consistent values',
        'Structured certainty',
      ],
      badFuels: [
        'Sudden changes',
        'Big goals without meaning',
        'Pressure without clarity',
      ],
      suggestions: [
        'Unite vision with values',
        'Build safety gradually',
        'Allow reflection time',
      ],
      strength: [
        'Principled and focused',
        'Careful execution',
        'Long-term consistency',
        'Highly reliable',
      ],
      weakness: [
        'Overcautious',
        'Risk avoidance',
        'Extended overthinking',
        'Emotional restraint',
      ],
      opportunity: [
        'Integrity-based leader',
        'Strategic direction keeper',
        'Wise decision maker',
        'Sustainable success',
      ],
      threat: [
        'Fear-based stagnation',
        'Chronic stress',
        'Lost momentum',
        'Delayed potential',
      ],
    },
    kids: {
      insight:
        'You feel calm when your goals are good and you know the steps. Clear direction makes you brave.',
      details: [
        'Vision + Meaning + Fear children are kind and goal-driven but cautious.',
        'They prefer clear rules and safe guidance.',
        'With gradual support, they grow into principled and courageous children.',
      ],
      goodFuels: ['Positive goals', 'Clear rules', 'Safe guidance'],
      badFuels: ['Sudden changes', 'Excessive pressure', 'Confusing rules'],
      suggestions: [
        'Explain steps slowly',
        'Connect rules to values',
        'Practice small courage',
      ],
      strength: ['Principled', 'Orderly', 'Dependable', 'Caring'],
      weakness: [
        'Fear of mistakes',
        'Reluctance to try',
        'Easily worried',
        'Emotionally reserved',
      ],
      opportunity: [
        'Wise young leader',
        'Class value guardian',
        'Peer guide',
        'Teacher trust',
      ],
      threat: [
        'Fear of action',
        'Excessive anxiety',
        'Suppressed potential',
        'Challenge avoidance',
      ],
    },
  },
  {
    profile: 'vision+validation+fear',
    label: 'The Cautious Achiever',
    adult: {
      insight:
        'You move forward when your goals are clear, recognized, and feel safe. Direction, appreciation, and certainty fuel courage.',
      details: [
        'The Vision + Validation + Fear type blends choleric, sanguine, and melancholic traits.',
        'They aim for visible success while avoiding major mistakes.',
        'They perform best when ambition is balanced with structure.',
      ],
      goodFuels: [
        'Clear measurable targets',
        'Specific appreciation',
        'Process security',
      ],
      badFuels: [
        'Criticism without direction',
        'Pressure without support',
        'Unclear expectations',
      ],
      suggestions: [
        'Set gradual targets',
        'Balance praise and guidance',
        'Build stable confidence',
      ],
      strength: [
        'Ambitious and focused',
        'Responsive to feedback',
        'Careful decision-making',
        'Result-oriented',
      ],
      weakness: [
        'Fear of visible failure',
        'Anxiety-driven thinking',
        'High validation need',
        'Decision delays',
      ],
      opportunity: [
        'Reliable performer',
        'Data-driven leader',
        'Strategic executor',
        'Consistent progress',
      ],
      threat: [
        'Overthinking goals',
        'Mental burnout',
        'Recognition dependency',
        'Risk avoidance',
      ],
    },
    kids: {
      insight:
        'You feel excited when you have goals, receive praise, and know how to do it. Safety builds confidence.',
      details: [
        'Vision + Validation + Fear children aim high but fear mistakes.',
        'They want to succeed while staying safe.',
        'With gentle guidance, they grow into confident achievers.',
      ],
      goodFuels: ['Clear goals', 'Honest praise', 'Safe guidance'],
      badFuels: ['Public scolding', 'Confusing targets', 'Excessive pressure'],
      suggestions: [
        'Simplify targets',
        'Praise small efforts',
        'Train confidence',
      ],
      strength: [
        'Achievement-oriented',
        'Quick learner',
        'Careful actor',
        'Growth-minded',
      ],
      weakness: [
        'Fear of mistakes',
        'Judgment anxiety',
        'Needs reassurance',
        'Hesitant initiative',
      ],
      opportunity: [
        'High achiever',
        'Class role model',
        'Competition motivator',
        'Target accomplisher',
      ],
      threat: [
        'Fear of trying',
        'Excessive anxiety',
        'Praise dependence',
        'Lost courage',
      ],
    },
  },
  {
    profile: 'meaning+validation+fear',
    label: 'The Empathic Protector',
    adult: {
      insight:
        'You move when you feel useful, appreciated, and safe. Meaning, recognition, and security sustain you.',
      details: [
        'The Meaning + Validation + Fear type blends phlegmatic, sanguine, and melancholic traits.',
        'They focus on meaningful relationships and careful contribution.',
        'They create emotional safety when balanced.',
      ],
      goodFuels: [
        'Meaningful roles',
        'Sincere appreciation',
        'Emotionally safe environments',
      ],
      badFuels: ['Harsh criticism', 'Open conflict', 'Sudden change'],
      suggestions: [
        'Build safety gradually',
        'Direct appreciation toward contribution',
        'Train healthy boundaries',
      ],
      strength: [
        'Empathetic',
        'Harmony keeper',
        'Highly sensitive',
        'Loyal contributor',
      ],
      weakness: [
        'Easily anxious',
        'Difficulty refusing',
        'Over-caring',
        'Emotional suppression',
      ],
      opportunity: [
        'Culture guardian',
        'Strong support system',
        'Natural mediator',
        'Healthy environment builder',
      ],
      threat: [
        'Emotional burnout',
        'Approval dependence',
        'Conflict avoidance',
        'Self-sacrifice',
      ],
    },
    kids: {
      insight:
        'You feel happy when you help, receive praise, and feel safe. Feeling loved gives courage.',
      details: [
        'Meaning + Validation + Fear children are kind, helpful, and approval-seeking.',
        'They want to make others happy without mistakes.',
        'With gentle support, they grow confident.',
      ],
      goodFuels: ['Helping opportunities', 'Gentle praise', 'Safe atmosphere'],
      badFuels: ['Yelling', 'Arguments', 'Sudden pressure'],
      suggestions: [
        'Appreciate good intentions',
        'Teach saying no',
        'Calm anxiety gently',
      ],
      strength: ['Kind', 'Trustworthy', 'Emotionally aware', 'Loyal friend'],
      weakness: [
        'Fear of scolding',
        'Excessive worry',
        'Low assertiveness',
        'Hidden emotions',
      ],
      opportunity: [
        'Calming peer',
        'Harmony keeper',
        'Class supporter',
        'Teacher trust',
      ],
      threat: [
        'Conflict fear',
        'Praise dependence',
        'Emotional fatigue',
        'Challenge avoidance',
      ],
    },
  },

  // BALANCED
  {
    profile: 'vision+meaning+validation+fear',
    label: 'The Integrator',
    adult: {
      insight:
        'You move most fully when your life direction is clear, meaningful, appreciated, and safe. Balance sustains you long-term.',
      details: [
        'The Balanced type integrates choleric, phlegmatic, sanguine, and melancholic traits.',
        'They balance goals, values, relationships, and risks consciously.',
        'They mature into holistic leaders.',
      ],
      goodFuels: [
        'Clear meaningful goals',
        'Honest appreciation',
        'Structure and safety',
      ],
      badFuels: [
        'Extreme one-sided pressure',
        'Inconsistent environments',
        'Unresolved conflict',
      ],
      suggestions: [
        'Maintain internal balance',
        'Manage rhythm and priorities',
        'Preserve regular reflection',
      ],
      strength: [
        'Adaptive and stable',
        'Wise decision-making',
        'Empathetic yet firm',
        'Pressure-resilient',
      ],
      weakness: [
        'Choice overthinking',
        'Delayed major decisions',
        'Responsibility overload',
        'Control difficulty',
      ],
      opportunity: [
        'Holistic leader',
        'Team direction keeper',
        'Change facilitator',
        'Long-term impact',
      ],
      threat: [
        'Mental fatigue',
        'Loss of focus',
        'Over-responsibility',
        'Self-neglect',
      ],
    },
    kids: {
      insight:
        'You feel comfortable when you have goals, are loved, and feel safe. Balance makes you brave.',
      details: [
        'Balanced children are goal-oriented, kind, and adaptable.',
        'They like clear rules while maintaining relationships.',
        'With balanced guidance, they grow confident.',
      ],
      goodFuels: ['Clear goals', 'Warm praise', 'Safe rules'],
      badFuels: [
        'Excessive pressure',
        'Unstable environments',
        'Harsh conflict',
      ],
      suggestions: ['Help set priorities', 'Appreciate effort', 'Teach rest'],
      strength: ['Adaptable', 'Caring', 'Responsible', 'Calm actor'],
      weakness: [
        'Easily tired',
        'Decision confusion',
        'Overthinking',
        'Difficulty stopping',
      ],
      opportunity: [
        'Class role model',
        'Peer connector',
        'Young leader',
        'Positive environment',
      ],
      threat: [
        'Emotional exhaustion',
        'Fear of disappointing',
        'Hidden potential',
        'Self-neglect',
      ],
    },
  },
];
