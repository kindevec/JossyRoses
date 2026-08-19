import React from 'react';
import { FlowerMandala } from './FlowerMandala';
import { Award } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const BrandStory = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="pt-[20px] pb-2 md:py-16 bg-[#FDF3F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hasfarm-Style Signature Wide Split Banner */}
        <div className="relative rounded-none sm:rounded-3xl overflow-hidden shadow-none sm:shadow-2xl bg-[#0A0A0A] border-y sm:border border-[#E6007E]/30 grid grid-cols-1 lg:grid-cols-12 min-h-[310px] lg:min-h-[440px]">
          
          {/* Mobile Full Background Image & Gradient (hidden on desktop) */}
          <div className="lg:hidden absolute inset-0 w-full h-full z-0 overflow-hidden">
            <picture>
              <source srcSet="/images/post_harvest.avif" type="image/avif" />
              <source srcSet="/images/post_harvest.webp" type="image/webp" />
              <img
                src="/images/post_harvest.webp"
                alt="Especialista realizando tratamiento de poscosecha a las rosas"
                width="600"
                height="440"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[75%_center] translate-x-[80px] scale-125"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent/30 z-0" />
          </div>

          {/* Left Side: Text Banner Content (Compacted on left for mobile) */}
          <div className="lg:col-span-6 bg-transparent lg:bg-[#0A0A0A] py-3 px-5 sm:p-12 flex flex-col justify-center text-left relative z-10 space-y-4 sm:space-y-6 w-[78%] sm:w-[65%] lg:w-full">
            <AnimateIn animation="fade-left" duration={800}>
              {/* Background Rose Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center space-x-2 bg-[#E6007E]/25 border border-[#E6007E]/40 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full w-fit mb-3 sm:mb-4 backdrop-blur-xs">
                <FlowerMandala className="w-3 h-3 sm:w-3.5 sm:h-3.5" color="#E6007E" spin={true} />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#E6007E]">
                  Cosecha de Precisión
                </span>
              </div>

              <h2 className="text-xl sm:text-4xl lg:text-5xl font-serif text-white font-normal uppercase leading-[1.1] mb-3 sm:mb-4">
                ROSAS QUE CUENTAN <br />
                <span className="italic font-light text-[#E6007E] font-serif lowercase">
                  una historia de calidad
                </span>
              </h2>

              <p className="text-gray-200 sm:text-gray-300 font-sans text-[10.5px] sm:text-sm leading-relaxed max-w-lg mb-4 sm:mb-6">
                Cultivamos y seleccionamos a mano las mejores rosas de exportación de Ecuador. Cada tallo pasa por un riguroso proceso de clasificación con cadena de frío garantizada.
              </p>

              {/* Hasfarm-Style Rounded Pill CTA Button with Flower Icon */}
              <div>
                <button
                  onClick={onOpenQuoteModal}
                  className="group inline-flex items-center space-x-2 px-5 py-2.5 sm:px-8 sm:py-3.5 bg-[#E6007E] hover:bg-[#C4006B] text-white font-bold text-[9px] sm:text-xs uppercase tracking-widest rounded-full shadow-lg shadow-[#E6007E]/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>NUESTRA POSCOSECHA</span>
                  <FlowerMandala className="w-3.5 h-3.5 sm:w-4 sm:h-4" color="#FFFFFF" spin={true} />
                </button>
              </div>
            </AnimateIn>
          </div>

          {/* Right Side: Desktop Only Photo Split */}
          <div className="hidden lg:block lg:col-span-6 relative lg:h-auto overflow-hidden">
            <AnimateIn animation="fade-right" duration={800} className="w-full h-full">
              <picture>
                <source srcSet="/images/post_harvest.avif" type="image/avif" />
                <source srcSet="/images/post_harvest.webp" type="image/webp" />
                <img
                  src="/images/post_harvest.webp"
                  alt="Especialista realizando tratamiento de poscosecha a las rosas"
                  width="600"
                  height="440"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </picture>
              
              {/* Soft Edge Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 right-6 glass-card-dark px-4 py-2.5 rounded-2xl flex items-center space-x-3 backdrop-blur-md border border-[#E6007E]/30 z-20">
                <div className="w-8 h-8 rounded-full bg-[#E6007E] flex items-center justify-center text-white shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-gray-400">100% Garantizado</div>
                  <div className="text-xs font-serif font-bold text-white">Grado de Exportación</div>
                </div>
              </div>
            </AnimateIn>
          </div>

        </div>

      </div>
    </section>
  );
};
