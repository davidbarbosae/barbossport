import { siteConfig } from './config.js';
import { products, customerReviews } from './products.js';
import { store } from './state.js';

// Iconos SVG limpios monocromáticos
export const Icons = {
  cart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  heartFilled: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  truck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-4v10Z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.25a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.41a8.28 8.28 0 0 0 4.91 1.6V6.57a4.8 4.8 0 0 1-1-.02z"/></svg>`,
  ruler: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z"/><path d="m14.5 9.5 2 2"/><path d="m11.5 6.5 2 2"/><path d="m8.5 3.5 2 2"/><path d="m17.5 12.5 2 2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
};

const categoryNamesMap = {
  'urbana': 'Ropa Urbana',
  'futbol': 'Uniformes de Fútbol',
  'basquetbol': 'Uniformes de Básquetbol',
  'voleibol': 'Uniformes de Voleibol',
  'accesorios': 'Maletas & Canguros'
};

/* --------------------------------------------------------------------------
   UI Renderers
   -------------------------------------------------------------------------- */

export function renderProductGrid() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const filtered = store.getFilteredProducts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: #FFFFFF;">🔍</div>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem;">No se encontraron prendas</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Intenta con otros términos de búsqueda o restablece los filtros.</p>
        <button id="reset-filters-btn" class="btn btn-white btn-sm">Ver Todas las Prendas</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        store.setCategory('all');
        store.setGender('all');
        store.setSearch('');
        const searchInput = document.getElementById('catalog-search-input');
        if (searchInput) searchInput.value = '';
        renderPills();
        renderProductGrid();
      });
    }
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isFav = store.isInWishlist(product.id);
    const priceFormatted = store.formatPrice(product.priceCOP, product.priceUSD, product.priceEUR, product.priceMXN);
    const catLabel = categoryNamesMap[product.category] || product.category;
    
    // Quick sizes
    const sizePills = product.sizes.map(s => `
      <button class="size-pill-btn" data-product-id="${product.id}" data-size="${s}">
        ${s}
      </button>
    `).join('');

    // Color dots
    const colorDots = product.colors.map(c => `
      <span class="swatch-dot" style="background-color: ${c.hex};" title="${c.name}"></span>
    `).join('');

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="card-media-wrap" data-action="open-modal" data-product-id="${product.id}">
          <img src="${product.images[0]}" alt="${product.name}" class="card-img-primary" loading="lazy" />
          <img src="${product.images[0]}" alt="${product.name}" class="card-img-hover" loading="lazy" />
          
          <div class="card-badges">
            ${product.badge ? `<span class="badge badge-white">${product.badge}</span>` : ''}
          </div>

          <button class="card-wishlist-btn ${isFav ? 'active' : ''}" data-action="toggle-wishlist" data-product-id="${product.id}" title="${isFav ? 'Quitar de guardados' : 'Guardar prenda'}">
            ${isFav ? Icons.heartFilled : Icons.heart}
          </button>

          <div class="card-quick-actions">
            <span style="font-size: 0.72rem; font-weight: 700; color: #FFFFFF; text-align: center; text-transform: uppercase; font-family: var(--font-heading);">Añadir al carrito:</span>
            <div class="quick-size-list">
              ${sizePills}
            </div>
          </div>
        </div>

        <div class="card-content">
          <div class="card-category-rating">
            <span class="card-cat-name">${catLabel}</span>
            <span class="card-rating">${Icons.star} ${product.rating} <span style="color: var(--text-dim);">(${product.reviewsCount})</span></span>
          </div>

          <h3 class="card-title" data-action="open-modal" data-product-id="${product.id}">${product.name}</h3>

          <div class="card-color-swatches">
            ${colorDots}
          </div>

          <div class="card-footer">
            <div class="card-price-wrap">
              <span class="card-current-price">${priceFormatted}</span>
            </div>

            <button class="btn btn-white btn-sm" data-action="open-modal" data-product-id="${product.id}">
              Ver Detalle
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

