/**
 * Catálogo Oficial de Productos de BARBOS®
 * Total: 20 productos reales basados en las imágenes cargadas en el proyecto
 * Tallas disponibles para prendas y uniformes: 6, 8, 10, 12, 14, 16, S, M, L, XL
 * Precios fijados:
 * - Conjuntos Urbanos: $85.000 COP
 * - Uniformes Fútbol, Básquetbol, Voleibol: $60.000 COP
 * - Maletas: $75.000 COP (Accesorio 1 y 4)
 * - Canguros: $40.000 COP (Accesorio 2 y 3)
 */

const APPAREL_SIZES = ['6', '8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL'];

export const products = [
  // ==========================================
  // ROPA URBANA ($85.000 COP)
  // ==========================================
  {
    id: 'bbs-urb-01',
    name: 'Conjunto Urbano 1',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 5.0,
    reviewsCount: 48,
    isHot: true,
    isNew: true,
    badge: 'MÁS VENDIDO',
    stock: 25,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/urbano-1.png'
    ],
    description: 'Conjunto urbano exclusivo de alta durabilidad y estilo streetwear. Fabricado con tejidos de alta calidad, costuras reforzadas y caída moderna.',
    features: [
      'Tejido de alto gramaje con tacto suave',
      'Corte urbano contemporáneo',
      'Costuras de alta resistencia'
    ],
    fabric: 'Algodón y Fibras Técnicas de Alto Desempeño',
    careInstructions: 'Lavar en máquina con agua fría. Secar a la sombra.'
  },
  {
    id: 'bbs-urb-02',
    name: 'Conjunto Urbano 2',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 4.9,
    reviewsCount: 39,
    isHot: false,
    isNew: true,
    badge: 'NUEVO',
    stock: 20,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'L',
    images: [
      'assets/images/products/urbano-2.png'
    ],
    description: 'Conjunto urbano de diseño moderno y versátil para el día a día y entrenamientos de alta exigencia.',
    features: [
      'Material confortable y transpirable',
      'Acabados limpios de alta gama',
      'Ajuste ergonómico'
    ],
    fabric: 'Algodón Peinado y Poliéster',
    careInstructions: 'Lavar al revés con agua fría.'
  },
  {
    id: 'bbs-urb-03',
    name: 'Conjunto Urbano 3',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 4.9,
    reviewsCount: 32,
    isHot: true,
    isNew: false,
    badge: 'POPULAR',
    stock: 18,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/urbano-3.png'
    ],
    description: 'Diseño streetwear con presencia imponente, ajuste cómodo y máxima libertad de movimiento.',
    features: [
      'Confección prémium',
      'Tejido suave de larga durabilidad',
      'Bolsillos funcionales'
    ],
    fabric: 'Algodón y Spandex',
    careInstructions: 'Lavar a máquina en ciclo suave.'
  },
  {
    id: 'bbs-urb-04',
    name: 'Conjunto Urbano 4',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 4.8,
    reviewsCount: 27,
    isHot: false,
    isNew: true,
    badge: 'EDICIÓN ESPECIAL',
    stock: 16,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'L',
    images: [
      'assets/images/products/urbano-4.png'
    ],
    description: 'Conjunto urbano de silueta sobria y corte amplio ideal para lucir dentro y fuera del entrenamiento.',
    features: [
      'Tela resistente anti-desgaste',
      'Ajuste relajado contemporáneo',
      'Logo Barbos estampado en alta resolución'
    ],
    fabric: 'Algodón Peinado 100%',
    careInstructions: 'No usar blanqueador.'
  },
  {
    id: 'bbs-urb-05',
    name: 'Conjunto Urbano 5',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 5.0,
    reviewsCount: 44,
    isHot: true,
    isNew: true,
    badge: 'MÁS VENDIDO',
    stock: 22,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/urbano-5.png'
    ],
    description: 'Conjunto urbano con acabados de alto contraste y tejido estructurado de máximo confort.',
    features: [
      'Excelente caída y frescura',
      'Costuras reforzadas',
      'Material pre-encogido'
    ],
    fabric: 'Algodón y Poliéster de Alta Resistencia',
    careInstructions: 'Lavar con agua fría.'
  },
  {
    id: 'bbs-urb-06',
    name: 'Conjunto Urbano 6',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 4.8,
    reviewsCount: 30,
    isHot: false,
    isNew: false,
    badge: 'COLECCIÓN',
    stock: 15,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/urbano-6.png'
    ],
    description: 'Silueta deportiva urbana con gran adaptabilidad y detalles limpios en monocromático.',
    features: [
      'Tejido ligero y resistente',
      'Gran comodidad para cualquier actividad'
    ],
    fabric: 'Mezcla Textil Transpirable',
    careInstructions: 'Lavar en frío.'
  },
  {
    id: 'bbs-urb-07',
    name: 'Conjunto Urbano 7',
    category: 'urbana',
    gender: 'unisex',
    priceCOP: 85000,
    priceUSD: 21.25,
    priceEUR: 19.55,
    priceMXN: 408.00,
    rating: 4.9,
    reviewsCount: 36,
    isHot: true,
    isNew: true,
    badge: 'NUEVO',
    stock: 19,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'L',
    images: [
      'assets/images/products/urbano-7.png'
    ],
    description: 'Conjunto urbano diseñado para destacar con estética minimalista y máxima comodidad.',
    features: [
      'Corte moderno y estilizado',
      'Tejido premium anti-motas',
      'Bolsillos reforzados'
    ],
    fabric: 'Algodón y Poliéster',
    careInstructions: 'Lavar en máquina en ciclo delicado.'
  },

  // ==========================================
  // UNIFORMES DE FÚTBOL ($60.000 COP)
  // ==========================================
  {
    id: 'bbs-fut-01',
    name: 'Uniforme Fútbol 1',
    category: 'futbol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 5.0,
    reviewsCount: 88,
    isHot: true,
    isNew: true,
    badge: 'MÁS VENDIDO',
    stock: 35,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/futbol-1.png'
    ],
    description: 'Uniforme completo de fútbol confeccionado en tela micro-perforada de secado rápido. Incluye camiseta y pantaloneta técnica.',
    features: [
      'Microfibra transpirable que expulsa el sudor',
      'Corte deportivo ergonómico para máximo remate',
      'Costuras planas reforzadas'
    ],
    fabric: '100% Poliéster Deportivo Micro-Filamento',
    careInstructions: 'Lavar con agua fría. Secado rápido al aire libre.'
  },
  {
    id: 'bbs-fut-02',
    name: 'Uniforme Fútbol 2',
    category: 'futbol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 4.9,
    reviewsCount: 64,
    isHot: false,
    isNew: true,
    badge: 'NUEVO',
    stock: 28,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'L',
    images: [
      'assets/images/products/futbol-2.png'
    ],
    description: 'Uniforme de fútbol de alta gama para torneos y partidos exigentes. Diseñado para ofrecer frescura constante.',
    features: [
      'Ventilación lateral optimizada',
      'Pantaloneta con cordón de ajuste interno reforzado',
      'Gran resistencia a roces y estiramientos'
    ],
    fabric: '100% Poliéster Interlock Deportivo',
    careInstructions: 'Lavar en frío sin blanqueador.'
  },
  {
    id: 'bbs-fut-03',
    name: 'Personaliza tu uniforme de fútbol',
    category: 'futbol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 5.0,
    reviewsCount: 115,
    isHot: true,
    isNew: true,
    badge: 'PERSONALIZABLE',
    stock: 50,
    colors: [
      { name: 'Blanco & Negro', hex: '#FFFFFF' },
      { name: 'Negro Élite', hex: '#0B0C0E' },
      { name: 'Azul Marino', hex: '#1E3A8A' },
      { name: 'Rojo Carmesí', hex: '#B91C1C' },
      { name: 'Verde Volt', hex: '#22C55E' },
      { name: 'Amarillo Neón', hex: '#FACC15' },
      { name: 'Vinotinto', hex: '#831843' }
    ],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/futbol-3.png'
    ],
    description: 'Uniforme de fútbol 100% personalizable para tu equipo o club. Elige tu combinación de colores favorita, añade número, nombre y escudos.',
    features: [
      'Múltiples combinaciones de color a elección',
      'Tela ultraligera y transpirable de alto rendimiento',
      'No retiene humedad ni peso durante el juego',
      'Personalización disponible de dorsales y escudos'
    ],
    fabric: '100% Poliéster Dry-Sport Pro',
    careInstructions: 'Lavar al revés con agua fría.'
  },

  // ==========================================
  // UNIFORMES DE BÁSQUETBOL ($60.000 COP)
  // ==========================================
  {
    id: 'bbs-bsq-01',
    name: 'Personaliza tu uniforme de básquetbol',
    category: 'basquetbol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 5.0,
    reviewsCount: 98,
    isHot: true,
    isNew: true,
    badge: 'PERSONALIZABLE',
    stock: 45,
    colors: [
      { name: 'Negro Clásico', hex: '#0B0C0E' },
      { name: 'Blanco Puro', hex: '#FFFFFF' },
      { name: 'Rojo Chicago', hex: '#EF4444' },
      { name: 'Azul Royal', hex: '#2563EB' },
      { name: 'Amarillo Oro', hex: '#EAB308' },
      { name: 'Verde Celtics', hex: '#059669' },
      { name: 'Morado Lakers', hex: '#6D28D9' }
    ],
    sizes: APPAREL_SIZES,
    defaultSize: 'L',
    images: [
      'assets/images/products/basket-1.png'
    ],
    description: 'Uniforme de básquetbol personalizable con esqueleto amplio y pantaloneta holgada. Disponible en una amplia gama de colores para equipos y torneos.',
    features: [
      'Amplia paleta de colores para clubes y torneos',
      'Malla de poro abierto para flujo de aire constante',
      'Sisas amplias con rib elástico resistente',
      'Pantaloneta con pretina elástica y cordón de ajuste'
    ],
    fabric: '100% Malla de Poliéster Transpirable',
    careInstructions: 'Lavar en máquina con agua fría.'
  },
  {
    id: 'bbs-bsq-02',
    name: 'Uniforme de Básquetbol 1',
    category: 'basquetbol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 4.8,
    reviewsCount: 49,
    isHot: false,
    isNew: true,
    badge: 'NUEVO',
    stock: 24,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/basket-2.png'
    ],
    description: 'Conjunto de baloncesto liviano diseñado para streetball y competiciones en duela.',
    features: [
      'Material ligero y fresco',
      'Corte amplio para libertad total en tiros y saltos',
      'Costuras reforzadas'
    ],
    fabric: '100% Poliéster Deportivo',
    careInstructions: 'Lavar en frío.'
  },
  {
    id: 'bbs-bsq-03',
    name: 'Uniforme de Básquetbol 2',
    category: 'basquetbol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 4.9,
    reviewsCount: 58,
    isHot: true,
    isNew: false,
    badge: 'COLECCIÓN',
    stock: 26,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'XL',
    images: [
      'assets/images/products/basket-3.png'
    ],
    description: 'Uniforme completo de básquetbol con silueta holgada y gran frescura en cada juego.',
    features: [
      'Tejido antitranspirante',
      'Pantaloneta holgada con excelente caída',
      'Diseño moderno de alto impacto'
    ],
    fabric: '100% Poliéster Técnico',
    careInstructions: 'Lavar con colores similares.'
  },

  // ==========================================
  // UNIFORMES DE VOLEIBOL ($60.000 COP)
  // ==========================================
  {
    id: 'bbs-vol-01',
    name: 'Personaliza tu uniforme de voleibol',
    category: 'voleibol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 5.0,
    reviewsCount: 110,
    isHot: true,
    isNew: true,
    badge: 'PERSONALIZABLE',
    stock: 45,
    colors: [
      { name: 'Negro & Blanco', hex: '#0B0D10' },
      { name: 'Blanco & Negro', hex: '#FFFFFF' },
      { name: 'Azul Eléctrico', hex: '#0055FF' },
      { name: 'Rojo Pasión', hex: '#DC2626' },
      { name: 'Verde Neón', hex: '#10B981' },
      { name: 'Amarillo Oro', hex: '#F59E0B' },
      { name: 'Morado Real', hex: '#7C3AED' }
    ],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/volley-1.png'
    ],
    description: 'Uniforme ergonómico de voleibol 100% personalizable para clubes y equipos. Elige entre 7 combinaciones de colores de alto impacto.',
    features: [
      '7 opciones de color a tu elección',
      'Elasticidad multidireccional para saltos y remates',
      'Secado ultrarrápido',
      'Ajuste anatómico de alto soporte'
    ],
    fabric: '85% Poliéster • 15% Elastano Licra Pro',
    careInstructions: 'Lavar en ciclo delicado con agua fría.'
  },
  {
    id: 'bbs-vol-02',
    name: 'Uniforme de Voleibol 1',
    category: 'voleibol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 4.9,
    reviewsCount: 60,
    isHot: false,
    isNew: true,
    badge: 'NUEVO',
    stock: 25,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'L',
    images: [
      'assets/images/products/volley-2.png'
    ],
    description: 'Conjunto de voleibol de alta resistencia y flexibilidad para partidos y entrenamientos intensos.',
    features: [
      'Tela fresca que no transparenta',
      'Costuras elásticas reforzadas',
      'Comodidad total en caídas y recepciones'
    ],
    fabric: 'Poliéster y Elastano de Alto Rebote',
    careInstructions: 'Lavar en agua fría.'
  },
  {
    id: 'bbs-vol-03',
    name: 'Uniforme de Voleibol 2',
    category: 'voleibol',
    gender: 'unisex',
    priceCOP: 60000,
    priceUSD: 15.00,
    priceEUR: 13.80,
    priceMXN: 288.00,
    rating: 4.8,
    reviewsCount: 45,
    isHot: false,
    isNew: false,
    badge: 'COLECCIÓN',
    stock: 22,
    colors: [],
    sizes: APPAREL_SIZES,
    defaultSize: 'M',
    images: [
      'assets/images/products/volley-3.png'
    ],
    description: 'Uniforme técnico de voleibol diseñado para agilidad y ventilación continua en cancha.',
    features: [
      'Evacúa la humedad al instante',
      'Pretina anatómica antideslizante',
      'Máxima durabilidad'
    ],
    fabric: '100% Poliéster Técnico y Spandex',
    careInstructions: 'Lavar con agua fría.'
  },

  // ==========================================
  // ACCESORIOS: MALETAS ($75.000) Y CANGUROS ($40.000)
  // ==========================================
  {
    id: 'bbs-acc-01',
    name: 'Maleta',
    category: 'accesorios',
    gender: 'unisex',
    priceCOP: 75000,
    priceUSD: 18.75,
    priceEUR: 17.25,
    priceMXN: 360.00,
    rating: 5.0,
    reviewsCount: 84,
    isHot: true,
    isNew: true,
    badge: 'MÁS VENDIDO',
    stock: 30,
    colors: [],
    sizes: ['Capacidad Amplia'],
    defaultSize: 'Capacidad Amplia',
    images: [
      'assets/images/products/accesorio-1.png'
    ],
    description: 'Maleta deportiva y tula reforzada confeccionada en lona impermeable de alta tenacidad con múltiples compartimentos.',
    features: [
      'Lona balística resistente al agua',
      'Compartimentos amplios y organizadores',
      'Correas acolchadas ajustables'
    ],
    fabric: '100% Lona de Nailon Impermeable',
    careInstructions: 'Limpiar con paño húmedo.'
  },
  {
    id: 'bbs-acc-04',
    name: 'Maleta',
    category: 'accesorios',
    gender: 'unisex',
    priceCOP: 75000,
    priceUSD: 18.75,
    priceEUR: 17.25,
    priceMXN: 360.00,
    rating: 4.9,
    reviewsCount: 56,
    isHot: false,
    isNew: true,
    badge: 'NUEVO',
    stock: 25,
    colors: [],
    sizes: ['Capacidad Amplia'],
    defaultSize: 'Capacidad Amplia',
    images: [
      'assets/images/products/accesorio-4.png'
    ],
    description: 'Maleta deportiva de alta capacidad y resistencia diseñada para llevar ropa de cambio, calzado y accesorios de entrenamiento.',
    features: [
      'Material impermeable reforzado',
      'Cremalleras resistentes',
      'Diseño ergonómico y espacioso'
    ],
    fabric: 'Nailon Balístico y Poliéster Reforzado',
    careInstructions: 'Limpieza superficial con paño húmedo.'
  },
  {
    id: 'bbs-acc-02',
    name: 'Canguro',
    category: 'accesorios',
    gender: 'unisex',
    priceCOP: 40000,
    priceUSD: 10.00,
    priceEUR: 9.20,
    priceMXN: 192.00,
    rating: 5.0,
    reviewsCount: 110,
    isHot: true,
    isNew: true,
    badge: 'MÁS VENDIDO',
    stock: 45,
    colors: [],
    sizes: ['Ajustable'],
    defaultSize: 'Ajustable',
    images: [
      'assets/images/products/accesorio-2.png'
    ],
    description: 'Canguro y pechera deportiva táctica impermeable con cremalleras selladas para llevar celular, llaves y accesorios de forma segura.',
    features: [
      'Cremalleras impermeables termoselladas',
      'Correa ajustable con broche de liberación rápida',
      '3 bolsillos organizadores internos'
    ],
    fabric: '100% Nailon Impermeable',
    careInstructions: 'Limpiar con un paño húmedo.'
  },
  {
    id: 'bbs-acc-03',
    name: 'Canguro',
    category: 'accesorios',
    gender: 'unisex',
    priceCOP: 40000,
    priceUSD: 10.00,
    priceEUR: 9.20,
    priceMXN: 192.00,
    rating: 4.8,
    reviewsCount: 72,
    isHot: false,
    isNew: false,
    badge: 'POPULAR',
    stock: 40,
    colors: [],
    sizes: ['Ajustable'],
    defaultSize: 'Ajustable',
    images: [
      'assets/images/products/accesorio-3.png'
    ],
    description: 'Canguro deportivo compacto y ergonómico ideal para correr, entrenar y desplazarse por la ciudad con total comodidad.',
    features: [
      'Diseño liviano y seguro',
      'Bolsillo frontal y compartimento de seguridad',
      'Ajuste ergonómico al cuerpo'
    ],
    fabric: 'Nailon Impermeable de Alta Tenacidad',
    careInstructions: 'Limpiar con paño húmedo.'
  }
];

