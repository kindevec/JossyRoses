import React, { useRef, useState, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const Categories = ({ onOpenQuoteModal }) => {
  const carouselRef = useRef(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.category-rose-card')) {
        setActiveCardId(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const index = Math.round(scrollLeft / (clientWidth || 1));
      setCurrentIndex(Math.min(Math.max(index, 0), realRoses.length - 1));
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const scrollAmount = isMobile
        ? carouselRef.current.clientWidth
        : 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Las 13 Rosas Reales Oficiales proporcionadas por el cliente
  const realRoses = [
    {
      id: 'freedom',
      name: 'FREEDOM',
      subtitle: 'Rojo Terciopelo Clásico',
      description: 'Rosa roja icónica de exportación, apertura simétrica y tallo firme.',
      image: '/images/roses/freedom.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Rojas',
      vaseLife: '14-16 días',
    },
    {
      id: 'explorer',
      name: 'EXPLORER',
      subtitle: 'Rojo Carmín Profundo',
      description: 'Borgoña intenso de apertura lenta y máxima vida en florero.',
      image: '/images/roses/explorer.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Rojas',
      vaseLife: '16+ días',
    },
    {
      id: 'mondial',
      name: 'MONDIAL',
      subtitle: 'Blanco Marfil Nupcial',
      description: 'La rosa blanca preferida para bodas de lujo y eventos de gala.',
      image: '/images/roses/mondial.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Blancas',
      vaseLife: '15+ días',
    },
    {
      id: 'playa-blanca',
      name: 'PLAYA BLANCA',
      subtitle: 'Blanco Puro Nieve',
      description: 'Blanco radiante sin matices verdes, pétalos ondulados en copa.',
      image: '/images/roses/playa-blanca.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Blancas',
      vaseLife: '15+ días',
    },
    {
      id: 'white-ohara',
      name: "WHITE O'HARA",
      subtitle: 'Jardín Aromática Blanca',
      description: 'Exclusiva rosa francesa estilo jardín con botón gigante y perfume natural.',
      image: '/images/roses/white-ohara.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Jardín',
      vaseLife: '12-14 días',
    },
    {
      id: 'swan',
      name: 'SWAN',
      subtitle: 'Blanco Seda Elegante',
      description: 'Líneas limpias, porte aristocrático y apertura gradual perfecta.',
      image: '/images/roses/swan.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Blancas',
      vaseLife: '14-16 días',
    },
    {
      id: 'pink-mondial',
      name: 'PINK MONDIAL',
      subtitle: 'Rosa Rubor Nupcial',
      description: 'Rosa pálido delicado con base crema, alta demanda en diseño floral.',
      image: '/images/roses/pink-mondial.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Rosas',
      vaseLife: '15+ días',
    },
    {
      id: 'pink-ohara',
      name: "PINK O'HARA",
      subtitle: 'Jardín Aromática Rosada',
      description: 'Rosa de jardín de botón extra grande con cautivadora fragancia francesa.',
      image: '/images/roses/pink-ohara.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Jardín',
      vaseLife: '12-14 días',
    },
    {
      id: 'hermosa',
      name: 'HERMOSA',
      subtitle: 'Rosa Romántico Clásico',
      description: 'Tono rosa dulce y balanceado con apertura uniforme y tallo recto.',
      image: '/images/roses/hermosa.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Rosas',
      vaseLife: '14-15 días',
    },
    {
      id: 'country-blue',
      name: 'COUNTRY BLUE',
      subtitle: 'Lavanda Azulado Vintage',
      description: 'Exótica variedad lavanda violácea para ramos de autor y alta costura.',
      image: '/images/roses/country-blue.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Exóticas',
      vaseLife: '14+ días',
    },
    {
      id: 'momentum',
      name: 'MOMENTUM',
      subtitle: 'Amarillo Canario Puro',
      description: 'Color amarillo brillante que mantiene su intensidad inalterable.',
      image: '/images/roses/momentum.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Amarillas',
      vaseLife: '14-16 días',
    },
    {
      id: 'radiant',
      name: 'RADIANT',
      subtitle: 'Amarillo Cálido Luminoso',
      description: 'Reflejos dorados cálidos y extraordinaria firmeza en cadena de frío.',
      image: '/images/roses/radiant.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Amarillas',
      vaseLife: '14+ días',
    },
    {
      id: 'melon-expression',
      name: 'MELON EXPRESSION',
      subtitle: 'Durazno Melón Jardín',
      description: 'Pétalos rizados en paleta melón y salmón, la joya para bodas exclusivas.',
      image: '/images/roses/melon-expression.webp',
      specs: 'Tallos 50-70cm • Cajas HB/EB',
      colorBadge: 'Jardín',
      vaseLife: '13-15 días',
    },
  ];

  return (
    <section id="categories" className="pt-[10px] pb-6 md:py-16 bg-[#FDF3F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Title + Real Roses Badge + Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#E6007E]/15 gap-4">
          <div className="text-left space-y-1">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A0A0A] tracking-tight">
                Colecciones de Rosas Reales
              </h2>
              <FlowerMandala className="w-6 h-6 shrink-0" color="#E6007E" spin={true} />
            </div>
            <p className="text-xs text-gray-500 font-sans">
              Las 13 variedades reales de cultivo propio Jossy Roses • Tallos de <strong>50 a 70 cm</strong> de exportación
            </p>
          </div>

          {/* Ver Catálogo Link */}
          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <a
              href="#catalog"
              className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E6007E] hover:text-[#C4006B]"
            >
              <span>VER CATÁLOGO COMPLETO</span>
              <div className="w-6 h-6 rounded-full bg-[#E6007E] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* 13 Real Flowers Horizontal Carousel with Side Floating Arrows */}
        <div className="relative">
          {/* Floating Left Button (Visible on both Mobile and Desktop) */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="flex absolute left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 sm:bg-white text-[#0A0A0A] hover:text-white hover:bg-[#E6007E] border border-gray-200 hover:border-[#E6007E] items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer backdrop-blur-xs"
            title="Variedades anteriores"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Floating Right Button (Visible on both Mobile and Desktop) */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="flex absolute right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 sm:bg-white text-[#0A0A0A] hover:text-white hover:bg-[#E6007E] border border-gray-200 hover:border-[#E6007E] items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer backdrop-blur-xs"
            title="Variedades siguientes"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          <AnimateIn animation="fade-up" duration={700}>
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none gap-4 pb-4 sm:gap-6 scroll-smooth"
            >
            {realRoses.map((item) => {
              const isActive = activeCardId === item.id;

              return (
                <div key={item.id} className="shrink-0 snap-center w-full sm:w-[260px]">
                  <div
                    onClick={() => {
                      const isDesktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                      if (isDesktop || isActive) {
                        onOpenQuoteModal(item.name);
                      } else {
                        setActiveCardId(item.id);
                      }
                    }}
                    className={`category-rose-card group relative cursor-pointer bg-white sm:bg-[#0F050A] rounded-2xl sm:rounded-3xl overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between text-left w-full aspect-square sm:aspect-auto sm:h-[370px] ${
                      isActive
                        ? 'border-[#E6007E] ring-2 ring-[#E6007E]/40'
                        : 'border-[#E6007E]/20 hover:border-[#E6007E]'
                    }`}
                  >
                    {/* 🌹 100% PURE REAL ROSE PHOTO (NO LETTERS / NO OVERLAYS BY DEFAULT) */}
                    <picture className="absolute inset-0 w-full h-full p-2.5 sm:p-0 flex items-center justify-center">
                      <source srcSet={item.image.replace('.webp', '.avif')} type="image/avif" />
                      <source srcSet={item.image} type="image/webp" />
                      <img
                        src={item.image}
                        alt={`Rosa Real ${item.name} Jossy Roses`}
                        width="400"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain sm:object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    </picture>

                    {/* 🌸 LUXURY OVERLAY (Revealed ONLY on mouse hover or on phone tap) */}
                    <div
                      className={`absolute inset-0 w-full h-full p-5 sm:p-5 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/90 to-[#0A0A0A]/70 backdrop-blur-md transition-all duration-400 ease-in-out z-20 flex flex-col justify-between overflow-hidden ${
                        isActive
                          ? 'opacity-100 pointer-events-auto translate-y-0'
                          : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-2 group-hover:translate-y-0'
                      }`}
                    >
                      {/* Top Row: Mandala + Category Tag + Close Button on Mobile */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/20 shrink-0">
                        <div className="flex items-center space-x-2">
                          <FlowerMandala className="w-5 h-5 shrink-0" color="#E6007E" spin={true} />
                          <span className="bg-[#E6007E]/20 text-[#E6007E] text-[10px] sm:text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 sm:px-2 sm:py-0.5 rounded-full border border-[#E6007E]/30">
                            {item.colorBadge}
                          </span>
                        </div>

                        {isActive && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCardId(null);
                            }}
                            className="sm:hidden w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                            title="Cerrar detalles"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Center Content: Name, Subtitle, Description & Lengths (Enlarged for Mobile) */}
                      <div className="space-y-2.5 sm:space-y-1 my-auto">
                        <div>
                          <h3 className="font-serif font-bold text-3xl sm:text-2xl text-white tracking-tight leading-none drop-shadow-md">
                            {item.name}
                          </h3>
                          <p className="text-sm sm:text-xs text-[#E6007E] font-sans font-semibold mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                        <p className="text-xs sm:text-[10.5px] text-white/90 font-sans line-clamp-3 sm:line-clamp-2 leading-relaxed pt-0.5">
                          {item.description}
                        </p>
                        <div className="pt-1">
                          <span className="text-xs sm:text-[9px] text-white/90 font-sans font-semibold bg-white/15 px-3 py-1 sm:px-2 sm:py-0.5 rounded-lg sm:rounded-md border border-white/20 inline-block shadow-xs">
                            {item.specs}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Footer Action */}
                      <div className="pt-3 sm:pt-2 border-t border-white/20 flex items-center justify-between shrink-0">
                        <div>
                          <span className="text-base sm:text-sm font-bold text-white font-serif">{item.vaseLife}</span>
                          <span className="text-[9px] sm:text-[7px] text-white/70 block uppercase tracking-wider font-semibold">Florero</span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenQuoteModal(item.name);
                          }}
                          className="bg-[#E6007E] hover:bg-[#C4006B] text-white px-5 py-2.5 sm:px-3.5 sm:py-2 rounded-full text-xs sm:text-[11px] font-bold flex items-center space-x-2 shadow-lg cursor-pointer transition-all active:scale-95"
                        >
                          <span>Cotizar</span>
                          <ArrowRight className="w-3.5 h-3.5 sm:w-3 sm:h-3 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>

        {/* 📱 Referencia de Paginación y Contador de Variedades en Móvil */}
        <div className="flex items-center justify-between pt-3 pb-1 px-1 sm:hidden">
          {/* Contador Activo y Nombre de Variedad */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[11px] bg-[#E6007E]/10 text-[#E6007E] px-2.5 py-0.5 rounded-full border border-[#E6007E]/20">
              {currentIndex + 1} / {realRoses.length}
            </span>
            <span className="text-gray-800 font-serif font-bold text-xs truncate max-w-[130px]">
              {realRoses[currentIndex]?.name}
            </span>
          </div>

          {/* Puntos de Navegación Interactivos (Mini dots) */}
          <div className="flex items-center space-x-1">
            {realRoses.map((rose, idx) => (
              <button
                key={rose.id}
                type="button"
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.clientWidth;
                    carouselRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
                    setCurrentIndex(idx);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-5 bg-[#E6007E]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a variedad ${rose.name}`}
                title={`Ver ${rose.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};
