import React, { useState, useRef, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { ChevronLeft, ChevronRight, Search, Filter, X, Check, RotateCcw, ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const FeaturedVarieties = ({ onSelectVarietyForQuote }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const filterDropdownRef = useRef(null);

  const ITEMS_PER_PAGE = 10; // 5 filas de 2 tarjetas en celular (10 tarjetas por página)

  // Close filter dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const varieties = [
    {
      id: 'freedom',
      name: 'Freedom',
      colorCategory: 'red',
      colorName: 'Rojo Terciopelo Clásico',
      image: '/images/cat-red.jpg',
      stemLengths: '60 - 90 cm',
      bloomSize: '6.0 cm',
      vaseLife: '14-16 días',
      description: 'La rosa roja por excelencia de exportación ecuatoriana. Botón alto y apertura simétrica.',
      bestseller: true,
    },
    {
      id: 'pink-floyd',
      name: 'Pink Floyd',
      colorCategory: 'pink',
      colorName: 'Magenta Vibrante',
      image: '/images/cat-pink.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.5 cm',
      vaseLife: '14+ días',
      description: 'Rosa magenta de botón gigante. Tono intenso de firma identitario de Jossy Roses.',
      bestseller: true,
    },
    {
      id: 'mondial',
      name: 'Mondial White',
      colorCategory: 'white',
      colorName: 'Blanco Marfil / Crema',
      image: '/images/hero.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.8 cm',
      vaseLife: '15+ días',
      description: 'Rosa blanca pura indispensable para bodas de lujo y arreglos de alta gala.',
      bestseller: true,
    },
    {
      id: 'high-magic',
      name: 'High & Yellow Magic',
      colorCategory: 'bicolor',
      colorName: 'Bicolor Amarillo y Magenta',
      image: '/images/cat-bicolor.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.2 cm',
      vaseLife: '14 días',
      description: 'Centro amarillo intenso con bordes fuego rosa magenta para máxima energía.',
      bestseller: true,
    },
    {
      id: 'spray-roses',
      name: 'Spray Roses',
      colorCategory: 'pink',
      colorName: 'Multibotón Pastel',
      image: '/images/cat-spray.jpg',
      stemLengths: '40 - 70 cm',
      bloomSize: '4.5 cm',
      vaseLife: '14+ días',
      description: 'Tallo ramificado con múltiples botones por tallo ideal para ramos volumétricos.',
      bestseller: false,
    },
    {
      id: 'explorer',
      name: 'Explorer',
      colorCategory: 'red',
      colorName: 'Rojo Carmín Oscuro',
      image: '/images/cat-red.jpg',
      stemLengths: '60 - 90 cm',
      bloomSize: '6.3 cm',
      vaseLife: '16+ días',
      description: 'Rosa roja de tono borgoña profundo con apertura lenta y extraordinaria vida en florero.',
      bestseller: true,
    },
    {
      id: 'pink-akito',
      name: 'Pink Akito',
      colorCategory: 'pink',
      colorName: 'Rosa Rubor Nupcial',
      image: '/images/cat-pink.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.5 cm',
      vaseLife: '14 días',
      description: 'Tono rosa suave delicado, preferida por diseñadores florales para bouquets nupciales.',
      bestseller: false,
    },
    {
      id: 'maha',
      name: 'Maha Bicolor',
      colorCategory: 'bicolor',
      colorName: 'Fuego Naranja & Amarillo',
      image: '/images/cat-bicolor.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.0 cm',
      vaseLife: '14+ días',
      description: 'Combinación cálida de tonalidades atardecer ecuatoriano para arreglos alegres.',
      bestseller: false,
    },
    {
      id: 'vendela',
      name: 'Vendela',
      colorCategory: 'white',
      colorName: 'Crema Champaña Elegante',
      image: '/images/hero_clean.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '5.7 cm',
      vaseLife: '15 días',
      description: 'La rosa crema clásica más vendida a nivel mundial por su tono cálido y consistencia.',
      bestseller: true,
    },
    {
      id: 'candlelight',
      name: 'Candlelight',
      colorCategory: 'white',
      colorName: 'Marfil Cálido Suave',
      image: '/images/rose_white.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '6.0 cm',
      vaseLife: '14 días',
      description: 'Pétalos con forma de copa romántica y fragancia sutil de cera de abejas.',
      bestseller: false,
    },
    {
      id: 'free-spirit',
      name: 'Free Spirit',
      colorCategory: 'orange',
      colorName: 'Naranja Salmón Rizado',
      image: '/images/rose_orange.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.8 cm',
      vaseLife: '14+ días',
      description: 'Variedad estilo jardín con docenas de pétalos ondulados en tono salmón vibrante.',
      bestseller: true,
    },
    {
      id: 'impact',
      name: 'Impact Yellow',
      colorCategory: 'yellow',
      colorName: 'Amarillo Dorado Canario',
      image: '/images/rose_yellow.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.0 cm',
      vaseLife: '14 días',
      description: 'Rosa de amarillo sol pleno, mantiene su color intenso durante todo el ciclo de apertura.',
      bestseller: false,
    },
    {
      id: 'gotcha',
      name: 'Gotcha',
      colorCategory: 'pink',
      colorName: 'Fucsia Neón Encendido',
      image: '/images/cat-pink.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.2 cm',
      vaseLife: '14 días',
      description: 'Tono fucsia neón de alto contraste visual para eventos vanguardistas.',
      bestseller: false,
    },
    {
      id: 'hermosa',
      name: 'Hermosa',
      colorCategory: 'pink',
      colorName: 'Rosa Romántico Clásico',
      image: '/images/hero_clean.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.8 cm',
      vaseLife: '15 días',
      description: 'Tono rosa medio equilibrado con apertura redonda idónea para centros de mesa.',
      bestseller: false,
    },
    {
      id: 'super-green',
      name: 'Super Green',
      colorCategory: 'bicolor',
      colorName: 'Verde Menta Exótico',
      image: '/images/rose_yellow.jpg',
      stemLengths: '40 - 70 cm',
      bloomSize: '5.5 cm',
      vaseLife: '16+ días',
      description: 'Rosa exótica de tono verde lima fresco indispensable para arreglos orgánicos modernos.',
      bestseller: false,
    },
    {
      id: 'nena',
      name: 'Nena',
      colorCategory: 'pink',
      colorName: 'Rosa Pálido Marfil',
      image: '/images/rose_white.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.6 cm',
      vaseLife: '14 días',
      description: 'Rosa pastel pálido de gran delicadeza cromática muy solicitada en bodas vintage.',
      bestseller: false,
    },
    {
      id: 'tiffany',
      name: 'Tiffany',
      colorCategory: 'orange',
      colorName: 'Coral Durazno Pastel',
      image: '/images/rose_orange.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.2 cm',
      vaseLife: '14+ días',
      description: 'Mezcla perfecta de coral y durazno con botón espiralizado de alta apertura.',
      bestseller: false,
    },
    {
      id: 'tibet',
      name: 'Tibet White',
      colorCategory: 'white',
      colorName: 'Blanco Puro Nieve',
      image: '/images/rose_white.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.0 cm',
      vaseLife: '15 días',
      description: 'Blanco nieve brillante sin matices amarillos, altamente apreciada en el mercado europeo.',
      bestseller: false,
    },
    {
      id: 'cabaret',
      name: 'Cabaret',
      colorCategory: 'bicolor',
      colorName: 'Crema & Borde Rosa',
      image: '/images/cat-bicolor.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.8 cm',
      vaseLife: '14 días',
      description: 'Cuerpo crema marfil adornado con delicado pincelado rosa en la punta de los pétalos.',
      bestseller: false,
    },
    {
      id: 'full-house',
      name: 'Full House',
      colorCategory: 'red',
      colorName: 'Rojo Pasión Intenso',
      image: '/images/cat-red.jpg',
      stemLengths: '60 - 90 cm',
      bloomSize: '6.1 cm',
      vaseLife: '15 días',
      description: 'Rosa roja de tallo extralargo y follaje verde oscuro de gran firmeza.',
      bestseller: false,
    },
    {
      id: 'kahala',
      name: 'Kahala Vintage',
      colorCategory: 'orange',
      colorName: 'Terracota & Durazno Vintage',
      image: '/images/rose_orange.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.5 cm',
      vaseLife: '14+ días',
      description: 'Rosa tendencia boho-chic de matices terracota, champagne y durazno estilo jardín.',
      bestseller: true,
    },
    {
      id: 'deep-purple',
      name: 'Deep Purple',
      colorCategory: 'bicolor',
      colorName: 'Púrpura & Violeta Bicolor',
      image: '/images/rose_purple.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.7 cm',
      vaseLife: '14 días',
      description: 'Combinación mística de fucsia violeta y bordes púrpuras de alta atracción.',
      bestseller: false,
    },
    {
      id: 'white-ohara',
      name: 'White O\'Hara',
      colorCategory: 'white',
      colorName: 'Jardín Aromática Blanca',
      image: '/images/rose_white.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '7.0 cm',
      vaseLife: '12-14 días',
      description: 'Rosa francesa estilo jardín de botón gigante y cautivador aroma natural a lavanda y fruta.',
      bestseller: true,
    },
    {
      id: 'coral-reef',
      name: 'Coral Reef',
      colorCategory: 'orange',
      colorName: 'Naranja Coral Ondulado',
      image: '/images/rose_orange.jpg',
      stemLengths: '50 - 80 cm',
      bloomSize: '6.0 cm',
      vaseLife: '14 días',
      description: 'Pétalos con borde festoneado de color arrecife coral para arreglos caribeños.',
      bestseller: false,
    },
    {
      id: 'bikini',
      name: 'Bikini Yellow',
      colorCategory: 'yellow',
      colorName: 'Amarillo Sol Radiante',
      image: '/images/rose_yellow.jpg',
      stemLengths: '50 - 70 cm',
      bloomSize: '5.8 cm',
      vaseLife: '14 días',
      description: 'Amarillo limón de botón compacto de floración uniforme en ramos masivos.',
      bestseller: false,
    },
  ];

  const filterTabs = [
    { key: 'all', label: 'Todas las Categorías' },
    { key: 'red', label: 'Rojas' },
    { key: 'pink', label: 'Rosas & Magenta' },
    { key: 'white', label: 'Blancas & Crema' },
    { key: 'yellow', label: 'Amarillas' },
    { key: 'orange', label: 'Naranjas & Coral' },
    { key: 'bicolor', label: 'Bicolores & Exóticas' },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Responsive items per page: 12 on desktop (3 full rows x 4 cols), 10 on mobile (5 full rows x 2 cols)
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 10 : 12);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Close filter dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <section id="catalog" className="pt-8 pb-0 sm:py-16 bg-[#FDF3F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Catalog Header: Title + Search Bar + Filter Button */}
        <AnimateIn animation="fade-down" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 pb-4 border-b border-[#E6007E]/15 gap-4">
            
            {/* Title & Count Badge */}
            <div className="flex items-center space-x-3 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A0A0A] tracking-tight">
                Catálogo
              </h2>
              <FlowerMandala className="w-6 h-6 shrink-0" color="#E6007E" spin={true} />
              <span className="bg-[#E6007E]/10 text-[#E6007E] border border-[#E6007E]/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                {filteredVarieties.length} Variedades
              </span>
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
                  placeholder="Buscar variedad (ej: Freedom, Pink Floyd...)"
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
          /* 📱 MOBILE: 2-Column Vertical Grid (5 rows x 2 cards) / 💻 DESKTOP: 4-Col Grid */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 min-h-[300px] sm:min-h-[500px]">
            {paginatedVarieties.map((item, index) => (
              <AnimateIn key={item.id} animation="fade-up" delay={(index % 4) * 100} duration={600} className="w-full">
                <div
                  onClick={() => onSelectVarietyForQuote(item.name)}
                  className="group relative w-full h-[265px] sm:h-auto sm:aspect-square overflow-hidden rounded-2xl border border-gray-800/20 bg-[#0A0A0A] shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer text-left flex flex-col justify-between"
                >
                  {/* Background Image with Zoom Effect on Hover */}
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Soft Bottom Gradient Overlay for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>

                  {/* Top Row: White Animated Mandala Logo & Best Seller Badge */}
                  <div className="relative z-10 flex items-start justify-between p-3 sm:p-5">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/50 bg-black/40 backdrop-blur-md shadow-md">
                      <FlowerMandala className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" color="#FFFFFF" spin={true} />
                    </div>

                    {item.bestseller && (
                      <span className="bg-[#E6007E] text-white text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md border border-white/20">
                        Best Seller
                      </span>
                    )}
                  </div>

                  {/* 📱 MOBILE VIEW: Clean Title + Color + Cotizar Button (No dark box, No description) */}
                  <div className="sm:hidden relative z-10 p-3 flex items-end justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold font-serif text-white tracking-tight leading-tight drop-shadow-sm">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-white/90 font-sans mt-0.5 font-medium leading-tight">
                        {item.colorName}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectVarietyForQuote(item.name);
                      }}
                      className="bg-[#E6007E] text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center space-x-1 shadow-md shrink-0 cursor-pointer"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>

                  {/* 💻 DESKTOP VIEW: Default State Title (visible ONLY on desktop when NOT hovering) */}
                  <div className="hidden sm:block relative z-10 p-5 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <h3 className="text-2xl font-bold font-serif text-white tracking-tight leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-white/90 font-sans mt-0.5 font-medium">
                      {item.colorName} • {item.stemLengths}
                    </p>
                  </div>

                  {/* 💻 DESKTOP VIEW: Full Hover Overlay */}
                  <div className="hidden sm:flex absolute bottom-0 left-0 right-0 w-full p-5 bg-[#0A0A0A]/55 backdrop-blur-sm border-t border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20 flex-col justify-end">
                    <div>
                      <h3 className="text-2xl font-bold font-serif text-[#E6007E] tracking-tight leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-white/95 font-sans mt-0.5 font-medium">
                        {item.colorName} • {item.stemLengths}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/15">
                      <h4 className="font-semibold text-[9px] tracking-widest uppercase text-[#E6007E] font-sans">
                        OVERVIEW
                      </h4>
                      <p className="text-[11px] text-white/90 leading-snug font-sans line-clamp-2 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-2.5 border-t border-white/15">
                      <div>
                        <span className="text-base font-bold text-white font-serif">{item.vaseLife}</span>
                        <span className="text-[8px] text-white/80 block uppercase tracking-wider font-semibold">Vida Florero</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectVarietyForQuote(item.name);
                        }}
                        className="bg-white text-black hover:bg-[#E6007E] hover:text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300 flex items-center space-x-1 shadow-md group/btn cursor-pointer"
                      >
                        <span>Cotizar</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </AnimateIn>
            ))}
          </div>
        )}

        {/* Hasfarm-Style Interactive Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-4 pb-0 sm:pt-10 sm:pb-4">
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
