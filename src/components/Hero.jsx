import React, { useState, useRef, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { FileText } from 'lucide-react';

export const Hero = ({ onOpenQuoteModal }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const videoRef = useRef(null);

  // Pause video when out of viewport to save CPU
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {});
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full h-auto lg:min-h-screen flex items-start md:items-center pt-[80px] pb-2 md:pt-36 md:pb-28 overflow-hidden bg-[#FAF0F3] md:bg-[#0F050A]">
      
      {/* 🎥 Full-Bleed Edge-to-Edge Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-cover md:object-center z-0 pointer-events-none opacity-90 transition-opacity duration-700"
      >
        <source src="/FondoImg.webm" type="video/webm" />
      </video>

      {/* Minimal Overlay over Dark Base */}
      <div className="absolute inset-0 bg-black/20 opacity-20 pointer-events-none z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E6007E]/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Full-Width Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          
          {/* Left Column: Stacked Impactful Headline & Copy */}
          <div className="lg:col-span-12 text-left relative z-10 md:space-y-6">

            {/* Stacked Hasfarm-Style Impact Headline with Glowing Shine */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-[#0A0A0A] font-bold tracking-tight uppercase leading-[1.05] animate-glowing-title">
              CALIDAD <br />
              <span className="inline-block text-white">
                {"FRESCURA".split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block animate-letter-shine"
                    style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span> <br />
              <span className="italic font-light text-[#0A0A0A] font-serif capitalize drop-shadow-[0_0_15px_rgba(230,0,126,0.25)]">
                que enamora
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="mt-1 md:mt-0 text-sm sm:text-base md:text-lg text-white md:text-gray-800 font-sans leading-relaxed max-w-2xl drop-shadow-md md:drop-shadow-none md:bg-white/50 md:backdrop-blur-xs md:p-3.5 md:rounded-2xl md:border md:border-white/50 md:shadow-xs cursor-pointer md:cursor-auto"
              onClick={() => setIsTextExpanded(!isTextExpanded)}
            >
              Rosas ecuatorianas
              {!isTextExpanded && <span className="md:hidden">... <span className="text-[#E6007E] font-semibold text-xs ml-1">Ver más</span></span>}
              <span className={`${!isTextExpanded ? 'hidden md:inline' : 'inline'}`}>
                {' '}de exportación directo del cultivo para floristerías, distribuidores y diseñadores de eventos. Tallo largo, botones de alta apertura y frescura garantizada.
              </span>
            </p>

            {/* Hasfarm-Style Pill CTA Buttons with Flower Icon */}
            <div className="flex flex-row items-center space-x-2 sm:space-x-4 mt-1.5 md:mt-0 w-full">
              <a
                href="#catalog"
                className="group inline-flex items-center justify-center px-4 py-3 sm:px-8 sm:py-4 bg-[#E6007E] hover:bg-[#C4006B] text-white font-bold text-[9px] sm:text-xs uppercase tracking-widest rounded-full shadow-lg shadow-[#E6007E]/30 transition-all duration-300 transform hover:-translate-y-0.5 space-x-1.5 sm:space-x-2 cursor-pointer flex-1 sm:flex-none text-center"
              >
                <span>Ver Catálogo</span>
                <FlowerMandala className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" color="#FFFFFF" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-4 py-3 sm:px-7 sm:py-4 bg-[#0A0A0A] hover:bg-black text-white font-bold text-[9px] sm:text-xs uppercase tracking-widest rounded-full shadow-md transition-all duration-300 space-x-1.5 sm:space-x-2 group cursor-pointer flex-1 sm:flex-none text-center"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-[#E6007E] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Solicitar Cotización</span>
                <span className="sm:hidden">Cotizar</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
