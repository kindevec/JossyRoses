import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { MissionVision } from './components/MissionVision';
import { CatalogSection } from './components/CatalogSection';
import { FreightCalculator } from './components/FreightCalculator';
import { QualityProcess } from './components/QualityProcess';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#E3004F] selection:text-zinc-900 relative overflow-x-hidden">
      
      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenQR={() => setIsQRModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection
          currentLang={currentLang}
          onOpenQR={() => setIsQRModalOpen(true)}
        />

        <MissionVision
          currentLang={currentLang}
        />

        <CatalogSection
          currentLang={currentLang}
        />

        <FreightCalculator
          currentLang={currentLang}
        />

        <QualityProcess
          currentLang={currentLang}
        />

        <LocationContactSection
          currentLang={currentLang}
          isQRModalOpen={isQRModalOpen}
          onCloseQR={() => setIsQRModalOpen(false)}
          onOpenQR={() => setIsQRModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenQR={() => setIsQRModalOpen(true)}
      />

      {/* Permanent Mobile Bottom Navigation Bar */}
      <BottomNav
        currentLang={currentLang}
        onOpenQR={() => setIsQRModalOpen(true)}
      />

      {/* Floating WhatsApp FAB */}
      <WhatsAppFAB
        currentLang={currentLang}
      />

    </div>
  );
}
