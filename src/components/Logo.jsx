import React from 'react';
import { FlowerMandala } from './FlowerMandala';

export const Logo = ({ variant = 'dark', className = '' }) => {
  // variant: 'dark' (for header/light background or dark header background)
  // logo text: Jossy Roses in #E6007E or white, tagline in white/gray
  
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }}
      className={`group flex items-center space-x-3 select-none ${className}`}
    >
      {/* Icon on the Left */}
      <FlowerMandala 
        className="w-9 h-9 md:w-10 md:h-10 group-hover:rotate-45 transition-transform duration-700 ease-out shrink-0" 
        color="#E6007E"
      />
      
      {/* Text Brand Name & Tagline stacked on the Right */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-baseline font-serif text-2xl md:text-3xl tracking-tight leading-none">
          <span className="text-[#E6007E] font-bold italic">J</span>
          <span className="text-[#E6007E] font-medium">ossy</span>
          <span className="text-[#E6007E] font-bold italic ml-1">R</span>
          <span className="text-[#E6007E] font-medium">oses</span>
        </div>

        {/* Tagline */}
        <span className={`text-[8px] md:text-[9px] tracking-[0.3em] uppercase font-sans font-semibold mt-0.5 transition-colors ${
          variant === 'light' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-[#E6007E]'
        }`}>
          WHERE QUALITY COUNTS
        </span>
      </div>
    </a>
  );
};

