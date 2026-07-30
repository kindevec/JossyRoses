import React from 'react';
import { Home, Flower2, Info, Calculator, MapPin, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/roseCatalog';

interface BottomNavProps {
  currentLang: 'es' | 'en';
  onOpenQR: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentLang, onOpenQR }) => {
  const items = [
    {
      label: currentLang === 'es' ? 'Inicio' : 'Home',
      icon: Home,
      href: '#hero',
    },
    {
      label: currentLang === 'es' ? 'Rosal' : 'Roses',
      icon: Flower2,
      href: '#catalogo',
    },
    {
      label: currentLang === 'es' ? 'Misión' : 'Mission',
      icon: Info,
      href: '#nosotros',
    },
    {
      label: currentLang === 'es' ? 'Carga' : 'Freight',
      icon: Calculator,
      href: '#cotizador',
    },
    {
      label: currentLang === 'es' ? 'Ubicación' : 'Location',
      icon: MapPin,
      href: '#contacto',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#000000]/95 backdrop-blur-xl border-t border-rose-500/30 px-2 py-2 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="flex flex-col items-center justify-center py-1 px-2 text-[10px] font-medium text-slate-300 hover:text-[#E3004F] transition-colors group"
            >
              <Icon className="w-5 h-5 mb-0.5 text-slate-300 group-hover:text-[#E3004F] group-hover:scale-110 transition-transform" />
              <span>{item.label}</span>
            </a>
          );
        })}

        {/* Direct WhatsApp Mobile Action */}
        <a
          href={COMPANY_INFO.whatsappMasterUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 text-[10px] font-bold text-[#25D366] group"
        >
          <div className="w-6 h-6 rounded-full bg-[#25D366] text-black flex items-center justify-center mb-0.5 shadow-[0_0_10px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-transform">
            <WhatsAppIcon className="w-4 h-4 text-black fill-current" />
          </div>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
