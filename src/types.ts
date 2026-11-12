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
  image: string;
}

export interface PastSession {
  sessionNo: string;
  title: string;
  speaker: {
    name: string;
    role: string;
    company: string;
  };
  date: string;
  mode: string;
  attendees: string;
  summary: string;
  description: string;
  motto: string;
  tags: string[];
  photos: string[];
}

export interface Collaboration {
  title: string;
  partner: string;
  partnerSubtitle: string;
  overview: string;
  description: string[];
  quote: string;
  callout: string;
  partnerships: string[];
  tags: string[];
  photos: string[];
}
