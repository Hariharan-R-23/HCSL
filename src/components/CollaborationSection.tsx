/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Handshake, Sparkles, Building2, Maximize2, ShieldCheck } from 'lucide-react';
import { COLLABORATION } from '../data';
import { ImageLightbox } from './ImageLightbox';

/**
 * Highlights institutional collaborations such as HCSL x Digital Nest.
 */
export const CollaborationSection: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section id="collaboration" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
            <Handshake className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">
              PARTNERSHIP SPOTLIGHT
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            HCSL <span className="text-brand-red font-light">×</span> Digital Nest
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Joining forces to expand educational opportunities, professional workshops, and community impact for student volunteers across Hyderabad.
          </p>
        </div>

        {/* Main Collaboration Card */}
        <div className="bg-brand-black border border-zinc-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl mb-12">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-brand-red to-red-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Partnership Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-semibold text-zinc-300">
                    Education Partner
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-semibold text-zinc-300">
                    Venue Partner
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-[11px] font-mono font-semibold text-brand-red">
                    Digital Education Partner
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  A New Era of Student Career Empowerment
                </h3>
              </div>

              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-sans">
                {COLLABORATION.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Quote block */}
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-900 relative">
                <Sparkles className="w-5 h-5 text-brand-red mb-2" />
                <blockquote className="font-display text-base sm:text-lg italic text-white leading-snug">
                  &ldquo;{COLLABORATION.quote}&rdquo;
                </blockquote>
                <p className="text-xs text-brand-red font-mono font-semibold uppercase tracking-wider mt-3">
                  {COLLABORATION.callout}
                </p>
              </div>

              {/* Partnering Across Initiatives */}
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-brand-red" />
                  <span>Partnering Across Street Cause Wings</span>
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {COLLABORATION.partnerships.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-zinc-950/70 border border-zinc-900 rounded-xl flex items-center gap-2.5 text-xs text-zinc-300"
                    >
                      <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {COLLABORATION.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-zinc-500 bg-zinc-900/60 border border-zinc-900 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: 2 Clear Portrait Photos Side-by-Side */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Collaboration Gallery ({COLLABORATION.photos.length})
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COLLABORATION.photos.map((photo, idx) => (
                  <button
                    key={photo}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-brand-red/60 transition-all text-left cursor-pointer"
                  >
                    <img
                      src={photo}
                      alt={`Digital Nest collaboration photo ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <span className="text-[11px] font-mono text-white">
                        View Photo {idx + 1}
                      </span>
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={COLLABORATION.photos}
        activeIndex={activePhotoIndex}
        title="HCSL × Digital Nest Collaboration"
        onClose={() => setActivePhotoIndex(null)}
        onChangeIndex={(index) => setActivePhotoIndex(index)}
      />
    </section>
  );
};

