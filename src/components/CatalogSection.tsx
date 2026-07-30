import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROSE_VARIETIES, COMPANY_INFO } from '../data/roseCatalog';
import { RoseVariety } from '../types';
import { WhatsAppIcon } from './SocialIcons';
import { Search, Sparkles, SlidersHorizontal, CheckCircle, ArrowUpRight, X, Ruler, Calendar, Flower2 } from 'lucide-react';

interface CatalogSectionProps {
  currentLang: 'es' | 'en';
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVariety, setSelectedVariety] = useState<RoseVariety | null>(null);
  const [selectedStemLength, setSelectedStemLength] = useState<number>(70);
  const [bunchQty, setBunchQty] = useState<number>(20);

  const categories = [
    { id: 'all', label: currentLang === 'es' ? 'Todas' : 'All' },
    { id: 'red', label: currentLang === 'es' ? 'Rojas' : 'Red' },
    { id: 'pink', label: currentLang === 'es' ? 'Rosadas' : 'Pink' },
    { id: 'white', label: currentLang === 'es' ? 'Blancas' : 'White' },
    { id: 'bicolor', label: currentLang === 'es' ? 'Bicolores' : 'Bicolor' },
    { id: 'exotic', label: currentLang === 'es' ? 'Exóticas / Púrpuras' : 'Exotic' },
  ];

  const filteredVarieties = ROSE_VARIETIES.filter((v) => {
    const matchesCategory = activeCategory === 'all' || v.colorCategory === activeCategory;
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.colorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCustomWhatsAppLink = (varietyName: string, stemLen: number, qty: number) => {
    const text = `Hola Jossy Roses, quisiera solicitar una cotización de la variedad *${varietyName}* (${stemLen} cm, ${qty} bonches). Por favor envíenme disponibilidad y precios de exportación.`;
    return `${COMPANY_INFO.whatsappMasterUrl}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#E3004F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2">
            {currentLang === 'es' ? 'Variedades de Exportación Directa' : 'Direct Export Varieties'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {currentLang === 'es' ? 'Catálogo de Rosas Premium' : 'Premium Rose Catalog'}
          </h2>
          <div className="w-16 h-1 bg-[#E3004F] mx-auto my-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base">
            {currentLang === 'es'
              ? 'Seleccionadas meticulosamente para floristerías de lujo, importadores y distribuidores mayoristas globales.'
              : 'Meticulously selected for luxury florists, importers, and global wholesale distributors.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 glass-card p-3 sm:p-4 rounded-2xl border border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#E3004F] text-white shadow-[0_0_15px_rgba(227,0,79,0.5)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'es' ? 'Buscar variedad o color...' : 'Search variety or color...'}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-[#E3004F] text-slate-200 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Rose Variety Cards Grid */}
        {filteredVarieties.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-3xl border border-slate-800">
            <Flower2 className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-pulse" />
            <p className="text-slate-300 font-semibold">
              {currentLang === 'es' ? 'No se encontraron variedades para este filtro' : 'No varieties match your search'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs bg-[#E3004F] text-white px-4 py-2 rounded-full font-medium"
            >
              {currentLang === 'es' ? 'Restablecer filtros' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVarieties.map((rose, idx) => (
              <motion.div
                key={rose.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-rose-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Variety Image Header */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={rose.image}
                    alt={`Rosa ${rose.name} Jossy Roses Ecuador`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                  
                  {/* Category Pill Badge */}
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-rose-500/30 text-rose-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {rose.colorName}
                  </span>

                  {/* Quick Detail Trigger */}
                  <button
                    onClick={() => {
                      setSelectedVariety(rose);
                      setSelectedStemLength(rose.stemLengthsCm[2] || 70);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-[#E3004F] text-white flex items-center justify-center border border-white/20 transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0"
                    title="Ver ficha técnica"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-rose-300 transition-colors">
                      {rose.name}
                    </h3>
                  </div>
                </div>

                {/* Card Specs Body */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                      {rose.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 mb-3">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Ruler className="w-3.5 h-3.5 text-[#E3004F]" />
                        <span>Botón: <strong>{rose.headSizeCm}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-[#E3004F]" />
                        <span>Florero: <strong>{rose.vaseLifeDays} días</strong></span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {rose.stemLengthsCm.slice(0, 5).map((len) => (
                        <span
                          key={len}
                          className="bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono px-2 py-0.5 rounded"
                        >
                          {len}cm
                        </span>
                      ))}
                      {rose.stemLengthsCm.length > 5 && (
                        <span className="text-[10px] text-rose-400 font-bold px-1">+</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <a
                      href={getCustomWhatsAppLink(rose.name, 70, 20)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E3004F] hover:bg-[#ff1a66] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-[0_0_15px_rgba(227,0,79,0.3)] transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      <span>{currentLang === 'es' ? 'Cotizar en WhatsApp' : 'Quote on WhatsApp'}</span>
                    </a>

                    <button
                      onClick={() => {
                        setSelectedVariety(rose);
                        setSelectedStemLength(rose.stemLengthsCm[2] || 70);
                      }}
                      className="w-full text-center text-[11px] text-slate-400 hover:text-white py-1 font-medium transition"
                    >
                      {currentLang === 'es' ? 'Ver Ficha de Exportación' : 'View Spec Sheet'}
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Variety Detail Modal */}
        <AnimatePresence>
          {selectedVariety && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedVariety(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#E3004F] text-white flex items-center justify-center border border-white/20 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full bg-slate-950">
                    <img
                      src={selectedVariety.image}
                      alt={selectedVariety.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden" />
                  </div>

                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <span className="text-xs text-[#E3004F] font-bold uppercase tracking-wider block">
                        Ficha Técnica de Exportación
                      </span>
                      <h3 className="text-3xl font-display font-bold text-white mt-1">
                        Rosa {selectedVariety.name}
                      </h3>
                      <span className="inline-block text-xs text-rose-300 bg-rose-950/60 border border-rose-500/30 px-2.5 py-0.5 rounded-full mt-2">
                        {selectedVariety.colorName}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedVariety.description}
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Calibre del Botón:</span>
                        <span className="text-white font-bold">{selectedVariety.headSizeCm}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Vida Promedio en Florero:</span>
                        <span className="text-white font-bold">{selectedVariety.vaseLifeDays} Días</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Forma de Apertura:</span>
                        <span className="text-white font-bold">{selectedVariety.bloomType}</span>
                      </div>
                    </div>

                    {/* Stem selection interactive controls */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Selecciona Largo de Tallo Deseado:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {selectedVariety.stemLengthsCm.map((len) => (
                          <button
                            key={len}
                            onClick={() => setSelectedStemLength(len)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                              selectedStemLength === len
                                ? 'bg-[#E3004F] text-white shadow-[0_0_10px_rgba(227,0,79,0.5)]'
                                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                            }`}
                          >
                            {len} cm
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-300 font-medium">Cantidad Estimada (Bonches):</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setBunchQty(Math.max(10, bunchQty - 10))}
                          className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-white font-mono">{bunchQty}</span>
                        <button
                          onClick={() => setBunchQty(bunchQty + 10)}
                          className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <a
                      href={getCustomWhatsAppLink(selectedVariety.name, selectedStemLength, bunchQty)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E3004F] hover:bg-[#ff1a66] text-white font-bold text-sm py-3 px-6 rounded-2xl shadow-[0_0_20px_rgba(227,0,79,0.5)] transition"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Cotizar Rosa {selectedVariety.name} en WhatsApp</span>
                    </a>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
