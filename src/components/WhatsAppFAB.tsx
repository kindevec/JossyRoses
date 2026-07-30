import React, { useState } from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/roseCatalog';
import { X, MessageSquare, Send, Sparkles } from 'lucide-react';

interface WhatsAppFABProps {
  currentLang: 'es' | 'en';
}

export const WhatsAppFAB: React.FC<WhatsAppFABProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup Widget */}
      {isOpen && (
        <div className="mb-3 bg-[#121212] border border-rose-500/30 rounded-2xl p-4 shadow-2xl max-w-xs w-72 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Jossy Roses Ventas</h4>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>En línea ahora</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            ¡Hola! 👋 Gracias por visitar Jossy Roses. ¿Deseas consultar catálogo, precios de exportación o disponibilidad de tallos?
          </p>

          <a
            href={COMPANY_INFO.whatsappMasterUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs py-2.5 px-4 rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.4)] transition"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Iniciar Chat en WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        
        {/* Pulsing Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 blur-md animate-ping" style={{ animationDuration: '3s' }} />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] transition-all transform hover:scale-105"
        >
          <WhatsAppIcon className="w-6 h-6 fill-current shrink-0" />
          <span className="hidden sm:inline text-xs tracking-wide">
            {currentLang === 'es' ? 'Cotizar en Vivo' : 'Live Quote'}
          </span>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </button>

      </div>

    </div>
  );
};
