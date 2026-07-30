import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Sun, Mountain, Droplets, HeartHandshake, Leaf, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/roseCatalog';

interface MissionVisionProps {
  currentLang: 'es' | 'en';
}

export const MissionVision: React.FC<MissionVisionProps> = ({ currentLang }) => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-[#05080E] relative overflow-hidden">
      {/* Subtle Background Radial Highlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E3004F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-3"
          >
            {currentLang === 'es' ? 'Nuestra Esencia y Compromiso' : 'Our Essence & Commitment'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-bold text-zinc-900 tracking-tight"
          >
            {currentLang === 'es' ? 'Quiénes Somos' : 'About Jossy Roses'}
          </motion.h2>
          <div className="w-16 h-1 bg-[#E3004F] mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-lg">
            {currentLang === 'es'
              ? 'Conectamos la fertilidad única de los Andes ecuatorianos con la floristería de alto nivel internacional.'
              : 'Connecting the unique fertility of the Ecuadorian Andes with high-end international floristry.'}
          </p>
        </div>

        {/* Mission & Vision Cards (Main Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          
          {/* Misión Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6 sm:p-10 rounded-3xl border border-rose-500/20 relative group hover:border-[#E3004F]/60 transition-all shadow-xl"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#E3004F]" />
            </div>

            <span className="text-[11px] sm:text-xs font-bold text-[#E3004F] uppercase tracking-widest block mb-2">
              {currentLang === 'es' ? 'Propósito Institucional' : 'Institutional Purpose'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 mb-3 sm:mb-4">
              Misión
            </h3>

            <blockquote className="text-base sm:text-xl lg:text-2xl font-serif italic text-slate-900 leading-relaxed pl-3 sm:pl-4 border-l-2 border-[#E3004F] my-3 sm:my-4">
              "{COMPANY_INFO.misionText}"
            </blockquote>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4">
              {currentLang === 'es'
                ? 'Nos enfocamos rigurosamente en cada detalle del proceso: desde la selección genética de las plantas hasta el empaque de lujo personalizado.'
                : 'We rigorously focus on every detail: from plant genetics selection to luxury customized box packaging.'}
            </p>
          </motion.div>

          {/* Visión Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6 sm:p-10 rounded-3xl border border-rose-500/20 relative group hover:border-[#E3004F]/60 transition-all shadow-xl"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-[#E3004F]" />
            </div>

            <span className="text-[11px] sm:text-xs font-bold text-[#E3004F] uppercase tracking-widest block mb-2">
              {currentLang === 'es' ? 'Proyección Futura' : 'Future Vision'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 mb-3 sm:mb-4">
              Visión
            </h3>

            <blockquote className="text-base sm:text-xl lg:text-2xl font-serif italic text-slate-900 leading-relaxed pl-3 sm:pl-4 border-l-2 border-[#E3004F] my-3 sm:my-4">
              "{COMPANY_INFO.visionText}"
            </blockquote>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4">
              {currentLang === 'es'
                ? 'Promovemos empleos dignos en la zona de Cayambe, aplicando prácticas agrícolas con huella hídrica sostenible y energía renovable.'
                : 'We promote dignified jobs in Cayambe, applying sustainable water management and eco-friendly farming.'}
            </p>
          </motion.div>

        </div>

        {/* Why Cayambe Ecuadorian Roses Are World-Famous */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900">
              {currentLang === 'es'
                ? 'El Secreto Natural de Cayambe, Ecuador'
                : 'The Natural Advantage of Cayambe, Ecuador'}
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              {currentLang === 'es'
                ? 'Ubicados exactamente en la Línea Ecuatorial a 2,800 metros de altitud.'
                : 'Located right on the Equator line at 2,800 meters elevation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/40 border border-slate-200 hover:border-rose-500/30 transition">
              <Sun className="w-8 h-8 text-[#E3004F] mb-3" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">12 Horas Luz Perpendicular</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Radiación solar constante durante todo el año para colores intensos y sin variaciones cromáticas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/40 border border-slate-200 hover:border-rose-500/30 transition">
              <Mountain className="w-8 h-8 text-[#E3004F] mb-3" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">2,800m Altitud Andina</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Desarrollo lento y natural que produce tallos gruesos, rectos de hasta 110 cm y botones gigantes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/40 border border-slate-200 hover:border-rose-500/30 transition">
              <Droplets className="w-8 h-8 text-[#E3004F] mb-3" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">Agua de Deshielo Glacial</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Riego con agua pura proveniente del volcán Cayambe enriquecida con minerales volcánicos fértiles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/40 border border-slate-200 hover:border-rose-500/30 transition">
              <Leaf className="w-8 h-8 text-[#E3004F] mb-3" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">16+ Días en Florero</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Excelente hidratación que asegura vida prolongada en los escaparates de floristerías del mundo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
