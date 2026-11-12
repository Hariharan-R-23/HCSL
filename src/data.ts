/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BoardMember, UpcomingSession } from './types';

export const BOARD_MEMBERS: BoardMember[] = [
  {
    id: '1',
    name: 'Tejesh Achari',
    role: 'Unit Lead',
    department: 'Leadership',
    email: 'streetcause@gmail.com',
    instagram: 'https://www.instagram.com/streetcause.humancapital/',
    initials: 'TA',
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
    bio: 'Structuring tailor-made career counseling services, coordinating mock-interview routines, and driving dedicated resources to prepare volunteers for prestigious global admissions.'
  }
];

export const UPCOMING_SESSION: UpcomingSession = {
  title: 'Masters in Abroad 🌍🎓',
  subtitle: 'The Human Capital, Skills & Leadership (HCSL) Unit of Street Cause is back with another insightful session aimed at empowering volunteers with valuable career guidance.',
  speaker: {
    name: 'Sree Charith',
    tagline: 'Street Cause CEB Alumnus & Columbia University Graduate',
    bio: [
      'An inspiring Street Cause Central Executive Board (CEB) alumnus who successfully crossed the threshold into the prestigious Ivy League.',
      'Completed a Master of Science in Construction Administration at Columbia University, New York (2023-24).',
      'Currently working as a professional Project Engineer at Structural LLC, applying global management practices in construction engineering.',
      'He is eager to help fellow Street Cause volunteers plan their study-abroad pathways, build competitive profiles, write compelling Statement of Purpose letters, and demystify the Ivy League experience.'
    ],
    company: 'Project Engineer at Structural LLC',
    education: 'Columbia University (Master’s in Construction Administration, 2023-24)'
  },
  date: '11th July (Saturday)',
  time: '8:00 PM (IST)',
  mode: 'Online (Google Meet)',
  openFor: 'Open for all Street Cause Volunteers',
  registrationLink: 'https://forms.gle/cmUsfBNzgvx6UCc66',
  googleMeetLink: 'https://meet.google.com/osb-xvvn-gcb'
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
