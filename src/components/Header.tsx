import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { Phone, Mail, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/roseCatalog';

interface HeaderProps {
  currentLang: 'es' | 'en';
  onToggleLang: () => void;
  onOpenQR: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenQR
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: currentLang === 'es' ? 'Inicio' : 'Home', href: '#hero' },
    { name: currentLang === 'es' ? 'Nosotros' : 'About', href: '#nosotros' },
    { name: currentLang === 'es' ? 'Catálogo' : 'Catalog', href: '#catalogo' },
    { name: currentLang === 'es' ? 'Cotizador' : 'Calculator', href: '#cotizador' },
    { name: currentLang === 'es' ? 'Calidad' : 'Quality', href: '#calidad' },
    { name: currentLang === 'es' ? 'Ubicación' : 'Location', href: '#contacto' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0b0f17] border-b border-rose-500/10 text-xs text-slate-700 py-1.5 px-4 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-rose-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              <span>{currentLang === 'es' ? 'Cosecha Fresca Cayambe 2,800m' : 'Fresh Harvest Cayambe 2,800m'}</span>
            </span>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-rose-400 transition flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.salesEmail1}`} className="hover:text-rose-400 transition flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <span>{COMPANY_INFO.salesEmail1}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Official Social Media Icons */}
            <div className="flex items-center space-x-3 text-slate-600">
              <a
                href={COMPANY_INFO.whatsappMasterUrl}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Oficial Jossy Roses"
                className="hover:text-[#25D366] transition transform hover:scale-110"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                title="Facebook Jossy Roses"
                className="hover:text-[#1877F2] transition transform hover:scale-110"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram Jossy Roses"
                className="hover:text-[#E4405F] transition transform hover:scale-110"
              >
                <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
              </a>
            </div>

            <button
              onClick={onOpenQR}
              className="text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/30 px-2.5 py-0.5 rounded-full hover:bg-rose-900/80 transition"
            >
              {currentLang === 'es' ? 'Ver QR WhatsApp' : 'View WhatsApp QR'}
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 text-slate-700 hover:text-zinc-900 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-semibold"
            >
              <Globe className="w-3 h-3 text-rose-400" />
              <span>{currentLang.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-50/90 backdrop-blur-md border-b border-rose-500/20 shadow-2xl py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-white/95 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <a href="#hero" className="focus:outline-none shrink-0">
            <BrandLogo size="md" variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-800 hover:text-[#E3004F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E3004F] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {/* Language toggle on mobile */}
            <button
              onClick={onToggleLang}
              className="lg:hidden flex items-center gap-1 text-slate-800 px-2 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-[11px] sm:text-xs font-semibold shrink-0 hover:border-rose-500/50 transition"
              title="Cambiar idioma / Change language"
            >
              <Globe className="w-3.5 h-3.5 text-rose-400" />
              <span>{currentLang.toUpperCase()}</span>
            </button>

            {/* Direct WhatsApp Call to Action Button */}
            <a
              href={COMPANY_INFO.whatsappMasterUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#E3004F] to-[#ff1a66] hover:from-[#ff1a66] hover:to-[#E3004F] text-zinc-900 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(227,0,79,0.4)] hover:shadow-[0_0_30px_rgba(227,0,79,0.8)] transition-all transform hover:-translate-y-0.5 active:scale-95 group shrink-0"
              title={currentLang === 'es' ? 'Cotizar pedido por WhatsApp' : 'Request quote via WhatsApp'}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 fill-current" />
              </div>
              <span className="whitespace-nowrap font-bold">
                {currentLang === 'es' ? 'Cotizar' : 'Quote'}
                <span className="hidden sm:inline">{currentLang === 'es' ? ' WhatsApp' : ' WhatsApp'}</span>
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

