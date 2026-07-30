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
    <img
      src="/logo.png"
      alt="Jossy Roses"
      className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 shrink-0 object-contain`}
    />
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
          <span className={`font-display font-bold tracking-tight text-slate-900 block ${textSizes[size]}`}>
            Jossy<span className="text-[#E3004F]">Roses</span>
          </span>
          <span className={`block font-serif tracking-[0.25em] text-slate-700 font-medium uppercase mt-1 ${taglineSizes[size]}`}>
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
        <span className={`font-display font-bold tracking-tight leading-none text-slate-900 ${textSizes[size]}`}>
          Jossy<span className="text-[#E3004F]">Roses</span>
        </span>
        <span className={`font-serif tracking-[0.22em] text-slate-700 font-semibold uppercase mt-1 leading-none ${taglineSizes[size]}`}>
          WHERE QUALITY COUNTS
        </span>
      </div>
    </div>
  );
};
