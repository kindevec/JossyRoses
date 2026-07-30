import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'stacked';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
}) => {
  // Scale factor - responsive for mobile viewport optimization
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-xl sm:text-2xl md:text-3xl',
    xl: 'text-2xl sm:text-3xl md:text-5xl',
  };

  const taglineSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-[0.18em]',
    md: 'text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.18em] sm:tracking-[0.25em]',
    lg: 'text-[10px] sm:text-[12px] md:text-[14px] tracking-[0.25em]',
    xl: 'text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.3em]',
  };

  // Rose Mandala/Bloom Geometric SVG Logo matching Jossy Roses official identity
  const RoseEmblem = (
    <svg
      viewBox="0 0 100 100"
      className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Core */}
      <circle cx="50" cy="50" r="5" fill="#E3004F" />

      {/* 8 Main Petals in Radial symmetry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <g key={index} transform={`rotate(${angle} 50 50)`}>
          {/* Main Leaf/Petal teardrop shape */}
          <path
            d="M 50 50 C 42 35 38 20 50 10 C 62 20 58 35 50 50 Z"
            fill="#E3004F"
          />
          {/* Inner Petal highlight curve */}
          <path
            d="M 50 42 C 46 32 44 24 50 18 C 56 24 54 32 50 42 Z"
            fill="#FF2A75"
            opacity="0.85"
          />
          {/* Small outer dew accent dot */}
          <circle cx="50" cy="5" r="2.5" fill="#E3004F" />
        </g>
      ))}

      {/* Outer subtle ring glow */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#E3004F"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        opacity="0.4"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {RoseEmblem}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center group cursor-pointer ${className}`}>
        {RoseEmblem}
        <div className="mt-3">
          <span className={`font-display font-bold tracking-tight text-white block ${textSizes[size]}`}>
            Jossy<span className="text-[#E3004F]">Roses</span>
          </span>
          <span className={`block font-serif tracking-[0.25em] text-[#F1F5F9] font-medium uppercase mt-1 ${taglineSizes[size]}`}>
            W H E R E &nbsp; Q U A L I T Y &nbsp; C O U N T S
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {RoseEmblem}
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight leading-none text-white ${textSizes[size]}`}>
          Jossy<span className="text-[#E3004F]">Roses</span>
        </span>
        <span className={`font-serif tracking-[0.22em] text-[#E2E8F0] font-semibold uppercase mt-1 leading-none ${taglineSizes[size]}`}>
          WHERE QUALITY COUNTS
        </span>
      </div>
    </div>
  );
};
