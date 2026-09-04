import React, { useState, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X, Send, CheckCircle2, Mail } from 'lucide-react';

// Sanitization helper against XSS / Injection attacks
const sanitizeInput = (str = '') => {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

export const QuoteModal = ({ isOpen, onClose, selectedVariety = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    variety: selectedVariety || 'Todas las variedades / Asesoría',
    stemLength: '60 cm',
    estimatedBoxes: '5-10 Cajas (HB)',
    comments: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVariety) {
      setFormData((prev) => ({ ...prev, variety: selectedVariety }));
    }
  }, [selectedVariety]);

  // Bloquear scroll de la página de fondo para eliminar el 'scroll falso'
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();

    // 1. Anti-Spam Honeypot Verification
    if (honeypot.trim() !== '') {
      console.warn('Bot detected via honeypot field.');
      setSubmitted(true);
      return;
    }

    // 2. Input Sanitization
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedCompany = sanitizeInput(formData.company);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedComments = sanitizeInput(formData.comments);

    // 3. Regex Email & Phone Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    const mensaje = [
      '*JOSSY ROSES | SOLICITUD DE COTIZACIÓN*',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      '*DATOS DE CONTACTO*',
      `• *Nombre:* ${sanitizedName}`,
      `• *Empresa:* ${sanitizedCompany || 'No especificada'}`,
      `• *Correo:* ${sanitizedEmail}`,
      `• *Teléfono:* ${sanitizedPhone}`,
      '',
      '*DETALLE DE COTIZACIÓN*',
      `• *Variedad:* ${formData.variety}`,
      `• *Longitud de tallo:* ${formData.stemLength}`,
      `• *Volumen estimado:* ${formData.estimatedBoxes}`,
      '',
      '*COMENTARIOS O REQUERIMIENTOS:*',
      `${sanitizedComments || 'Sin comentarios adicionales.'}`,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '_Where Quality Counts • Cayambe, Ecuador_'
    ].join('\n');

    window.open(`https://wa.me/593980849061?text=${encodeURIComponent(mensaje)}`, '_blank');
    setSubmitted(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmitWhatsApp(e);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Dialog Card (Ventana modal centrada de tamaño elegante, no pantalla completa) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E6007E]/25 overflow-hidden my-auto max-h-[90vh] flex flex-col transition-all duration-200 animate-in fade-in zoom-in-95"
      >
        {/* Modal Header */}
        <div className="bg-[#0A0A0A] text-white px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-[#E6007E]/30 shrink-0">
          <div className="flex items-center space-x-3">
            <FlowerMandala className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" color="#E6007E" spin={true} />
            <div className="text-left">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#E6007E] block leading-none">
                Jossy Roses • Cayambe, Ecuador
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1 leading-tight">
                Cotización de Rosas de Exportación
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Cerrar modal"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6 text-left">
          {submitted ? (
            <div className="py-8 text-center space-y-5 max-w-md mx-auto">
              <div className="w-14 h-14 rounded-full bg-green-100 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#0A0A0A]">
                ¡Solicitud Enviada!
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Tu cotización fue transmitida. Un asesor de Jossy Roses responderá con la disponibilidad de corte y detalles del pedido.
              </p>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-[#0A0A0A]">Atención Directa:</p>
                <p className="text-[#E6007E] font-medium">Sales1.rosesjossy@gmail.com</p>
                <p className="text-[#E6007E] font-medium">+593 98 084 9061</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#E6007E] text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-md hover:bg-[#C4006B] cursor-pointer transition-all"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              
              {/* Anti-Spam Honeypot Field */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_hp_fax"
                  tabIndex="-1"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Empresa / Floristería
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Floral Design Studio"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="carlos@empresa.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Variedad de Interés
                  </label>
                  <select
                    name="variety"
                    value={formData.variety}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs bg-white"
                  >
                    <option value="Todas las variedades / Asesoría">Todas las variedades / Asesoría</option>
                    <option value="Freedom">Freedom (Rojo Clásico)</option>
                    <option value="Explorer">Explorer (Rojo Oscuro)</option>
                    <option value="Mondial">Mondial (Blanco Marfil)</option>
                    <option value="Playa Blanca">Playa Blanca (Blanco Nieve)</option>
                    <option value="White O'Hara">White O'Hara (Jardín Blanco)</option>
                    <option value="Swan">Swan (Blanco Seda)</option>
                    <option value="Pink Mondial">Pink Mondial (Rosa Rubor)</option>
                    <option value="Pink O'Hara">Pink O'Hara (Jardín Rosa)</option>
                    <option value="Hermosa">Hermosa (Rosa Romántico)</option>
                    <option value="Country Blue">Country Blue (Lavanda Vintage)</option>
                    <option value="Momentum">Momentum (Amarillo Canario)</option>
                    <option value="Radiant">Radiant (Amarillo Dorado)</option>
                    <option value="Melon Expression">Melon Expression (Durazno Jardín)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Longitud de Tallo
                  </label>
                  <select
                    name="stemLength"
                    value={formData.stemLength}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs bg-white"
                  >
                    <option value="50 cm">50 cm</option>
                    <option value="60 cm">60 cm</option>
                    <option value="70 cm">70 cm</option>
                    <option value="Mezclado">Mezclado (Mix 50-70cm)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Volumen Estimado
                  </label>
                  <select
                    name="estimatedBoxes"
                    value={formData.estimatedBoxes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs bg-white"
                  >
                    <option value="1-4 Cajas">1 - 4 Cajas (Prueba)</option>
                    <option value="5-10 Cajas (HB)">5 - 10 Cajas</option>
                    <option value="10-30 Cajas">10 - 30 Cajas</option>
                    <option value="+50 Cajas / Pallet">50+ Cajas / Pallet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Destino o Comentarios Adicionales
                </label>
                <textarea
                  name="comments"
                  rows={2}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Ciudad o aeropuerto de destino, fecha deseada o especificaciones..."
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-xs sm:text-sm resize-none"
                />
              </div>

              {/* Official Contact Email Badges */}
              <div className="p-3 rounded-xl bg-[#FDF3F6] border border-[#E6007E]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] gap-1">
                <div className="flex items-center space-x-1.5 text-gray-700">
                  <Mail className="w-3.5 h-3.5 text-[#E6007E]" />
                  <span className="font-semibold">Atención Comercial Directa:</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-3 text-[#E6007E] font-bold">
                  <span>Sales1.rosesjossy@gmail.com</span>
                  <span>jossyroses@outlook.es</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitForm}
                  className="w-full py-3 bg-[#0A0A0A] hover:bg-[#E6007E] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirmar Solicitud</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
