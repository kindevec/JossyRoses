import { RoseVariety, Testimonial } from '../types';

export const ROSE_VARIETIES: RoseVariety[] = [
  {
    id: 'freedom',
    name: 'Freedom',
    colorCategory: 'red',
    colorName: 'Rojo Pasión Clásico',
    headSizeCm: '6.5 - 7.2 cm',
    stemLengthsCm: [50, 60, 70, 80, 90, 100],
    vaseLifeDays: 16,
    bloomType: 'Cáliz Abierto Clásico',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['San Valentín', 'Bodas', 'Exportación Masiva'],
    description: 'La rosa roja por excelencia de Ecuador. Tallo ultra fuerte y erguido, pétalos de terciopelo intenso con vida en florero superior a 16 días.'
  },
  {
    id: 'mondial',
    name: 'Mondial',
    colorCategory: 'white',
    colorName: 'Blanco Crema Puro',
    headSizeCm: '6.0 - 6.8 cm',
    stemLengthsCm: [50, 60, 70, 80, 90],
    vaseLifeDays: 18,
    bloomType: 'Apertura Elegante en Roseta',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Bodas de Lujo', 'Eventos VIP', 'Floristería de Alta Gama'],
    description: 'Conocida como la reina de las rosas blancas. Sus pétalos exteriores muestran un matiz verde menta sutil que abre hacia un blanco impecable.'
  },
  {
    id: 'explorer',
    name: 'Explorer',
    colorCategory: 'red',
    colorName: 'Rojo Borgoña Oscuro',
    headSizeCm: '6.8 - 7.5 cm',
    stemLengthsCm: [60, 70, 80, 90, 100, 110],
    vaseLifeDays: 18,
    bloomType: 'Cáliz Profundo',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Mercados de Lujo', 'Europa del Este', 'Emiratos Árabes'],
    description: 'El estándar de lujo en rosas rojas oscuras. Botón de gran calibre, follaje verde oscuro radiante y resistencia extraordinaria en viajes de larga distancia.'
  },
  {
    id: 'pink-floyd',
    name: 'Pink Floyd',
    colorCategory: 'pink',
    colorName: 'Fucsia Neón Electrizante',
    headSizeCm: '6.5 - 7.2 cm',
    stemLengthsCm: [50, 60, 70, 80, 90],
    vaseLifeDays: 15,
    bloomType: 'Cáliz Gigante Vibrant',
    image: 'https://images.unsplash.com/photo-1548625361-1934988701a2?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Diseños Vanguardistas', 'Celebraciones', 'Mercado Norteamericano'],
    description: 'Un color deslumbrante que capta miradas al instante. Rosa de tono rosa caliente con aroma dulce delicado y apertura simétrica perfecta.'
  },
  {
    id: 'high-magic',
    name: 'High & Magic',
    colorCategory: 'bicolor',
    colorName: 'Bicolor Amarillo Fuego y Borde Rojo',
    headSizeCm: '5.8 - 6.5 cm',
    stemLengthsCm: [50, 60, 70, 80],
    vaseLifeDays: 16,
    bloomType: 'Bicolor Dinámico',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Arreglos Otoñales', 'Día de la Madre', 'Fiestas Nacionales'],
    description: 'Representa el fuego volcánico de Ecuador. Centro amarillo brillante con bordes teñidos de rojo carmesí natural.'
  },
  {
    id: 'paloma',
    name: 'Paloma',
    colorCategory: 'bicolor',
    colorName: 'Blanco Perlado con Borde Rosa Magenta',
    headSizeCm: '6.0 - 6.8 cm',
    stemLengthsCm: [50, 60, 70, 80, 90],
    vaseLifeDays: 17,
    bloomType: 'Pétalo Rizado Bicolor',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Floristerías Boutique', 'Cumpleaños Premium', 'Japón & Asia'],
    description: 'Sofisticación pura. Fondo blanco mantecoso contrastado por una fina pincelada de rosa fucsia en el perfil de cada pétalo.'
  },
  {
    id: 'sweetness',
    name: 'Sweetness',
    colorCategory: 'bicolor',
    colorName: 'Blanco Marfil y Borde Rosa Rubí',
    headSizeCm: '6.2 - 7.0 cm',
    stemLengthsCm: [50, 60, 70, 80, 90],
    vaseLifeDays: 16,
    bloomType: 'Roseta Abierta',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Bodas', 'Aniversarios', 'Exportación Asia-Pacífico'],
    description: 'Rosa de presencia dulce y aristocrática. Excelentes calificaciones en hidratación tras transporte aéreo trasatlántico.'
  },
  {
    id: 'deep-purple',
    name: 'Deep Purple',
    colorCategory: 'exotic',
    colorName: 'Púrpura Magenta Profundo',
    headSizeCm: '6.0 - 6.7 cm',
    stemLengthsCm: [50, 60, 70, 80],
    vaseLifeDays: 15,
    bloomType: 'Cáliz Exótico',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Diseño Floral Exclusivo', 'Eventos Nocturnos', 'Europa Occidental'],
    description: 'Una de las variedades más codiciadas en el mercado exótico. Gradación natural entre rosado intenso y púrpura violeta.'
  },
  {
    id: 'gotcha',
    name: 'Gotcha',
    colorCategory: 'pink',
    colorName: 'Rosa Fucsia Intenso',
    headSizeCm: '6.0 - 6.8 cm',
    stemLengthsCm: [50, 60, 70, 80, 90],
    vaseLifeDays: 16,
    bloomType: 'Cáliz Firme',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Distribución Mayorista', 'Día de San Valentín', 'Mercado de EE.UU.'],
    description: 'Fucsia vivo de alto rendimiento comercial. Mantiene firme su botón sin abrir prematuramente durante la distribución.'
  },
  {
    id: 'candlelight',
    name: 'Candlelight',
    colorCategory: 'yellow',
    colorName: 'Amarillo Dorado Sol de Cayambe',
    headSizeCm: '6.2 - 6.9 cm',
    stemLengthsCm: [50, 60, 70, 80],
    vaseLifeDays: 15,
    bloomType: 'Roseta Cálida',
    image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?q=80&w=1200&auto=format&fit=crop',
    popularFor: ['Primavera', 'Celebraciones Corporativas', 'América Latina'],
    description: 'Ilumina cualquier ambiente con su tono amarillo cálido como la luz del amanecer ecuatoriano en los Andes.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Alexander Volkov',
    companyName: 'Imperial Flora Imports',
    country: 'Rusia',
    city: 'Moscú',
    flag: '🇷🇺',
    quote: 'Las rosas de Jossy Roses llegan a Moscú con una frescura intacta. El calibre del botón de la variedad Explorer supera los 7 cm y los tallos de 90 cm tienen la rigidez perfecta que exigen nuestros clientes VIP.',
    rating: 5,
    importedVolume: '120,000 tallos / mes'
  },
  {
    id: '2',
    clientName: 'Sarah Jenkins',
    companyName: 'Bloom & Petal Wholesalers',
    country: 'Estados Unidos',
    city: 'Miami, FL',
    flag: '🇺🇸',
    quote: 'Llevamos más de 4 años trabajando con Jossy Roses para la temporada de San Valentín y Día de la Madre. Cumplimiento del 100% en cadena de frío y empaque impecable.',
    rating: 5,
    importedVolume: '250,000 tallos / temporada'
  },
  {
    id: '3',
    clientName: 'Jean-Luc Dubois',
    companyName: 'Fleurs de L\'Europe Express',
    country: 'Países Bajos',
    city: 'Ámsterdam',
    flag: '🇳🇱',
    quote: 'En el hub floral de Aalsmeer, la consistencia de color y apertura de las rosas Mondial de Jossy Roses es reconocida. Excelente comunicación en todo el proceso logístico.',
    rating: 5,
    importedVolume: '95,000 tallos / mes'
  },
  {
    id: '4',
    clientName: 'Tariq Al-Mansoor',
    companyName: 'Royal Gulf Botanical',
    country: 'Emiratos Árabes Unidos',
    city: 'Dubái',
    flag: '🇦🇪',
    quote: 'Para los eventos reales y palacios en Dubái sólo aceptamos rosas ecuatorianas de más de 80 cm con aperturas simétricas. Jossy Roses es nuestro proveedor preferido.',
    rating: 5,
    importedVolume: '60,000 tallos / mes'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'FlorEcuador® Certified',
    description: 'Cumplimiento estricto de sostenibilidad socio-ambiental y responsabilidad laboral.'
  },
  {
    title: 'Cadena de Frío Ultra-Controlada (2°C)',
    description: 'Proceso BAXTER vacuum cooling desde la finca en Cayambe hasta el contenedor aéreo.'
  },
  {
    title: 'Rainforest Alliance Standard',
    description: 'Preservación de microcuencas andinas y biodiversidad en los campos de Cayambe.'
  },
  {
    title: '100% Calidad de Exportación Premium',
    description: 'Inspección manual pétalo por pétalo con tolerancia cero a defectos visuales.'
  }
];

export const COMPANY_INFO = {
  name: 'Jossy Roses',
  slogan: 'WHERE QUALITY COUNTS',
  tagline: 'Exportadora Ecuatoriana de Rosas de Calidad Superior',
  altitude: '2,800 metros sobre el nivel del mar',
  locationName: 'Cayambe, Pichincha - Ecuador',
  locationCode: '2VG2+7QP, Cayambe, Ecuador',
  phone: '+593 98 084 9061',
  phoneClean: '593980849061',
  salesEmail1: 'Sales1.rosesjossy@gmail.com',
  salesEmail2: 'jossyroses@outlook.es',
  whatsappMasterUrl: 'https://wa.me/593980849061?text=Hola%20Jossy%20Roses,%20quisiera%20cotizar%20un%20pedido%20de%20exportaci%C3%B3n',
  googleMapsUrl: 'https://maps.google.com/?q=2VG2%2B7QP%2C+Cayambe%2C+Ecuador',
  misionText: 'Brindar una experiencia de compra única enfocada en la excelencia y la satisfacción total.',
  visionText: 'Crecer de forma sostenible apoyando el desarrollo de nuestra comunidad y el cuidado del entorno.'
};
