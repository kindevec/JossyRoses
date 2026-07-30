import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, TESTIMONIALS } from '../data/roseCatalog';
import { ShieldCheck, Snowflake, Plane, Sparkles, Star, Quote, Award } from 'lucide-react';

interface QualityProcessProps {
  currentLang: 'es' | 'en';
}

export const QualityProcess: React.FC<QualityProcessProps> = ({ currentLang }) => {
  const steps = [
    {
      num: '01',
      title: currentLang === 'es' ? 'Cosecha al Alba (5:00 AM)' : 'Dawn Harvest (5:00 AM)',
      desc: currentLang === 'es' ? 'Corte de tallos en el momento óptimo de apertura de botón en los invernaderos de Cayambe.' : 'Stems cut at precise point of bloom opening in Cayambe greenhouses.',
      icon: Sparkles
    },
    {
      num: '02',
      title: currentLang === 'es' ? 'Clasificación Rigurosa' : 'Rigorous Grading',
      desc: currentLang === 'es' ? 'Selección manual por largo de tallo, grosor, color y calibre de botón libre de imperfecciones.' : 'Hand grading by stem length, thickness, color vibrancy, and head size.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: currentLang === 'es' ? 'Pre-Enfriamiento a 2°C' : 'Pre-Cooling at 2°C',
      desc: currentLang === 'es' ? 'Tratamiento de hidratación profunda y enfriamiento por vacío para pausar el metabolismo de la flor.' : 'Vacuum pre-cooling and hydration treatment pausing flower metabolism.',
      icon: Snowflake
    },
    {
      num: '04',
      title: currentLang === 'es' ? 'Empaque de Exportación' : 'Export Packaging',
      desc: currentLang === 'es' ? 'Capuchones protectores anti-rozamiento y cajas corrugadas reforzadas para viajes de larga distancia.' : 'Anti-friction protective sleeves and reinforced boxes for long-haul flights.',
      icon: Award
    },
    {
      num: '05',
      title: currentLang === 'es' ? 'Vuelo Directo Express' : 'Direct Air Freight',
      desc: currentLang === 'es' ? 'Transferencia directa a cámara frigorífica en el Aeropuerto de Quito (UIO) hacia el destino final.' : 'Direct transfer to Quito Airport cold storage for international flight cargo.',
      icon: Plane
    }
  ];

  return (
    <section id="calidad" className="py-16 sm:py-24 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quality Process Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#E3004F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2">
            {currentLang === 'es' ? 'Garantía Ecuatoriana de Excelencia' : 'Ecuadorian Quality Assurance'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {currentLang === 'es' ? 'Proceso de Calidad y Cadena de Frío' : 'Quality & Cold Chain Process'}
          </h2>
          <div className="w-16 h-1 bg-[#E3004F] mx-auto my-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base">
            {currentLang === 'es'
              ? 'Control de calidad en 5 etapas que garantiza flores impecables desde nuestra finca hasta el florero de su cliente.'
              : '5-stage quality management ensuring flawless flowers from our farm to your client’s vase.'}
          </p>
        </div>

        {/* 5-Step Horizontal / Responsive Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-12 sm:mb-20">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-rose-500/40 transition relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-display font-bold text-[#E3004F] font-mono">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Seals / Certifications */}
        <div className="glass-card p-8 rounded-3xl border border-rose-500/20 mb-20 bg-gradient-to-r from-slate-950 via-rose-950/20 to-slate-950">
          <div className="text-center mb-8">
            <h3 className="text-xl font-display font-bold text-white">
              {currentLang === 'es' ? 'Sellos de Calidad y Certificaciones' : 'Certifications & Quality Seals'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Garantizando floricultura ética, ambiental y de alto rendimiento comercial
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="bg-black/50 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-[#E3004F] mx-auto" />
                <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof & Testimonials Slider/Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#E3004F] uppercase tracking-widest block mb-1">
              {currentLang === 'es' ? 'Confianza Internacional' : 'International Trust'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
              {currentLang === 'es' ? 'Lo que Dicen Nuestros Importadores' : 'What Our Importers Say'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-rose-500/30 transition relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-rose-300 bg-rose-950/60 border border-rose-500/30 px-2.5 py-0.5 rounded-full">
                      {t.importedVolume}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 italic font-serif leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg">
                    {t.flag}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm leading-none">{t.clientName}</h4>
                    <span className="text-xs text-slate-400">{t.companyName} — {t.city}, {t.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
