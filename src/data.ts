/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BoardMember, PastSession, Collaboration } from './types';

export const BOARD_MEMBERS: BoardMember[] = [
  {
    id: '1',
    name: 'Tejesh Achari',
    role: 'Unit Lead',
    department: 'Leadership',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'TA',
    image: '/images/eb/tejesh-achari.webp',
    bio: 'Leading the HCSL unit with a long-term vision to transform passionate volunteers into industry-ready leaders, fostering strategic growth, peer mentorship, and global academic pursuits.'
  },
  {
    id: '2',
    name: 'Akshith Muppidi',
    role: 'Corporate Relations Director',
    department: 'Outreach & Relations',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'AM',
    image: '/images/eb/akshith-muppidi.webp',
    bio: 'Establishing corporate partnerships, sponsorship pipelines, and industry-oriented pathways, connecting volunteers with high-value internships, job placements, and career insights.'
  },
  {
    id: '3',
    name: 'Krishna Desai',
    role: 'Leadership Development Head',
    department: 'Leadership',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'KD',
    image: '/images/eb/krishna-desai.webp',
    bio: 'Designing structured training programs, professional leadership development workshops, and bootcamps to cultivate communication excellence and project planning expertise.'
  },
  {
    id: '4',
    name: 'Zayd Ahmed',
    role: 'Leadership Development Associate',
    department: 'Leadership',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'ZA',
    image: '/images/eb/zayd-ahmed.webp',
    bio: 'Assisting in formulating developmental guidelines, interactive volunteer training materials, and skill assessments that promote critical problem-solving and team synergy.'
  },
  {
    id: '5',
    name: 'Sahithi Sai',
    role: 'Creative Director',
    department: 'Creative & Design',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'SS',
    image: '/images/eb/sahithi-sai.webp',
    bio: 'Directing the visual branding, creative campaigns, and aesthetic guidelines. Combining creative storytelling with visual design patterns to elevate HCSL’s volunteer branding.'
  },
  {
    id: '6',
    name: 'Hariharan',
    role: 'Associate Creative Director',
    department: 'Creative & Design',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'H',
    image: '/images/eb/hariharan.webp',
    bio: 'Crafting visually engaging promotional layouts, posters, and digital resources, ensuring consistent visual aesthetics across all internal and public channels.'
  },
  {
    id: '7',
    name: 'Jhansi Lakshmi S',
    role: 'Research & Data Management Head',
    department: 'Research & Data',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'JL',
    image: '/images/eb/jhansi-lakshmi.webp',
    bio: 'Spearheading survey setups, volunteer interest mapping, and qualitative trends analysis to back career development initiatives with high-fidelity insights and empirical data.'
  },
  {
    id: '8',
    name: 'Ksheeraja',
    role: 'Research & Data Management Associate',
    department: 'Research & Data',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'K',
    image: '/images/eb/ksheeraja.webp',
    bio: 'Aggregating academic pathways, university databases, and standardized exam blueprints (GRE, GMAT, TOEFL) to support volunteers preparing for higher studies.'
  },
  {
    id: '9',
    name: 'Manas Reddy',
    role: 'Outreach, PR & Influence Head',
    department: 'Outreach & Relations',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'MR',
    image: '/images/eb/manas-reddy.webp',
    bio: 'Amplifying the HCSL unit\'s reach across student campuses, managing media relations, volunteer enrollment campaigns, and orchestrating high-engagement collaborative alliances.'
  },
  {
    id: '10',
    name: 'Prashanth Suryavanshi',
    role: 'Programs & Engagement Director',
    department: 'Programs & Career',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'PS',
    image: '/images/eb/prashanth-suryavanshi.webp',
    bio: 'Curating dynamic online and offline engagement programs, panel webinars, and masterclasses to maintain volunteer enthusiasm and drive meaningful collective action.'
  },
  {
    id: '11',
    name: 'Pravallika Kotra',
    role: 'Campus & Career Advancement Lead',
    department: 'Programs & Career',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'PK',
    image: '/images/eb/pravallika-kotra.webp',
    bio: 'Structuring tailor-made career counseling services, coordinating mock-interview routines, and driving dedicated resources to prepare volunteers for prestigious global admissions.'
  }
];

