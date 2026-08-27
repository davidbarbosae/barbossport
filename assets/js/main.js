/**
 * BARBOS® - Standalone Engine
 * 100% Autónomo para navegadores web locales y servidores
 * Total: 20 productos reales cargados desde la carpeta de Imágenes
 * Tallas ampliadas: 6, 8, 10, 12, 14, 16, S, M, L, XL
 */

(function () {
  'use strict';

  // 1. Configuración de Marca y Pagos
  const siteConfig = {
    brandName: 'BARBOS®',
    slogan: 'ELEVA TU PODER',
    subSlogan: 'DISEÑADO CON ESTILO. CONSTRUIDO PARA EL DEPORTE.',
    whatsappNumber: '573143937314',
    paymentPhone: '+57 314 3937314',
    email: 'sportbboss@gmail.com',
    instagram: 'https://www.instagram.com/barbos_sport/',
    facebook: 'https://www.facebook.com/people/Barbos-sport/61582216238608/',
    tiktok: 'https://www.tiktok.com/@barbos_sport',
    shippingCostCOP: 20000,
    freeShippingThresholdUnits: 6,
    currencySymbols: {
      COP: '$',
      USD: '$'
    },
    currencies: [
      { code: 'COP', label: 'COP ($)', name: 'Peso Colombiano', rate: 1 },
      { code: 'USD', label: 'USD ($)', name: 'Dólar Estadounidense', rate: 0.00025 }
    ],
    coupons: {
      'BARBOS10': { discount: 0.10, description: '10% de descuento por bienvenida' },
      'REFERIDO15': { discount: 0.15, description: '15% de descuento por Plan de Referidos' },
      'AMIGOBARBOS': { discount: 0.10, description: '10% de descuento para amigo referido' }
    }
  };

  const APPAREL_SIZES = ['6', '8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL'];

  // 2. Catálogo Oficial de 20 Productos Reales
  const products = [
    // ROPA URBANA ($85.000 COP)
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
      images: ['assets/images/products/urbano-1.png'],
      description: 'Conjunto urbano exclusivo de alta durabilidad y estilo streetwear. Fabricado con tejidos de alta calidad, costuras reforzadas y caída moderna.',
      features: ['Tejido de alto gramaje con tacto suave', 'Corte urbano contemporáneo', 'Costuras de alta resistencia'],
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
      images: ['assets/images/products/urbano-2.png'],
      description: 'Conjunto urbano de diseño moderno y versátil para el día a día y entrenamientos de alta exigencia.',
      features: ['Material confortable y transpirable', 'Acabados limpios de alta gama', 'Ajuste ergonómico'],
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
      images: ['assets/images/products/urbano-3.png'],
      description: 'Diseño streetwear con presencia imponente, ajuste cómodo y máxima libertad de movimiento.',
      features: ['Confección prémium', 'Tejido suave de larga durabilidad', 'Bolsillos funcionales'],
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
      images: ['assets/images/products/urbano-4.png'],
      description: 'Conjunto urbano de silueta sobria y corte amplio ideal para lucir dentro y fuera del entrenamiento.',
      features: ['Tela resistente anti-desgaste', 'Ajuste relajado contemporáneo', 'Logo Barbos estampado en alta resolución'],
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
      images: ['assets/images/products/urbano-5.png'],
      description: 'Conjunto urbano con acabados de alto contraste y tejido estructurado de máximo confort.',
      features: ['Excelente caída y frescura', 'Costuras reforzadas', 'Material pre-encogido'],
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
      images: ['assets/images/products/urbano-6.png'],
      description: 'Silueta deportiva urbana con gran adaptabilidad y detalles limpios en monocromático.',
      features: ['Tejido ligero y resistente', 'Gran comodidad para cualquier actividad'],
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
      images: ['assets/images/products/urbano-7.png'],
      description: 'Conjunto urbano diseñado para destacar con estética minimalista y máxima comodidad.',
      features: ['Corte moderno y estilizado', 'Tejido premium anti-motas', 'Bolsillos reforzados'],
      fabric: 'Algodón y Poliéster',
      careInstructions: 'Lavar en máquina en ciclo delicado.'
    },

    // UNIFORMES DE FÚTBOL ($60.000 COP)
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
      images: ['assets/images/products/futbol-1.png'],
      description: 'Uniforme completo de fútbol confeccionado en tela micro-perforada de secado rápido. Incluye camiseta y pantaloneta técnica.',
      features: ['Microfibra transpirable que expulsa el sudor', 'Corte deportivo ergonómico para máximo remate', 'Costuras planas reforzadas'],
      fabric: '100% Poliéster Deportivo Micro-Filamento',
      careInstructions: 'Lavar con agua fría.'
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
      images: ['assets/images/products/futbol-2.png'],
      description: 'Uniforme de fútbol de alta gama para torneos y partidos exigentes.',
      features: ['Ventilación lateral optimizada', 'Pantaloneta con cordón de ajuste interno', 'Gran resistencia a roces'],
      fabric: '100% Poliéster Interlock Deportivo',
      careInstructions: 'Lavar en frío.'
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
      images: ['assets/images/products/futbol-3.png'],
      description: 'Uniforme de fútbol 100% personalizable para tu equipo o club. Elige tu combinación de colores favorita, añade número, nombre y escudos.',
      features: ['Múltiples combinaciones de color a elección', 'Tela ultraligera y transpirable de alto rendimiento', 'No retiene humedad ni peso durante el juego', 'Personalización disponible de dorsales y escudos'],
      fabric: '100% Poliéster Dry-Sport Pro',
      careInstructions: 'Lavar al revés con agua fría.'
    },

    // UNIFORMES DE BÁSQUETBOL ($60.000 COP)
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
      images: ['assets/images/products/basket-1.png'],
      description: 'Uniforme de básquetbol personalizable con esqueleto amplio y pantaloneta holgada. Disponible en una amplia gama de colores para equipos y torneos.',
      features: ['Amplia paleta de colores para clubes y torneos', 'Malla de poro abierto para flujo de aire constante', 'Sisas amplias con rib elástico resistente', 'Pantaloneta con pretina elástica y cordón de ajuste'],
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
      images: ['assets/images/products/basket-2.png'],
      description: 'Conjunto de baloncesto liviano diseñado para streetball y competiciones en duela.',
      features: ['Material ligero y fresco', 'Corte amplio para libertad total en tiros y saltos'],
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
      images: ['assets/images/products/basket-3.png'],
      description: 'Uniforme completo de básquetbol con silueta holgada y gran frescura en cada juego.',
      features: ['Tejido antitranspirante', 'Pantaloneta holgada con excelente caída'],
      fabric: '100% Poliéster Técnico',
      careInstructions: 'Lavar con colores similares.'
    },

    // UNIFORMES DE VOLEIBOL ($60.000 COP)
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
      images: ['assets/images/products/volley-1.png'],
      description: 'Uniforme ergonómico de voleibol 100% personalizable para clubes y equipos. Elige entre 7 combinaciones de colores de alto impacto.',
      features: ['7 opciones de color a tu elección', 'Elasticidad multidireccional para saltos y remates', 'Secado ultrarrápido', 'Ajuste anatómico de alto soporte'],
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
      images: ['assets/images/products/volley-2.png'],
      description: 'Conjunto de voleibol de alta resistencia y flexibilidad para partidos y entrenamientos intensos.',
      features: ['Tela fresca que no transparenta', 'Costuras elásticas reforzadas'],
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
      images: ['assets/images/products/volley-3.png'],
      description: 'Uniforme técnico de voleibol diseñado para agilidad y ventilación continua en cancha.',
      features: ['Evacúa la humedad al instante', 'Pretina anatómica antideslizante'],
      fabric: '100% Poliéster Técnico y Spandex',
      careInstructions: 'Lavar con agua fría.'
    },

    // ACCESORIOS: MALETAS ($75.000) Y CANGUROS ($40.000)
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
      images: ['assets/images/products/accesorio-1.png'],
      description: 'Maleta deportiva y tula reforzada confeccionada en lona impermeable de alta tenacidad con múltiples compartimentos.',
      features: ['Lona balística resistente al agua', 'Compartimentos amplios y organizadores', 'Correas acolchadas'],
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
      images: ['assets/images/products/accesorio-4.png'],
      description: 'Maleta deportiva de alta capacidad y resistencia diseñada para llevar ropa de cambio, calzado y accesorios.',
      features: ['Material impermeable reforzado', 'Cremalleras resistentes', 'Diseño espacioso'],
      fabric: 'Nailon Balístico y Poliéster Reforzado',
      careInstructions: 'Limpieza con paño húmedo.'
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
      images: ['assets/images/products/accesorio-2.png'],
      description: 'Canguro y pechera deportiva táctica impermeable con cremalleras selladas para llevar celular, llaves y accesorios de forma segura.',
      features: ['Cremalleras impermeables termoselladas', 'Correa ajustable con broche rápido', '3 bolsillos organizadores'],
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
      images: ['assets/images/products/accesorio-3.png'],
      description: 'Canguro deportivo compacto y ergonómico ideal para entrenar y desplazarse con total comodidad.',
      features: ['Diseño liviano y seguro', 'Bolsillo de seguridad trasero', 'Ajuste ergonómico'],
      fabric: 'Nailon Impermeable de Alta Tenacidad',
      careInstructions: 'Limpiar con paño húmedo.'
    }
  ];

  const customerReviews = [
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
    },
    {
      author: 'Sebastián Morales',
      city: 'Bucaramanga, Colombia',
      rating: 5,
      productName: 'Conjunto Urbano 1',
      date: 'Hace 3 semanas',
      comment: 'El corte oversize y la tela son de otro nivel. Se nota el estilo y la calidad en cada costura. 100% recomendado.'
    },
    {
      author: 'Daniela Cardona',
      city: 'Pereira, Colombia',
      rating: 5,
      productName: 'Canguro Táctico Pechera',
      date: 'Hace 1 mes',
      comment: 'Súper práctico para salir a entrenar y andar en moto o bicicleta. Impermeable de verdad y con acabados de primera.'
    }
  ];

  // 3. Gestor de Estado Reactivo
  const store = {
    currency: localStorage.getItem('barbos_currency') || 'COP',
    cart: JSON.parse(localStorage.getItem('barbos_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('barbos_wishlist') || '[]'),
    appliedCoupon: JSON.parse(localStorage.getItem('barbos_coupon') || 'null'),
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'destacados',

    setCurrency(code) {
      this.currency = code;
      localStorage.setItem('barbos_currency', code);
      this.render();
    },

    formatPrice(priceCOP, priceUSD, priceEUR, priceMXN) {
      const symbol = siteConfig.currencySymbols[this.currency] || '$';
      let val = priceCOP;
      let digits = 0;
      if (this.currency === 'USD') {
        val = priceUSD || (priceCOP * 0.00025);
        digits = 2;
      } else if (this.currency === 'EUR') {
        val = priceEUR || (priceCOP * 0.00023);
        digits = 2;
      } else if (this.currency === 'MXN') {
        val = priceMXN || (priceCOP * 0.0048);
        digits = 2;
      }
      return `${symbol} ${val.toLocaleString('es-CO', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
    },

    addToCart(productId, size, color, quantity = 1) {
      const p = products.find(prod => prod.id === productId);
      if (!p) return;
      const s = size || p.sizes[0] || 'M';
      const c = (p.colors && p.colors.length > 0) ? (color || p.colors[0].name) : '';

      const existing = this.cart.find(i => i.productId === productId && i.size === s && i.color === c);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.cart.push({
          id: `${productId}-${s}-${c}-${Date.now()}`,
          productId: p.id,
          name: p.name,
          image: p.images[0],
          priceCOP: p.priceCOP,
          priceUSD: p.priceUSD,
          priceEUR: p.priceEUR,
          priceMXN: p.priceMXN,
          size: s,
          color: c,
          quantity: quantity
        });
      }
      this.saveCart();
      this.render();
    },

    removeFromCart(id) {
      this.cart = this.cart.filter(i => i.id !== id);
      this.saveCart();
      this.render();
    },

    updateCartQuantity(id, qty) {
      if (qty <= 0) {
        this.removeFromCart(id);
        return;
      }
      const item = this.cart.find(i => i.id === id);
      if (item) {
        item.quantity = qty;
        this.saveCart();
        this.render();
      }
    },

    saveCart() {
      localStorage.setItem('barbos_cart', JSON.stringify(this.cart));
    },

    clearCart() {
      this.cart = [];
      this.saveCart();
      this.render();
    },

    getCartCount() {
      return this.cart.reduce((tot, i) => tot + i.quantity, 0);
    },

    getCartSubtotalCOP() {
      return this.cart.reduce((tot, i) => tot + (i.priceCOP * i.quantity), 0);
    },

    getShippingCostCOP() {
      const count = this.getCartCount();
      if (count === 0) return 0;
      if (count >= siteConfig.freeShippingThresholdUnits) return 0;
      return siteConfig.shippingCostCOP;
    },

    isFreeShipping() {
      return this.getCartCount() >= siteConfig.freeShippingThresholdUnits;
    },

    getShippingShortfall() {
      return Math.max(0, siteConfig.freeShippingThresholdUnits - this.getCartCount());
    },

    getCartDiscountCOP() {
      if (!this.appliedCoupon) return 0;
      return this.getCartSubtotalCOP() * this.appliedCoupon.discount;
    },

    getCartTotalCOP() {
      const subtotal = this.getCartSubtotalCOP();
      const discount = this.getCartDiscountCOP();
      const shipping = this.getShippingCostCOP();
      return Math.max(0, subtotal - discount + shipping);
    },

    toggleWishlist(productId) {
      const idx = this.wishlist.indexOf(productId);
      let added = false;
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        added = false;
      } else {
        this.wishlist.push(productId);
        added = true;
      }
      localStorage.setItem('barbos_wishlist', JSON.stringify(this.wishlist));
      this.render();
      return added;
    },

    isInWishlist(productId) {
      return this.wishlist.includes(productId);
    },

    applyCoupon(code) {
      const clean = (code || '').trim().toUpperCase();
      if (siteConfig.coupons[clean]) {
        this.appliedCoupon = { code: clean, ...siteConfig.coupons[clean] };
        localStorage.setItem('barbos_coupon', JSON.stringify(this.appliedCoupon));
        this.render();
        return { success: true, message: `¡Cupón ${clean} aplicado con éxito!` };
      }
      return { success: false, message: 'Código de referido no válido' };
    },

    removeCoupon() {
      this.appliedCoupon = null;
      localStorage.removeItem('barbos_coupon');
      this.render();
    },

    getFilteredProducts() {
      let list = [...products];
      if (this.activeCategory !== 'all') {
        list = list.filter(p => p.category === this.activeCategory);
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase().trim();
        list = list.filter(p => 
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
      if (this.sortBy === 'precio-menor') list.sort((a, b) => a.priceCOP - b.priceCOP);
      else if (this.sortBy === 'precio-mayor') list.sort((a, b) => b.priceCOP - a.priceCOP);
      else if (this.sortBy === 'calificados') list.sort((a, b) => b.rating - a.rating);
      else if (this.sortBy === 'nuevos') list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      return list;
    },

    render() {
      renderPills();
      renderProductGrid();
      updateHeaderBadges();
      renderCartDrawer();
      renderWishlistDrawer();
      renderReviews();
    }
  };

  // 4. Renderizadores de Interfaz
  const categoryNamesMap = {
    'urbana': 'Ropa Urbana',
    'futbol': 'Uniformes de Fútbol',
    'basquetbol': 'Uniformes de Básquetbol',
    'voleibol': 'Uniformes de Voleibol',
    'accesorios': 'Maletas & Canguros'
  };

  function renderPills() {
    const wrap = document.getElementById('category-pills-wrap');
    if (!wrap) return;
    const cats = [
      { id: 'all', label: 'Todas las Prendas' },
      { id: 'urbana', label: 'Ropa Urbana' },
      { id: 'futbol', label: 'Uniformes de Fútbol' },
      { id: 'basquetbol', label: 'Uniformes de Básquetbol' },
      { id: 'voleibol', label: 'Uniformes de Voleibol' },
      { id: 'accesorios', label: 'Maletas & Canguros' }
    ];

    wrap.innerHTML = cats.map(c => {
      const count = c.id === 'all' ? products.length : products.filter(p => p.category === c.id).length;
      const active = store.activeCategory === c.id ? 'active' : '';
      return `
        <button class="pill-btn ${active}" data-category="${c.id}">
          ${c.label} <span class="pill-count">${count}</span>
        </button>
      `;
    }).join('');
  }

  function updateHeaderBadges() {
    const cartB = document.getElementById('cart-badge-count');
    const wishB = document.getElementById('wishlist-badge-count');
    const cCount = store.getCartCount();
    const wCount = store.wishlist.length;

    if (cartB) {
      cartB.textContent = cCount;
      cartB.style.display = cCount > 0 ? 'flex' : 'none';
    }
    if (wishB) {
      wishB.textContent = wCount;
      wishB.style.display = wCount > 0 ? 'flex' : 'none';
    }
  }

  function renderProductGrid() {
    const container = document.getElementById('products-grid-container');
    if (!container) return;

    const list = store.getFilteredProducts();
    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem; color: #FFFFFF;">🔍</div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem;">No se encontraron prendas</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Intenta con otros términos o cambia de categoría.</p>
          <button id="reset-filter-btn" class="btn btn-white btn-sm">Ver Todas las Prendas</button>
        </div>
      `;
      document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
        store.activeCategory = 'all';
        store.searchQuery = '';
        const s = document.getElementById('catalog-search-input');
        if (s) s.value = '';
        store.render();
      });
      return;
    }

    container.innerHTML = list.map(p => {
      const isFav = store.isInWishlist(p.id);
      const priceText = store.formatPrice(p.priceCOP, p.priceUSD, p.priceEUR, p.priceMXN);
      const catLabel = categoryNamesMap[p.category] || p.category;

      const sizePills = p.sizes.map(s => `
        <button class="size-pill-btn" data-product-id="${p.id}" data-size="${s}">
          ${s}
        </button>
      `).join('');

      return `
        <article class="product-card" data-product-id="${p.id}">
          <div class="card-media-wrap" data-action="open-modal" data-product-id="${p.id}">
            <img src="${p.images[0]}" alt="${p.name}" class="card-img-primary" loading="lazy" />
            
            <div class="card-badges">
              ${p.badge ? `<span class="badge badge-white">${p.badge}</span>` : ''}
            </div>

            <button class="card-wishlist-btn ${isFav ? 'active' : ''}" data-action="toggle-wishlist" data-product-id="${p.id}" title="${isFav ? 'Quitar de guardados' : 'Guardar prenda'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="${isFav ? '#FFFFFF' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>

            <div class="card-quick-actions">
              <span style="font-size: 0.72rem; font-weight: 700; color: #FFFFFF; text-align: center; text-transform: uppercase;">Añadir al carrito:</span>
              <div class="quick-size-list">
                ${sizePills}
              </div>
            </div>
          </div>

          <div class="card-content">
            <div class="card-category-rating">
              <span class="card-cat-name">${catLabel}</span>
              <span class="card-rating">★ ${p.rating} <span style="color: var(--text-dim);">(${p.reviewsCount})</span></span>
            </div>

            <h3 class="card-title" data-action="open-modal" data-product-id="${p.id}">${p.name}</h3>

            <div class="card-footer">
              <div class="card-price-wrap">
                <span class="card-current-price">${priceText}</span>
              </div>

              <button class="btn btn-white btn-sm" data-action="open-modal" data-product-id="${p.id}">
                Ver Detalle
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderCartDrawer() {
    const listContainer = document.getElementById('cart-drawer-items');
    const countSpan = document.getElementById('cart-drawer-count');
    const subtotalSpan = document.getElementById('cart-drawer-subtotal');
    const shippingSpan = document.getElementById('cart-drawer-shipping');
    const totalSpan = document.getElementById('cart-drawer-total');
    const discountRow = document.getElementById('cart-drawer-discount-row');
    const discountSpan = document.getElementById('cart-drawer-discount');
    const couponContainer = document.getElementById('applied-coupon-container');
    const shippingNoticeBox = document.getElementById('cart-shipping-notice-box');

    const count = store.getCartCount();
    if (countSpan) countSpan.textContent = `(${count})`;

    if (store.cart.length === 0) {
      if (listContainer) {
        listContainer.innerHTML = `
          <div class="drawer-empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <h4 style="font-family: var(--font-display); font-size: 1.25rem;">Tu carrito está vacío</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Explora nuestras colecciones y añade tus prendas o uniformes favoritos.</p>
          </div>
        `;
      }
      if (subtotalSpan) subtotalSpan.textContent = store.formatPrice(0);
      if (shippingSpan) shippingSpan.textContent = store.formatPrice(0);
      if (totalSpan) totalSpan.textContent = store.formatPrice(0);
      if (discountRow) discountRow.style.display = 'none';
      if (shippingNoticeBox) shippingNoticeBox.innerHTML = '';
      return;
    }

    // Shipping Dynamic Box
    if (shippingNoticeBox) {
      const isFree = store.isFreeShipping();
      const shortfall = store.getShippingShortfall();
      shippingNoticeBox.innerHTML = `
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); padding: 0.75rem 1rem; border-radius: var(--radius-xs); margin-bottom: 1rem; font-size: 0.82rem; text-align: center;">
          ${isFree ? `
            <div style="color: #FFFFFF; font-weight: 700;">🎉 ¡ENVÍO GRATIS APLICADO! (Compraste 6 o más prendas)</div>
          ` : `
            <div>🚚 Envío: <strong>$ 20.000 COP</strong></div>
            <div style="color: var(--text-muted); margin-top: 0.2rem;">¡Agrega <strong>${shortfall}</strong> prenda(s) más para obtener <strong>ENVÍO GRATIS</strong>!</div>
          `}
        </div>
      `;
    }

    if (listContainer) {
      listContainer.innerHTML = store.cart.map(item => `
        <div class="cart-item-card" data-cart-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-variant">Talla: <strong>${item.size}</strong>${item.color ? ` • Color: <strong>${item.color}</strong>` : ''}</span>
            <span class="cart-item-price">${store.formatPrice(item.priceCOP * item.quantity)}</span>
          </div>
          <div class="cart-item-actions">
            <button class="item-delete-btn" data-action="remove-cart-item" data-cart-id="${item.id}" title="Eliminar">✕</button>
            <div class="qty-control" style="transform: scale(0.85); transform-origin: right bottom;">
              <button class="qty-btn" data-action="qty-decrease" data-cart-id="${item.id}">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-action="qty-increase" data-cart-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    if (subtotalSpan) subtotalSpan.textContent = store.formatPrice(store.getCartSubtotalCOP());
    
    if (discountRow && discountSpan) {
      if (store.appliedCoupon && store.getCartDiscountCOP() > 0) {
        discountRow.style.display = 'flex';
        discountSpan.textContent = `-${store.formatPrice(store.getCartDiscountCOP())}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (shippingSpan) {
      if (store.isFreeShipping()) {
        shippingSpan.innerHTML = '<strong style="color: #FFFFFF;">GRATIS</strong>';
      } else {
        shippingSpan.textContent = store.formatPrice(siteConfig.shippingCostCOP);
      }
    }

    if (totalSpan) totalSpan.textContent = store.formatPrice(store.getCartTotalCOP());

    if (couponContainer) {
      if (store.appliedCoupon) {
        couponContainer.innerHTML = `
          <div class="coupon-badge-applied">
            <span>Código <strong>${store.appliedCoupon.code}</strong> (-${store.appliedCoupon.discount * 100}%)</span>
            <button class="remove-coupon-btn" id="remove-coupon-btn" title="Remover cupón">✕</button>
          </div>
        `;
        document.getElementById('remove-coupon-btn')?.addEventListener('click', () => {
          store.removeCoupon();
          showToast('Código removido');
        });
      } else {
        couponContainer.innerHTML = '';
      }
    }
  }

  function renderWishlistDrawer() {
    const listContainer = document.getElementById('wishlist-drawer-items');
    const countSpan = document.getElementById('wishlist-drawer-count');
    if (countSpan) countSpan.textContent = `(${store.wishlist.length})`;

    if (store.wishlist.length === 0) {
      if (listContainer) {
        listContainer.innerHTML = `
          <div class="drawer-empty-state">
            <h4 style="font-family: var(--font-display); font-size: 1.25rem;">No tienes prendas guardadas</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Haz clic en el corazón para guardar tus prendas y uniformes favoritos.</p>
          </div>
        `;
      }
      return;
    }

    const items = products.filter(p => store.wishlist.includes(p.id));
    if (listContainer) {
      listContainer.innerHTML = items.map(p => `
        <div class="cart-item-card" style="grid-template-columns: 70px 1fr auto;">
          <img src="${p.images[0]}" alt="${p.name}" class="cart-item-img" style="width: 70px; height: 70px;" />
          <div class="cart-item-info">
            <span class="cart-item-name">${p.name}</span>
            <span class="cart-item-price">${store.formatPrice(p.priceCOP)}</span>
          </div>
          <div class="cart-item-actions">
            <button class="item-delete-btn" data-action="toggle-wishlist" data-product-id="${p.id}">✕</button>
            <button class="btn btn-white btn-sm" data-action="quick-add-from-wishlist" data-product-id="${p.id}">Comprar</button>
          </div>
        </div>
      `).join('');
    }
  }

  function openProductModal(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    const overlay = document.getElementById('product-modal-overlay');
    const container = document.getElementById('product-modal-content');
    if (!overlay || !container) return;

    let selectedSize = p.defaultSize || p.sizes[0];
    let selectedColor = (p.colors && p.colors.length > 0) ? p.colors[0].name : '';
    let qty = 1;
    const catLabel = categoryNamesMap[p.category] || p.category;

    function renderInner() {
      const priceText = store.formatPrice(p.priceCOP, p.priceUSD, p.priceEUR, p.priceMXN);

      container.innerHTML = `
        <button class="modal-close-btn" id="modal-close-btn">✕</button>
        <div class="product-modal-grid">
          <div class="modal-gallery">
            <div class="modal-main-img-wrap">
              <img src="${p.images[0]}" alt="${p.name}" class="modal-main-img" />
            </div>
          </div>

          <div class="modal-product-details">
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="badge badge-white">${catLabel}</span>
              ${p.badge ? `<span class="badge badge-dark">${p.badge}</span>` : ''}
            </div>

            <h2 class="modal-product-title">${p.name}</h2>

            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;">
              <span style="color: #FFFFFF;">★ ${p.rating}</span>
              <span style="color: var(--text-dim);">•</span>
              <span style="color: var(--text-muted);">${p.reviewsCount} opiniones</span>
              <span style="color: var(--text-dim);">•</span>
              <span style="color: #E2E8F0; font-weight: 700;">Disponibilidad: ${p.stock} unidades</span>
            </div>

            <div class="modal-price-row">
              <span class="modal-current-price">${priceText}</span>
            </div>

            <!-- Shipping info -->
            <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); padding: 0.65rem 0.85rem; border-radius: var(--radius-xs); font-size: 0.82rem; color: #FFFFFF;">
              🚚 <strong>Envío Colombia:</strong> $20.000 COP • <strong style="text-decoration: underline;">¡GRATIS comprando 6 o más prendas!</strong>
            </div>

            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${p.description}</p>

            ${(p.colors && p.colors.length > 0) ? `
              <div class="selector-group">
                <div class="selector-label">
                  <span>Color: <strong style="color: #FFFFFF;">${selectedColor}</strong></span>
                </div>
                <div class="color-options">
                  ${p.colors.map(c => `
                    <button class="color-circle-btn ${c.name === selectedColor ? 'active' : ''}" style="background-color: ${c.hex};" data-color="${c.name}" title="${c.name}"></button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="selector-group">
              <div class="selector-label">
                <span>Talla: <strong style="color: #FFFFFF;">${selectedSize}</strong></span>
                <span class="size-guide-link" id="modal-size-guide-trigger">📏 Ver Guía de Tallas (6 - XL)</span>
              </div>
              <div class="size-options">
                ${p.sizes.map(s => `
                  <button class="size-btn ${s === selectedSize ? 'active' : ''}" data-size="${s}">${s}</button>
                `).join('')}
              </div>
            </div>

            <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
              <div class="qty-control">
                <button class="qty-btn" id="modal-q-minus">-</button>
                <span class="qty-value" id="modal-q-val">${qty}</span>
                <button class="qty-btn" id="modal-q-plus">+</button>
              </div>

              <button class="btn btn-white" id="modal-add-btn" style="flex-grow: 1;">
                Añadir al Carrito
              </button>
            </div>

            <button class="btn btn-whatsapp" id="modal-wa-btn" style="width: 100%;">
              Pedir directamente por WhatsApp (+57 314 3937314)
            </button>

            <div class="modal-specs-accordion">
              <div class="accordion-item open">
                <div class="accordion-header">
                  <span>Características Técnicas</span>
                  <span>▾</span>
                </div>
                <div class="accordion-content">
                  <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem;">
                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header">
                  <span>Medios de Pago & Envíos</span>
                  <span>▾</span>
                </div>
                <div class="accordion-content">
                  <p>📱 <strong>Pagos:</strong> Nequi, Daviplata y Llave Bre-B al <strong>+57 314 3937314</strong>.</p>
                  <p style="margin-top: 0.3rem;">🚚 <strong>Envíos:</strong> $20.000 COP a todo el país. <strong>¡GRATIS comprando 6 o más prendas!</strong></p>
                  <p style="margin-top: 0.3rem;">✉️ <strong>Notificaciones:</strong> sportbboss@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('modal-close-btn')?.addEventListener('click', () => overlay.classList.remove('active'));

      container.querySelectorAll('.color-circle-btn').forEach(b => {
        b.addEventListener('click', () => {
          selectedColor = b.getAttribute('data-color');
          renderInner();
        });
      });

      container.querySelectorAll('.size-btn').forEach(b => {
        b.addEventListener('click', () => {
          selectedSize = b.getAttribute('data-size');
          renderInner();
        });
      });

      document.getElementById('modal-q-minus')?.addEventListener('click', () => {
        if (qty > 1) {
          qty--;
          document.getElementById('modal-q-val').textContent = qty;
        }
      });

      document.getElementById('modal-q-plus')?.addEventListener('click', () => {
        if (qty < p.stock) {
          qty++;
          document.getElementById('modal-q-val').textContent = qty;
        }
      });

      document.getElementById('modal-size-guide-trigger')?.addEventListener('click', () => {
        document.getElementById('size-guide-modal-overlay')?.classList.add('active');
      });

      document.getElementById('modal-add-btn')?.addEventListener('click', () => {
        store.addToCart(p.id, selectedSize, selectedColor, qty);
        showToast(`¡${p.name} (Talla ${selectedSize}) añadido al carrito!`);
        overlay.classList.remove('active');
        openCartDrawer();
      });

      document.getElementById('modal-wa-btn')?.addEventListener('click', () => {
        const pr = store.formatPrice(p.priceCOP);
        const colorLine = selectedColor ? `%0A*Color:* ${selectedColor}` : '';
        const text = `¡Hola BARBOS! Quiero pedir esta prenda:%0A%0A*Producto:* ${p.name}%0A*Talla:* ${selectedSize}${colorLine}%0A*Cantidad:* ${qty}%0A*Precio:* ${pr}%0A%0A¿Me confirman disponibilidad y datos de pago por favor?`;
        window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
      });

      container.querySelectorAll('.accordion-header').forEach(h => {
        h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
      });
    }

    renderInner();
    overlay.classList.add('active');
  }

  function openCartDrawer() {
    document.getElementById('cart-drawer')?.classList.add('active');
    document.getElementById('cart-drawer-backdrop')?.classList.add('active');
  }

  function openWishlistDrawer() {
    document.getElementById('wishlist-drawer')?.classList.add('active');
    document.getElementById('wishlist-drawer-backdrop')?.classList.add('active');
  }

  function openCheckoutModal() {
    if (store.cart.length === 0) {
      showToast('Tu carrito está vacío para finalizar la compra.');
      return;
    }

    document.getElementById('cart-drawer')?.classList.remove('active');
    document.getElementById('cart-drawer-backdrop')?.classList.remove('active');

    const overlay = document.getElementById('checkout-modal-overlay');
    const container = document.getElementById('checkout-modal-content');
    if (!overlay || !container) return;

    const totalText = store.formatPrice(store.getCartTotalCOP());
    const subtotalText = store.formatPrice(store.getCartSubtotalCOP());
    const discountAmount = store.getCartDiscountCOP();
    const isFreeShip = store.isFreeShipping();
    const shippingText = isFreeShip ? 'GRATIS' : store.formatPrice(siteConfig.shippingCostCOP);

    container.innerHTML = `
      <button class="modal-close-btn" id="chk-close-btn">✕</button>
      <div class="checkout-modal-container">
        <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--bg-card-border); padding-bottom: 1rem;">
          <span class="badge badge-white">PAGO SEGURO BARBOS®</span>
          <h2 style="font-family: var(--font-display); font-size: 1.85rem; margin-top: 0.4rem;">Finalizar Pedido</h2>
        </div>

        <div class="checkout-steps-grid">
          <div>
            <h3 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 1rem; color: #FFFFFF;">
              1. Datos de Despacho
            </h3>

            <form id="checkout-form">
              <div class="form-group">
                <label>Nombre Completo *</label>
                <input type="text" id="chk-name" class="form-input" placeholder="Ej. Carlos Mendoza" required />
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label>Teléfono WhatsApp *</label>
                  <input type="tel" id="chk-phone" class="form-input" placeholder="+57 314 3937314" required />
                </div>
                <div class="form-group">
                  <label>Correo Electrónico *</label>
                  <input type="email" id="chk-email" class="form-input" placeholder="correo@ejemplo.com" required />
                </div>
              </div>

              <div class="form-group">
                <label>Dirección Completa de Entrega *</label>
                <input type="text" id="chk-address" class="form-input" placeholder="Calle / Carrera / Apto o Casa" required />
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label>Ciudad / Municipio *</label>
                  <input type="text" id="chk-city" class="form-input" placeholder="Medellín, Bogotá, etc." required />
                </div>
                <div class="form-group">
                  <label>Departamento</label>
                  <input type="text" id="chk-state" class="form-input" placeholder="Antioquia, Cundinamarca" />
                </div>
              </div>

              <h3 style="font-family: var(--font-heading); font-size: 1.1rem; margin: 1.5rem 0 1rem 0; color: #FFFFFF;">
                2. Método de Pago Único Oficial
              </h3>

              <div class="payment-method-selector" style="grid-template-columns: 1fr;">
                <div class="payment-card-option active" style="border-color: #FFFFFF;">
                  <div style="font-size: 1.6rem; margin-bottom: 0.4rem;">📱</div>
                  <h4 style="font-size: 1.05rem; color: #FFFFFF;">Nequi / Daviplata / Llave Bre-B</h4>
                  <p style="font-size: 0.88rem; color: #FFFFFF; font-weight: 700; margin-top: 0.3rem;">
                    Número de transferencia: <span style="background: rgba(255,255,255,0.15); padding: 0.2rem 0.5rem; border-radius: 4px;">+57 314 3937314</span>
                  </p>
                  <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
                    Transferencia bancaria o pago PSE directo al número oficial.
                  </p>
                </div>
              </div>

              <button type="submit" class="btn btn-white btn-lg" style="width: 100%; margin-top: 1.5rem;">
                Confirmar y Registrar Pedido (${totalText})
              </button>
            </form>
          </div>

          <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-xs); border: 1px solid var(--bg-card-border); height: fit-content;">
            <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--bg-card-border); padding-bottom: 0.5rem;">
              Resumen (${store.getCartCount()} prendas)
            </h4>

            <div style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 220px; overflow-y: auto; margin-bottom: 1rem;">
              ${store.cart.map(i => `
                <div style="display: flex; gap: 0.75rem; align-items: center; font-size: 0.85rem;">
                  <img src="${i.image}" alt="${i.name}" style="width: 42px; height: 42px; border-radius: 4px; object-fit: cover;" />
                  <div style="flex-grow: 1;">
                    <div style="font-weight: 700; color: #FFFFFF;">${i.name}</div>
                    <div style="color: var(--text-muted); font-size: 0.75rem;">Talla: ${i.size} • ${i.color} • x${i.quantity}</div>
                  </div>
                  <div style="font-weight: 700; color: #FFFFFF;">
                    ${store.formatPrice(i.priceCOP * i.quantity)}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="cart-summary-rows">
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>${subtotalText}</span>
              </div>
              ${discountAmount > 0 ? `
                <div class="summary-row" style="color: #FFFFFF;">
                  <span>Descuento:</span>
                  <span>-${store.formatPrice(discountAmount)}</span>
                </div>
              ` : ''}
              <div class="summary-row">
                <span>Envío Colombia:</span>
                <span style="color: #FFFFFF; font-weight: 700;">${shippingText}</span>
              </div>
              <div class="summary-row total-row">
                <span>Total a pagar:</span>
                <span class="total-amount">${totalText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('chk-close-btn')?.addEventListener('click', () => overlay.classList.remove('active'));

    document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('chk-name').value;
      const phone = document.getElementById('chk-phone').value;
      const email = document.getElementById('chk-email').value;
      const city = document.getElementById('chk-city').value;
      const address = document.getElementById('chk-address').value;
      const orderId = `BBS-${Math.floor(100000 + Math.random() * 900000)}`;

      const itemsSaved = [...store.cart];
      const finalTot = store.formatPrice(store.getCartTotalCOP());
      const isFree = store.isFreeShipping();
      const shipText = isFree ? 'GRATIS (6+ unidades)' : '$ 20.000 COP';
      store.clearCart();

      container.innerHTML = `
        <button class="modal-close-btn" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active');">✕</button>
        <div class="checkout-modal-container" style="text-align: center; max-width: 600px;">
          <div class="order-ticket">
            <div class="ticket-header">
              <div style="margin-bottom: 0.8rem;">
                <img src="assets/images/logo.png" alt="Barbos" style="max-height: 56px; width: auto; margin: 0 auto; display: block;" />
              </div>
              <span class="badge badge-white" style="margin-bottom: 0.5rem;">¡ORDEN REGISTRADA!</span>
              <div class="ticket-order-id">ORDEN #${orderId}</div>
              <p style="color: var(--text-secondary); margin-top: 0.5rem; font-size: 0.9rem;">
                Gracias <strong>${name}</strong>, tu pedido está preparado para despacho a <strong>${city}</strong>.
              </p>
            </div>

            <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-xs); margin-bottom: 1.5rem; text-align: left; font-size: 0.88rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                <span style="color: var(--text-muted);">Dirección de entrega:</span>
                <span style="font-weight: 700; color: #FFFFFF;">${address}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                <span style="color: var(--text-muted);">WhatsApp de contacto:</span>
                <span style="font-weight: 700; color: #FFFFFF;">${phone}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                <span style="color: var(--text-muted);">Costo de envío:</span>
                <span style="font-weight: 700; color: #FFFFFF;">${shipText}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--bg-card-border); padding-top: 0.4rem; font-weight: 700;">
                <span>Total a Transferir:</span>
                <span style="color: #FFFFFF; font-size: 1.1rem;">${finalTot}</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.25); padding: 1rem; border-radius: var(--radius-xs); margin-bottom: 1.5rem; text-align: left; font-size: 0.85rem;">
              <div style="font-weight: 700; color: #FFFFFF; margin-bottom: 0.3rem;">📱 Datos de Pago (Nequi / Daviplata / Llave Bre-B):</div>
              <div>• Número: <strong>+57 314 3937314</strong></div>
              <div style="margin-top: 0.4rem;">✉️ Notificaciones oficiales a: <strong>sportbboss@gmail.com</strong></div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <button class="btn btn-white" id="send-order-wa-btn">
                Enviar Comprobante a WhatsApp (+57 314 3937314)
              </button>
              <button class="btn btn-secondary" id="send-order-email-btn">
                Notificar por Correo (sportbboss@gmail.com)
              </button>
              <button class="btn btn-secondary" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active');">
                Volver a la Tienda
              </button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('send-order-wa-btn')?.addEventListener('click', () => {
        const textItems = itemsSaved.map(i => `• ${i.name} (Talla: ${i.size}${i.color ? `, Color: ${i.color}` : ''}, x${i.quantity})`).join('%0A');
        const msg = `¡Hola BARBOS! Acabo de registrar mi orden en la web:%0A%0A*No. Orden:* ${orderId}%0A*Cliente:* ${name}%0A*Teléfono:* ${phone}%0A*Correo:* ${email}%0A*Ciudad:* ${city}%0A*Dirección:* ${address}%0A%0A*Prendas:*%0A${textItems}%0A%0A*Envío:* ${shipText}%0A*Total:* ${finalTot}%0A%0AAdjunto comprobante de pago por Nequi/Daviplata/Llave Bre-B.`;
        window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`, '_blank');
      });

      document.getElementById('send-order-email-btn')?.addEventListener('click', () => {
        const textItems = itemsSaved.map(i => `• ${i.name} (Talla: ${i.size}${i.color ? `, Color: ${i.color}` : ''}, x${i.quantity})`).join('\n');
        const subject = encodeURIComponent(`Nuevo Pedido Web #${orderId} - ${name}`);
        const body = encodeURIComponent(`Hola BARBOS,\n\nSe ha registrado un nuevo pedido en la tienda web:\n\nNo. Orden: ${orderId}\nCliente: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nCiudad: ${city}\nDirección: ${address}\n\nPrendas:\n${textItems}\n\nEnvío: ${shipText}\nTotal: ${finalTot}\n\nMétodo de pago: Nequi / Daviplata / Llave Bre-B (+57 314 3937314)`);
        window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_blank');
      });

      showToast(`¡Orden #${orderId} creada con éxito!`);
    });

    overlay.classList.add('active');
  }

  function renderReviews() {
    const container = document.getElementById('reviews-grid-container');
    if (!container) return;

    container.innerHTML = customerReviews.map(r => `
      <div class="review-card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="review-stars">
            ${'★'.repeat(r.rating)}
          </div>
          <span style="font-size: 0.75rem; color: var(--text-dim);">${r.date}</span>
        </div>

        <div style="font-size: 0.82rem; font-weight: 700; color: #FFFFFF;">
          Prenda: ${r.productName}
        </div>

        <p class="review-comment">"${r.comment}"</p>

        <div class="reviewer-meta">
          <div>
            <div class="reviewer-name">${r.author}</div>
            <div class="reviewer-location">${r.city}</div>
          </div>
          <span class="badge badge-dark" style="font-size: 0.68rem; color: #FFFFFF; border-color: rgba(255, 255, 255, 0.3);">
            ✓ Compra Verificada
          </span>
        </div>
      </div>
    `).join('');
  }

  function showToast(msg) {
    let box = document.getElementById('toast-container');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toast-container';
      box.className = 'toast-container';
      document.body.appendChild(box);
    }
    const item = document.createElement('div');
    item.className = 'toast-item';
    item.innerHTML = `<span class="toast-icon">✓</span><span style="font-weight: 600; font-size: 0.88rem;">${msg}</span>`;
    box.appendChild(item);
    setTimeout(() => item.classList.add('active'), 20);
    setTimeout(() => {
      item.classList.remove('active');
      setTimeout(() => item.remove(), 400);
    }, 3200);
  }

  // 5. Inicialización Global y Eventos
  document.addEventListener('DOMContentLoaded', () => {
    store.render();

    // Redirección de colecciones destacadas
    document.addEventListener('click', (e) => {
      const filterTrigger = e.target.closest('[data-action="filter-cat"]');
      if (filterTrigger) {
        const cat = filterTrigger.getAttribute('data-category');
        if (cat) {
          store.activeCategory = cat;
          store.render();
          document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // Selector de Moneda
    const currSel = document.getElementById('currency-selector');
    if (currSel) {
      currSel.value = store.currency;
      currSel.addEventListener('change', (e) => {
        store.setCurrency(e.target.value);
        showToast(`Moneda cambiada a ${e.target.value}`);
      });
    }

    // Cabecera scroll
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) header?.classList.add('scrolled');
      else header?.classList.remove('scrolled');
    });

    // Menú móvil
    const mobileBtn = document.getElementById('mobile-menu-toggle-btn');
    const navMenu = document.getElementById('main-nav-menu');
    const hamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('mobile-open');
        mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileBtn.innerHTML = isOpen ? closeIcon : hamburgerIcon;
      });
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('mobile-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.innerHTML = hamburgerIcon;
        });
      });
    }

    // Filtros de categoría
    document.getElementById('category-pills-wrap')?.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill-btn');
      if (pill) {
        store.activeCategory = pill.getAttribute('data-category');
        store.render();
      }
    });

    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
      let debounce;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          store.searchQuery = e.target.value;
          store.render();
        }, 200);
      });
    }

    const sortSel = document.getElementById('catalog-sort-select');
    if (sortSel) {
      sortSel.addEventListener('change', (e) => {
        store.sortBy = e.target.value;
        store.render();
      });
    }

    // Delegación de clics
    document.addEventListener('click', (e) => {
      // Modal de prenda
      const modalTrigger = e.target.closest('[data-action="open-modal"]');
      if (modalTrigger) {
        const id = modalTrigger.getAttribute('data-product-id');
        if (id) openProductModal(id);
        return;
      }

      // Wishlist toggle
      const favBtn = e.target.closest('[data-action="toggle-wishlist"]');
      if (favBtn) {
        e.stopPropagation();
        const id = favBtn.getAttribute('data-product-id');
        if (id) {
          const added = store.toggleWishlist(id);
          showToast(added ? 'Prenda guardada en tus favoritos' : 'Prenda eliminada de tus favoritos');
        }
        return;
      }

      // Quick size pill
      const sizePill = e.target.closest('.size-pill-btn');
      if (sizePill) {
        e.stopPropagation();
        const id = sizePill.getAttribute('data-product-id');
        const size = sizePill.getAttribute('data-size');
        if (id && size) {
          store.addToCart(id, size, null, 1);
          const pr = products.find(p => p.id === id);
          showToast(`¡${pr ? pr.name : 'Prenda'} (Talla ${size}) añadida al carrito!`);
          openCartDrawer();
        }
        return;
      }

      // Mover de wishlist a carrito
      const quickAddWish = e.target.closest('[data-action="quick-add-from-wishlist"]');
      if (quickAddWish) {
        const id = quickAddWish.getAttribute('data-product-id');
        if (id) {
          store.addToCart(id, null, null, 1);
          showToast('Prenda añadida al carrito');
          openCartDrawer();
        }
        return;
      }

      // Eliminar de carrito
      const delCartBtn = e.target.closest('[data-action="remove-cart-item"]');
      if (delCartBtn) {
        const cartId = delCartBtn.getAttribute('data-cart-id');
        store.removeFromCart(cartId);
        showToast('Prenda removida del carrito');
        return;
      }

      // + / - cantidad
      const incBtn = e.target.closest('[data-action="qty-increase"]');
      if (incBtn) {
        const cid = incBtn.getAttribute('data-cart-id');
        const item = store.cart.find(i => i.id === cid);
        if (item) store.updateCartQuantity(cid, item.quantity + 1);
        return;
      }

      const decBtn = e.target.closest('[data-action="qty-decrease"]');
      if (decBtn) {
        const cid = decBtn.getAttribute('data-cart-id');
        const item = store.cart.find(i => i.id === cid);
        if (item) store.updateCartQuantity(cid, item.quantity - 1);
        return;
      }
    });

    // Abrir y cerrar paneles
    document.getElementById('cart-toggle-btn')?.addEventListener('click', openCartDrawer);
    document.getElementById('wishlist-toggle-btn')?.addEventListener('click', openWishlistDrawer);

    document.getElementById('cart-drawer-close-btn')?.addEventListener('click', () => {
      document.getElementById('cart-drawer')?.classList.remove('active');
      document.getElementById('cart-drawer-backdrop')?.classList.remove('active');
    });

    document.getElementById('cart-drawer-backdrop')?.addEventListener('click', () => {
      document.getElementById('cart-drawer')?.classList.remove('active');
      document.getElementById('cart-drawer-backdrop')?.classList.remove('active');
    });

    document.getElementById('wishlist-drawer-close-btn')?.addEventListener('click', () => {
      document.getElementById('wishlist-drawer')?.classList.remove('active');
      document.getElementById('wishlist-drawer-backdrop')?.classList.remove('active');
    });

    document.getElementById('wishlist-drawer-backdrop')?.addEventListener('click', () => {
      document.getElementById('wishlist-drawer')?.classList.remove('active');
      document.getElementById('wishlist-drawer-backdrop')?.classList.remove('active');
    });

    // Cupón
    document.getElementById('apply-coupon-btn')?.addEventListener('click', () => {
      const inp = document.getElementById('coupon-code-input');
      if (inp) {
        const res = store.applyCoupon(inp.value);
        showToast(res.message);
        if (res.success) inp.value = '';
      }
    });

    // WhatsApp checkout
    document.getElementById('cart-whatsapp-checkout-btn')?.addEventListener('click', () => {
      if (store.cart.length === 0) {
        showToast('Tu carrito está vacío');
        return;
      }
      const items = store.cart.map(i => `• *${i.name}*%0A  Talla: ${i.size}${i.color ? ` | Color: ${i.color}` : ''} | Cant: ${i.quantity} | ${store.formatPrice(i.priceCOP * i.quantity)}`).join('%0A%0A');
      const sub = store.formatPrice(store.getCartSubtotalCOP());
      const isFree = store.isFreeShipping();
      const shipStr = isFree ? 'GRATIS (6+ unidades)' : '$ 20.000 COP';
      const tot = store.formatPrice(store.getCartTotalCOP());
      const disc = store.appliedCoupon ? `%0A*Descuento (${store.appliedCoupon.code}):* -${store.formatPrice(store.getCartDiscountCOP())}` : '';

      const msg = `¡Hola BARBOS®! Quiero hacer este pedido:%0A%0A${items}%0A%0A────────────────────%0A*Subtotal:* ${sub}${disc}%0A*Envío:* ${shipStr}%0A*TOTAL A TRANSFERIR:* ${tot}%0A────────────────────%0A%0AMétodo de pago: Nequi / Daviplata / Llave Bre-B (+57 314 3937314)%0A¿Me confirman para realizar la transferencia?`;
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`, '_blank');
    });

    // Online checkout modal
    document.getElementById('cart-online-checkout-btn')?.addEventListener('click', openCheckoutModal);

    // Guía de tallas modal
    document.getElementById('size-guide-modal-close')?.addEventListener('click', () => {
      document.getElementById('size-guide-modal-overlay')?.classList.remove('active');
    });

    document.getElementById('size-guide-modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'size-guide-modal-overlay') {
        document.getElementById('size-guide-modal-overlay')?.classList.remove('active');
      }
    });

    // Guía de tallas: Pestañas Hombre vs Chicas
    const guideTabBtns = document.querySelectorAll('.guide-tab-btn');
    guideTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        guideTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        document.querySelectorAll('.guide-table-pane').forEach(p => p.classList.remove('active'));
        document.getElementById(target)?.classList.add('active');
      });
    });

    document.getElementById('product-modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'product-modal-overlay') {
        document.getElementById('product-modal-overlay')?.classList.remove('active');
      }
    });

    document.getElementById('checkout-modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'checkout-modal-overlay') {
        document.getElementById('checkout-modal-overlay')?.classList.remove('active');
      }
    });

    // Calculadora de tallas adaptada (6 - XL)
    document.getElementById('calc-size-btn')?.addEventListener('click', () => {
      const h = parseInt(document.getElementById('calc-height')?.value || '0', 10);
      const w = parseInt(document.getElementById('calc-weight')?.value || '0', 10);
      const fit = document.getElementById('calc-fit')?.value || 'regular';
      const box = document.getElementById('calc-result-box');

      if (!h || !w) {
        showToast('Ingresa tu estatura y peso');
        return;
      }

      let rec = 'M';
      if (w < 35 || h < 130) rec = '6';
      else if (w >= 35 && w < 42) rec = '8';
      else if (w >= 42 && w < 50) rec = '10';
      else if (w >= 50 && w < 58) rec = '12';
      else if (w >= 58 && w < 64) rec = '14';
      else if (w >= 64 && w < 70) rec = '16';
      else if (w >= 70 && w < 76) rec = 'S';
      else if (w >= 76 && w < 84) rec = 'M';
      else if (w >= 84 && w < 92) rec = 'L';
      else rec = 'XL';

      if (fit === 'holgado' && rec !== 'XL') {
        const order = ['6', '8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL'];
        const i = order.indexOf(rec);
        if (i < order.length - 1) rec = order[i + 1];
      }

      if (box) {
        box.style.display = 'block';
        box.innerHTML = `
          <div style="background: rgba(255, 255, 255, 0.08); border: 1px solid #FFFFFF; padding: 1rem; border-radius: var(--radius-xs); text-align: center;">
            <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Talla sugerida:</span>
            <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: #FFFFFF;">${rec} ${fit === 'holgado' ? '(Oversize +3 cm)' : ''}</div>
            <span style="font-size: 0.78rem; color: var(--text-muted);">Ajuste ${fit} basado en ${h} cm y ${w} kg.</span>
          </div>
        `;
      }
    });

    // Plan de referidos
    document.getElementById('referidos-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nInp = document.getElementById('referido-name-input');
      const eInp = document.getElementById('referido-email-input');
      const resBox = document.getElementById('referidos-result-box');

      if (eInp && eInp.value) {
        const nameClean = (nInp?.value || 'BARBOS').trim().toUpperCase().replace(/\s+/g, '');
        const code = `${nameClean}-${Math.floor(100 + Math.random() * 900)}`;

        if (resBox) {
          resBox.style.display = 'block';
          resBox.innerHTML = `
            <div style="background: var(--bg-surface); border: 1px solid #FFFFFF; padding: 1.5rem; border-radius: var(--radius-xs); margin-top: 1.5rem; text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎉</div>
              <h4 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 0.4rem; color: #FFFFFF;">¡Te has unido al Plan de Referidos!</h4>
              <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
                Comparte tu código exclusivo con tus amigos. Ellos reciben <strong>10% de descuento</strong> y tú ganas <strong>15% de descuento</strong> por cada compra.
              </p>
              <div style="background: #000000; border: 1px dashed rgba(255,255,255,0.4); padding: 0.75rem 1.5rem; font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.1em; color: #FFFFFF; font-weight: 700; display: inline-block; margin-bottom: 1rem;">
                ${code}
              </div>
              <div>
                <a href="https://wa.me/?text=¡Hola!%20Usa%20mi%20código%20${code}%20en%20BARBOS%20para%20obtener%20un%2010%25%20de%20descuento%20en%20tu%20primer%20uniforme%20o%20ropa%20deportiva." target="_blank" class="btn btn-whatsapp btn-sm">
                  Compartir Código por WhatsApp
                </a>
              </div>
            </div>
          `;
        }

        showToast('✓ ¡Código de referido generado con éxito!');
        eInp.value = '';
        if (nInp) nInp.value = '';
      }
    });

    // Acordeón FAQ
    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-header')?.addEventListener('click', () => {
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
      });
    });
  });
})();