export function renderPills() {
  const container = document.getElementById('category-pills-wrap');
  if (!container) return;

  const categories = [
    { id: 'all', label: 'Todas las Prendas' },
    { id: 'urbana', label: 'Ropa Urbana' },
    { id: 'futbol', label: 'Uniformes de Fútbol' },
    { id: 'basquetbol', label: 'Uniformes de Básquetbol' },
    { id: 'voleibol', label: 'Uniformes de Voleibol' },
    { id: 'accesorios', label: 'Maletas & Canguros' }
  ];

  container.innerHTML = categories.map(cat => {
    const count = cat.id === 'all' 
      ? products.length 
      : products.filter(p => p.category === cat.id).length;
    const isActive = store.activeCategory === cat.id;

    return `
      <button class="pill-btn ${isActive ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
        <span class="pill-count">${count}</span>
      </button>
    `;
  }).join('');
}

export function updateHeaderBadges() {
  const cartBadge = document.getElementById('cart-badge-count');
  const wishlistBadge = document.getElementById('wishlist-badge-count');

  if (cartBadge) {
    const count = store.getCartCount();
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  if (wishlistBadge) {
    const count = store.getWishlistCount();
    wishlistBadge.textContent = count;
    wishlistBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

export function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-drawer-items');
  const countSpan = document.getElementById('cart-drawer-count');
  const subtotalSpan = document.getElementById('cart-drawer-subtotal');
  const discountRow = document.getElementById('cart-drawer-discount-row');
  const discountSpan = document.getElementById('cart-drawer-discount');
  const shippingSpan = document.getElementById('cart-drawer-shipping');
  const totalSpan = document.getElementById('cart-drawer-total');
  const couponContainer = document.getElementById('applied-coupon-container');
  const shippingNoticeContainer = document.getElementById('cart-shipping-notice-box');

  const cart = store.cart;
  const count = store.getCartCount();

  if (countSpan) countSpan.textContent = `(${count})`;

  if (cart.length === 0) {
    if (itemsContainer) {
      itemsContainer.innerHTML = `
        <div class="drawer-empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          <h4 style="font-family: var(--font-display); font-size: 1.25rem;">Tu carrito está vacío</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Explora nuestra colección y añade tus prendas favoritas.</p>
        </div>
      `;
    }
    if (subtotalSpan) subtotalSpan.textContent = store.formatPrice(0);
    if (shippingSpan) shippingSpan.textContent = store.formatPrice(0);
    if (totalSpan) totalSpan.textContent = store.formatPrice(0);
    if (discountRow) discountRow.style.display = 'none';
    if (shippingNoticeContainer) shippingNoticeContainer.innerHTML = '';
    return;
  }

  // Shipping dynamic box
  if (shippingNoticeContainer) {
    const isFree = store.isFreeShipping();
    const shortfall = store.getShippingShortfall();

    shippingNoticeContainer.innerHTML = `
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

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => {
      const itemPrice = store.formatPrice(item.priceCOP, item.priceUSD, item.priceEUR, item.priceMXN);

      return `
        <div class="cart-item-card" data-cart-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-variant">Talla: <strong>${item.size}</strong>${item.color ? ` • Color: <strong>${item.color}</strong>` : ''}</span>
            <span class="cart-item-price">${itemPrice}</span>
          </div>
          <div class="cart-item-actions">
            <button class="item-delete-btn" data-action="remove-cart-item" data-cart-id="${item.id}" title="Eliminar">
              ${Icons.close}
            </button>
            <div class="qty-control" style="transform: scale(0.85); transform-origin: right bottom;">
              <button class="qty-btn" data-action="qty-decrease" data-cart-id="${item.id}">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-action="qty-increase" data-cart-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (subtotalSpan) subtotalSpan.textContent = store.getCartSubtotalFormatted();
  
  if (store.appliedCoupon && store.getCartDiscountCOP() > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountSpan) discountSpan.textContent = `-${store.formatPrice(store.getCartDiscountCOP())}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  if (shippingSpan) {
    if (store.isFreeShipping()) {
      shippingSpan.innerHTML = '<strong style="color: #FFFFFF;">GRATIS</strong>';
    } else {
      shippingSpan.textContent = store.formatPrice(siteConfig.shippingCostCOP);
    }
  }

  if (totalSpan) totalSpan.textContent = store.getCartTotalFormatted();

  // Coupon badge
  if (couponContainer) {
    if (store.appliedCoupon) {
      couponContainer.innerHTML = `
        <div class="coupon-badge-applied">
          <span>Cupón <strong>${store.appliedCoupon.code}</strong> (-${store.appliedCoupon.discount * 100}%)</span>
          <button class="remove-coupon-btn" id="remove-coupon-btn" title="Remover cupón">${Icons.close}</button>
        </div>
      `;
      const removeBtn = document.getElementById('remove-coupon-btn');
      if (removeBtn) {
        removeBtn.addEventListener('click', () => {
          store.removeCoupon();
          showToast('Cupón removido');
          renderCartDrawer();
        });
      }
    } else {
      couponContainer.innerHTML = '';
    }
  }
}

export function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-drawer-items');
  const countSpan = document.getElementById('wishlist-drawer-count');

  const wishlist = store.wishlist;
  if (countSpan) countSpan.textContent = `(${wishlist.length})`;

  if (wishlist.length === 0) {
    if (container) {
      container.innerHTML = `
        <div class="drawer-empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          <h4 style="font-family: var(--font-display); font-size: 1.25rem;">No tienes prendas guardadas</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Guarda tus prendas preferidas para acceder a ellas en cualquier momento.</p>
        </div>
      `;
    }
    return;
  }

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  if (container) {
    container.innerHTML = wishlistProducts.map(p => {
      const price = store.formatPrice(p.priceCOP, p.priceUSD, p.priceEUR, p.priceMXN);
      return `
        <div class="cart-item-card" style="grid-template-columns: 70px 1fr auto;">
          <img src="${p.images[0]}" alt="${p.name}" class="cart-item-img" style="width: 70px; height: 70px;" />
          <div class="cart-item-info">
            <span class="cart-item-name">${p.name}</span>
            <span class="cart-item-price">${price}</span>
          </div>
          <div class="cart-item-actions">
            <button class="item-delete-btn" data-action="toggle-wishlist" data-product-id="${p.id}">
              ${Icons.close}
            </button>
            <button class="btn btn-white btn-sm" data-action="quick-add-from-wishlist" data-product-id="${p.id}">
              Comprar
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

export function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('product-modal-overlay');
  const modalContainer = document.getElementById('product-modal-content');
  if (!modalOverlay || !modalContainer) return;

  let selectedSize = product.defaultSize || product.sizes[0];
  let selectedColor = (product.colors && product.colors.length > 0) ? product.colors[0].name : '';
  let quantity = 1;
  const catLabel = categoryNamesMap[product.category] || product.category;

  const renderModalInner = () => {
    const priceFormatted = store.formatPrice(product.priceCOP, product.priceUSD, product.priceEUR, product.priceMXN);

    modalContainer.innerHTML = `
      <button class="modal-close-btn" id="modal-close-btn">${Icons.close}</button>
      
      <div class="product-modal-grid">
        <!-- Gallery -->
        <div class="modal-gallery">
          <div class="modal-main-img-wrap">
            <img src="${product.images[0]}" alt="${product.name}" class="modal-main-img" id="modal-main-image" />
          </div>
        </div>

        <!-- Details -->
        <div class="modal-product-details">
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="badge badge-white">${catLabel}</span>
            ${product.badge ? `<span class="badge badge-dark">${product.badge}</span>` : ''}
          </div>

          <h2 class="modal-product-title">${product.name}</h2>

          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;">
            <span style="color: #FFFFFF; display: flex; align-items: center; gap: 0.2rem;">${Icons.star} ${product.rating}</span>
            <span style="color: var(--text-dim);">•</span>
            <span style="color: var(--text-muted);">${product.reviewsCount} opiniones</span>
            <span style="color: var(--text-dim);">•</span>
            <span style="color: #E2E8F0; font-weight: 700;">Disponibilidad: ${product.stock} unidades</span>
          </div>

          <div class="modal-price-row">
            <span class="modal-current-price">${priceFormatted}</span>
          </div>

          <!-- Shipping info banner -->
          <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); padding: 0.65rem 0.85rem; border-radius: var(--radius-xs); font-size: 0.82rem; color: #FFFFFF;">
            🚚 <strong>Envío Colombia:</strong> $20.000 COP • <strong style="text-decoration: underline;">¡GRATIS comprando 6 o más prendas!</strong>
          </div>

          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${product.description}</p>

          ${(product.colors && product.colors.length > 0) ? `
            <!-- Color selection -->
            <div class="selector-group">
              <div class="selector-label">
                <span>Color: <strong style="color: #FFFFFF;">${selectedColor}</strong></span>
              </div>
              <div class="color-options">
                ${product.colors.map(c => `
                  <button class="color-circle-btn ${c.name === selectedColor ? 'active' : ''}" 
                    style="background-color: ${c.hex};" 
                    data-color-name="${c.name}"
                    title="${c.name}">
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Size selection -->
          <div class="selector-group">
            <div class="selector-label">
              <span>Talla: <strong style="color: #FFFFFF;">${selectedSize}</strong></span>
              <span class="size-guide-link" id="open-size-guide-link">${Icons.ruler} Guía de Tallas</span>
            </div>
            <div class="size-options">
              ${product.sizes.map(s => `
                <button class="size-btn ${s === selectedSize ? 'active' : ''}" data-size-value="${s}">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Quantity & Action buttons -->
          <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
            <div class="qty-control">
              <button class="qty-btn" id="modal-qty-minus">-</button>
              <span class="qty-value" id="modal-qty-value">${quantity}</span>
              <button class="qty-btn" id="modal-qty-plus">+</button>
            </div>

            <button class="btn btn-white" id="modal-add-cart-btn" style="flex-grow: 1;">
              ${Icons.cart} Añadir al Carrito
            </button>
          </div>

          <!-- Direct WhatsApp button -->
          <button class="btn btn-whatsapp" id="modal-whatsapp-direct-btn" style="width: 100%;">
            ${Icons.whatsapp} Pedir directamente por WhatsApp (+57 314 3937314)
          </button>

          <!-- Specs Accordion -->
          <div class="modal-specs-accordion">
            <div class="accordion-item open">
              <div class="accordion-header" data-accordion="tech">
                <span>Especificaciones Técnicas</span>
                <span>${Icons.chevronDown}</span>
              </div>
              <div class="accordion-content">
                <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem;">
                  ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header" data-accordion="shipping">
                <span>Medios de Pago & Envíos</span>
                <span>${Icons.chevronDown}</span>
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

    // Bind inner events
    document.getElementById('modal-close-btn')?.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    // Color pick
    modalContainer.querySelectorAll('.color-circle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedColor = btn.getAttribute('data-color-name');
        renderModalInner();
      });
    });

    // Size pick
    modalContainer.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedSize = btn.getAttribute('data-size-value');
        renderModalInner();
      });
    });

    // Qty
    document.getElementById('modal-qty-minus')?.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        document.getElementById('modal-qty-value').textContent = quantity;
      }
    });

    document.getElementById('modal-qty-plus')?.addEventListener('click', () => {
      if (quantity < product.stock) {
        quantity++;
        document.getElementById('modal-qty-value').textContent = quantity;
      }
    });

    // Size guide trigger
    document.getElementById('open-size-guide-link')?.addEventListener('click', () => {
      openSizeGuideModal();
    });

    // Add to cart
    document.getElementById('modal-add-cart-btn')?.addEventListener('click', () => {
      store.addToCart(product.id, selectedSize, selectedColor, quantity);
      showToast(`¡${product.name} añadido al carrito!`);
      modalOverlay.classList.remove('active');
      openCartDrawer();
    });

    // WhatsApp direct
    document.getElementById('modal-whatsapp-direct-btn')?.addEventListener('click', () => {
      const priceText = store.formatPrice(product.priceCOP, product.priceUSD, product.priceEUR, product.priceMXN);
      const text = `¡Hola BARBOS! Quiero comprar esta prenda:%0A%0A*Producto:* ${product.name}%0A*Talla:* ${selectedSize}%0A*Color:* ${selectedColor}%0A*Cantidad:* ${quantity}%0A*Precio Unitario:* ${priceText}%0A%0A¿Tienen disponibilidad para despacho?`;
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
    });

    // Accordions toggle
    modalContainer.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('open');
      });
    });
  };

  renderModalInner();
  modalOverlay.classList.add('active');
}