export const PAST_SESSIONS: PastSession[] = [
  {
    sessionNo: '01',
    title: 'AI for Career Growth',
    speaker: {
      name: 'Mr. Gautam Saladi',
      role: 'HR Manager',
      company: 'Microsoft'
    },
    date: '25.07.2026',
    mode: 'Online',
    attendees: '75+',
    summary: 'Insightful discussions on how AI is reshaping careers, emerging opportunities, industry expectations, and staying future-ready.',
    description: 'Street Cause HCSL successfully conducted an engaging online session on "AI for Career Growth" featuring Mr. Gautam Saladi, HR Manager at Microsoft. The session was highly interactive, with participants actively engaging through thought-provoking discussions, insightful questions, and real-world conversations on how AI is reshaping careers. Attendees gained valuable perspectives on emerging opportunities, industry expectations, and the skills needed to stay future-ready in an AI-driven world.',
    motto: 'Learning today. Leading tomorrow.',
    tags: ['#StreetCause', '#Vision2030', '#HCSL', '#AIForCareerGrowth', '#ArtificialIntelligence', '#CareerGrowth', '#FutureOfWork', '#Microsoft', '#Learning', '#Upskilling', '#StreetCauseIndia', '#WeCare'],
    photos: [
      '/images/sessions/ai-career-1.webp',
      '/images/sessions/ai-career-2.webp'
    ]
  },
  {
    sessionNo: '02',
    title: 'Startup 101: Beyond the Job',
    speaker: {
      name: 'Mr. John Garapati',
      role: 'Founder & CEO',
      company: 'Trevia EV'
    },
    date: '26.09.2026',
    mode: 'Online',
    attendees: '20+',
    summary: 'The journey of building a startup from zero to one, overcoming challenges, learning from failed ventures, and turning ideas into reality.',
    description: 'Street Cause HCSL successfully conducted an engaging online session on "Startup 101: Beyond the Job" featuring Mr. John Garapati, Founder & CEO of Trevia EV. The session explored the journey of building a startup from zero to one, overcoming challenges, learning from failed ventures, and turning ideas into reality. With 20+ volunteers in attendance, the session featured insightful discussions and an interactive Q&A, offering valuable perspectives on entrepreneurship and innovation.',
    motto: 'Learning today. Leading tomorrow.',
    tags: ['#StreetCause', '#Vision2030', '#HCSL', '#Startup101', '#BeyondTheJob', '#Entrepreneurship'],
    photos: [
      '/images/sessions/startup-101-1.webp',
      '/images/sessions/startup-101-2.webp'
    ]
  }
];

export const COLLABORATION: Collaboration = {
  title: 'HCSL × Digital Nest: A New Collaboration!',
  partner: 'Digital Nest',
  partnerSubtitle: 'Education, Venue & Digital Education Partner',
  overview: 'Digital Nest joins Street Cause Hyderabad as our Education Partner, Venue Partner, and Digital Education Partner across Dandiya, HYA, and HCSL.',
  description: [
    'Digital Nest joins Street Cause Hyderabad as our Education Partner, Venue Partner, and Digital Education Partner across Dandiya, HYA (Hyderabad Youth Assembly), and HCSL.',
    'Digital Nest will be the official Digital Education Partner for all HCSL sessions and will collaborate in bringing workshops, sessions, and many more opportunities exclusively for the volunteers of Street Cause.'
  ],
  quote: 'The real success of a partnership is in the people it reaches, the skills it builds, and the impact it creates.',
  callout: 'Excited to build for the next generation of young leaders! 🚀',
  partnerships: [
    'Hyderabad Youth Assembly (HYA)',
    'Street Cause HCSL Unit',
    'Dandiya & Street Cause Hyderabad Fundraisers'
  ],
  tags: ['#StreetCauseHyderabad', '#DigitalNest', '#HCSL', '#YouthLeadership', '#CommunityImpact', '#Hyderabad'],
  photos: [
    '/images/collaborations/digital-nest-1.webp',
    '/images/collaborations/digital-nest-3.webp'
  ]
};

export const CORE_VALUES = [
  {
    title: 'Career Advancement',
    description: 'Empowering volunteers with tailored training, resume optimization guidance, and clear pathways to prestigious post-graduate research and study-abroad prospects.',
    iconName: 'Award'
  },
  {
    title: 'Tailored Resources',
    description: 'Providing exclusive access to standard study-abroad prep guides, entrance exam patterns, admission essay structures, and peer application reviews.',
    iconName: 'BookOpen'
  },
  {
    title: 'Dedicated Support',
    description: 'Nurturing growth through individual mentorship sessions with distinguished alumni who have already succeeded in global organizations and top universities.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Leadership Development',
    description: 'Shaping proactive change-makers by instilling modern managerial tactics, presentation prowess, public speaking confidence, and operational mastery.',
    iconName: 'Sparkles'
  }
];
