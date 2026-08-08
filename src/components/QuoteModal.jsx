import React, { useState, useEffect } from 'react';
import { FlowerMandala } from './FlowerMandala';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X, Send, CheckCircle2, Mail } from 'lucide-react';

export const QuoteModal = ({ isOpen, onClose, selectedVariety = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    variety: selectedVariety || 'Todas las variedades / Asesoría',
    stemLength: '60 cm',
    estimatedBoxes: '5-10 Cajas (HB)',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVariety) {
      setFormData((prev) => ({ ...prev, variety: selectedVariety }));
    }
  }, [selectedVariety]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    window.open('https://wa.me/message/MMGXRJ5GA3S5N1', '_blank');
    setSubmitted(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E6007E]/20 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0A0A0A] text-white p-6 sm:p-8 relative flex items-center justify-between border-b border-[#E6007E]/30">
          <div className="flex items-center space-x-3">
            <FlowerMandala className="w-8 h-8" color="#E6007E" spin={true} />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6007E] block">
                Atención Directa
              </span>
              <h3 className="font-serif text-2xl font-normal text-white">
                Solicitud de Cotización Mayorista
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#0A0A0A]">
              ¡Solicitud Registrada!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Un asesor comercial de Jossy Roses revisará tus especificaciones y se pondrá en contacto contigo a la brevedad.
            </p>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-1">
              <p className="font-bold text-[#0A0A0A]">Correos Directos de Atención:</p>
              <p className="text-[#E6007E] font-medium">Sales1.rosesjossy@gmail.com</p>
              <p className="text-[#E6007E] font-medium">jossyroses@outlook.es</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-[#E6007E] text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-md hover:bg-[#C4006B]"
            >
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitWhatsApp} className="p-6 sm:p-8 space-y-5 text-left max-h-[80vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Sofia Martínez"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Empresa / Floristería
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Ej. Luxury Floral Studio"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sofia@ejemplo.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Variedad de Interés
                </label>
                <select
                  name="variety"
                  value={formData.variety}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm bg-white"
                >
                  <option value="Todas las variedades / Asesoría">Todas las variedades</option>
                  <option value="Freedom Red">Freedom (Rojo)</option>
                  <option value="Pink Floyd">Pink Floyd (Magenta)</option>
                  <option value="Mondial White">Mondial (Blanco)</option>
                  <option value="Sweet Akito">Sweet Akito (Rosa Pastel)</option>
                  <option value="High & Magic">High & Magic (Bicolor)</option>
                  <option value="Spray Roses">Spray Roses (Ramificadas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Longitud de Tallo
                </label>
                <select
                  name="stemLength"
                  value={formData.stemLength}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm bg-white"
                >
                  <option value="50 cm">50 cm</option>
                  <option value="60 cm">60 cm</option>
                  <option value="70 cm">70 cm</option>
                  <option value="80 cm">80 cm</option>
                  <option value="Mezclado">Mezclado (Mix Box)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Volumen Estimado
                </label>
                <select
                  name="estimatedBoxes"
                  value={formData.estimatedBoxes}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm bg-white"
                >
                  <option value="1-4 Cajas">1 - 4 Cajas (Prueba)</option>
                  <option value="5-10 Cajas (HB)">5 - 10 Cajas</option>
                  <option value="10-30 Cajas">10 - 30 Cajas</option>
                  <option value="+50 Cajas / Pallet">50+ Cajas / Pallet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Destino o Comentarios Adicionales
              </label>
              <textarea
                name="comments"
                rows={2}
                value={formData.comments}
                onChange={handleChange}
                placeholder="Indica la ciudad de destino, fecha requerida o cualquier preferencia de empaque..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none text-sm"
              />
            </div>

            {/* Official Contact Email Badges */}
            <div className="p-3.5 rounded-2xl bg-[#FDF3F6] border border-[#E6007E]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs space-y-1 sm:space-y-0">
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-4 h-4 text-[#E6007E]" />
                <span className="font-semibold">Emails de Contacto Comercial:</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-3 text-xs text-[#E6007E] font-bold">
                <span>Sales1.rosesjossy@gmail.com</span>
                <span>jossyroses@outlook.es</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Directo</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitForm}
                className="w-full py-3.5 bg-[#0A0A0A] hover:bg-[#E6007E] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Enviar por Formulario</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
