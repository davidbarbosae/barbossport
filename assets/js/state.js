import { siteConfig } from './config.js';
import { products } from './products.js';

class StoreState {
  constructor() {
    this.currency = localStorage.getItem('barbos_currency') || 'COP';
    this.cart = JSON.parse(localStorage.getItem('barbos_cart') || '[]');
    this.wishlist = JSON.parse(localStorage.getItem('barbos_wishlist') || '[]');
    this.appliedCoupon = JSON.parse(localStorage.getItem('barbos_coupon') || 'null');
    
    this.activeCategory = 'all';
    this.activeGender = 'all';
    this.searchQuery = '';
    this.sortBy = 'destacados';
    
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.listeners.forEach(cb => cb(this));
  }

  // Currency management
  setCurrency(currencyCode) {
    if (siteConfig.currencies.find(c => c.code === currencyCode)) {
      this.currency = currencyCode;
      localStorage.setItem('barbos_currency', currencyCode);
      this.notify();
    }
  }

  formatPrice(priceCOP, priceUSD, priceEUR, priceMXN) {
    const symbol = siteConfig.currencySymbols[this.currency] || '$';
    let val = priceCOP;
    let fractionDigits = 0;

    if (this.currency === 'USD') {
      val = priceUSD || (priceCOP * 0.00025);
      fractionDigits = 2;
    } else if (this.currency === 'EUR') {
      val = priceEUR || (priceCOP * 0.00023);
      fractionDigits = 2;
    } else if (this.currency === 'MXN') {
      val = priceMXN || (priceCOP * 0.0048);
      fractionDigits = 2;
    } else {
      val = priceCOP;
      fractionDigits = 0;
    }

    return `${symbol} ${val.toLocaleString('es-CO', { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits })}`;
  }

  convertCOP(amountCOP) {
    if (this.currency === 'USD') return amountCOP * 0.00025;
    if (this.currency === 'EUR') return amountCOP * 0.00023;
    if (this.currency === 'MXN') return amountCOP * 0.0048;
    return amountCOP;
  }

