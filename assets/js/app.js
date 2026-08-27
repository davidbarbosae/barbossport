import { siteConfig } from './config.js';
import { products } from './products.js';
import { store } from './state.js';
import {
  Icons,
  renderProductGrid,
  renderPills,
  renderGenderTabs,
  updateHeaderBadges,
  renderCartDrawer,
  renderWishlistDrawer,
  openProductModal,
  openSizeGuideModal,
  openCartDrawer,
  openWishlistDrawer,
  renderLookbook,
  renderReviews,
  renderFAQ,
  showToast
} from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizados Iniciales
  renderPills();
  renderGenderTabs();
  renderProductGrid();
  updateHeaderBadges();
  renderLookbook();
  renderReviews();
  renderFAQ();

  // 2. Selector de moneda
  const currencySelector = document.getElementById('currency-selector');
  if (currencySelector) {
    currencySelector.value = store.currency;
    currencySelector.addEventListener('change', (e) => {
      store.setCurrency(e.target.value);
      showToast(`Moneda cambiada a ${e.target.value}`);
    });
  }

  // 3. Suscripción al estado para reactividad
  store.subscribe(() => {
    renderProductGrid();
    updateHeaderBadges();
    renderCartDrawer();
    renderWishlistDrawer();
  });

  // 4. Efecto de desplazamiento de cabecera
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 5. Menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle-btn');
  const navMenu = document.getElementById('main-nav-menu');
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('mobile-open'));
    });
  }

  // 6. Eventos de filtros y búsqueda
  document.getElementById('category-pills-wrap')?.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill-btn');
    if (pill) {
      const cat = pill.getAttribute('data-category');
      store.setCategory(cat);
      renderPills();
    }
  });

  document.querySelectorAll('.gender-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const gender = tab.getAttribute('data-gender');
      store.setGender(gender);
      renderGenderTabs();
    });
  });

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        store.setSearch(e.target.value);
      }, 200);
    });
  }

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      store.setSortBy(e.target.value);
    });
  }

  // 7. Delegación de clics
  document.addEventListener('click', (e) => {
    // Abrir modal de prenda
    const modalTrigger = e.target.closest('[data-action="open-modal"]');
    if (modalTrigger) {
      const prodId = modalTrigger.getAttribute('data-product-id');
      if (prodId) openProductModal(prodId);
      return;
    }

    // Guardar en favoritos / wishlist
    const wishlistBtn = e.target.closest('[data-action="toggle-wishlist"]');
    if (wishlistBtn) {
      e.stopPropagation();
      const prodId = wishlistBtn.getAttribute('data-product-id');
      if (prodId) {
        const added = store.toggleWishlist(prodId);
        showToast(added ? 'Añadido a tus prendas guardadas' : 'Eliminado de tus prendas guardadas');
      }
      return;
    }

    // Añadir rápido por talla
    const sizePill = e.target.closest('.size-pill-btn');
    if (sizePill) {
      e.stopPropagation();
      const prodId = sizePill.getAttribute('data-product-id');
      const size = sizePill.getAttribute('data-size');
      if (prodId && size) {
        store.addToCart(prodId, size, null, 1);
        const prod = products.find(p => p.id === prodId);
        showToast(`¡${prod ? prod.name : 'Prenda'} (Talla ${size}) añadida!`);
        openCartDrawer();
      }
      return;
    }

    // Mover desde guardados al carrito
    const quickWishlistAdd = e.target.closest('[data-action="quick-add-from-wishlist"]');
    if (quickWishlistAdd) {
      const prodId = quickWishlistAdd.getAttribute('data-product-id');
      if (prodId) {
        store.addToCart(prodId, null, null, 1);
        showToast('¡Prenda movida al carrito!');
        openCartDrawer();
      }
      return;
    }

    // Explorar en lookbook
    const lookBtn = e.target.closest('[data-action="explore-look"]');
    if (lookBtn) {
      const prodId = lookBtn.getAttribute('data-product-id');
      if (prodId) openProductModal(prodId);
      return;
    }

    // Eliminar ítem del carrito
    const cartRemoveBtn = e.target.closest('[data-action="remove-cart-item"]');
    if (cartRemoveBtn) {
      const cartId = cartRemoveBtn.getAttribute('data-cart-id');
      store.removeFromCart(cartId);
      showToast('Prenda eliminada del carrito');
      return;
    }

    // Incrementar cantidad
    const qtyIncBtn = e.target.closest('[data-action="qty-increase"]');
    if (qtyIncBtn) {
      const cartId = qtyIncBtn.getAttribute('data-cart-id');
      const item = store.cart.find(i => i.id === cartId);
      if (item) store.updateCartQuantity(cartId, item.quantity + 1);
      return;
    }

    // Disminuir cantidad
    const qtyDecBtn = e.target.closest('[data-action="qty-decrease"]');
    if (qtyDecBtn) {
      const cartId = qtyDecBtn.getAttribute('data-cart-id');
      const item = store.cart.find(i => i.id === cartId);
      if (item) store.updateCartQuantity(cartId, item.quantity - 1);
      return;
    }
  });

  // 8. Apertura y cierre de paneles laterales
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

  // 9. Aplicación de cupones / códigos de referidos
  document.getElementById('apply-coupon-btn')?.addEventListener('click', () => {
    const input = document.getElementById('coupon-code-input');
    if (input) {
      const res = store.applyCoupon(input.value);
      showToast(res.message);
      if (res.success) input.value = '';
    }
  });

  // 10. Pedido por WhatsApp desde el Carrito
  document.getElementById('cart-whatsapp-checkout-btn')?.addEventListener('click', () => {
    if (store.cart.length === 0) {
      showToast('Tu carrito está vacío');
      return;
    }

    let text = '';
    if (store.cart.length === 1) {
      const item = store.cart[0];
      const colorPart = item.color ? `, Color: ${item.color}` : '';
      const qtyPart = item.quantity > 1 ? `, Cantidad: ${item.quantity}` : '';
      const pr = store.formatPrice(item.priceCOP * item.quantity);
      text = `Hola, estoy interesado en el producto "${item.name}" (Talla: ${item.size}${colorPart}${qtyPart}) que tiene el precio de ${pr}. ¿Me podrían confirmar disponibilidad para continuar con la compra?`;
    } else {
      const itemsList = store.cart.map(i => {
        const colorPart = i.color ? `, Color: ${i.color}` : '';
        const qtyPart = i.quantity > 1 ? `, Cant: ${i.quantity}` : '';
        const pr = store.formatPrice(i.priceCOP * i.quantity);
        return `• "${i.name}" (Talla: ${i.size}${colorPart}${qtyPart}) - ${pr}`;
      }).join('\n');

      const tot = store.getCartTotalFormatted();
      const isFree = store.isFreeShipping();
      const shipStr = isFree ? 'GRATIS' : '$ 20.000 COP';
      const disc = store.appliedCoupon ? `\nDescuento aplicado (${store.appliedCoupon.code}): -${store.formatPrice(store.getCartDiscountCOP())}` : '';

      text = `Hola, estoy interesado en los siguientes productos para continuar con la compra:\n\n${itemsList}\n\n────────────────────\nEnvío: ${shipStr}${disc}\nTotal: ${tot}\n────────────────────\n¿Me podrían confirmar disponibilidad y los pasos para el pago por favor?`;
    }

    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  });

  // 12. Controles de Guía de Tallas
  document.getElementById('size-guide-modal-close')?.addEventListener('click', () => {
    document.getElementById('size-guide-modal-overlay')?.classList.remove('active');
  });

  document.getElementById('size-guide-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'size-guide-modal-overlay') {
      document.getElementById('size-guide-modal-overlay')?.classList.remove('active');
    }
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

  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const unit = btn.getAttribute('data-unit');
      updateSizeGuideValues(unit);
    });
  });

  // 13. Calculadora de tallas
  document.getElementById('calc-size-btn')?.addEventListener('click', () => {
    const height = parseInt(document.getElementById('calc-height')?.value || '0', 10);
    const weight = parseInt(document.getElementById('calc-weight')?.value || '0', 10);
    const fit = document.getElementById('calc-fit')?.value || 'regular';
    const resultBox = document.getElementById('calc-result-box');

    if (!height || !weight) {
      showToast('Por favor ingresa tu estatura y peso');
      return;
    }

    let recommended = 'M';
    if (weight < 35 || height < 130) recommended = '6';
    else if (weight >= 35 && weight < 42) recommended = '8';
    else if (weight >= 42 && weight < 50) recommended = '10';
    else if (weight >= 50 && weight < 58) recommended = '12';
    else if (weight >= 58 && weight < 64) recommended = '14';
    else if (weight >= 64 && weight < 70) recommended = '16';
    else if (weight >= 70 && weight < 76) recommended = 'S';
    else if (weight >= 76 && weight < 84) recommended = 'M';
    else if (weight >= 84 && weight < 92) recommended = 'L';
    else recommended = 'XL';

    if (fit === 'holgado' && recommended !== 'XL') {
      const sizes = ['6', '8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL'];
      const idx = sizes.indexOf(recommended);
      if (idx < sizes.length - 1) recommended = sizes[idx + 1];
    }

    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="background: rgba(255, 255, 255, 0.08); border: 1px solid #FFFFFF; padding: 1rem; border-radius: var(--radius-xs); text-align: center;">
          <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Talla sugerida:</span>
          <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: #FFFFFF;">${recommended} ${fit === 'holgado' ? '(Oversize +3 cm)' : ''}</div>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Ajuste ${fit} basado en ${height} cm y ${weight} kg.</span>
        </div>
      `;
    }
  });

  // 14. Plan de Referidos (Suscripción y Generación de Código)
  document.getElementById('referidos-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('referido-name-input');
    const emailInput = document.getElementById('referido-email-input');
    const resultBox = document.getElementById('referidos-result-box');

    if (emailInput && emailInput.value) {
      const cleanName = (nameInput?.value || 'BARBOS').trim().toUpperCase().replace(/\s+/g, '');
      const uniqueCode = `${cleanName}-${Math.floor(100 + Math.random() * 900)}`;

      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
          <div style="background: var(--bg-surface); border: 1px solid #FFFFFF; padding: 1.5rem; border-radius: var(--radius-xs); margin-top: 1.5rem; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎉</div>
            <h4 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 0.4rem; color: #FFFFFF;">¡Te has unido al Plan de Referidos!</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
              Comparte tu código exclusivo con tus amigos. Ellos reciben <strong>10% de descuento</strong> y tú ganas <strong>15% de descuento</strong> en tu siguiente compra por cada amigo que ordene.
            </p>
            <div style="background: #000000; border: 1px dashed rgba(255,255,255,0.4); padding: 0.75rem 1.5rem; font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.1em; color: #FFFFFF; font-weight: 700; display: inline-block; margin-bottom: 1rem;">
              ${uniqueCode}
            </div>
            <div>
              <a href="https://wa.me/?text=¡Hola!%20Usa%20mi%20código%20${uniqueCode}%20en%20BARBOS%20para%20obtener%20un%2010%25%20de%20descuento%20en%20tu%20primer%20uniforme%20o%20ropa%20deportiva." target="_blank" class="btn btn-whatsapp btn-sm">
                Compartir Código por WhatsApp
              </a>
            </div>
          </div>
        `;
      }

      showToast('✓ ¡Código de referido generado con éxito!');
      emailInput.value = '';
      if (nameInput) nameInput.value = '';
    }
  });
});

