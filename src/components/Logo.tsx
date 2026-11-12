/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-16', showTagline = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Curved Red Stars SVG Icon */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-Right Large Star */}
        <path
          d="M60 22L63.5 32.5H74.5L65.6 39L69 49.5L60 43L51 49.5L54.4 39L45.5 32.5H56.5L60 22Z"
          fill="#c8102e"
        />
        {/* Mid-Left Medium Star */}
        <path
          d="M32 37L34.3 43.8H41.5L35.7 48L37.9 54.8L32 50.6L26.1 54.8L28.3 48L22.5 43.8H29.7L32 37Z"
          fill="#c8102e"
        />
        {/* Lower-Left Smaller Star */}
        <path
          d="M21 52L22.5 56.5H27.3L23.4 59.3L24.9 63.8L21 61L17.1 63.8L18.6 59.3L14.7 56.5H19.5L21 52Z"
          fill="#c8102e"
        />
        {/* Bottom Small Star Point Fragment 1 */}
        <path
          d="M21.5 67.5L22.5 70.5H25.5L23 72.3L24 75.3L21.5 73.5L19 75.3L20 72.3L17.5 70.5H20.5L21.5 67.5Z"
          fill="#c8102e"
        />
        {/* Bottom Small Star Point Fragment 2 */}
        <path
          d="M29.5 74.5L30.2 76.8H32.5L30.6 78.2L31.3 80.5L29.5 79.1L27.7 80.5L28.4 78.2L26.5 76.8H28.8L29.5 74.5Z"
          fill="#c8102e"
        />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-display font-light text-2xl tracking-normal text-white">street</span>
          <span className="font-display font-medium text-2xl tracking-wide text-brand-red">cause</span>
        </div>
        {showTagline && (
          <span className="font-sans text-[8px] sm:text-[9px] font-semibold text-brand-grey tracking-[0.14em] uppercase mt-1 max-w-[200px] leading-tight">
            Human Capital, Skills & Leadership Unit
          </span>
        )}
      </div>
    </div>
  );
};
