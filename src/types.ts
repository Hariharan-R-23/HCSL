/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DepartmentType =
  | 'All'
  | 'Leadership'
  | 'Creative & Design'
  | 'Research & Data'
  | 'Outreach & Relations'
  | 'Programs & Career';

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  department: DepartmentType;
  email: string;
  instagram: string;
  bio: string;
  initials: string;
}

export interface UpcomingSession {
  title: string;
  subtitle: string;
  speaker: {
    name: string;
    tagline: string;
    bio: string[];
    company: string;
    education: string;
  };
  date: string;
  time: string;
  mode: string;
  openFor: string;
  registrationLink: string;
  googleMeetLink: string;
}

export interface SubmittedQuestion {
  id: string;
  name: string;
  email: string;
  question: string;
  timestamp: string;
}
