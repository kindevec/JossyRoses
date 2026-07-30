import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Box, Plane, CheckCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/roseCatalog';

interface FreightCalculatorProps {
  currentLang: 'es' | 'en';
}

export const FreightCalculator: React.FC<FreightCalculatorProps> = ({ currentLang }) => {
  const [boxType, setBoxType] = useState<'QB' | 'HB' | 'EB'>('HB');
  const [stemLength, setStemLength] = useState<number>(70);
  const [numberOfBoxes, setNumberOfBoxes] = useState<number>(5);
  const [destinationRegion, setDestinationRegion] = useState<string>('EE.UU. / Miami');

  // Approximate stems per box based on stem length and box format
  const getStemsPerBox = (box: 'QB' | 'HB' | 'EB', length: number) => {
    let baseHB = 300;
    if (length <= 60) baseHB = 350;
    if (length >= 80) baseHB = 250;
    if (length >= 90) baseHB = 200;

    if (box === 'QB') return Math.round(baseHB * 0.5);
    if (box === 'HB') return baseHB;
    if (box === 'EB') return baseHB * 2;
    return baseHB;
  };

  const stemsPerBox = getStemsPerBox(boxType, stemLength);
  const totalStems = stemsPerBox * numberOfBoxes;

  const boxNames = {
    QB: currentLang === 'es' ? 'Quarter Box (QB)' : 'Quarter Box (QB)',
    HB: currentLang === 'es' ? 'Half Box (HB)' : 'Half Box (HB)',
    EB: currentLang === 'es' ? 'Full Box (EB / Tabaco)' : 'Full Box (EB)',
  };

  const getWhatsAppFreightLink = () => {
    const text = `Hola Jossy Roses, utilicé su Calculadora de Carga en la web. Deseo una cotización logística para:\n- Tipo de Caja: *${boxType}* (${boxNames[boxType]})\n- Largo de Tallo: *${stemLength} cm*\n- Cantidad de Cajas: *${numberOfBoxes} cajas*\n- Total Tallos Estimados: *${totalStems.toLocaleString()} tallos*\n- Destino: *${destinationRegion}*\nPor favor confírmenme tarifa aérea y disponibilidad de vuelo.`;
    return `${COMPANY_INFO.whatsappMasterUrl}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador" className="py-16 sm:py-24 bg-[#05080E] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E3004F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#E3004F] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2">
            {currentLang === 'es' ? 'Optimización Logística de Importación' : 'Import Logistics Estimator'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {currentLang === 'es' ? 'Calculador de Carga y Cajas' : 'Freight & Box Calculator'}
          </h2>
          <div className="w-16 h-1 bg-[#E3004F] mx-auto my-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base">
            {currentLang === 'es'
              ? 'Calcule el volumen aproximado de tallos según la presentación de empaque y solicite tarifas preferenciales de flete aéreo.'
              : 'Calculate stem volume based on packaging specs and request preferential air freight rates.'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Controls Form Side */}
          <div className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-3xl border border-rose-500/20 space-y-5 sm:space-y-6">
            
            {/* Box Type Selector */}
            <div>
              <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Box className="w-4 h-4 text-[#E3004F]" />
                1. {currentLang === 'es' ? 'Selecciona Formato de Caja Exportación' : 'Select Box Format'}
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(['QB', 'HB', 'EB'] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBoxType(b)}
                    className={`p-2.5 sm:p-3.5 rounded-2xl text-center border transition-all ${
                      boxType === b
                        ? 'bg-[#E3004F] border-[#E3004F] text-white shadow-[0_0_20px_rgba(227,0,79,0.5)] font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="block text-base sm:text-lg font-bold font-mono">{b}</span>
                    <span className="block text-[9px] sm:text-[10px] opacity-80 mt-0.5 truncate">
                      {b === 'QB' ? 'Cuarto' : b === 'HB' ? 'Mediana' : 'Full / Doble'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stem Length Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                  2. {currentLang === 'es' ? 'Largo de Tallo Deseado:' : 'Stem Length:'}
                </label>
                <span className="text-sm font-bold text-white font-mono bg-rose-950 px-3 py-1 rounded-full border border-rose-500/30">
                  {stemLength} cm
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={100}
                step={10}
                value={stemLength}
                onChange={(e) => setStemLength(Number(e.target.value))}
                className="w-full accent-[#E3004F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>50cm</span>
                <span>60cm</span>
                <span>70cm</span>
                <span>80cm</span>
                <span>90cm</span>
                <span>100cm</span>
              </div>
            </div>

            {/* Number of Boxes Counter */}
            <div>
              <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-2">
                3. {currentLang === 'es' ? 'Cantidad de Cajas a Importar:' : 'Number of Boxes:'}
              </label>
              <div className="flex items-center gap-4 bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setNumberOfBoxes(Math.max(1, numberOfBoxes - 1))}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#E3004F] text-white font-bold text-lg transition"
                >
                  -
                </button>
                <div className="flex-1 text-center">
                  <span className="text-2xl font-bold font-mono text-white">{numberOfBoxes}</span>
                  <span className="text-xs text-slate-400 block">{numberOfBoxes === 1 ? 'Caja' : 'Cajas'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setNumberOfBoxes(numberOfBoxes + 1)}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#E3004F] text-white font-bold text-lg transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Destination Region */}
            <div>
              <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-2">
                4. {currentLang === 'es' ? 'Región / Destino Aéreo:' : 'Flight Destination:'}
              </label>
              <select
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl p-3 outline-none focus:border-[#E3004F]"
              >
                <option value="EE.UU. / Miami (MIA)">EE.UU. / Miami (MIA)</option>
                <option value="Europa / Ámsterdam (AMS)">Europa / Ámsterdam (AMS)</option>
                <option value="Rusia / Moscú (SVO)">Rusia / Moscú (SVO)</option>
                <option value="Medio Oriente / Dubái (DXB)">Medio Oriente / Dubái (DXB)</option>
                <option value="Asia / Tokio / Shanghái">Asia / Tokio / Shanghái</option>
                <option value="Latinoamérica">Latinoamérica</option>
              </select>
            </div>

          </div>

          {/* Results Summary Box Side */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-[#E3004F]/40 bg-gradient-to-b from-rose-950/30 to-black/80 space-y-6 flex flex-col justify-between h-full shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4 mb-6">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E3004F]" />
                  Resumen de Estimación
                </span>
                <span className="text-[11px] bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full font-bold">
                  BAXTER Certified
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-black/60 p-4 rounded-2xl border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 font-medium block">Tallos Estimados por Caja:</span>
                  <span className="text-3xl font-display font-bold text-[#E3004F] my-1 block">
                    ~{stemsPerBox} tallos
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Depende del volumen del botón según variedad
                  </span>
                </div>

                <div className="bg-black/60 p-5 rounded-2xl border border-rose-500/20 text-center">
                  <span className="text-xs text-slate-300 font-medium block">Carga Total Estimada:</span>
                  <span className="text-4xl sm:text-5xl font-display font-bold text-white my-1 block text-gradient-rose">
                    {totalStems.toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-rose-300">
                    Tallos de Rosas de {stemLength} cm ({numberOfBoxes} {boxNames[boxType]})
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cadena de frío mantenida a 2°C constante.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Protección de botón capuchón de cartón rígido.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Embarque directo aeropuerto Quito (UIO).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <a
              href={getWhatsAppFreightLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#E3004F] hover:bg-[#ff1a66] text-white font-bold text-base py-4 px-6 rounded-2xl shadow-[0_0_25px_rgba(227,0,79,0.6)] transition transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Solicitar Cotización de Carga</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
