import path from 'path';
import sharp from 'sharp';

const width = 1200;
const height = 630;

const svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E6007E" stop-opacity="0.18" />
      <stop offset="60%" stop-color="#0F050A" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="1" />
    </radialGradient>

    <!-- Subtitle Glow -->
    <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E6007E" stop-opacity="0" />
      <stop offset="50%" stop-color="#E6007E" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#E6007E" stop-opacity="0" />
    </linearGradient>

    <!-- Subtle Drop Shadow for Mandala -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#E6007E" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="#0A0A0A" />
  <rect width="${width}" height="${height}" fill="url(#bgGlow)" />

  <!-- Outer Decorative Border -->
  <rect x="30" y="30" width="1140" height="570" rx="20" fill="none" stroke="#E6007E" stroke-opacity="0.25" stroke-width="2" />

  <g transform="translate(600, 200) scale(1.15)" filter="url(#shadow)">
    <g transform="translate(-100, -100)">
      <g fill="#E6007E">
        <circle cx="100" cy="15" r="5" />
        <circle cx="160" cy="40" r="5" />
        <circle cx="185" cy="100" r="5" />
        <circle cx="160" cy="160" r="5" />
        <circle cx="100" cy="185" r="5" />
        <circle cx="40" cy="160" r="5" />
        <circle cx="15" cy="100" r="5" />
        <circle cx="40" cy="40" r="5" />
        <path d="M100 25 C112 45, 120 70, 100 92 C80 70, 88 45, 100 25 Z" />
        <path d="M153 47 C142 66, 126 84, 106 94 C116 74, 134 58, 153 47 Z" />
        <path d="M175 100 C155 112, 130 120, 108 100 C130 80, 155 88, 175 100 Z" />
        <path d="M153 153 C134 142, 116 126, 106 106 C126 116, 142 134, 153 153 Z" />
        <path d="M100 175 C88 155, 80 130, 100 108 C120 130, 112 155, 100 175 Z" />
        <path d="M47 153 C58 134, 74 116, 94 106 C84 126, 66 142, 47 153 Z" />
        <path d="M25 100 C45 88, 70 80, 92 100 C70 120, 45 112, 25 100 Z" />
        <path d="M47 47 C66 58, 84 74, 94 94 C74 84, 58 66, 47 47 Z" />
        <circle cx="100" cy="100" r="12" fill="#0A0A0A" />
        <circle cx="100" cy="100" r="6" fill="#E6007E" />
      </g>
    </g>
  </g>

  <!-- Main Title: Jossy Roses -->
  <text x="600" y="390" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="bold" fill="#E6007E" letter-spacing="-1">
    Jossy Roses
  </text>

  <!-- Tagline: WHERE QUALITY COUNTS -->
  <text x="600" y="440" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" letter-spacing="12" opacity="0.95">
    WHERE QUALITY COUNTS
  </text>

  <!-- Horizontal Line Accent -->
  <line x1="400" y1="475" x2="800" y2="475" stroke="url(#lineGlow)" stroke-width="2" />

  <!-- Subtitle -->
  <text x="600" y="525" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="18" font-weight="500" fill="#D1D5DB">
    Rosas Ecuatorianas de Exportación al por Mayor • Cayambe - Ecuador
  </text>
</svg>
`;

async function generateOgImage() {
  const publicDir = path.resolve(process.cwd(), 'public');

  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-preview.jpg'));

  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('✅ og-preview.jpg y og-image.jpg generadas exitosamente con el logo oficial del sitio!');
}

generateOgImage().catch((err) => {
  console.error('❌ Error generando og-image:', err);
  process.exit(1);
});
