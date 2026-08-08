import React from 'react';
import { Target, Eye, HeartHandshake, Leaf } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const MissionVision = () => {
  return (
    <section id="mission-vision" className="pt-[20px] pb-10 sm:py-12 bg-[#FDF3F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <AnimateIn animation="fade-down" duration={700}>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E6007E]">
              Nuestra Filosofía
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0A0A] font-bold uppercase tracking-tight">
              MISIÓN <span className="text-[#E6007E] font-light italic font-serif lowercase">&</span> VISIÓN
            </h2>
          </div>
        </AnimateIn>

        {/* 2 Side-by-Side Columns on Mobile and Desktop */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-8 lg:gap-16">
          
          {/* Misión Column */}
          <AnimateIn animation="fade-left" duration={800}>
            <div className="space-y-2.5 sm:space-y-4 text-left">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E6007E]/10 border border-[#E6007E]/30 flex items-center justify-center text-[#E6007E] shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E6007E] block leading-none">Propósito</span>
                  <h3 className="text-base sm:text-2xl font-serif font-bold text-[#0A0A0A] italic mt-0.5">Misión</h3>
                </div>
              </div>

              <p className="text-[#0A0A0A] font-serif text-xs sm:text-lg leading-snug sm:leading-relaxed italic border-l-2 border-[#E6007E] pl-2.5 sm:pl-4 py-0.5">
                "Brindar una experiencia de compra única enfocada en la excelencia y la satisfacción total."
              </p>

              <div className="flex items-center space-x-1.5 text-[9.5px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-tight sm:tracking-wider pt-0.5">
                <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6007E] shrink-0" />
                <span>Excelencia & Satisfacción</span>
              </div>
            </div>
          </AnimateIn>

          {/* Visión Column */}
          <AnimateIn animation="fade-right" duration={800}>
            <div className="space-y-2.5 sm:space-y-4 text-left">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E6007E]/10 border border-[#E6007E]/30 flex items-center justify-center text-[#E6007E] shrink-0">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E6007E] block leading-none">Futuro</span>
                  <h3 className="text-base sm:text-2xl font-serif font-bold text-[#0A0A0A] italic mt-0.5">Visión</h3>
                </div>
              </div>

              <p className="text-[#0A0A0A] font-serif text-xs sm:text-lg leading-snug sm:leading-relaxed italic border-l-2 border-[#E6007E] pl-2.5 sm:pl-4 py-0.5">
                "Crecer de forma sostenible apoyando el desarrollo de nuestra comunidad y el entorno."
              </p>

              <div className="flex items-center space-x-1.5 text-[9.5px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-tight sm:tracking-wider pt-0.5">
                <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 shrink-0" />
                <span>Crecimiento Sostenible</span>
              </div>
            </div>
          </AnimateIn>

        </div>

      </div>
    </section>
  );
};
