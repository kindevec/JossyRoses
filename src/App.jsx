import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Categories } from './components/Categories';
import { BrandStory } from './components/BrandStory';
import { B2BApplications } from './components/B2BApplications';
import { NewsletterQuoteBar } from './components/NewsletterQuoteBar';
import { FeaturedVarieties } from './components/FeaturedVarieties';
import { MissionVision } from './components/MissionVision';
import { FlowerMandala } from './components/FlowerMandala';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Mail, MapPin } from 'lucide-react';
import { AnimateIn } from './components/AnimateIn';
import { QuotePage } from './pages/QuotePage';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clean trailing empty hash (#) from URL if present
    if (window.location.hash === '#' || window.location.hash === '#/') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const handleOpenQuote = (variety = '') => {
    if (variety) {
      navigate(`/solicitar-cotizacion?variety=${encodeURIComponent(variety)}`);
    } else {
      navigate('/solicitar-cotizacion');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF3F6] text-[#0A0A0A] font-sans selection:bg-[#E6007E] selection:text-white">
      {/* 1. Header / Navigation */}
      <Header onOpenQuoteModal={() => navigate('/solicitar-cotizacion')} />

      {/* Main Content Flow - Hasfarm x Jossy Roses Hybrid */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => navigate('/solicitar-cotizacion')} />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Categories & Collections */}
        <Categories onOpenQuoteModal={(variety) => handleOpenQuote(variety)} />

        {/* 5. Brand Story */}
        <BrandStory onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 6. B2B Applications */}
        <B2BApplications onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 7. Newsletter Quote Subscription Bar & Banner Cards */}
        <NewsletterQuoteBar onOpenQuoteModal={(variety) => handleOpenQuote(variety)} />

        {/* 8. Featured Varieties Catalog */}
        <FeaturedVarieties onSelectVarietyForQuote={(varietyName) => handleOpenQuote(varietyName)} />

        {/* 9. Misión & Visión Section (Justo antes del Footer) */}
        <MissionVision />
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#0A0A0A] text-white pt-16 pb-24 md:pb-12 border-t border-[#E6007E]/30 relative overflow-hidden">
        <AnimateIn animation="fade-up" duration={800}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
            
            {/* Brand Col */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <FlowerMandala className="w-8 h-8" color="#E6007E" spin={true} />
                <div className="flex items-baseline font-serif text-2xl tracking-tight leading-none text-white">
                  <span className="font-bold italic">J</span>
                  <span className="font-medium">ossy</span>
                  <span className="font-bold italic ml-1">R</span>
                  <span className="font-medium">oses</span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E6007E]">
                WHERE QUALITY COUNTS
              </p>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                Productor y exportador de rosas al por mayor para el mercado internacional. Compromiso inquebrantable con la frescura, el calibre de tallo y la duración en florero.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 text-left space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Acceso Rápido
              </h4>
              <ul className="space-y-2 text-xs text-gray-400 font-sans">
                <li><a href="#catalog" className="hover:text-[#E6007E] transition-colors">Catálogo de Variedades</a></li>
                <li><a href="#categories" className="hover:text-[#E6007E] transition-colors">Colecciones Mayoristas</a></li>
                <li><a href="#about" className="hover:text-[#E6007E] transition-colors">Nuestra Poscosecha</a></li>
                <li><a href="#mission-vision" className="hover:text-[#E6007E] transition-colors">Misión & Visión</a></li>
                <li><Link to="/solicitar-cotizacion" className="hover:text-[#E6007E] transition-colors">Solicitar Cotización</Link></li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="md:col-span-4 text-left space-y-3">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Atención Comercial
              </h4>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                  <a
                    href={`https://wa.me/593980849061?text=${encodeURIComponent('Hola Jossy Roses, quisiera asesoría personalizada con un asesor comercial.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors font-medium text-green-300"
                  >
                    WhatsApp Directo Asesor
                  </a>
                </div>
                <div className="flex items-[#E6007E] space-x-2 pt-1">
                  <Mail className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1">
                    <a href="mailto:Sales1.rosesjossy@gmail.com" className="hover:text-[#E6007E] transition-colors">
                      Sales1.rosesjossy@gmail.com
                    </a>
                    <a href="mailto:jossyroses@outlook.es" className="hover:text-[#E6007E] transition-colors">
                      jossyroses@outlook.es
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-1">
                  <MapPin className="w-4 h-4 text-[#E6007E]" />
                  <span>Cayambe - Ecuador</span>
                </div>
              </div>

              {/* Botón de Página Independiente de Cotización */}
              <Link
                to="/solicitar-cotizacion"
                className="mt-4 inline-block px-6 py-2.5 bg-[#E6007E] hover:bg-[#C4006B] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Solicitar Lista de Precios
              </Link>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Jossy Roses. Todos los derechos reservados. Venta al por Mayor.</p>
            <p className="mt-2 sm:mt-0 font-serif italic text-gray-400">Desarrollado por KinDev S.A.S.</p>
          </div>

        </div>
        </AnimateIn>
      </footer>

      {/* Floating Official WhatsApp Action Button */}
      <a
        href={`https://wa.me/593980849061?text=${encodeURIComponent('Hola, me gustaría contactarme con Jossy Roses.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white group"
        title="Contactar Asesor por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
        <span className="absolute right-16 bg-[#0A0A0A] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-800 font-sans">
          WhatsApp Directo Jossy Roses
        </span>
      </a>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solicitar-cotizacion" element={<QuotePage />} />
        <Route path="/lista-de-precios" element={<QuotePage />} />
        <Route path="/cotizacion" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
