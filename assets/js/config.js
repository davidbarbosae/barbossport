/**
 * Configuración global de la marca BARBOS
 * 100% en español con enlaces oficiales, métodos de pago y correo de notificaciones
 */
export const siteConfig = {
  brandName: 'BARBOS®',
  slogan: 'ELEVA TU PODER',
  subSlogan: 'DISEÑADO CON ESTILO. CONSTRUIDO PARA EL DEPORTE.',
  whatsappNumber: '573143937314', // WhatsApp Oficial Barbos (+57 314 3937314)
  paymentPhone: '+57 314 3937314', // Nequi, Daviplata y Llave Bre-B
  email: 'sportbboss@gmail.com', // Correo oficial para notificaciones y compras
  instagram: 'https://www.instagram.com/barbos_sport/',
  facebook: 'https://www.facebook.com/people/Barbos-sport/61582216238608/',
  tiktok: 'https://www.tiktok.com/@barbos_sport',
  shippingCostCOP: 20000, // $20.000 COP
  freeShippingThresholdUnits: 6, // Gratis a partir de 6 unidades
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
