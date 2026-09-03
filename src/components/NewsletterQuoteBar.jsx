import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

export const NewsletterQuoteBar = ({ onOpenQuoteModal }) => {
  const mobileOrderedCards = [
    // Row 1 (Top): Freedom (1/3 width) + White O'Hara (2/3 width)
    {
      id: 2,
      type: 'framed-offer',
      image: '/images/roses/freedom.webp',
      topText: "Jossy Roses",
      offerText: 'FREEDOM',
      subBadge: 'Rojo Exportación',
      action: 'Cotizar',
      mobileSpan: 'col-span-4',
    },
    {
      id: 1,
      type: 'collection',
      image: '/images/roses/white-ohara.webp',
      subtitle: 'Tallos 50 - 90 cm • Aroma Natural',
      title: "WHITE O'HARA",
      badge: 'Rosa de Jardín',
      align: 'bottom-right',
      mobileSpan: 'col-span-8',
    },
    // Row 2 (Bottom): Pink O'Hara (2/3 width) + Country Blue (1/3 width)
    {
      id: 3,
      type: 'collection',
      image: '/images/roses/pink-ohara.webp',
      subtitle: 'Tallos 50 - 90 cm • Botón Gigante',
      title: "PINK O'HARA",
      badge: 'Jardín Francesa',
      align: 'bottom-right',
      mobileSpan: 'col-span-8',
    },
    {
      id: 4,
      type: 'framed-offer',
      image: '/images/roses/country-blue.webp',
      topText: "Colección Exótica",
      offerText: 'VINTAGE',
      subBadge: 'Country Blue',
      action: 'Cotizar',
      mobileSpan: 'col-span-4',
    },
  ];

  return (
    <section className="pt-3 pb-8 sm:py-14 bg-[#FDF3F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* 4 Banner Cards Grid - 2x2 Asymmetrical on Mobile / 4-Col Grid on Desktop */}
        <div className="grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {mobileOrderedCards.map((card, index) => {
            const spanClass = `${card.mobileSpan} sm:col-span-1`;
            const desktopAnimation = ['fade-right', 'fade-up', 'fade-up', 'fade-left'][index];

            if (card.type === 'framed-offer') {
              return (
                <AnimateIn key={card.id} animation={desktopAnimation} delay={index * 150} duration={700} className={spanClass}>
                  <div
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(card.offerText)}
                    className="group relative h-44 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E6007E]/15 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl w-full"
                  >
                    {/* Background Image */}
                    <picture>
                      <source srcSet={card.image.replace('.webp', '.avif')} type="image/avif" />
                      <source srcSet={card.image} type="image/webp" />
                      <img
                        src={card.image}
                        alt={card.offerText}
                        width="300"
                        height="288"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </picture>
                    
                    {/* Elegant White Border Rectangle Overlay */}
                    <div className="absolute inset-1.5 sm:inset-5 border sm:border-2 border-white/90 rounded-lg flex flex-col items-center justify-center text-center p-1 sm:p-4 bg-white/30 backdrop-blur-[1px] group-hover:bg-white/40 transition-all duration-300 shadow-sm">
                      <span className="font-serif italic text-[16px] sm:text-sm text-[#0A0A0A] tracking-tight font-semibold leading-none">
                        {card.topText}
                      </span>
                      <h4 className="font-serif font-bold text-[28px] sm:text-3xl text-[#0A0A0A] tracking-tight my-0.5 drop-shadow-sm leading-none">
                        {card.offerText}
                      </h4>
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#E6007E] tracking-tight sm:tracking-widest bg-white/95 px-2 py-0.5 rounded-full shadow-xs mt-1 whitespace-nowrap">
                        {card.subBadge}
                      </span>
                    </div>

                    {/* Interactive Hover Callout */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center space-x-1 text-[11px] font-bold text-[#0A0A0A] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md">
                      <span>{card.action}</span>
                      <ArrowRight className="w-3 h-3 text-[#E6007E]" />
                    </div>
                  </div>
                </AnimateIn>
              );
            }

            // Collection Cards (Cards 1 & 3)
            return (
              <AnimateIn key={card.id} animation={desktopAnimation} delay={index * 150} duration={700} className={spanClass}>
                <div
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(card.title)}
                  className="group relative h-44 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E6007E]/15 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl bg-white w-full"
                >
                  {/* Background Image */}
                  <picture>
                    <source srcSet={card.image.replace('.jpg', '.avif')} type="image/avif" />
                    <source srcSet={card.image.replace('.jpg', '.webp')} type="image/webp" />
                    <img
                      src={card.image}
                      alt={card.title}
                      width="300"
                      height="288"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>

                  {/* Soft Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent opacity-95 group-hover:opacity-75 transition-opacity duration-300" />

                  {/* Content Overlay at lower right */}
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-right z-10 max-w-[95%]">
                    <p className="text-[14px] sm:text-xs font-sans text-gray-700 font-medium tracking-wide">
                      {card.subtitle}
                    </p>
                    <h4 className="font-serif font-bold text-[17px] sm:text-lg text-[#0A0A0A] tracking-wider leading-tight uppercase mt-0.5">
                      {card.title}
                    </h4>
                    <div className="inline-flex items-center space-x-1 text-[11px] sm:text-[10px] font-semibold text-[#E6007E] mt-0.5 bg-white/90 px-2 py-0.5 rounded-full border border-[#E6007E]/20 shadow-xs whitespace-nowrap">
                      <Tag className="w-2.5 h-2.5" />
                      <span>{card.badge}</span>
                    </div>
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
