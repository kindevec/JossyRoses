import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FlowerMandala } from '../components/FlowerMandala';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Logo } from '../components/Logo';
import { Send, CheckCircle2, Mail, ArrowLeft, ShieldCheck, MapPin, Award } from 'lucide-react';

const sanitizeInput = (str = '') => {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

export const QuotePage = () => {
  const [searchParams] = useSearchParams();
  const initialVariety = searchParams.get('variety') || 'Todas las variedades / Asesoría';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    variety: initialVariety,
    stemLength: '60 cm',
    estimatedBoxes: '5-10 Cajas (HB)',
    comments: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();

    // 1. Anti-Spam Honeypot Verification
    if (honeypot.trim() !== '') {
      setSubmitted(true);
      return;
    }

    // 2. Input Sanitization
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedCompany = sanitizeInput(formData.company);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedCountry = sanitizeInput(formData.country);
    const sanitizedComments = sanitizeInput(formData.comments);

    // 3. Regex Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    const mensaje = [
      '*JOSSY ROSES | SOLICITUD DE COTIZACIÓN*',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      '*DATOS DEL CLIENTE*',
      `• *Nombre:* ${sanitizedName}`,
      `• *Empresa:* ${sanitizedCompany || 'No especificada'}`,
      `• *Correo:* ${sanitizedEmail}`,
      `• *Teléfono:* ${sanitizedPhone}`,
      `• *Destino:* ${sanitizedCountry || 'No especificado'}`,
      '',
      '*DETALLE DEL PEDIDO*',
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

  const underlineInputClasses = "w-full py-2.5 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#E6007E] outline-none text-sm text-[#0A0A0A] placeholder-gray-400 transition-colors font-medium rounded-none";
  const underlineSelectClasses = "w-full py-2.5 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#E6007E] outline-none text-sm text-[#0A0A0A] transition-colors font-medium rounded-none cursor-pointer";

  return (
    <div className="min-h-screen bg-[#FAF0F3] text-[#0A0A0A] font-sans selection:bg-[#E6007E] selection:text-white flex flex-col justify-between">
      
      {/* Page Header */}
      <header className="bg-[#0A0A0A] text-white py-3 px-4 sm:px-8 border-b border-[#E6007E]/30 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo variant="light" />

          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#E6007E] transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Volver al Inicio</span>
              <span className="sm:hidden">Inicio</span>
            </Link>

            <a
              href="https://wa.me/593980849061?text=Hola%20Jossy%20Roses%2C%20quisiera%20asesor%C3%ADa%20para%20una%20lista%20de%20precios."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] px-4 py-1.5 rounded-full shadow-md transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-5 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full pb-28 sm:pb-12">
        
        {/* Compact Title Banner Card */}
        <div className="bg-[#0A0A0A] text-white rounded-2xl p-4 sm:p-6 border border-[#E6007E]/30 shadow-xl relative overflow-hidden mb-6 text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center space-x-2 bg-[#E6007E]/20 border border-[#E6007E]/30 px-3 py-1 rounded-full">
                <FlowerMandala className="w-3.5 h-3.5" color="#E6007E" spin={true} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E6007E]">
                  Atención Comercial Directa
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#E6007E]" />
                <span>Cayambe - Ecuador</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              Solicitud de Lista de Precios <span className="italic font-normal text-[#E6007E]">&amp; Cotización Mayorista</span>
            </h1>

            <p className="text-gray-300 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
              Completa tus datos para recibir la lista actualizada de precios al por mayor directamente del cultivo en Ecuador.
            </p>

            <div className="pt-1 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-gray-300">
              <div className="flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-[#E6007E]" />
                <span>Calidad Exportación</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E6007E]" />
                <span>Cadena de Frío Garantizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form / Confirmation Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6007E]/20 shadow-xl text-left">
          {submitted ? (
            <div className="py-10 text-center space-y-6 max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A0A0A]">
                ¡Solicitud Registrada con Éxito!
              </h2>

              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Hemos recibido tus datos correctamente. Nuestro equipo comercial procesará tu requerimiento y se pondrá en contacto contigo a la brevedad.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF0F3] border border-[#E6007E]/20 text-xs text-gray-700 space-y-2 max-w-lg mx-auto">
                <p className="font-bold text-[#0A0A0A] uppercase tracking-wider text-[11px]">
                  Emails de Atención Comercial Directa:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 text-[#E6007E] font-bold text-sm">
                  <span>Sales1.rosesjossy@gmail.com</span>
                  <span>jossyroses@outlook.es</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0A0A0A] hover:bg-[#E6007E] text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-md transition-colors"
                >
                  Volver al Catálogo
                </Link>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold uppercase tracking-widest text-xs rounded-full transition-colors"
                >
                  Enviar Otra Solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
              
              {/* Anti-Spam Honeypot Field (Hidden from real users) */}
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
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className={underlineInputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Empresa / Floristería / Estudio Floral
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Luxury Floral Studio"
                    className={underlineInputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                    className={underlineInputClasses}
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
                    className={underlineInputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Ciudad / País de Destino
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Ej. Miami, EE. UU."
                    className={underlineInputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Variedad de Interés
                  </label>
                  <select
                    name="variety"
                    value={formData.variety}
                    onChange={handleChange}
                    className={underlineSelectClasses}
                  >
                    <option value="Todas las variedades / Asesoría">Todas las variedades / Asesoría</option>
                    <option value="Freedom">Freedom (Rojo)</option>
                    <option value="Explorer">Explorer (Rojo Oscuro)</option>
                    <option value="Mondial">Mondial (Blanco Marfil)</option>
                    <option value="Playa Blanca">Playa Blanca (Blanco Nieve)</option>
                    <option value="White O'Hara">White O'Hara (Jardín Blanco Aromática)</option>
                    <option value="Swan">Swan (Blanco Seda)</option>
                    <option value="Pink Mondial">Pink Mondial (Rosa Rubor)</option>
                    <option value="Pink O'Hara">Pink O'Hara (Jardín Rosa Aromática)</option>
                    <option value="Hermosa">Hermosa (Rosa Romántico)</option>
                    <option value="Country Blue">Country Blue (Lavanda Vintage)</option>
                    <option value="Momentum">Momentum (Amarillo Canario)</option>
                    <option value="Radiant">Radiant (Amarillo Dorado)</option>
                    <option value="Melon Expression">Melon Expression (Durazno Melón)</option>
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
                    className={underlineSelectClasses}
                  >
                    <option value="50 cm">50 cm</option>
                    <option value="60 cm">60 cm</option>
                    <option value="70 cm">70 cm</option>
                    <option value="80 cm">80 cm</option>
                    <option value="90 cm">90 cm</option>
                    <option value="Mezclado">Mezclado (Mix Box 50-90cm)</option>
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
                    className={underlineSelectClasses}
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
                  Comentarios Adicionales / Especificaciones de Empaque
                </label>
                <textarea
                  name="comments"
                  rows={2}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Indica cualquier requerimiento especial de apertura, empaque o fecha deseada de llegada..."
                  className="w-full py-2.5 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#E6007E] outline-none text-sm text-[#0A0A0A] placeholder-gray-400 transition-colors font-medium rounded-none resize-y"
                />
              </div>

              {/* Official Contact Email Badges */}
              <div className="p-3.5 rounded-2xl bg-[#FAF0F3] border border-[#E6007E]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 text-gray-700 font-medium">
                  <Mail className="w-4 h-4 text-[#E6007E]" />
                  <span>Emails Directos de Atención Comercial:</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-4 text-xs text-[#E6007E] font-bold">
                  <a href="mailto:Sales1.rosesjossy@gmail.com" className="hover:underline">Sales1.rosesjossy@gmail.com</a>
                  <a href="mailto:jossyroses@outlook.es" className="hover:underline">jossyroses@outlook.es</a>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-[#25D366]/20 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Solicitar por WhatsApp Directo</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitForm}
                  className="w-full py-3.5 bg-[#0A0A0A] hover:bg-[#E6007E] text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por Formulario</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </main>

      {/* Page Compact Footer */}
      <footer className="bg-[#0A0A0A] text-white py-4 pb-24 sm:pb-4 border-t border-[#E6007E]/30 text-[10px] sm:text-xs text-gray-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jossy Roses. Venta al por Mayor.</p>
          <div className="flex items-center space-x-3">
            <Link to="/" className="hover:text-[#E6007E] transition-colors">Inicio</Link>
            <span>•</span>
            <a href="mailto:Sales1.rosesjossy@gmail.com" className="hover:text-[#E6007E] transition-colors">Ventas</a>
            <span>•</span>
            <span className="font-serif italic text-gray-400">KinDev S.A.S.</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
