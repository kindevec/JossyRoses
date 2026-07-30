import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, QrCode, ExternalLink, CheckCircle2, MessageSquare, Copy, X } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/roseCatalog';

interface LocationContactProps {
  currentLang: 'es' | 'en';
  isQRModalOpen: boolean;
  onCloseQR: () => void;
  onOpenQR: () => void;
}

export const LocationContactSection: React.FC<LocationContactProps> = ({
  currentLang,
  isQRModalOpen,
  onCloseQR,
  onOpenQR,
}) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Jossy Roses, soy ${formData.name} de ${formData.company || 'mi empresa'} (${formData.country}).\n\nEmail: ${formData.email}\nTel: ${formData.phone}\n\nMensaje: ${formData.message}`;
    const url = `${COMPANY_INFO.whatsappMasterUrl}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-[#05080E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#E3004F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2">
            {currentLang === 'es' ? 'Contacto Directo con la Finca' : 'Direct Farm Contact'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {currentLang === 'es' ? 'Ubicación y Atención Comercial' : 'Location & Sales Office'}
          </h2>
          <div className="w-16 h-1 bg-[#E3004F] mx-auto my-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base">
            {currentLang === 'es'
              ? 'Atención personalizada para importadores y distribuidores florales las 24 horas del día.'
              : '24/7 dedicated service for international floral importers and wholesalers.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 sm:mb-16">
          
          {/* Contact Details & Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Master WhatsApp Action Card */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-slate-950 to-slate-950 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider block">
                    {currentLang === 'es' ? 'Canal Oficial Principal' : 'Primary Official Channel'}
                  </span>
                  <h3 className="text-lg font-bold text-white">WhatsApp Empresarial</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Chat directo con la gerencia de ventas para disponibilidad inmediata de tallos y cotizaciones en tiempo real.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappMasterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs py-3 px-4 rounded-xl transition"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Abrir WhatsApp Ahora</span>
                </a>

                <button
                  onClick={onOpenQR}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 p-3 rounded-xl transition text-xs font-semibold flex items-center gap-1.5"
                  title="Escanear Código QR"
                >
                  <QrCode className="w-4 h-4 text-rose-400" />
                  <span className="hidden sm:inline">Código QR</span>
                </button>
              </div>
            </div>

            {/* Direct Phone & Emails Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-[#E3004F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] text-slate-400 font-semibold block">Teléfono / WhatsApp Directo:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-white font-bold text-base hover:text-[#E3004F] transition"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-[#E3004F] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[11px] text-slate-400 font-semibold block">Correos Electrónicos de Ventas:</span>
                  <div className="flex items-center justify-between text-xs text-white font-medium bg-black/40 p-2 rounded-lg border border-slate-800">
                    <a href={`mailto:${COMPANY_INFO.salesEmail1}`} className="hover:text-rose-400 transition truncate">
                      {COMPANY_INFO.salesEmail1}
                    </a>
                    <button
                      onClick={() => handleCopy(COMPANY_INFO.salesEmail1)}
                      className="text-slate-400 hover:text-white p-1"
                      title="Copiar correo"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-white font-medium bg-black/40 p-2 rounded-lg border border-slate-800">
                    <a href={`mailto:${COMPANY_INFO.salesEmail2}`} className="hover:text-rose-400 transition truncate">
                      {COMPANY_INFO.salesEmail2}
                    </a>
                    <button
                      onClick={() => handleCopy(COMPANY_INFO.salesEmail2)}
                      className="text-slate-400 hover:text-white p-1"
                      title="Copiar correo"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {copiedEmail && (
                    <span className="text-[10px] text-emerald-400 font-bold block">
                      ✓ Copiado al portapapeles: {copiedEmail}
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-[#E3004F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Dirección de la Plantación:</span>
                  <p className="text-white text-sm font-bold">{COMPANY_INFO.locationName}</p>
                  <p className="text-xs text-rose-300 font-mono mt-0.5">Código Plus: {COMPANY_INFO.locationCode}</p>
                </div>
              </div>
            </div>

            {/* Official Social Media Links */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">Redes Oficiales Jossy Roses:</span>
              <div className="flex items-center space-x-4">
                <a
                  href={COMPANY_INFO.whatsappMasterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black flex items-center justify-center transition"
                  title="WhatsApp Official"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition"
                  title="Facebook Official"
                >
                  <FacebookIcon className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#E4405F]/20 hover:bg-[#E4405F] text-[#E4405F] hover:text-white flex items-center justify-center transition"
                  title="Instagram Official"
                >
                  <InstagramIcon className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>

          </div>

          {/* Map & Quick Inquiry Form Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Embedded Google Map View for Cayambe */}
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 relative h-80 shadow-2xl">
              <iframe
                title="Jossy Roses Cayambe Ecuador Location Map"
                src="https://maps.google.com/maps?q=Cayambe%2C%20Ecuador&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-black/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-rose-500/30 hover:bg-[#E3004F] transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps (2VG2+7QP)</span>
                </a>
              </div>
            </div>

            {/* Contact Inquiry Form */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Enviar Solicitud Directa
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Llene este formulario y nos comunicaremos de inmediato a través de WhatsApp o Correo Electrónico.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Nombre Completo:*</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#E3004F] text-slate-200 text-xs rounded-xl p-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Empresa / Importadora:</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Global Flowers LLC"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#E3004F] text-slate-200 text-xs rounded-xl p-3 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Correo Electrónico:*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ventas@empresa.com"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#E3004F] text-slate-200 text-xs rounded-xl p-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">País de Destino:*</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Ej. Estados Unidos / España / Rusia"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-[#E3004F] text-slate-200 text-xs rounded-xl p-3 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Mensaje / Requerimiento de Rosas:*</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Indique las variedades de preferencia, largo de tallos (cm) y fecha estimada de entrega."
                    className="w-full bg-slate-900 border border-slate-800 focus:border-[#E3004F] text-slate-200 text-xs rounded-xl p-3 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E3004F] hover:bg-[#ff1a66] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(227,0,79,0.5)] transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta a WhatsApp de Ventas</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

      {/* WhatsApp Official QR Code Modal matching user's uploaded screenshot */}
      <AnimatePresence>
        {isQRModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#121212] border border-rose-500/30 max-w-sm w-full rounded-3xl p-6 sm:p-8 relative text-center shadow-2xl space-y-6"
            >
              <button
                onClick={onCloseQR}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pt-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-1">
                  WhatsApp Oficial Jossy Roses
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  Código QR de Empresa
                </h3>
              </div>

              {/* Styled WhatsApp QR Card Frame */}
              <div className="bg-white rounded-2xl p-6 shadow-xl max-w-[260px] mx-auto text-slate-900 space-y-4 border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto -mt-10 border-4 border-[#121212]">
                  <WhatsAppIcon className="w-5 h-5 fill-current text-[#25D366]" />
                </div>

                <div>
                  <h4 className="font-bold text-base tracking-wide text-slate-900">JOSSY ROSES</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Cuenta de empresa de WhatsApp</p>
                </div>

                {/* QR Code Graphic matching official WhatsApp layout */}
                <div className="p-3 bg-white border border-slate-200 rounded-xl inline-block relative">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/message/MMGXRJ5GA3S5N1"
                    alt="WhatsApp QR Code Jossy Roses"
                    className="w-44 h-44 mx-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white p-1 shadow border border-slate-200">
                      <WhatsAppIcon className="w-full h-full text-[#25D366] fill-current" />
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 font-medium leading-tight">
                  Escanea este código para iniciar un chat de WhatsApp con JOSSY ROSES.
                </p>
              </div>

              <a
                href={COMPANY_INFO.whatsappMasterUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm py-3 px-4 rounded-2xl shadow-[0_0_20px_rgba(37,211,102,0.4)] transition"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Abrir Chat de WhatsApp</span>
              </a>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
