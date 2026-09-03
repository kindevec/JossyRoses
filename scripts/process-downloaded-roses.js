import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'C:/Users/mkmcm/Downloads';
const outputDir = path.resolve('public/images/roses');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const items = [
  { file: 'FREEDOM.png', id: 'freedom', name: 'Freedom' },
  { file: 'EXPLORER.png', id: 'explorer', name: 'Explorer' },
  { file: 'MONDIAL.png', id: 'mondial', name: 'Mondial' },
  { file: 'PLAYA BLANCA.png', id: 'playa-blanca', name: 'Playa Blanca' },
  { file: 'WHITE O HARA.png', id: 'white-ohara', name: "White O'Hara" },
  { file: 'SWAN.png', id: 'swan', name: 'Swan' },
  { file: 'PINK MONDIAL.png', id: 'pink-mondial', name: 'Pink Mondial' },
  { file: 'PINK O HARA.png', id: 'pink-ohara', name: "Pink O'Hara" },
  { file: 'HERMOSA.png', id: 'hermosa', name: 'Hermosa' },
  { file: 'COUNTRY BLUE.png', id: 'country-blue', name: 'Country Blue' },
  { file: 'MOMENTUM.png', id: 'momentum', name: 'Momentum' },
  { file: 'RADIANT.png', id: 'radiant', name: 'Radiant' },
  { file: 'MELON EXPRESSION.png', id: 'melon-expression', name: 'Melon Expression' }
];

async function processRoses() {
  let totalOrig = 0;
  let totalWebp = 0;
  let totalAvif = 0;

  console.log('🌹 Procesando y optimizando las 13 rosas reales de Descargas...\n');

  for (const item of items) {
    const inPath = path.join(inputDir, item.file);
    const webpPath = path.join(outputDir, `${item.id}.webp`);
    const avifPath = path.join(outputDir, `${item.id}.avif`);

    if (!fs.existsSync(inPath)) {
      console.error(`⚠️ No se encontró: ${inPath}`);
      continue;
    }

    const origBytes = fs.statSync(inPath).size;
    totalOrig += origBytes;

    // WebP a 800x800, quality 82, effort 6
    await sharp(inPath)
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);

    // AVIF a 800x800, quality 68, effort 6
    await sharp(inPath)
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .avif({ quality: 68, effort: 6 })
      .toFile(avifPath);

    const webpBytes = fs.statSync(webpPath).size;
    const avifBytes = fs.statSync(avifPath).size;
    totalWebp += webpBytes;
    totalAvif += avifBytes;

    const webpSavings = (((origBytes - webpBytes) / origBytes) * 100).toFixed(1);
    const avifSavings = (((origBytes - avifBytes) / origBytes) * 100).toFixed(1);

    console.log(
      `✓ ${item.name.padEnd(18)} | Orig: ${(origBytes / 1024).toFixed(1)} KB -> WebP: ${(webpBytes / 1024).toFixed(1)} KB (-${webpSavings}%) | AVIF: ${(avifBytes / 1024).toFixed(1)} KB (-${avifSavings}%)`
    );
  }

  console.log('\n-------------------------------------------------------------');
  console.log(`📊 TOTAL ORIGINAL:  ${(totalOrig / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`📊 TOTAL WEBP:      ${(totalWebp / 1024).toFixed(1)} KB (-${(((totalOrig - totalWebp) / totalOrig) * 100).toFixed(1)}%)`);
  console.log(`📊 TOTAL AVIF:      ${(totalAvif / 1024).toFixed(1)} KB (-${(((totalOrig - totalAvif) / totalOrig) * 100).toFixed(1)}%)`);
}

processRoses().catch(console.error);
