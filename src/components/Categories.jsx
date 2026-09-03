import React, { useRef } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const Categories = ({ onOpenQuoteModal }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Rojas',
      vaseLife: '14-16 días',
    },
    {
      id: 'explorer',
      name: 'EXPLORER',
      subtitle: 'Rojo Carmín Profundo',
      description: 'Borgoña intenso de apertura lenta y máxima vida en florero.',
      image: '/images/roses/explorer.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Rojas',
      vaseLife: '16+ días',
    },
    {
      id: 'mondial',
      name: 'MONDIAL',
      subtitle: 'Blanco Marfil Nupcial',
      description: 'La rosa blanca preferida para bodas de lujo y eventos de gala.',
      image: '/images/roses/mondial.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Blancas',
      vaseLife: '15+ días',
    },
    {
      id: 'playa-blanca',
      name: 'PLAYA BLANCA',
      subtitle: 'Blanco Puro Nieve',
      description: 'Blanco radiante sin matices verdes, pétalos ondulados en copa.',
      image: '/images/roses/playa-blanca.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Blancas',
      vaseLife: '15+ días',
    },
    {
      id: 'white-ohara',
      name: "WHITE O'HARA",
      subtitle: 'Jardín Aromática Blanca',
      description: 'Exclusiva rosa francesa estilo jardín con botón gigante y perfume natural.',
      image: '/images/roses/white-ohara.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Jardín',
      vaseLife: '12-14 días',
    },
    {
      id: 'swan',
      name: 'SWAN',
      subtitle: 'Blanco Seda Elegante',
      description: 'Líneas limpias, porte aristocrático y apertura gradual perfecta.',
      image: '/images/roses/swan.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Blancas',
      vaseLife: '14-16 días',
    },
    {
      id: 'pink-mondial',
      name: 'PINK MONDIAL',
      subtitle: 'Rosa Rubor Nupcial',
      description: 'Rosa pálido delicado con base crema, alta demanda en diseño floral.',
      image: '/images/roses/pink-mondial.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Rosas',
      vaseLife: '15+ días',
    },
    {
      id: 'pink-ohara',
      name: "PINK O'HARA",
      subtitle: 'Jardín Aromática Rosada',
      description: 'Rosa de jardín de botón extra grande con cautivadora fragancia francesa.',
      image: '/images/roses/pink-ohara.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Jardín',
      vaseLife: '12-14 días',
    },
    {
      id: 'hermosa',
      name: 'HERMOSA',
      subtitle: 'Rosa Romántico Clásico',
      description: 'Tono rosa dulce y balanceado con apertura uniforme y tallo recto.',
      image: '/images/roses/hermosa.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Rosas',
      vaseLife: '14-15 días',
    },
    {
      id: 'country-blue',
      name: 'COUNTRY BLUE',
      subtitle: 'Lavanda Azulado Vintage',
      description: 'Exótica variedad lavanda violácea para ramos de autor y alta costura.',
      image: '/images/roses/country-blue.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Exóticas',
      vaseLife: '14+ días',
    },
    {
      id: 'momentum',
      name: 'MOMENTUM',
      subtitle: 'Amarillo Canario Puro',
      description: 'Color amarillo brillante que mantiene su intensidad inalterable.',
      image: '/images/roses/momentum.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Amarillas',
      vaseLife: '14-16 días',
    },
    {
      id: 'radiant',
      name: 'RADIANT',
      subtitle: 'Amarillo Cálido Luminoso',
      description: 'Reflejos dorados cálidos y extraordinaria firmeza en cadena de frío.',
      image: '/images/roses/radiant.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
      colorBadge: 'Amarillas',
      vaseLife: '14+ días',
    },
    {
      id: 'melon-expression',
      name: 'MELON EXPRESSION',
      subtitle: 'Durazno Melón Jardín',
      description: 'Pétalos rizados en paleta melón y salmón, la joya para bodas exclusivas.',
      image: '/images/roses/melon-expression.webp',
      specs: 'Tallos 50-90cm • Cajas HB/EB',
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
              Las 13 variedades reales de cultivo propio Jossy Roses • Tallos de <strong>50 a 90 cm</strong> de exportación
            </p>
          </div>

          {/* Carousel Navigation Buttons (Desktop) & Ver Catálogo Link */}
          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-[#E6007E] text-gray-600 hover:text-[#E6007E] bg-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title="Variedades anteriores"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-[#E6007E] text-gray-600 hover:text-[#E6007E] bg-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title="Variedades siguientes"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

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

        {/* 13 Real Flowers Horizontal Carousel */}
        <AnimateIn animation="fade-up" duration={700}>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none gap-3.5 pb-4 -mx-4 px-4 scroll-pl-4 sm:mx-0 sm:px-0 sm:gap-6"
          >
            {realRoses.map((item) => (
              <div key={item.id} className="shrink-0 snap-start w-[200px] sm:w-[270px]">
                <div
                  onClick={() => onOpenQuoteModal(item.name)}
                  className="group relative cursor-pointer bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6007E]/20 shadow-sm hover:shadow-2xl hover:border-[#E6007E] transition-all duration-300 flex flex-col justify-between text-left w-full h-[310px] sm:h-[400px]"
                >
                  {/* Full-Bleed Real Image with Picture Tag */}
                  <div className="relative h-[210px] sm:h-72 w-full overflow-hidden bg-gray-900 aspect-square">
                    <picture>
                      <source srcSet={item.image.replace('.webp', '.avif')} type="image/avif" />
                      <source srcSet={item.image} type="image/webp" />
                      <img
                        src={item.image}
                        alt={`Rosa Real ${item.name} Jossy Roses`}
                        width="400"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity pointer-events-none" />

                    {/* Top Specs Badge */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 flex items-center gap-1.5 z-10">
                      <span className="bg-[#0A0A0A]/95 text-white text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow border border-white/20">
                        {item.specs}
                      </span>
                    </div>

                    <span className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 bg-[#E6007E] text-white text-[7px] sm:text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow border border-white/20 z-10">
                      {item.colorBadge}
                    </span>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="p-3 sm:p-5 flex items-center justify-between bg-white z-10 flex-1">
                    <div className="min-w-0 pr-1">
                      <h3 className="font-serif font-bold text-sm sm:text-lg text-[#0A0A0A] group-hover:text-[#E6007E] transition-colors leading-tight line-clamp-1">
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

                  {/* Corner Visual Accents */}
                  <div className="absolute top-0 right-0 w-[20%] h-[20%] group-hover:w-full group-hover:h-full rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-[100%] group-hover:rounded-2xl sm:group-hover:rounded-3xl transition-all duration-500 ease-in-out overflow-hidden z-20 pointer-events-none bg-[#E6007E]/20 border-b border-l border-[#E6007E]/30 group-hover:border-none opacity-80 group-hover:opacity-0" />

                  {/* Detailed Hover Overlay */}
                  <div className="absolute bottom-0 left-0 w-[20%] h-[20%] group-hover:w-full group-hover:h-full rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-[100%] group-hover:rounded-2xl sm:group-hover:rounded-3xl transition-all duration-500 ease-in-out overflow-hidden z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-2xl flex flex-col justify-between p-3 sm:p-6 bg-[#0A0A0A] pointer-events-none group-hover:pointer-events-auto">
                    <picture className="absolute inset-0 w-full h-full">
                      <source srcSet={item.image.replace('.webp', '.avif')} type="image/avif" />
                      <source srcSet={item.image} type="image/webp" />
                      <img
                        src={item.image}
                        alt={`${item.name} vista detallada`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/50 to-black/40" />

                    {/* Top Header Badge on Hover Image (NO PRECIOS) */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="bg-[#E6007E] text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow border border-white/20">
                        ROSA 100% REAL • EXPORTACIÓN
                      </span>
                      <FlowerMandala className="w-5 h-5" color="#FFFFFF" spin={true} />
                    </div>

                    {/* Bottom Hover Content */}
                    <div className="relative z-10 text-left space-y-1">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-pink-200 font-sans font-medium">
                        {item.subtitle} • {item.vaseLife}
                      </p>
                      <p className="text-[10px] text-white/85 font-sans line-clamp-2 leading-relaxed hidden sm:block">
                        {item.description}
                      </p>
                      <div className="pt-2 flex items-center space-x-2 text-white text-xs font-bold uppercase tracking-wider">
                        <span>Cotizar Tallo</span>
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
