/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  activeIndex: number | null;
  title?: string;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

/**
 * Full-screen modal lightbox for viewing session, collaboration, or board posters.
 */
export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  activeIndex,
  title,
  onClose,
  onChangeIndex,
}) => {
  const isOpen = activeIndex !== null && images.length > 0;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasMultiple && activeIndex !== null) {
        onChangeIndex((activeIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && hasMultiple && activeIndex !== null) {
        onChangeIndex((activeIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasMultiple, activeIndex, images.length, onClose, onChangeIndex]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="relative z-10 max-w-2xl w-full flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-mono text-zinc-400 truncate pr-4">
                {title ? `${title} • ` : ''}
                {activeIndex + 1} / {images.length}
              </span>
              <button
                onClick={onClose}
                aria-label="Close image viewer"
                className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center">
              {hasMultiple && (
                <button
                  onClick={() => onChangeIndex((activeIndex - 1 + images.length) % images.length)}
                  aria-label="Previous image"
                  className="absolute left-2 sm:-left-12 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-brand-red transition-all z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <img
                src={images[activeIndex]}
                alt={title || 'Event gallery photo'}
                className="max-h-[82vh] w-auto rounded-2xl border border-zinc-800 shadow-2xl object-contain"
              />

              {hasMultiple && (
                <button
                  onClick={() => onChangeIndex((activeIndex + 1) % images.length)}
                  aria-label="Next image"
                  className="absolute right-2 sm:-right-12 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-brand-red transition-all z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