  // Cart actions
  addToCart(productId, size, color, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return false;

    const chosenSize = size || product.sizes[0] || 'M';
    const chosenColor = color || (product.colors && product.colors[0] ? product.colors[0].name : 'Estándar');

    const existingIndex = this.cart.findIndex(
      item => item.productId === productId && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: `${productId}-${chosenSize}-${chosenColor}-${Date.now()}`,
        productId,
        name: product.name,
        image: product.images[0],
        priceCOP: product.priceCOP,
        priceUSD: product.priceUSD,
        priceEUR: product.priceEUR,
        priceMXN: product.priceMXN,
        size: chosenSize,
        color: chosenColor,
        quantity: quantity
      });
    }

    this.saveCart();
    this.notify();
    return true;
  }

  updateCartQuantity(cartItemId, newQuantity) {
    if (newQuantity <= 0) {
      this.removeFromCart(cartItemId);
      return;
    }
    const item = this.cart.find(i => i.id === cartItemId);
    if (item) {
      item.quantity = newQuantity;
      this.saveCart();
      this.notify();
    }
  }

  removeFromCart(cartItemId) {
    this.cart = this.cart.filter(i => i.id !== cartItemId);
    this.saveCart();
    this.notify();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.notify();
  }

  saveCart() {
    localStorage.setItem('barbos_cart', JSON.stringify(this.cart));
  }

  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getCartSubtotalCOP() {
    return this.cart.reduce((total, item) => total + (item.priceCOP * item.quantity), 0);
  }

  getCartSubtotalFormatted() {
    const totalCOP = this.getCartSubtotalCOP();
    return this.formatPrice(
      totalCOP,
      this.cart.reduce((total, item) => total + ((item.priceUSD || item.priceCOP * 0.00025) * item.quantity), 0),
      this.cart.reduce((total, item) => total + ((item.priceEUR || item.priceCOP * 0.00023) * item.quantity), 0),
      this.cart.reduce((total, item) => total + ((item.priceMXN || item.priceCOP * 0.0048) * item.quantity), 0)
    );
  }

  // Shipping logic: $20.000 COP, GRATIS con 6+ unidades
  getShippingCostCOP() {
    const count = this.getCartCount();
    if (count === 0) return 0;
    if (count >= siteConfig.freeShippingThresholdUnits) return 0;
    return siteConfig.shippingCostCOP;
  }

  isFreeShipping() {
    return this.getCartCount() >= siteConfig.freeShippingThresholdUnits;
  }

  getShippingShortfall() {
    return Math.max(0, siteConfig.freeShippingThresholdUnits - this.getCartCount());
  }

  applyCoupon(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (siteConfig.coupons[cleanCode]) {
      this.appliedCoupon = {
        code: cleanCode,
        ...siteConfig.coupons[cleanCode]
      };
      localStorage.setItem('barbos_coupon', JSON.stringify(this.appliedCoupon));
      this.notify();
      return { success: true, message: `¡Cupón ${cleanCode} aplicado con éxito!` };
    }
    return { success: false, message: 'Código de cupón o referido no válido' };
  }

  removeCoupon() {
    this.appliedCoupon = null;
    localStorage.removeItem('barbos_coupon');
    this.notify();
  }

  getCartDiscountCOP() {
    if (!this.appliedCoupon) return 0;
    const subtotal = this.getCartSubtotalCOP();
    return subtotal * this.appliedCoupon.discount;
  }

  getCartTotalCOP() {
    const subtotal = this.getCartSubtotalCOP();
    const discount = this.getCartDiscountCOP();
    const shipping = this.getShippingCostCOP();
    return Math.max(0, subtotal - discount + shipping);
  }

  getCartTotalFormatted() {
    const totalCOP = this.getCartTotalCOP();
    const rateUSD = 0.00025;
    const rateEUR = 0.00023;
    const rateMXN = 0.0048;
    return this.formatPrice(totalCOP, totalCOP * rateUSD, totalCOP * rateEUR, totalCOP * rateMXN);
  }

  // Wishlist actions
  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    let added = false;
    if (index > -1) {
      this.wishlist.splice(index, 1);
      added = false;
    } else {
      this.wishlist.push(productId);
      added = true;
    }
    localStorage.setItem('barbos_wishlist', JSON.stringify(this.wishlist));
    this.notify();
    return added;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getWishlistCount() {
    return this.wishlist.length;
  }

  // Filters & Search
  setCategory(category) {
    this.activeCategory = category;
    this.notify();
  }

  setGender(gender) {
    this.activeGender = gender;
    this.notify();
  }

  setSearch(query) {
    this.searchQuery = query;
    this.notify();
  }

  setSortBy(sort) {
    this.sortBy = sort;
    this.notify();
  }

  getFilteredProducts() {
    let list = [...products];

    // Filter by Category
    if (this.activeCategory !== 'all') {
      list = list.filter(p => p.category === this.activeCategory);
    }

    // Filter by Gender
    if (this.activeGender !== 'all') {
      list = list.filter(p => p.gender === this.activeGender || p.gender === 'unisex');
    }

    // Search query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.badge && p.badge.toLowerCase().includes(q))
      );
    }

    // Sort
    if (this.sortBy === 'precio-menor' || this.sortBy === 'price-asc') {
      list.sort((a, b) => a.priceCOP - b.priceCOP);
    } else if (this.sortBy === 'precio-mayor' || this.sortBy === 'price-desc') {
      list.sort((a, b) => b.priceCOP - a.priceCOP);
    } else if (this.sortBy === 'calificados' || this.sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'descuento' || this.sortBy === 'discount') {
      list.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
    } else if (this.sortBy === 'nuevos' || this.sortBy === 'new') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return list;
  }
}

export const store = new StoreState();
