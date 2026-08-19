import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FileText } from 'lucide-react';

export const Header = ({ onOpenQuoteModal }) => {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const r = Math.min(Math.max(currentScroll / 100, 0), 1);
      setScrollRatio(r);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Colecciones', href: '#categories' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Misión & Visión', href: '#mission-vision' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    const mensaje = "Hola Jossy Roses, me gustaría recibir más información general.";
    window.open(`https://wa.me/593980849061?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300">
      {/* Capa 1: Fondo degradado inicial cuando se está arriba del todo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"
        style={{ opacity: 1 - scrollRatio }}
      />

      {/* Capa 2: Fondo oscuro sólido uniforme con blur progresivo al hacer scroll */}
      <div
        className="absolute inset-0 z-0 pointer-events-none backdrop-blur-md transition-opacity duration-150"
        style={{
          opacity: scrollRatio,
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          borderBottom: `1px solid rgba(230, 0, 126, ${0.25 * scrollRatio})`,
          boxShadow:
            scrollRatio > 0.1
              ? `0 10px 30px -10px rgba(0, 0, 0, ${0.7 * scrollRatio})`
              : 'none',
        }}
      />

      {/* Contenedor de contenido con z-10 permanente para que el Logo y Menú NUNCA se oculten */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-gray-200 hover:text-white transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6007E] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* WhatsApp Quick Action */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] px-4 py-2 rounded-full transition-all shadow-md shadow-[#25D366]/20 transform hover:-translate-y-0.5"
              title="Chat directo por WhatsApp Jossy Roses"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo</span>
            </button>

            {/* B2B Quote Request CTA */}
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#E6007E] hover:bg-[#C4006B] rounded-full overflow-hidden shadow-lg shadow-[#E6007E]/25 hover:shadow-[#E6007E]/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Solicitar Cotización</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF33A3] to-[#E6007E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button (Removed to use bottom nav instead) */}
        </div>
      </div>

      {/* Mobile Drawer Menu (Removed to use bottom nav instead) */}
    </header>
  );
};
