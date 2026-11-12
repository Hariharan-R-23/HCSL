/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Users, Laptop, Hash, Sparkles, Maximize2 } from 'lucide-react';
import { PAST_SESSIONS } from '../data';
import { PastSession } from '../types';
import { ImageLightbox } from './ImageLightbox';

/**
 * Showcases past HCSL speaker sessions with metadata, highlights, and photo galleries.
 */
export const SessionSection: React.FC = () => {
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    index: number | null;
    title: string;
  }>({ images: [], index: null, title: '' });

  const openPhoto = (session: PastSession, index: number) => {
    setLightboxState({
      images: session.photos,
      index,
      title: `Session ${session.sessionNo}: ${session.title}`,
    });
  };

  return (
    <section id="sessions" className="relative py-24 bg-brand-black overflow-hidden border-t border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">
              PAST SESSIONS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Learning Today. <span className="text-brand-red italic">Leading Tomorrow.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Interactive knowledge-sharing sessions led by industry founders and corporate leaders to equip Street Cause volunteers for real-world growth.
          </p>
        </div>

        {/* Sessions List */}
        <div className="space-y-12">
          {PAST_SESSIONS.map((session) => (
            <article
              key={session.sessionNo}
              className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red to-rose-600" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Session Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-mono font-semibold text-brand-red uppercase">
                      <Hash className="w-3.5 h-3.5" />
                      Session {session.sessionNo}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {session.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {session.title}
                    </h3>
                    <div className="mt-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        Featured Speaker
                      </p>
                      <p className="font-display text-lg font-bold text-white mt-0.5">
                        {session.speaker.name}
                      </p>
                      <p className="text-xs font-semibold text-brand-red mt-0.5">
                        {session.speaker.role}, {session.speaker.company}
                      </p>
                    </div>
                  </div>

                  {/* Quick Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 bg-zinc-900/50 rounded-2xl border border-zinc-900">
                      <Calendar className="w-4 h-4 text-brand-red mb-1.5" />
                      <p className="text-[10px] font-mono text-zinc-500 uppercase">Date</p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                        {session.date}
                      </p>
                    </div>

                    <div className="p-3.5 bg-zinc-900/50 rounded-2xl border border-zinc-900">
                      <Laptop className="w-4 h-4 text-brand-red mb-1.5" />
                      <p className="text-[10px] font-mono text-zinc-500 uppercase">Mode</p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                        {session.mode}
                      </p>
                    </div>

                    <div className="p-3.5 bg-zinc-900/50 rounded-2xl border border-zinc-900">
                      <Users className="w-4 h-4 text-brand-red mb-1.5" />
                      <p className="text-[10px] font-mono text-zinc-500 uppercase">Attendees</p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                        {session.attendees}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {session.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-zinc-900/40 border border-zinc-900 rounded-xl px-4 py-2.5 w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                    <span>{session.motto}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {session.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-zinc-500 bg-zinc-900/60 border border-zinc-900 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Session Photos */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {session.photos.map((photo, idx) => (
                    <button
                      key={photo}
                      type="button"
                      onClick={() => openPhoto(session, idx)}
                      className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-brand-red/60 transition-all text-left cursor-pointer"
                    >
                      <img
                        src={photo}
                        alt={`${session.title} photo ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="text-[11px] font-mono text-white">
                          View Photo {idx + 1}
                        </span>
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={lightboxState.images}
        activeIndex={lightboxState.index}
        title={lightboxState.title}
        onClose={() => setLightboxState((prev) => ({ ...prev, index: null }))}
        onChangeIndex={(index) => setLightboxState((prev) => ({ ...prev, index }))}
      />
    </section>
  );
};
