import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FlowerMandala } from '../components/FlowerMandala';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Logo } from '../components/Logo';
import { Send, CheckCircle2, Mail, ArrowLeft, ShieldCheck, MapPin, Award, Sparkles, Clock, Box } from 'lucide-react';

const ROSES_DATA = [
  {
    id: 'freedom',
    name: 'Freedom',
    color: 'Rojo Terciopelo Clásico',
    description: 'Rosa roja icónica de exportación, apertura simétrica y tallo firme.',
    image: '/images/roses/freedom.webp',
    vaseLife: '14-16 días',
    badge: 'Rojas',
  },
  {
    id: 'explorer',
    name: 'Explorer',
    color: 'Rojo Carmesí Profundo',
    description: 'Tono rojo oscuro de gran porte, alta resistencia en transporte internacional.',
    image: '/images/roses/explorer.webp',
    vaseLife: '15-18 días',
    badge: 'Rojas',
  },
  {
    id: 'mondial',
    name: 'Mondial',
    color: 'Blanco Marfil Nupcial',
    description: 'La reina blanca de los eventos de lujo, apertura ondulada y pétalos densos.',
    image: '/images/roses/mondial.webp',
    vaseLife: '14-16 días',
    badge: 'Blancas',
  },
  {
    id: 'playa-blanca',
    name: 'Playa Blanca',
    color: 'Blanco Puro / Nieve',
    description: 'Blanco radiante con centro en espiral perfecto, máxima frescura andina.',
    image: '/images/roses/playa-blanca.webp',
    vaseLife: '13-15 días',
    badge: 'Blancas',
  },
  {
    id: 'white-ohara',
    name: 'White O\'Hara',
    color: 'Jardín Francés Blanco Aromática',
    description: 'Forma de roseta clásica de jardín con fragancia sutil y elegancia atemporal.',
    image: '/images/roses/white-ohara.webp',
    vaseLife: '12-14 días',
    badge: 'Jardín',
  },
  {
    id: 'swan',
    name: 'Swan',
    color: 'Blanco Seda Traslúcido',
    description: 'Apertura voluminosa y tacto aterciopelado, predilecta para arreglos nupciales.',
    image: '/images/roses/swan.webp',
    vaseLife: '14-16 días',
    badge: 'Blancas',
  },
  {
    id: 'pink-mondial',
    name: 'Pink Mondial',
    color: 'Rosa Pálido Rubor / Nude',
    description: 'Tonalidad empolvada delicada, apertura suave y elegante para bouquets de autor.',
    image: '/images/roses/pink-mondial.webp',
    vaseLife: '14-16 días',
    badge: 'Rosadas',
  },
  {
    id: 'pink-ohara',
    name: 'Pink O\'Hara',
    color: 'Jardín Rosado Silvestre Aromática',
    description: 'Aroma cautivador, pétalos rizados y cuerpo generoso estilo jardín europeo.',
    image: '/images/roses/pink-ohara.webp',
    vaseLife: '12-14 días',
    badge: 'Jardín',
  },
  {
    id: 'hermosa',
    name: 'Hermosa',
    color: 'Rosa Medio Romántico',
    description: 'Color rosa pastel uniforme, excelente apertura y resistencia en florero.',
    image: '/images/roses/hermosa.webp',
    vaseLife: '14-16 días',
    badge: 'Rosadas',
  },
  {
    id: 'country-blue',
    name: 'Country Blue',
    color: 'Lavanda Azulado Vintage',
    description: 'Variedad especial de tono lavanda empolvado, textura sedosa y porte distinguido.',
    image: '/images/roses/country-blue.webp',
    vaseLife: '13-15 días',
    badge: 'Especiales',
  },
  {
    id: 'momentum',
    name: 'Momentum',
    color: 'Amarillo Canario Puro',
    description: 'Tono amarillo intenso que transmite energía y luz, botón floral grande.',
    image: '/images/roses/momentum.webp',
    vaseLife: '14-16 días',
    badge: 'Amarillas',
  },
  {
    id: 'radiant',
    name: 'Radiant',
    color: 'Amarillo Dorado Cálido',
    description: 'Pétalos firmes con degradado dorado, apertura simétrica y tallo vigoroso.',
    image: '/images/roses/radiant.webp',
    vaseLife: '14-16 días',
    badge: 'Amarillas',
  },
  {
    id: 'melon-expression',
    name: 'Melon Expression',
    color: 'Durazno Melón Jardín',
    description: 'Pétalos rizados en paleta melón y salmón, la joya para bodas exclusivas.',
    image: '/images/roses/melon-expression.webp',
    vaseLife: '13-15 días',
    badge: 'Jardín',
  },
];

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
  const paramVariety = searchParams.get('variety') || '';

  // Determinar variedad inicial coincidente
  const initialMatchedVariety = useMemo(() => {
    if (!paramVariety) return 'Todas las variedades / Asesoría';
    const found = ROSES_DATA.find(
      r => r.name.toLowerCase() === paramVariety.toLowerCase() ||
           r.id.toLowerCase() === paramVariety.toLowerCase()
    );
    return found ? found.name : paramVariety;
  }, [paramVariety]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    variety: initialMatchedVariety,
    stemLength: '60 cm',
    estimatedBoxes: '5-10 Cajas (HB)',
    comments: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Rosa actualmente seleccionada para mostrar imagen y datos
  const activeRose = useMemo(() => {
    return ROSES_DATA.find(
      r => r.name.toLowerCase() === formData.variety.toLowerCase()
    ) || ROSES_DATA[0];
  }, [formData.variety]);

  const isSpecificVariety = formData.variety !== 'Todas las variedades / Asesoría';

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

  return (
    <div className="min-h-screen bg-[#FDF3F6] text-[#0A0A0A] font-sans selection:bg-[#E6007E] selection:text-white flex flex-col justify-between">
      
      {/* 🌟 Header de Pantalla Completa */}
      <header className="bg-[#0A0A0A] text-white py-3 px-3 sm:px-8 border-b border-[#E6007E]/30 sticky top-0 z-50 shadow-xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo variant="light" />

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link
              to="/#catalog"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/15 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E6007E]" />
              <span>Catálogo</span>
            </Link>

            <a
              href="https://wa.me/593980849061?text=Hola%20Jossy%20Roses%2C%20solicito%20asesor%C3%ADa%20comercial%20para%20rosas%20de%20exportaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">WhatsApp Directo</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 🌹 Área Principal Pantalla Completa */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* Banner Superior Compacto */}
        <div className="mb-4 sm:mb-8 text-left">
          <div className="inline-flex items-center space-x-1.5 bg-[#E6007E]/10 border border-[#E6007E]/25 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-1.5">
            <FlowerMandala className="w-3 h-3 sm:w-3.5 sm:h-3.5" color="#E6007E" spin={true} />
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#E6007E]">
              Atención Comercial Mayorista
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0A0A0A] tracking-tight leading-tight">
            Cotización Directa de Cultivo <span className="italic font-normal text-[#E6007E]">• Cayambe, Ecuador</span>
          </h1>
          <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 max-w-2xl hidden sm:block">
            Rosas 100% reales de exportación con tallos de 50 a 90 cm. Disponibilidad inmediata.
          </p>
        </div>

        {submitted ? (
          /* Pantalla de Confirmación de Éxito */
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-[#E6007E]/20 shadow-xl text-center space-y-5 max-w-xl mx-auto my-6 sm:my-12">
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A0A0A]">
              ¡Solicitud Registrada con Éxito!
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Hemos recibido tus requerimientos. Un asesor comercial de Jossy Roses te contactará a la brevedad.
            </p>

            <div className="p-4 rounded-xl bg-[#FDF3F6] border border-[#E6007E]/20 text-xs text-gray-700 space-y-1.5 max-w-md mx-auto">
              <p className="font-bold text-[#0A0A0A] uppercase tracking-wider text-[10px]">
                Canales de Atención Directa:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 text-[#E6007E] font-bold text-xs sm:text-sm">
                <span>Sales1.rosesjossy@gmail.com</span>
                <span>jossyroses@outlook.es</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <Link
                to="/#catalog"
                className="w-full sm:w-auto px-6 py-3 bg-[#E6007E] hover:bg-[#C4006B] text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-md transition-colors"
              >
                Volver al Catálogo
              </Link>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold uppercase tracking-widest text-xs rounded-full transition-colors cursor-pointer"
              >
                Nueva Cotización
              </button>
            </div>
          </div>
        ) : (
          <div>
            
            {/* 📱 VISTA MÓVIL EXCLUSIVA: Tira Compacta Integrada de la Rosa (Cero 'box-in-box' de 800px) */}
            <div className="lg:hidden mb-3.5 bg-white rounded-2xl p-3 border border-[#E6007E]/20 shadow-sm flex items-center space-x-3 text-left">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-900 shrink-0 shadow-inner relative">
                <picture>
                  <source srcSet={activeRose.image.replace('.webp', '.avif')} type="image/avif" />
                  <source srcSet={activeRose.image} type="image/webp" />
                  <img
                    src={activeRose.image}
                    alt={activeRose.name}
                    className="w-full h-full object-cover"
                  />
                </picture>
                <span className="absolute bottom-1 right-1 bg-[#E6007E] text-white text-[7.5px] font-bold px-1 rounded">
                  {activeRose.badge}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-base text-[#0A0A0A] truncate leading-tight">
                    {activeRose.name}
                  </h2>
                  <span className="text-[8.5px] text-[#E6007E] font-bold uppercase tracking-wider bg-[#E6007E]/10 px-2 py-0.5 rounded-full border border-[#E6007E]/20 shrink-0">
                    {activeRose.vaseLife}
                  </span>
                </div>
                <p className="text-[11px] text-[#E6007E] font-medium truncate mt-0.5">
                  {activeRose.color}
                </p>
                <p className="text-[10px] text-gray-500 font-sans truncate mt-0.5">
                  Tallos 50-90cm • Cayambe, Ecuador
                </p>
              </div>
            </div>

            {/* Layout Principal: 2 Columnas en Desktop / Flujo Natural y Amplio en Móvil */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* 💻 VISTA ESCRITORIO EXCLUSIVA: Ficha Visual Detallada */}
              <div className="hidden lg:block lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-[#E6007E]/20 shadow-xl text-left space-y-4">
                  
                  {/* Imagen Principal de la Rosa */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-900 shadow-md">
                    <picture>
                      <source srcSet={activeRose.image.replace('.webp', '.avif')} type="image/avif" />
                      <source srcSet={activeRose.image} type="image/webp" />
                      <img
                        src={activeRose.image}
                        alt={`Rosa ${activeRose.name} Jossy Roses`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </picture>

                    <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                      {isSpecificVariety ? `Variedad: ${activeRose.name}` : 'Rosas Reales Jossy Roses'}
                    </div>

                    <span className="absolute top-3 right-3 bg-[#E6007E] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {activeRose.badge}
                    </span>
                  </div>

                  {/* Datos de la Variedad */}
                  <div>
                    <h2 className="font-serif font-bold text-2xl text-[#0A0A0A] tracking-tight">
                      {activeRose.name}
                    </h2>
                    <p className="text-xs text-[#E6007E] font-medium mt-0.5">
                      {activeRose.color}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {activeRose.description}
                    </p>
                  </div>

                  {/* Especificaciones Técnicas */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100 text-xs">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#E6007E] shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold">Florero</span>
                        <span className="font-bold text-gray-800">{activeRose.vaseLife}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Box className="w-4 h-4 text-[#E6007E] shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold">Empaque</span>
                        <span className="font-bold text-gray-800">Cajas HB / EB</span>
                      </div>
                    </div>
                  </div>

                  {/* Longitudes Disponibles */}
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1.5">
                      Longitudes Disponibles de Exportación:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['50 cm', '60 cm', '70 cm', '80 cm', '90 cm'].map((len) => (
                        <span
                          key={len}
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                            formData.stemLength === len
                              ? 'bg-[#E6007E] text-white border-[#E6007E]'
                              : 'bg-gray-50 text-gray-700 border-gray-200'
                          }`}
                        >
                          {len}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Sellos de Confianza */}
                <div className="bg-[#0A0A0A] text-white rounded-3xl p-5 border border-[#E6007E]/30 shadow-xl space-y-3 text-left">
                  <div className="flex items-center space-x-2 text-[#E6007E]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Estándar de Calidad Jossy Roses</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E6007E]" />
                      <span>Cayambe 2.850 msnm</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E6007E]" />
                      <span>Cadena de Frío</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-3.5 h-3.5 text-[#E6007E]" />
                      <span>Corte Fresco</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FlowerMandala className="w-3.5 h-3.5" color="#E6007E" spin={true} />
                      <span>13 Variedades Reales</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 📝 FORMULARIO FLUIDO: Aprovecha todo el ancho disponible en móvil */}
              <div className="w-full lg:col-span-7">
                <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#E6007E]/15 sm:border-[#E6007E]/20 shadow-sm sm:shadow-xl text-left">
                  
                  <div className="pb-3 mb-4 sm:pb-4 sm:mb-6 border-b border-gray-100">
                    <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#0A0A0A]">
                      Detalle de tu Pedido
                    </h2>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                      Completa los datos para coordinar disponibilidad y despacho directo.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitWhatsApp} className="space-y-3.5 sm:space-y-4">
                    
                    {/* Honeypot anti-spam */}
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

                    {/* Fila 1: Nombre & Empresa */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ej. Sofia Martínez"
                          className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Empresa / Floristería
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Ej. Luxury Floral Studio"
                          className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Fila 2: Correo & Teléfono */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sofia@empresa.com"
                          className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Fila 3: País / Destino */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Ciudad o País de Destino
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Ej. Miami, EE. UU. / Madrid, España"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white transition-all"
                      />
                    </div>

                    {/* Fila 4: Variedad, Longitud y Volumen */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Variedad de Rosa
                        </label>
                        <select
                          name="variety"
                          value={formData.variety}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white cursor-pointer font-medium"
                        >
                          <option value="Todas las variedades / Asesoría">Todas las variedades / Asesoría</option>
                          {ROSES_DATA.map((rose) => (
                            <option key={rose.id} value={rose.name}>
                              {rose.name} ({rose.badge})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Longitud de Tallo
                        </label>
                        <select
                          name="stemLength"
                          value={formData.stemLength}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white cursor-pointer font-medium"
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
                        <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Volumen Estimado
                        </label>
                        <select
                          name="estimatedBoxes"
                          value={formData.estimatedBoxes}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white cursor-pointer font-medium"
                        >
                          <option value="1-4 Cajas">1 - 4 Cajas (Prueba)</option>
                          <option value="5-10 Cajas (HB)">5 - 10 Cajas (HB)</option>
                          <option value="10-30 Cajas">10 - 30 Cajas</option>
                          <option value="+50 Cajas / Pallet">50+ Cajas / Pallet</option>
                        </select>
                      </div>
                    </div>

                    {/* Fila 5: Comentarios */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Especificaciones Especiales / Comentarios
                      </label>
                      <textarea
                        name="comments"
                        rows={2}
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Indica fecha estimada, aerolínea o preferencias de apertura..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/15 outline-none text-base sm:text-sm bg-white resize-y"
                      />
                    </div>

                    {/* Contacto Oficial Limpio (Sin box-in-box) */}
                    <div className="py-2 border-t border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1.5">
                      <div className="flex items-center space-x-1.5 text-gray-600 font-medium">
                        <Mail className="w-3.5 h-3.5 text-[#E6007E]" />
                        <span>Atención Comercial:</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 text-xs text-[#E6007E] font-bold">
                        <a href="mailto:Sales1.rosesjossy@gmail.com" className="hover:underline">Sales1.rosesjossy@gmail.com</a>
                        <span className="text-gray-300 hidden sm:inline">•</span>
                        <a href="mailto:jossyroses@outlook.es" className="hover:underline">jossyroses@outlook.es</a>
                      </div>
                    </div>

                    {/* Botones de Envío */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="submit"
                        className="w-full py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-md shadow-[#25D366]/20 flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-[0.98]"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Cotizar por WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmitForm}
                        className="w-full py-3.5 sm:py-4 bg-[#0A0A0A] hover:bg-[#E6007E] text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-[0.98]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Confirmar por Formulario</span>
                      </button>
                    </div>

                  </form>

                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Footer Compacto */}
      <footer className="bg-[#0A0A0A] text-white py-5 border-t border-[#E6007E]/30 text-xs text-gray-400 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jossy Roses. Rosas de Exportación. Cayambe, Ecuador.</p>
          <div className="flex items-center space-x-3 text-[11px]">
            <Link to="/#catalog" className="hover:text-[#E6007E] transition-colors">Catálogo</Link>
            <span>•</span>
            <a href="mailto:Sales1.rosesjossy@gmail.com" className="hover:text-[#E6007E] transition-colors">Ventas Mayoristas</a>
            <span>•</span>
            <span className="font-serif italic text-gray-400">KinDev S.A.S.</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