export const customerReviews = [
  {
    author: 'Mateo Restrepo',
    city: 'Medellín, Colombia',
    rating: 5,
    productName: 'Personaliza tu uniforme de fútbol',
    date: 'Hace 2 días',
    comment: 'Mandamos a hacer los uniformes para el equipo del torneo y la calidad superó todas las expectativas. Elegimos nuestros colores y el despacho por WhatsApp fue súper rápido.'
  },
  {
    author: 'Valeria Gómez',
    city: 'Bogotá, Colombia',
    rating: 5,
    productName: 'Personaliza tu uniforme de voleibol',
    date: 'Hace 4 días',
    comment: 'Excelente ajuste para jugar voleibol. Pudimos personalizar los colores de nuestro equipo y la tela transpira perfecto. Recomendadísima la marca.'
  },
  {
    author: 'Carlos Eduardo M.',
    city: 'Cali, Colombia',
    rating: 5,
    productName: 'Personaliza tu uniforme de básquetbol',
    date: 'Hace 1 semana',
    comment: 'La malla es de primer nivel, no pesa nada cuando uno está sudando. Los colores se ven brutales en la duela.'
  },
  {
    author: 'Andrea Silva',
    city: 'Barranquilla, Colombia',
    rating: 5,
    productName: 'Maleta',
    date: 'Hace 2 semanas',
    comment: 'La maleta tiene espacio para todo: calzado, ropa de cambio y es súper resistente. Compramos 6 unidades para el club y el envío fue gratis.'
  }
];