export function openSizeGuideModal() {
  const modalOverlay = document.getElementById('size-guide-modal-overlay');
  if (!modalOverlay) return;
  modalOverlay.classList.add('active');
}

export function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    renderCartDrawer();
    drawer.classList.add('active');
    backdrop.classList.add('active');
  }
}

export function openWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  if (drawer && backdrop) {
    renderWishlistDrawer();
    drawer.classList.add('active');
    backdrop.classList.add('active');
  }
}

export function openCheckoutModal() {
  if (store.cart.length === 0) {
    showToast('Tu carrito está vacío para procesar el pedido.');
    return;
  }

  // Close cart drawer
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.getElementById('cart-drawer-backdrop')?.classList.remove('active');

  const overlay = document.getElementById('checkout-modal-overlay');
  const container = document.getElementById('checkout-modal-content');
  if (!overlay || !container) return;

  const totalFormatted = store.getCartTotalFormatted();
  const subtotalFormatted = store.getCartSubtotalFormatted();
  const discountAmount = store.getCartDiscountCOP();
  const isFreeShip = store.isFreeShipping();
  const shippingFormatted = isFreeShip ? 'GRATIS' : store.formatPrice(siteConfig.shippingCostCOP);

  container.innerHTML = `
    <button class="modal-close-btn" id="checkout-close-btn">${Icons.close}</button>

    <div class="checkout-modal-container">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--bg-card-border); padding-bottom: 1rem;">
        <span class="badge badge-white">PAGO SEGURO BARBOS®</span>
        <h2 style="font-family: var(--font-display); font-size: 1.85rem; margin-top: 0.4rem;">Finalizar Pedido</h2>
      </div>

      <div class="checkout-steps-grid" id="checkout-main-grid">
        <!-- Form -->
        <div>
          <h3 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 1rem; color: #FFFFFF;">
            1. Datos de Despacho
          </h3>

          <form id="checkout-form">
            <div class="form-group">
              <label>Nombre y Apellidos *</label>
              <input type="text" id="chk-name" class="form-input" placeholder="Ej. Carlos Mendoza" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label>Teléfono WhatsApp *</label>
                <input type="tel" id="chk-phone" class="form-input" placeholder="+57 314 3937314" required />
              </div>
              <div class="form-group">
                <label>Correo Electrónico *</label>
                <input type="email" id="chk-email" class="form-input" placeholder="carlos@gmail.com" required />
              </div>
            </div>

            <div class="form-group">
              <label>Dirección Completa de Entrega *</label>
              <input type="text" id="chk-address" class="form-input" placeholder="Calle / Carrera / Apto o Casa" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label>Ciudad / Municipio *</label>
                <input type="text" id="chk-city" class="form-input" placeholder="Medellín / Bogotá / etc." required />
              </div>
              <div class="form-group">
                <label>Departamento / Región</label>
                <input type="text" id="chk-state" class="form-input" placeholder="Antioquia / Cundinamarca" />
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
                  Número de cuenta / Transferencia: <span style="background: rgba(255,255,255,0.15); padding: 0.2rem 0.5rem; border-radius: 4px;">+57 314 3937314</span>
                </p>
                <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
                  Acepta transferencias directas y pagos PSE a este número.
                </p>
              </div>
            </div>

            <button type="submit" class="btn btn-white btn-lg" style="width: 100%; margin-top: 1.5rem;">
              ${Icons.shield} Confirmar y Registrar Pedido (${totalFormatted})
            </button>
          </form>
        </div>

        <!-- Summary -->
        <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-xs); border: 1px solid var(--bg-card-border); height: fit-content;">
          <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--bg-card-border); padding-bottom: 0.5rem;">
            Resumen del Pedido (${store.getCartCount()} prendas)
          </h4>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 220px; overflow-y: auto; margin-bottom: 1rem;">
            ${store.cart.map(i => `
              <div style="display: flex; gap: 0.75rem; align-items: center; font-size: 0.85rem;">
                <img src="${i.image}" alt="${i.name}" style="width: 42px; height: 42px; border-radius: 4px; object-fit: cover;" />
                <div style="flex-grow: 1;">
                  <div style="font-weight: 700; color: #FFFFFF;">${i.name}</div>
                  <div style="color: var(--text-muted); font-size: 0.75rem;">${i.size} • ${i.color} • x${i.quantity}</div>
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
              <span>${subtotalFormatted}</span>
            </div>
            ${discountAmount > 0 ? `
              <div class="summary-row" style="color: #FFFFFF;">
                <span>Descuento aplicado:</span>
                <span>-${store.formatPrice(discountAmount)}</span>
              </div>
            ` : ''}
            <div class="summary-row">
              <span>Envío Colombia:</span>
              <span style="color: #FFFFFF; font-weight: 700;">${shippingFormatted}</span>
            </div>
            <div class="summary-row total-row">
              <span>Total a pagar:</span>
              <span class="total-amount">${totalFormatted}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Close event
  document.getElementById('checkout-close-btn')?.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  // Form submit
  document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('chk-name').value;
    const phone = document.getElementById('chk-phone').value;
    const email = document.getElementById('chk-email').value;
    const city = document.getElementById('chk-city').value;
    const address = document.getElementById('chk-address').value;
    const orderId = `BBS-${Math.floor(100000 + Math.random() * 900000)}`;

    const savedItems = [...store.cart];
    const finalTotal = store.getCartTotalFormatted();
    const isFree = store.isFreeShipping();
    const shipText = isFree ? 'GRATIS (6+ unidades)' : '$ 20.000 COP';
    store.clearCart();

    container.innerHTML = `
      <button class="modal-close-btn" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active');">${Icons.close}</button>
      
      <div class="checkout-modal-container" style="text-align: center; max-width: 600px;">
        <div class="order-ticket">
          <div class="ticket-header">
            <div style="margin-bottom: 0.8rem;">
              <img src="assets/images/logo.png" alt="Barbos" style="max-height: 56px; width: auto; margin: 0 auto; display: block;" />
            </div>
            <span class="badge badge-white" style="margin-bottom: 0.5rem;">¡ORDEN REGISTRADA!</span>
            <div class="ticket-order-id">ORDEN #${orderId}</div>
            <p style="color: var(--text-secondary); margin-top: 0.5rem; font-size: 0.9rem;">
              Gracias <strong>${name}</strong>, tu pedido está registrado para despacho a <strong>${city}</strong>.
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
              <span style="color: #FFFFFF; font-size: 1.1rem;">${finalTotal}</span>
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.25); padding: 1rem; border-radius: var(--radius-xs); margin-bottom: 1.5rem; text-align: left; font-size: 0.85rem;">
            <div style="font-weight: 700; color: #FFFFFF; margin-bottom: 0.3rem;">📱 Datos de Pago (Nequi / Daviplata / Llave Bre-B):</div>
            <div>• Número: <strong>+57 314 3937314</strong></div>
            <div style="margin-top: 0.4rem;">✉️ Notificaciones oficiales a: <strong>sportbboss@gmail.com</strong></div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button class="btn btn-white" id="notify-whatsapp-ticket-btn">
              ${Icons.whatsapp} Enviar Comprobante por WhatsApp (+57 314 3937314)
            </button>
            <button class="btn btn-secondary" id="notify-email-ticket-btn">
              ${Icons.mail} Notificar por Correo (sportbboss@gmail.com)
            </button>
            <button class="btn btn-secondary" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active');">
              Volver a la Tienda
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('notify-whatsapp-ticket-btn')?.addEventListener('click', () => {
      const itemsList = savedItems.map(i => `• ${i.name} (Talla: ${i.size}, Color: ${i.color}, x${i.quantity})`).join('%0A');
      const text = `¡Hola BARBOS! Acabo de registrar mi pedido en la web:%0A%0A*No. Orden:* ${orderId}%0A*Cliente:* ${name}%0A*Teléfono:* ${phone}%0A*Correo:* ${email}%0A*Ciudad:* ${city}%0A*Dirección:* ${address}%0A%0A*Prendas:*%0A${itemsList}%0A%0A*Envío:* ${shipText}%0A*Total:* ${finalTotal}%0A%0AAdjunto mi comprobante de pago por Nequi/Daviplata/Llave Bre-B.`;
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
    });

    document.getElementById('notify-email-ticket-btn')?.addEventListener('click', () => {
      const itemsList = savedItems.map(i => `• ${i.name} (Talla: ${i.size}, Color: ${i.color}, x${i.quantity})`).join('\n');
      const subject = encodeURIComponent(`Nuevo Pedido Web #${orderId} - ${name}`);
      const body = encodeURIComponent(`Hola BARBOS,\n\nSe ha registrado un nuevo pedido en la tienda web:\n\nNo. Orden: ${orderId}\nCliente: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nCiudad: ${city}\nDirección: ${address}\n\nPrendas:\n${itemsList}\n\nEnvío: ${shipText}\nTotal: ${finalTotal}\n\nMétodo de pago: Nequi / Daviplata / Llave Bre-B (+57 314 3937314)`);
      window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_blank');
    });

    showToast(`¡Orden #${orderId} creada exitosamente!`);
  });

  overlay.classList.add('active');
}

export function renderReviews() {
  const container = document.getElementById('reviews-grid-container');
  if (!container) return;

  container.innerHTML = customerReviews.map(r => `
    <div class="review-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="review-stars">
          ${Array(r.rating).fill(Icons.star).join('')}
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

export function renderFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

export function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span style="font-weight: 600; font-size: 0.88rem;">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('active'), 20);

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}