function updateSizeGuideValues(unit) {
  const isInch = unit === 'in';
  const tableData = isInch ? [
    { size: 'S', chest: '36-38"', waist: '29-31"', hips: '36-38"' },
    { size: 'M', chest: '39-41"', waist: '32-34"', hips: '39-41"' },
    { size: 'L', chest: '42-44"', waist: '35-37"', hips: '42-44"' },
    { size: 'XL', chest: '45-47"', waist: '38-40"', hips: '45-47"' },
    { size: 'XXL', chest: '48-50"', waist: '41-43"', hips: '48-50"' }
  ] : [
    { size: 'S', chest: '91-96 cm', waist: '74-79 cm', hips: '91-96 cm' },
    { size: 'M', chest: '99-104 cm', waist: '81-86 cm', hips: '99-104 cm' },
    { size: 'L', chest: '107-112 cm', waist: '89-94 cm', hips: '107-112 cm' },
    { size: 'XL', chest: '114-119 cm', waist: '96-101 cm', hips: '114-119 cm' },
    { size: 'XXL', chest: '122-127 cm', waist: '104-109 cm', hips: '122-127 cm' }
  ];

  const tbody = document.getElementById('size-table-body');
  if (tbody) {
    tbody.innerHTML = tableData.map(row => `
      <tr>
        <td style="font-weight: 700; color: #FFFFFF;">${row.size}</td>
        <td>${row.chest}</td>
        <td>${row.waist}</td>
        <td>${row.hips}</td>
      </tr>
    `).join('');
  }
}
