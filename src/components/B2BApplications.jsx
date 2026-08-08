import React from 'react';
import { FlowerMandala } from './FlowerMandala';
import { Heart, Store, Package, Building2, Hotel, Plane } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const B2BApplications = ({ onOpenQuoteModal }) => {
  const applications = [
    { icon: Heart, name: 'Bodas & Eventos', desc: 'Rosas pastel y rosas blancas de gran botón.' },
    { icon: Store, name: 'Floristerías', desc: 'Surtido variado con vida útil prolongada.' },
    { icon: Package, name: 'Distribuidores', desc: 'Despachos consolidados en cajas HB y EB.' },
    { icon: Building2, name: 'Corporativos', desc: 'Arreglos de impacto y volumen constante.' },
    { icon: Hotel, name: 'Hoteles de Lujo', desc: 'Elegancia duradera para ambientes VIP.' },
    { icon: Plane, name: 'Exportación', desc: 'Logística de transporte aéreo garantizado.' },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FDF3F6] border-t border-[#E6007E]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <AnimateIn animation="fade-down" duration={700}>
          <div className="flex items-center justify-center space-x-3 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#0A0A0A]">
              Soluciones para Cada Sector
            </h2>
            <FlowerMandala className="w-4 h-4 sm:w-5 sm:h-5" color="#E6007E" spin={true} />
          </div>
        </AnimateIn>

        {/* 📱 MOBILE VIEW: 2 Staggered Diagonal Rows with Centered Icons and Text Below */}
        <div className="sm:hidden flex flex-col space-y-6 px-1">
          {/* Row 1 (Items 0, 1, 2) - Shifted Right for Left-to-Right Diagonal Slope */}
          <div className="flex flex-row justify-around items-start w-full pl-6">
            {applications.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={index} animation="zoom-in" delay={index * 120} duration={600}>
                  <div
                    onClick={onOpenQuoteModal}
                    className="group cursor-pointer flex flex-col items-center text-center space-y-2"
                  >
                    {/* Perfectly Centered Circular Icon Container */}
                    <div className="w-18 h-18 rounded-full bg-white border-2 border-[#E6007E]/25 shadow-sm text-[#E6007E] group-hover:border-[#E6007E] group-hover:bg-[#FAF0F3] transition-all duration-300 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Clean Title Text Below Container */}
                    <h3 className="font-serif font-bold text-[11px] text-[#0A0A0A] group-hover:text-[#E6007E] transition-colors leading-tight max-w-[90px]">
                      {item.name}
                    </h3>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {/* Row 2 (Items 3, 4, 5) - Shifted Left for Left-to-Right Diagonal Slope */}
          <div className="flex flex-row justify-around items-start w-full pr-6">
            {applications.slice(3, 6).map((item, index) => {
              const realIndex = index + 3;
              const Icon = item.icon;
              return (
                <AnimateIn key={realIndex} animation="zoom-in" delay={realIndex * 120} duration={600}>
                  <div
                    onClick={onOpenQuoteModal}
                    className="group cursor-pointer flex flex-col items-center text-center space-y-2"
                  >
                    {/* Perfectly Centered Circular Icon Container */}
                    <div className="w-18 h-18 rounded-full bg-white border-2 border-[#E6007E]/25 shadow-sm text-[#E6007E] group-hover:border-[#E6007E] group-hover:bg-[#FAF0F3] transition-all duration-300 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Clean Title Text Below Container */}
                    <h3 className="font-serif font-bold text-[11px] text-[#0A0A0A] group-hover:text-[#E6007E] transition-colors leading-tight max-w-[90px]">
                      {item.name}
                    </h3>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>

        {/* 💻 DESKTOP VIEW: Original Grid (Hidden on Mobile) */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {applications.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateIn key={index} animation="fade-up" delay={index * 120} duration={600}>
                <div
                  onClick={onOpenQuoteModal}
                  className="group cursor-pointer flex flex-col items-center text-center space-y-3"
                >
                  {/* Circular Icon Container */}
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-2 border-[#E6007E]/20 shadow-sm group-hover:border-[#E6007E] group-hover:bg-[#E6007E] text-[#E6007E] group-hover:text-white transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#0A0A0A] group-hover:text-[#E6007E] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-sans mt-0.5 max-w-[120px] mx-auto leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
