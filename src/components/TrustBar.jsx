import React, { useState, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { Sprout, ShieldCheck, Truck, CalendarCheck2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateIn } from './AnimateIn';

// Detailed Multi-layered Rose SVG Icon
const DetailedRoseIcon = ({ className = "w-4 h-4", show = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} transition-all duration-700 ease-out transform ${
      show ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-45'
    }`}
  >
    {/* Green Leaves */}
    <path d="M7 19C3 18 2 13 6 11C10 9 13 13 11 16Z" fill="#2E7D32" />
    <path d="M25 19C29 18 30 13 26 11C22 9 19 13 21 16Z" fill="#2E7D32" />
    {/* Outer Petals Layer */}
    <path d="M16 4C10 4 6 9 6 15C6 21 10 26 16 26C22 26 26 21 26 15C26 9 22 4 16 4Z" fill="#C4006B" />
    {/* Middle Petals Layer */}
    <path d="M16 7C12 7 9 10 9 15C9 19 12 23 16 23C20 23 23 19 23 15C23 10 20 7 16 7Z" fill="#E6007E" />
    {/* Inner Petal Layers */}
    <path d="M16 9.5C13.5 9.5 11.5 11.5 11.5 15C11.5 18 13.5 20.5 16 20.5C18.5 20.5 20.5 18 20.5 15C20.5 11.5 18.5 9.5 16 9.5Z" fill="#FF33A3" />
    <path d="M16 12C14.5 12 13.5 13 13.5 15C13.5 17 14.5 18 16 18C17.5 18 18.5 17 18.5 15C18.5 13 17.5 12 16 12Z" fill="#FFF0F5" />
    <circle cx="16" cy="15" r="1.8" fill="#E6007E" />
  </svg>
);

export const TrustBar = () => {
  const [cardsEntered, setCardsEntered] = useState(true);
  const [rosesGrowing, setRosesGrowing] = useState(true);
  const [roseStage, setRoseStage] = useState(5);
  const [bgFilled, setBgFilled] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Only run multi-stage timer sequence on desktop (width >= 640px)
    if (window.innerWidth < 640) {
      setCardsEntered(true);
      setBgFilled(true);
      return;
    }

    const timer1 = setTimeout(() => setCardsEntered(true), 150);
    const timer2 = setTimeout(() => { setRosesGrowing(true); setRoseStage(1); }, 1100);
    const timer3 = setTimeout(() => setRoseStage(2), 1400);
    const timer4 = setTimeout(() => setRoseStage(3), 1700);
    const timer5 = setTimeout(() => setRoseStage(4), 2000);
    const timer6 = setTimeout(() => setRoseStage(5), 2300);
    const timer7 = setTimeout(() => setBgFilled(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  const trustItems = [
    {
      icon: Sprout,
      title: 'DIRECTO DEL CULTIVO',
      description: 'Cosechadas bajo pedido con cadena de frío garantizada.',
    },
    {
      icon: ShieldCheck,
      title: 'CALIDAD EXPORTACIÓN',
      description: 'Selección estricta de botón y grosor de tallo.',
    },
    {
      icon: Truck,
      title: 'ENTREGA MAYORISTA',
      description: 'Despachos consolidados a todo el mundo.',
    },
    {
      icon: CalendarCheck2,
      title: 'VARIEDAD TODO EL AÑO',
      description: 'Disponibilidad constante de 30+ variedades.',
    },
  ];

  return (
    <section className="bg-transparent mt-4 sm:-mt-20 md:-mt-24 pb-0 sm:pb-8 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container with Vertically Centered Left & Right Arrows */}
        <div className="flex items-center justify-center">
          
          {/* Hasfarm-Style 4 Floating Cards Container */}
          <AnimateIn animation="fade-up" duration={700}>
            <div className="relative flex flex-row flex-nowrap sm:flex-wrap items-center justify-center gap-[10px] w-full sm:w-auto px-2 sm:px-0">
            
            {/* 🏹 Left Arrow Image */}
            <img
              src="/Felcha.webp"
              alt="Flecha indicadora izquierda"
              className={`hidden xl:block absolute right-full mr-[10px] top-1/2 -translate-y-1/2 w-[600px] max-w-none h-auto object-contain pointer-events-none drop-shadow-md select-none z-20 transition-all duration-1000 ease-out ${
                cardsEntered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
              }`}
            />

            {/* 🏹 Right Arrow Image (180° Rotated) */}
            <img
              src="/Felcha.webp"
              alt="Flecha indicadora derecha"
              className={`hidden xl:block absolute left-full ml-[10px] top-1/2 -translate-y-1/2 w-[600px] max-w-none h-auto object-contain pointer-events-none drop-shadow-md select-none z-20 rotate-180 transition-all duration-1000 ease-out ${
                cardsEntered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
              }`}
            />

            {trustItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeCard === index;
              return (
                <motion.div
                  layout
                  transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  key={index}
                  onClick={() => { if (window.innerWidth < 640) setActiveCard(isActive ? null : index); }}
                  className={`group relative h-[58px] sm:w-[175px] sm:h-[175px] py-1.5 px-2 sm:p-3.5 rounded-2xl border shadow-sm sm:shadow-xl sm:hover:shadow-2xl sm:hover:-translate-y-1 flex flex-row sm:flex-col items-center justify-center text-center shrink-0 overflow-hidden cursor-pointer ${
                    isActive ? 'max-sm:w-[195px] bg-[#FAF0F3] border-[#E6007E]' : 'max-sm:w-[50px] bg-white/95 border-[#E6007E]/20'
                  } ${bgFilled ? 'bg-[#FAF0F3] border-[#E6007E]/35' : ''}`}
                >
                  {/* SVG Animated Rose Vine Border - Grows around perimeter AFTER cards position */}
                  {rosesGrowing && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-visible z-10 hidden sm:block">
                      <rect x="1" y="1" width="99%" height="99%" rx="16" ry="16" fill="none" stroke="#E6007E" strokeWidth="2.5" strokeDasharray="800" strokeDashoffset="800" className="animate-draw-border" />
                    </svg>
                  )}

                  {/* Detailed Blooming Rose Flowers popping along the margin path (Desktop only) */}
                  {rosesGrowing && (
                    <div className="hidden sm:block">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 drop-shadow-sm">
                        <DetailedRoseIcon className="w-5 h-5" show={roseStage >= 1} />
                      </div>
                      <div className="absolute top-0 left-2 -translate-y-2.5 z-20 drop-shadow-sm">
                        <DetailedRoseIcon className="w-4.5 h-4.5" show={roseStage >= 2} />
                      </div>
                      <div className="absolute top-0 right-2 -translate-y-2.5 z-20 drop-shadow-sm">
                        <DetailedRoseIcon className="w-4.5 h-4.5" show={roseStage >= 3} />
                      </div>
                      <div className="absolute bottom-0 right-2 translate-y-2.5 z-20 drop-shadow-sm">
                        <DetailedRoseIcon className="w-4.5 h-4.5" show={roseStage >= 4} />
                      </div>
                      <div className="absolute bottom-0 left-2 translate-y-2.5 z-20 drop-shadow-sm">
                        <DetailedRoseIcon className="w-4.5 h-4.5" show={roseStage >= 5} />
                      </div>
                    </div>
                  )}

                  {/* Icon in Circular Blush Background */}
                  <div className={`rounded-full border flex items-center justify-center text-[#E6007E] shrink-0 group-hover:bg-[#E6007E] group-hover:text-white shadow-xs z-20 ${
                    bgFilled ? 'bg-white border-[#E6007E]/30' : 'bg-[#FDF3F6] border-[#E6007E]/20'
                  } w-9 h-9 sm:w-16 sm:h-16`}>
                    <Icon className="w-4.5 h-4.5 sm:w-8 sm:h-8" />
                  </div>

                  {/* Mobile Expanded Text (Reveals when active) */}
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="sm:hidden text-left pl-2 pr-1 z-20 flex-1 overflow-hidden"
                    >
                      <h3 className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A] leading-tight line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[9px] font-sans text-gray-600 leading-tight line-clamp-2 mt-0.5">
                        {item.description}
                      </p>
                    </motion.div>
                  )}

                  {/* Desktop Content Always Visible */}
                  <div className="hidden sm:block w-full px-1 z-20 mt-2">
                    <h3 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#E6007E] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-sans text-gray-600 leading-snug mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          </AnimateIn>



        </div>

      </div>
    </section>
  );
};
