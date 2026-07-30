import React from 'react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/roseCatalog';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: 'es' | 'en';
  onOpenQR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenQR }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-rose-500/20 text-slate-400 text-xs pt-16 pb-24 md:pb-12 relative overflow-hidden">
      
      {/* Decorative Subtle Background Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" variant="full" />
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md mt-4">
              Exportadora ecuatoriana líder en cultivo y distribución internacional de rosas de altitud desde Cayambe, Ecuador. "Where Quality Counts".
            </p>

            {/* Official Social Media Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappMasterUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-[#25D366] text-slate-300 hover:text-[#25D366] flex items-center justify-center transition"
                title="WhatsApp Oficial"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-[#1877F2] text-slate-300 hover:text-[#1877F2] flex items-center justify-center transition"
                title="Facebook Oficial"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-[#E4405F] text-slate-300 hover:text-[#E4405F] flex items-center justify-center transition"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider text-rose-400">
              {currentLang === 'es' ? 'Navegación Rápida' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#hero" className="hover:text-[#E3004F] transition">
                  {currentLang === 'es' ? 'Inicio & Historia' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#E3004F] transition">
                  {currentLang === 'es' ? 'Misión y Visión' : 'Mission & Vision'}
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#E3004F] transition">
                  {currentLang === 'es' ? 'Catálogo de Rosas' : 'Rose Catalog'}
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-[#E3004F] transition">
                  {currentLang === 'es' ? 'Calculador de Carga' : 'Freight Calculator'}
                </a>
              </li>
              <li>
                <a href="#calidad" className="hover:text-[#E3004F] transition">
                  {currentLang === 'es' ? 'Calidad & Cadena de Frío' : 'Quality Process'}
                </a>
              </li>
              <li>
                <button onClick={onOpenQR} className="hover:text-[#E3004F] transition text-left">
                  {currentLang === 'es' ? 'Ver Código QR WhatsApp' : 'View WhatsApp QR'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider text-rose-400">
              {currentLang === 'es' ? 'Oficina y Ventas' : 'Sales & Location'}
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E3004F] shrink-0" />
                <span>{COMPANY_INFO.locationName} (Plus Code: 2VG2+7QP)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E3004F] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-rose-400">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E3004F] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.salesEmail1}`} className="hover:text-rose-400 truncate">
                  {COMPANY_INFO.salesEmail1}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E3004F] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.salesEmail2}`} className="hover:text-rose-400 truncate">
                  {COMPANY_INFO.salesEmail2}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Mandatory text explicitly requested in prompt */}
          <p className="text-slate-400 font-medium text-xs sm:text-sm">
            © 2026 Todos los derechos reservados. Desarrollado por Kindev
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full transition"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
