import React from 'react';
import { FlowerMandala } from './FlowerMandala';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const Categories = ({ onOpenQuoteModal }) => {
  const collections = [
    {
      id: 'reds',
      name: 'ROSAS ROJAS',
      subtitle: 'Freedom & Explorer',
      description: 'Icono de pasión y elegancia clásica.',
      image: '/images/cat-red.webp',
      hoverImage: '/images/cat-red-hover.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
    },
    {
      id: 'pinks',
      name: 'ROSAS ROSAS & PASTEL',
      subtitle: 'Pink Floyd & Sweet Akito',
      description: 'Tonos románticos ideales para bodas.',
      image: '/images/cat-pink.webp',
      hoverImage: '/images/cat-pink-hover.webp',
      specs: 'Tallos 50-80cm • Cajas HB/EB',
    },
    {
      id: 'spray',
      name: 'SPRAY ROSES',
      subtitle: 'Ramificadas Multi-botón',
      description: 'Múltiples botones por tallo para arreglos.',
      image: '/images/cat-spray.webp',
      hoverImage: '/images/cat-spray-hover.webp',
      specs: 'Tallos 40-70cm • Cajas HB/EB',
    },
    {
      id: 'bicolor',
      name: 'BICOLORES & EXÓTICAS',
      subtitle: 'High & Magic Dual Tone',
      description: 'Combinaciones vibrantes de alto impacto.',
      image: '/images/cat-bicolor.webp',
      hoverImage: '/images/cat-bicolor-hover.webp',
      specs: 'Tallos 50-80cm • Cajas HB/EB',
    },
  ];

  return (
    <section id="categories" className="pt-[10px] pb-0 md:py-16 bg-[#FDF3F6] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hasfarm-Style Section Header: Title + Mandala + View All Action */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#E6007E]/15">
          <div className="flex items-center space-x-3 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A0A0A] tracking-tight">
              Colecciones Mayoristas
            </h2>
            <FlowerMandala className="w-6 h-6" color="#E6007E" spin={true} />
          </div>

          <a
            href="#catalog"
            className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E6007E] hover:text-[#C4006B]"
          >
            <span>VER TODAS</span>
            <div className="w-6 h-6 rounded-full bg-[#E6007E] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* 4 Cards Horizontal Carousel on Mobile / Grid on Desktop */}
        <AnimateIn animation="fade-up" duration={700}>
          <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none gap-3 pb-3 -mx-4 px-4 scroll-pl-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
            {collections.map((item) => (
              <div key={item.id} className="shrink-0 snap-start w-[187px] sm:w-auto">
                <div
                  onClick={onOpenQuoteModal}
                  className="group relative cursor-pointer bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6007E]/20 shadow-sm hover:shadow-2xl hover:border-[#E6007E] transition-all duration-300 flex flex-col justify-between text-left w-[187px] h-[294.5px] sm:w-full sm:h-[400px]"
                >
                {/* Full-Bleed Primary Image */}
                <div className="relative h-[195px] sm:h-72 w-full overflow-hidden bg-gray-100 aspect-[4/3]">
                  <picture>
                    <source srcSet={item.image.replace('.webp', '.avif')} type="image/avif" />
                    <source srcSet={item.image} type="image/webp" />
                    <img
                      src={item.image}
                      alt={item.name}
                      width="400"
                      height="288"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  <span className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 bg-[#0A0A0A]/95 text-white text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow border border-white/20 z-10">
                    {item.specs}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="p-3 sm:p-5 flex items-center justify-between bg-white z-10 flex-1">
                  <div className="min-w-0 pr-1">
                    <h3 className="font-serif font-bold text-xs sm:text-lg text-[#0A0A0A] group-hover:text-[#E6007E] transition-colors leading-tight line-clamp-2 sm:line-clamp-none">
                      {item.name}
                    </h3>
                    <span className="text-[9.5px] sm:text-xs text-gray-500 font-sans block mt-0.5 font-medium truncate">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#E6007E] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#0A0A0A] transition-all shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* 🌸 Top-Right Expanding Corner Layer (::before effect) */}
                <div className="absolute top-0 right-0 w-[20%] h-[20%] group-hover:w-full group-hover:h-full rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-[100%] group-hover:rounded-2xl sm:group-hover:rounded-3xl transition-all duration-500 ease-in-out overflow-hidden z-20 pointer-events-none bg-[#E6007E]/20 border-b border-l border-[#E6007E]/30 group-hover:border-none opacity-80 group-hover:opacity-0" />

                {/* 🌸 Bottom-Left Expanding Corner Layer with Second Image (::after effect) */}
                <div className="absolute bottom-0 left-0 w-[20%] h-[20%] group-hover:w-full group-hover:h-full rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-[100%] group-hover:rounded-2xl sm:group-hover:rounded-3xl transition-all duration-500 ease-in-out overflow-hidden z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-2xl flex flex-col justify-between p-3 sm:p-6 bg-[#0A0A0A] pointer-events-none group-hover:pointer-events-auto">
                  {/* Second Generated Image Background */}
                  <img
                    src={item.hoverImage}
                    alt={`${item.name} vista detallada`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-black/30" />

                  {/* Top Header Badge on Hover Image */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="bg-[#E6007E] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow border border-white/20">
                      VER DETALLE & PRECIOS
                    </span>
                    <FlowerMandala className="w-5 h-5" color="#FFFFFF" spin={true} />
                  </div>

                  {/* Bottom Hover Content */}
                  <div className="relative z-10 text-left space-y-1">
                    <h3 className="font-serif font-bold text-xl text-white tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-pink-200 font-sans font-medium">
                      {item.subtitle}
                    </p>
                    <div className="pt-2 flex items-center space-x-2 text-white text-xs font-bold uppercase tracking-wider">
                      <span>Cotizar Ahora</span>
                      <div className="w-6 h-6 rounded-full bg-[#E6007E] flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      </div>
    </section>
  );
};
