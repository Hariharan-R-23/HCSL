/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Mail, Instagram, X, User, ArrowUpRight, ShieldCheck, Star, Maximize2 } from 'lucide-react';
import { BOARD_MEMBERS } from '../data';
import { BoardMember, DepartmentType } from '../types';
import { ImageLightbox } from './ImageLightbox';

export const BoardSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDept, setSelectedDept] = useState<DepartmentType>('All');
  const [lightboxPoster, setLightboxPoster] = useState<string | null>(null);

  const departments: DepartmentType[] = [
    'All',
    'Leadership',
    'Creative & Design',
    'Research & Data',
    'Outreach & Relations',
    'Programs & Career'
  ];

  // Filter board members based on search query and department
  const filteredMembers = useMemo(() => {
    return BOARD_MEMBERS.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === 'All' || member.department === selectedDept;
      return matchesSearch && matchesDept;
    });
  }, [searchQuery, selectedDept]);

  // Precomposes custom mail body
  const getMailtoUrl = (member: BoardMember) => {
    const subject = encodeURIComponent(`Volunteer Query - HCSL Unit (${member.role})`);
    const body = encodeURIComponent(
      `Hello ${member.name},\n\n` +
      `I hope this email finds you well.\n\n` +
      `I am a Street Cause volunteer reaching out regarding the Human Capital, Skills and Leadership (HCSL) Unit.\n` +
      `I would love to get your advice on career advancement, study-abroad resources, or upcoming leadership initiatives.\n\n` +
      `Thank you!\n` +
      `Best regards,\n` +
      `[Your Name]\n` +
      `Street Cause Volunteer`
    );
    return `mailto:${member.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="board" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">
              EXECUTIVE ROSTER 2026-27
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Introducing the <span className="text-brand-red">Executive Board</span>
          </h2>
          <p className="font-display text-lg text-brand-grey font-medium tracking-wide uppercase">
            Human Capital Skills And Leadership Unit
          </p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Search and Filters Controller */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/40 p-4 rounded-2xl border border-zinc-900 backdrop-blur-md">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search board members by name or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all placeholder-zinc-600"
              />
            </div>

            {/* Helper Text */}
            <div className="hidden lg:block text-xs font-mono text-zinc-500">
              Showing {filteredMembers.length} of {BOARD_MEMBERS.length} Board Members
            </div>
          </div>

          {/* Touch-Friendly Horizontal Filter list */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none">
            <div className="flex-shrink-0 flex items-center gap-2 text-xs font-mono text-zinc-500 mr-2">
              <Filter className="w-3.5 h-3.5 text-brand-red" />
              <span>FILTER:</span>
            </div>

            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  selectedDept === dept
                    ? 'bg-brand-red border-brand-red text-white shadow-[0_0_15px_rgba(200,16,46,0.25)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Grid layout for Board cards */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/20 border border-zinc-900 rounded-3xl">
            <User className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-white font-display text-lg font-bold">No Board Members Found</h3>
            <p className="text-xs text-zinc-500 mt-1">Try adjusting your search query or department filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <motion.div
                layout
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-brand-card hover:bg-brand-card-hover border border-zinc-900 hover:border-zinc-800/80 rounded-3xl p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                whileHover={{ y: -6 }}
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-red/10 rounded-full blur-xl group-hover:bg-brand-red/20 transition-all duration-300" />

                <div>
                  {/* Portrait Poster Image */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 mb-4 group-hover:border-brand-red/40 transition-colors">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-semibold text-brand-red uppercase">
                      {member.department}
                    </div>
                  </div>

                  {/* Core Details */}
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-red transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium mt-1 leading-normal">
                    {member.role}
                  </p>
                </div>

                {/* Card CTA/Footer */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-900/60">
                  <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    View Poster & Bio
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-950 group-hover:bg-brand-red/10 flex items-center justify-center border border-zinc-900 group-hover:border-brand-red/30 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-brand-red transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Board Member Detail Overlay Modal */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-brand-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 max-h-[90vh] overflow-y-auto"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red to-red-500" />

                <button
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close modal"
                  className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all z-20 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2 items-start">
                  {/* Poster Thumbnail */}
                  <div className="sm:col-span-5">
                    <button
                      type="button"
                      onClick={() => setLightboxPoster(selectedMember.image)}
                      className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-brand-red/60 transition-all cursor-pointer"
                    >
                      <img
                        src={selectedMember.image}
                        alt={`${selectedMember.name} launch poster`}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="text-[11px] font-mono text-white">Full Poster</span>
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </button>
                    <p className="text-[10px] font-mono text-zinc-500 text-center mt-2">
                      Click poster to expand full screen
                    </p>
                  </div>

                  {/* Profile info & actions */}
                  <div className="sm:col-span-7 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-brand-red uppercase font-semibold tracking-wider">
                          {selectedMember.department}
                        </span>
                        <span className="text-zinc-600 font-mono text-[10px]">•</span>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                          <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Board 26-27</span>
                        </div>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {selectedMember.name}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-0.5">{selectedMember.role}</p>
                    </div>

                    <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-900">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                        ROLE OBJECTIVE
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 p-3.5 bg-brand-red/5 rounded-xl border border-brand-red/10 text-xs text-brand-grey">
                      <Star className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                      <span>
                        HCSL is dedicated to turning volunteers into global leaders through career advancement support.
                      </span>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">
                        CONNECT WITH THIS BOARD MEMBER
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={getMailtoUrl(selectedMember)}
                          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-semibold tracking-wide uppercase transition-all"
                        >
                          <Mail className="w-4 h-4 text-brand-red" />
                          <span>Email</span>
                        </a>

                        <a
                          href={selectedMember.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-semibold tracking-wide uppercase transition-all"
                        >
                          <Instagram className="w-4 h-4 text-brand-red" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox for full poster zoom */}
      <ImageLightbox
        images={lightboxPoster ? [lightboxPoster] : []}
        activeIndex={lightboxPoster ? 0 : null}
        title={selectedMember ? `${selectedMember.name} • Executive Board 2026-27` : 'Executive Board Poster'}
        onClose={() => setLightboxPoster(null)}
        onChangeIndex={() => {}}
      />
    </section>
  );
};
