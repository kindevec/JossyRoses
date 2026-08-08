import React, { useState, useEffect } from 'react';
import { LayoutGrid, Layers, Sprout, Target } from 'lucide-react';
import { FlowerMandala } from './FlowerMandala';

export const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'categories', name: 'Colecciones', icon: Layers, href: '#categories' },
    { id: 'catalog', name: 'Catálogo', icon: LayoutGrid, href: '#catalog' },
    { id: 'hero', name: 'INICIO', isLogo: true, href: '#' },
    { id: 'about', name: 'Nosotros', icon: Sprout, href: '#about' },
    { id: 'mission-vision', name: 'Misión', icon: Target, href: '#mission-vision' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['categories', 'catalog', 'about', 'mission-vision'];
      let current = 'hero';
      
      if (window.scrollY < 180) {
        current = 'hero';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 220 && rect.bottom >= 150) {
              current = section;
              break;
            }
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    if (item.id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    const element = document.getElementById(item.id);
    if (element) {
      if (item.id === 'categories') {
        // Colecciones: Scroll title centered in viewport
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (item.id === 'catalog') {
        // Catálogo: Scroll section starting right at top of screen
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // General smooth scroll to section
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActiveSection(item.id);
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#E6007E]/20 pb-safe">
      <div className="flex items-center justify-between px-1.5 py-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          if (item.isLogo) {
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="flex flex-col items-center justify-center w-16 h-12 shrink-0 group cursor-pointer active:scale-95 transition-transform"
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#E6007E] border-white shadow-lg shadow-[#E6007E]/50 scale-110' 
                    : 'bg-[#E6007E]/20 border-[#E6007E]/40 group-hover:bg-[#E6007E]'
                }`}>
                  <FlowerMandala className="w-4.5 h-4.5" color={isActive ? "#FFFFFF" : "#E6007E"} spin={true} />
                </div>
                <span className={`text-[9px] font-extrabold tracking-widest mt-0.5 transition-colors ${
                  isActive ? 'text-[#E6007E]' : 'text-gray-300'
                }`}>
                  INICIO
                </span>
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`flex flex-col items-center justify-center w-[66px] h-12 rounded-xl transition-all duration-300 active:scale-95 border ${
                isActive 
                  ? 'bg-[#E6007E]/25 border-[#E6007E]/50 text-white shadow-md shadow-[#E6007E]/20 font-bold' 
                  : 'bg-transparent border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Icon 
                className={`w-4 h-4 mb-0.5 transition-transform duration-300 ${
                  isActive ? 'text-[#E6007E] scale-110' : 'text-gray-400 scale-100'
                }`} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              <span className={`text-[8.5px] tracking-wide transition-all ${
                isActive ? 'font-bold text-white opacity-100' : 'font-medium opacity-70'
              }`}>
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
