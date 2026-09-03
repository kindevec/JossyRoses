import React, { useState, useRef, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { ChevronLeft, ChevronRight, Search, Filter, X, Check, RotateCcw, ArrowRight, Ruler } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const FeaturedVarieties = ({ onSelectVarietyForQuote }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCardId, setActiveCardId] = useState(null);
  const filterDropdownRef = useRef(null);

  // Close filter dropdown and active touch card on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (!event.target.closest('.rose-catalog-card')) {
        setActiveCardId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // 13 Rosas Reales de Cultivo Propio Jossy Roses
  const varieties = [
    {
      id: 'freedom',
      name: 'Freedom',
      colorCategory: 'red',
      colorName: 'Rojo Terciopelo Clásico',
      image: '/images/roses/freedom.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.0 - 6.5 cm',
      vaseLife: '14-16 días',
      description: 'La rosa roja por excelencia de exportación ecuatoriana. Botón de apertura simétrica, textura aterciopelada y tallos firmes.',
      bestseller: true,
    },
    {
      id: 'explorer',
      name: 'Explorer',
      colorCategory: 'red',
      colorName: 'Rojo Carmín Profundo',
      image: '/images/roses/explorer.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.3 - 6.8 cm',
      vaseLife: '16+ días',
      description: 'Rosa roja de tono borgoña profundo con apertura pausada y extraordinaria vida en florero. Gran resistencia para viajes de larga distancia.',
      bestseller: true,
    },
    {
      id: 'mondial',
      name: 'Mondial',
      colorCategory: 'white',
      colorName: 'Blanco Marfil Nupcial',
      image: '/images/roses/mondial.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '5.8 - 6.2 cm',
      vaseLife: '15+ días',
      description: 'La rosa blanca nupcial más cotizada para eventos de gala. Apertura envolvente con suaves reflejos crema y porte majestuoso.',
      bestseller: true,
    },
    {
      id: 'playa-blanca',
      name: 'Playa Blanca',
      colorCategory: 'white',
      colorName: 'Blanco Puro Nieve',
      image: '/images/roses/playa-blanca.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.0 - 6.5 cm',
      vaseLife: '15+ días',
      description: 'Blanco radiante absoluto sin matices verdes. Pétalos suaves de gran volumen que abren en una copa perfectamente redondeada.',
      bestseller: true,
    },
    {
      id: 'white-ohara',
      name: "White O'Hara",
      colorCategory: 'white',
      colorName: 'Jardín Aromática Blanca',
      image: '/images/roses/white-ohara.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.8 - 7.2 cm',
      vaseLife: '12-14 días',
      description: 'Exclusiva rosa francesa estilo jardín con botón extragrande, decenas de pétalos rizados y una fragancia natural embriagadora.',
      bestseller: true,
    },
    {
      id: 'swan',
      name: 'Swan',
      colorCategory: 'white',
      colorName: 'Blanco Seda Elegante',
      image: '/images/roses/swan.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '5.8 - 6.2 cm',
      vaseLife: '14-16 días',
      description: 'Líneas pulcras y porte aristocrático. Botón firme y apertura gradual muy demandada para composiciones florales contemporáneas.',
      bestseller: false,
    },
    {
      id: 'pink-mondial',
      name: 'Pink Mondial',
      colorCategory: 'pink',
      colorName: 'Rosa Rubor Delicado',
      image: '/images/roses/pink-mondial.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '5.8 - 6.4 cm',
      vaseLife: '15+ días',
      description: 'Tono rosa pálido con matices crema en la base. Elegancia sutil y apertura simétrica, símbolo de romance en bodas de destino.',
      bestseller: true,
    },
    {
      id: 'pink-ohara',
      name: "Pink O'Hara",
      colorCategory: 'pink',
      colorName: 'Jardín Aromática Rosada',
      image: '/images/roses/pink-ohara.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '7.0 - 7.5 cm',
      vaseLife: '12-14 días',
      description: 'La reina indiscutible de las rosas de jardín aromáticas. Pétalos exteriores en rosa suave con centro rubor y perfume floral envolvente.',
      bestseller: true,
    },
    {
      id: 'hermosa',
      name: 'Hermosa',
      colorCategory: 'pink',
      colorName: 'Rosa Romántico Clásico',
      image: '/images/roses/hermosa.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '5.7 - 6.2 cm',
      vaseLife: '14-15 días',
      description: 'Rosa tradicional de tonalidad dulce y balanceada. Destaca por su follaje verde brillante, tallo erecto y floración armoniosa.',
      bestseller: false,
    },
    {
      id: 'country-blue',
      name: 'Country Blue',
      colorCategory: 'bicolor',
      colorName: 'Lavanda Azulado Vintage',
      image: '/images/roses/country-blue.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.0 - 6.5 cm',
      vaseLife: '14+ días',
      description: 'Variedad exótica de tonalidad lavanda con matices violáceos fríos estilo vintage. Muy codiciada para ramos de autor y alta costura floral.',
      bestseller: false,
    },
    {
      id: 'momentum',
      name: 'Momentum',
      colorCategory: 'yellow',
      colorName: 'Amarillo Canario Brillante',
      image: '/images/roses/momentum.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.0 - 6.5 cm',
      vaseLife: '14-16 días',
      description: 'Rosa amarilla pura y radiante que conserva su intensidad lumínica sin decolorarse durante toda su vida en florero.',
      bestseller: false,
    },
    {
      id: 'radiant',
      name: 'Radiant',
      colorCategory: 'yellow',
      colorName: 'Amarillo Cálido Luminoso',
      image: '/images/roses/radiant.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '5.8 - 6.3 cm',
      vaseLife: '14+ días',
      description: 'Matiz dorado cálido y textura sedosa. Excelente comportamiento en cadena de frío y transporte aéreo internacional.',
      bestseller: false,
    },
    {
      id: 'melon-expression',
      name: 'Melon Expression',
      colorCategory: 'orange',
      colorName: 'Durazno Melón Jardín',
      image: '/images/roses/melon-expression.webp',
      stemLengths: '50, 60, 70, 80, 90 cm',
      stemList: ['50', '60', '70', '80', '90'],
      bloomSize: '6.5 - 7.0 cm',
      vaseLife: '13-15 días',
      description: 'Rosa estilo jardín con pétalos rizados en una paleta cálida de melón, durazno y salmón. Altamente requerida en bodas de primavera y verano.',
      bestseller: true,
    },
  ];

  const filterTabs = [
    { key: 'all', label: 'Todas las Variedades' },
    { key: 'red', label: 'Rojas' },
    { key: 'white', label: 'Blancas & Crema' },
    { key: 'pink', label: 'Rosas & Pastel' },
    { key: 'yellow', label: 'Amarillas' },
    { key: 'orange', label: 'Durazno & Naranja' },
    { key: 'bicolor', label: 'Lavanda & Exóticas' },
  ];

  // Mostramos todas las variedades en la vista inicial para evitar cortes incómodos
  const itemsPerPage = 16;

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Filter varieties by active category AND search query
  const filteredVarieties = varieties.filter((item) => {
    const matchesCategory = activeFilter === 'all' || item.colorCategory === activeFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.colorName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredVarieties.length / itemsPerPage);
  const paginatedVarieties = filteredVarieties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const activeFilterObj = filterTabs.find((t) => t.key === activeFilter);

  return (
    <section id="catalog" className="pt-8 pb-12 sm:py-16 bg-[#FDF3F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Catalog Header: Title + Subtitle + Search Bar + Filter Button */}
        <AnimateIn animation="fade-down" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 pb-4 border-b border-[#E6007E]/15 gap-4">
            
            {/* Title & Count Badge */}
            <div className="space-y-1 text-left">
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A0A0A] tracking-tight">
                  Catálogo de Rosas Reales
                </h2>
                <FlowerMandala className="w-6 h-6 shrink-0" color="#E6007E" spin={true} />
                <span className="bg-[#E6007E]/10 text-[#E6007E] border border-[#E6007E]/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                  {filteredVarieties.length} Variedades
                </span>
              </div>
              <p className="text-xs text-gray-500 font-sans flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#E6007E]"></span>
                Rosas 100% reales de cultivo propio • Longitudes de tallo disponibles: <strong>50, 60, 70, 80, 90 cm</strong>
              </p>
            </div>

            {/* Search Bar & Filter Dropdown */}
            <div className="flex flex-row items-center gap-2.5 w-full sm:w-auto">
              
              {/* Search Input with Examples */}
              <div className="relative flex-1 min-w-0 sm:min-w-[320px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Buscar variedad (ej: Freedom, Mondial, Swan...)"
                  className="w-full pl-10 pr-9 py-2.5 text-xs rounded-full border border-[#E6007E]/20 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/20 outline-none bg-white font-sans text-[#0A0A0A] placeholder-gray-400 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded-full"
                    title="Limpiar búsqueda"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Filter Dropdown Button */}
              <div className="relative shrink-0" ref={filterDropdownRef}>
                
                {/* 📱 MOBILE: Compact Icon Button right of Search Bar */}
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`sm:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm cursor-pointer border ${
                    activeFilter !== 'all'
                      ? 'bg-[#E6007E] text-white border-[#E6007E] shadow-md'
                      : 'bg-white text-[#E6007E] border-[#E6007E]/30 hover:border-[#E6007E] hover:bg-[#FAF0F3]'
                  }`}
                  title="Filtrar categorías"
                >
                  <Filter className="w-4 h-4" />
                </button>

                {/* 💻 DESKTOP: Full Text Filter Button */}
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`hidden sm:flex items-center justify-between space-x-2.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer border ${
                    activeFilter !== 'all'
                      ? 'bg-[#E6007E] text-white border-[#E6007E] shadow-md shadow-[#E6007E]/20'
                      : 'bg-white text-[#0A0A0A] border-[#E6007E]/30 hover:border-[#E6007E] hover:bg-[#FAF0F3]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Filter className={`w-3.5 h-3.5 ${activeFilter !== 'all' ? 'text-white' : 'text-[#E6007E]'}`} />
                    <span>{activeFilterObj?.label || 'Filtrar por Color'}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isFilterOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Filter Dropdown Menu */}
                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#E6007E]/20 py-2 z-40 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Categorías de Color
                      </span>
                      {activeFilter !== 'all' && (
                        <button
                          onClick={handleResetFilters}
                          className="text-[10px] text-[#E6007E] hover:underline font-semibold flex items-center space-x-1"
                        >
                          <RotateCcw className="w-2.5 h-2.5" />
                          <span>Restablecer</span>
                        </button>
                      )}
                    </div>

                    <div className="py-1 max-h-64 overflow-y-auto">
                      {filterTabs.map((tab) => {
                        const count =
                          tab.key === 'all'
                            ? varieties.length
                            : varieties.filter((v) => v.colorCategory === tab.key).length;

                        const isSelected = activeFilter === tab.key;

                        return (
                          <button
                            key={tab.key}
                            onClick={() => handleFilterChange(tab.key)}
                            className={`w-full px-4 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-[#FAF0F3] text-[#E6007E] font-bold'
                                : 'text-gray-700 hover:bg-gray-50 font-medium'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#E6007E]" />}
                              <span className={isSelected ? '' : 'pl-5'}>{tab.label}</span>
                            </div>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                isSelected
                                  ? 'bg-[#E6007E] text-white'
                                  : 'bg-gray-100 text-gray-500'
                              }`}
                            >
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </AnimateIn>

        {/* Active Filter Chips (if any search or filter active) */}
        {(activeFilter !== 'all' || searchQuery) && (
          <div className="flex items-center space-x-2 mb-6 pb-2 text-xs flex-wrap gap-y-2">
            <span className="text-gray-500 font-medium">Filtros activos:</span>
            
            {activeFilter !== 'all' && (
              <span className="inline-flex items-center space-x-1.5 bg-[#E6007E]/10 text-[#E6007E] px-3 py-1 rounded-full font-bold text-[11px] border border-[#E6007E]/20">
                <span>Categoría: {activeFilterObj?.label}</span>
                <button onClick={() => handleFilterChange('all')} className="hover:text-[#C4006B]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center space-x-1.5 bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-bold text-[11px] border border-gray-200">
                <span>Búsqueda: "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:text-black">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-[11px] text-gray-500 hover:text-[#E6007E] underline font-medium ml-2"
            >
              Limpiar todos
            </button>
          </div>
        )}

        {/* No Results Empty State */}
        {filteredVarieties.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E6007E]/20 shadow-sm max-w-md mx-auto my-12">
            <Search className="w-12 h-12 text-[#E6007E]/40 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl text-[#0A0A0A] mb-2">
              No se encontraron variedades
            </h3>
            <p className="text-xs text-gray-500 font-sans mb-6">
              No encontramos coincidencias para "{searchQuery}" {activeFilter !== 'all' ? `en la categoría ${activeFilterObj?.label}` : ''}.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#E6007E] hover:bg-[#C4006B] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver Todas las Variedades</span>
            </button>
          </div>
        ) : (
          /* 📱 MOBILE: 2-Column Vertical Grid / 💻 DESKTOP: 4-Col Grid */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 min-h-[300px]">
            {paginatedVarieties.map((item, index) => {
              const isActive = activeCardId === item.id;

              return (
                <AnimateIn key={item.id} animation="fade-up" delay={(index % 4) * 80} duration={500} className="w-full">
                  <div
                    onClick={() => {
                      const isDesktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                      if (isDesktop || isActive) {
                        onSelectVarietyForQuote(item.name);
                      } else {
                        setActiveCardId(item.id);
                      }
                    }}
                    className={`rose-catalog-card group relative w-full h-[320px] sm:h-[370px] lg:h-[390px] overflow-hidden rounded-2xl sm:rounded-3xl border bg-[#0F050A] shadow-md transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer text-left ${
                      isActive
                        ? 'border-[#E6007E] ring-2 ring-[#E6007E]/40'
                        : 'border-[#E6007E]/15 hover:border-[#E6007E]'
                    }`}
                  >
                    {/* 🌹 100% PURE REAL ROSE PHOTO (NO TEXT, NO LETTERS, NO OVERLAYS BY DEFAULT) */}
                    <picture className="absolute inset-0 w-full h-full">
                      <source srcSet={item.image.replace('.webp', '.avif')} type="image/avif" />
                      <source srcSet={item.image} type="image/webp" />
                      <img
                        src={item.image}
                        alt={`Rosa ${item.name} Jossy Roses`}
                        width="800"
                        height="800"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </picture>

                    {/* 🌸 LUXURY HOVER (Desktop) & ONE-TOUCH (Mobile) OVERLAY */}
                    <div
                      className={`absolute inset-0 w-full h-full p-3.5 sm:p-5 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/85 to-[#0A0A0A]/60 backdrop-blur-md transition-all duration-400 ease-in-out z-20 flex flex-col justify-between overflow-hidden ${
                        isActive
                          ? 'opacity-100 pointer-events-auto translate-y-0'
                          : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-2 group-hover:translate-y-0'
                      }`}
                    >
                      {/* Top Header inside overlay: Mandala + Real Rose Tag + Close Button */}
                      <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-white/15 shrink-0">
                        <div className="flex items-center space-x-1.5 sm:space-x-2">
                          <FlowerMandala className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" color="#E6007E" spin={true} />
                          <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#E6007E] bg-[#E6007E]/10 px-2 py-0.5 rounded-full border border-[#E6007E]/20">
                            Rosa Real
                          </span>
                        </div>

                        <span className="text-[8px] sm:text-[9px] text-white/70 font-semibold bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                          {item.badge}
                        </span>

                        {/* Close button for touch devices */}
                        {isActive && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCardId(null);
                            }}
                            className="sm:hidden w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                            title="Cerrar detalles"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Center Info: Name, Color, Description & Stem Lengths */}
                      <div className="space-y-1 sm:space-y-1.5 my-auto">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight leading-tight drop-shadow-sm">
                            {item.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#E6007E] font-medium font-sans mt-0.5 truncate">
                            {item.colorName}
                          </p>
                        </div>

                        <p className="text-[9.5px] sm:text-xs text-white/80 font-sans line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Stem Length Badges (NO PRICES!) */}
                        <div className="pt-1">
                          <span className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider text-white/70 block mb-1 flex items-center gap-1">
                            <Ruler className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E6007E]" />
                            Tallos Disponibles:
                          </span>
                          <div className="flex items-center gap-1 flex-wrap">
                            {item.stemList.map((len) => (
                              <span
                                key={len}
                                className="bg-white/15 border border-white/20 text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md"
                              >
                                {len}cm
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Footer: Vase Life & Direct Quote Button */}
                      <div className="pt-2 sm:pt-2.5 border-t border-white/15 flex items-center justify-between shrink-0">
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-white font-serif">{item.vaseLife}</span>
                          <span className="text-[7px] sm:text-[8px] text-white/60 block uppercase tracking-wider font-semibold">
                            En Florero
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectVarietyForQuote(item.name);
                          }}
                          className="bg-[#E6007E] hover:bg-[#C4006B] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9.5px] sm:text-[11px] font-bold transition-all duration-300 flex items-center space-x-1.5 shadow-lg group/btn cursor-pointer"
                        >
                          <span>Cotizar</span>
                          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        )}

        {/* Pagination Controls if more than 1 page */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-8 pb-2">
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="p-2.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-[#E6007E] hover:text-[#E6007E] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700 transition-all shadow-sm"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full font-bold text-xs transition-all shadow-sm ${
                  currentPage === page
                    ? 'bg-[#E6007E] text-white shadow-md shadow-[#E6007E]/30 scale-105'
                    : 'bg-white text-gray-700 hover:text-[#E6007E] border border-gray-200'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-[#E6007E] hover:text-[#E6007E] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700 transition-all shadow-sm"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
