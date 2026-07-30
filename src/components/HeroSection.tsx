import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/roseCatalog';
import { Award, ShieldCheck, Plane, ArrowRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  currentLang: 'es' | 'en';
  onOpenQR: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, onOpenQR }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
          alt="Jossy Roses - Exportadora de Rosas Premium Ecuador"
          className="w-full h-full object-cover object-center scale-105 filter brightness-60 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/75 to-black/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#000000]/60 to-[#000000]" />
      </div>

      {/* Decorative Ambient Rose Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E3004F]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/80 border border-rose-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(227,0,79,0.2)] max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E3004F] animate-spin shrink-0" style={{ animationDuration: '6s' }} />
          <span className="text-[11px] sm:text-sm font-semibold tracking-wide text-rose-200">
            {currentLang === 'es' ? 'Exportadora Ecuatoriana de Rosas Premium' : 'Premium Ecuadorian Rose Exporter'}
          </span>
          <span className="bg-rose-500/20 text-rose-300 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-bold border border-rose-500/30 whitespace-nowrap">
            Cayambe 2,800m
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.08] mb-4 sm:mb-6 max-w-5xl mx-auto break-words"
        >
          Jossy Roses: <br className="hidden sm:inline" />
          <span className="text-gradient-rose font-serif italic font-normal">
            "Where Quality Counts"
          </span>
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-lg md:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
        >
          {currentLang === 'es'
            ? 'Cultivamos y exportamos las rosas más finas del mundo desde el corazón de Cayambe, Ecuador. Tallos largos de gran fortaleza, botones voluminosos y colores extraordinariamente intensos.'
            : 'We cultivate and export the finest roses in the world from Cayambe, Ecuador. Long robust stems, large vibrant heads, and exceptional vase life worldwide.'}
        </motion.p>

        {/* Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12 px-2"
        >
          {/* Master WhatsApp CTA Button */}
          <a
            href={COMPANY_INFO.whatsappMasterUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#E3004F] hover:bg-[#ff1a66] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_0_30px_rgba(227,0,79,0.5)] hover:shadow-[0_0_50px_rgba(227,0,79,0.8)] transition-all transform hover:-translate-y-1 group"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
            </div>
            <span className="whitespace-nowrap">
              {currentLang === 'es' ? 'Cotizar Pedido por WhatsApp' : 'Request Order via WhatsApp'}
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          {/* Secondary Catalog Button */}
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-rose-500/50 font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5"
          >
            <span>{currentLang === 'es' ? 'Explorar Catálogo' : 'Explore Catalog'}</span>
          </a>

          {/* QR Code Quick View button */}
          <button
            onClick={onOpenQR}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs sm:text-sm font-semibold px-5 py-3.5 sm:py-4 rounded-full transition-all"
          >
            <span>{currentLang === 'es' ? 'Escanear QR WhatsApp' : 'Scan WhatsApp QR'}</span>
          </button>
        </motion.div>

        {/* Micro-copy badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-400 font-medium mb-12 sm:mb-16 px-2"
        >
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            {currentLang === 'es' ? 'Respuesta en < 5 minutos' : 'Response in < 5 mins'}
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
            {currentLang === 'es' ? 'Cadena de frío BAXTER 2°C' : 'BAXTER Cold-Chain 2°C'}
          </span>
          <span className="flex items-center gap-1.5">
            <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
            {currentLang === 'es' ? 'Envíos globales directos' : 'Direct global air freight'}
          </span>
        </motion.div>

        {/* Key Metrics / Highlights Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto"
        >
          <div className="glass-card p-3.5 sm:p-5 rounded-2xl text-center border-t-2 border-t-[#E3004F]">
            <span className="block font-display font-bold text-xl sm:text-3xl md:text-4xl text-white mb-1">
              2,800m
            </span>
            <span className="text-[11px] sm:text-sm text-slate-400 font-medium">
              {currentLang === 'es' ? 'Altitud Cayambe' : 'Cayambe Altitude'}
            </span>
          </div>

          <div className="glass-card p-3.5 sm:p-5 rounded-2xl text-center border-t-2 border-t-[#E3004F]">
            <span className="block font-display font-bold text-xl sm:text-3xl md:text-4xl text-[#E3004F] mb-1">
              6.5-7.5cm
            </span>
            <span className="text-[11px] sm:text-sm text-slate-400 font-medium">
              {currentLang === 'es' ? 'Calibre del Botón' : 'Head Size Length'}
            </span>
          </div>

          <div className="glass-card p-3.5 sm:p-5 rounded-2xl text-center border-t-2 border-t-[#E3004F]">
            <span className="block font-display font-bold text-xl sm:text-3xl md:text-4xl text-white mb-1">
              16+ Días
            </span>
            <span className="text-[11px] sm:text-sm text-slate-400 font-medium">
              {currentLang === 'es' ? 'Vida en Florero' : 'Vase Life Guarantee'}
            </span>
          </div>

          <div className="glass-card p-3.5 sm:p-5 rounded-2xl text-center border-t-2 border-t-[#E3004F]">
            <span className="block font-display font-bold text-xl sm:text-3xl md:text-4xl text-[#E3004F] mb-1">
              +35
            </span>
            <span className="text-[11px] sm:text-sm text-slate-400 font-medium">
              {currentLang === 'es' ? 'Países de Exportación' : 'Export Destinations'}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
