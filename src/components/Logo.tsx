import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl'
  };

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Original Architectural House & Monogram Emblem */}
      <div className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-sm ${iconSizes[size]} ${isLight ? 'bg-gradient-to-br from-[#0E2E4E] to-[#07182A] border border-[#1F3D5C]' : 'bg-gradient-to-br from-[#0B2239] to-[#07182A]'}`}>
        <svg
          viewBox="0 0 40 40"
          className="w-3/4 h-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural roof line */}
          <path
            d="M20 7L6 19H11V33H29V19H34L20 7Z"
            stroke="#D96F58"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Minimalist modern door & NR geometric monogram */}
          <path
            d="M16 33V22H24V33"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Geometric foundation accent line */}
          <line
            x1="12"
            y1="27"
            x2="16"
            y2="27"
            stroke="#E27A61"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="27"
            x2="28"
            y2="27"
            stroke="#E27A61"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold tracking-tight leading-none uppercase ${titleSizes[size]} ${isLight ? 'text-white' : 'text-[#0B2239]'}`}
        >
          Nasir <span className="text-[#D96F58]">Real Estate</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-1 ${isLight ? 'text-[#94A3B8]' : 'text-[#68717A]'}`}
          >
            Chenab Nagar • Chiniot
          </span>
        )}
      </div>
    </div>
  );
};
