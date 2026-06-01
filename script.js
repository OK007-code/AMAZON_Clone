'use strict';

const PRODUCTS = {
  electronics: [
    { id:'e1', img:'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=300&q=80', name:'Samsung Galaxy S24 Ultra 5G (256GB)', price:109999, old:134999, stars:4.5, reviews:'12,834', prime:true, badge:'19% off', desc:'Quad rear cameras, 200MP main sensor, S-Pen included. 12GB RAM, Snapdragon 8 Gen 3.', features:['200MP quad camera','S-Pen included','12GB RAM + 256GB','5000 mAh battery','IP68 rated'] },
    { id:'e2', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80', name:'Sony WH-1000XM5 Noise Cancelling Headphones', price:24990, old:34990, stars:4.7, reviews:'8,421', prime:true, badge:'29% off', desc:'Industry-leading noise cancellation, 30 hours battery, crystal clear call quality.', features:['30hr battery','Industry ANC','Multipoint BT','Touch controls','Foldable'] },
    { id:'e3', img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&q=80', name:'Apple MacBook Air M3 13-inch (2024)', price:119900, old:134900, stars:4.8, reviews:'5,203', prime:true, badge:'11% off', desc:'Apple M3 chip, 8GB unified memory, 256GB SSD, 15-hour battery life.', features:['Apple M3 chip','8GB memory','256GB SSD','15hr battery','Liquid Retina'] },
    { id:'e4', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80', name:'Sony Alpha ZV-E10 Mirrorless Camera', price:52990, old:65000, stars:4.4, reviews:'3,190', prime:false, badge:'19% off', desc:'APS-C sensor, 4K video, perfect for vlogging and photography.', features:['APS-C 24.2MP','4K video','Hybrid AF','Vari-angle LCD','Eye AF'] },
    { id:'e5', img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80', name:'Apple Watch Series 9 GPS 45mm', price:38900, old:45900, stars:4.6, reviews:'9,021', prime:true, badge:'15% off', desc:'Advanced health sensors, S9 chip, always-on Retina display, crash detection.', features:['S9 chip','Always-on display','Blood oxygen','ECG app','Crash detection'] },
    { id:'e6', img:'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=300&q=80', name:'LG 27" 4K UHD IPS Monitor (27UK850)', price:29990, old:42000, stars:4.5, reviews:'4,312', prime:true, badge:'29% off', desc:'27-inch 4K UHD, USB-C, HDR10, sRGB 99%, ideal for creative professionals.', features:['4K UHD','USB-C 60W','HDR10','99% sRGB','Height adjustable'] },
    { id:'e7', img:'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&q=80', name:'Sony PlayStation 5 Disc Edition', price:54990, old:59990, stars:4.8, reviews:'20,111', prime:false, badge:'8% off', desc:'Next-gen gaming, ultra-high speed SSD, DualSense haptic feedback, 4K gaming.', features:['825GB SSD','4K gaming','120fps','Ray tracing','DualSense included'] },
    { id:'e8', img:'https://images.unsplash.com/photo-1543512214-318c7553f230?w=300&q=80', name:'Amazon Echo Dot (5th Gen) with Alexa', price:4499, old:5499, stars:4.3, reviews:'31,240', prime:true, badge:'18% off', desc:'Smart speaker with Alexa, improved audio, works with smart home devices.', features:['Alexa built-in','Improved bass','Temp sensor','Smart home hub','Eero built-in'] },
  ],
  fashion: [
    { id:'f1', img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&q=80', name:"Peter England Men's Slim Fit Formal Shirt", price:899, old:1799, stars:4.2, reviews:'6,420', prime:true, badge:'50% off', desc:'Premium cotton blend, wrinkle-resistant, perfect for office and formal occasions.', features:['Cotton blend','Wrinkle resistant','Machine washable','8 colors'] },
    { id:'f2', img:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80', name:'Libas Women Ethnic Kurta Palazzo Set', price:1299, old:2499, stars:4.4, reviews:'9,821', prime:true, badge:'48% off', desc:'Beautiful ethnic wear with intricate embroidery, soft fabric, festive collection.', features:['Soft cotton','Embroidery','Palazzo included','Dupatta included','Festive'] },
    { id:'f3', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80', name:'Nike Air Max 270 Running Shoes', price:8995, old:11495, stars:4.5, reviews:'4,220', prime:false, badge:'22% off', desc:'Max Air heel unit, breathable mesh upper, comfortable for all-day wear.', features:['270° Max Air','Breathable mesh','Foam midsole','Rubber outsole','6 colors'] },
    { id:'f4', img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80', name:'Lavie Women Large Tote Handbag', price:1499, old:2999, stars:4.1, reviews:'3,410', prime:true, badge:'50% off', desc:'Spacious tote with multiple compartments, PU leather, magnetic snap closure.', features:['PU leather','Magnetic snap','Multi compartments','Zipper pocket','Shoulder strap'] },
    { id:'f5', img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&q=80', name:"Roadster Men's Regular Fit Bomber Jacket", price:1799, old:3499, stars:4.3, reviews:'5,100', prime:true, badge:'49% off', desc:'Stylish bomber jacket, ribbed cuffs, zip closure, available in multiple colors.', features:['Polyester','Ribbed cuffs','Zip closure','2 pockets','Machine washable'] },
    { id:'f6', img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80', name:'Ray-Ban RB3025 Classic Aviator Sunglasses', price:4990, old:7500, stars:4.7, reviews:'7,801', prime:false, badge:'33% off', desc:'Iconic aviator design, 100% UV protection, crystal lenses, lightweight frame.', features:['100% UV protection','Crystal lenses','Metal frame','Aviator design','Includes case'] },
    { id:'f7', img:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&q=80', name:"Bewakoof Unisex Baseball Cap", price:349, old:699, stars:4.0, reviews:'12,501', prime:true, badge:'50% off', desc:'Adjustable strap, structured crown, embroidered logo, one size fits all.', features:['Adjustable strap','6-panel','Embroidered','One size','Moisture absorbing'] },
    { id:'f8', img:'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=300&q=80', name:'Fabindia Pure Cotton Printed Stole', price:649, old:1200, stars:4.6, reviews:'2,340', prime:false, badge:'46% off', desc:'Hand block printed, versatile scarf/stole, traditional Indian motifs.', features:['100% cotton','Hand block printed','Traditional motifs','Versatile','Dry clean'] },
  ],
  kitchen: [
    { id:'k1', img:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&q=80', name:'Prestige Omega Die-Cast Non-Stick Kadai 24cm', price:1299, old:2499, stars:4.5, reviews:'8,321', prime:true, badge:'48% off', desc:'Die-cast aluminium, non-stick coating, heat resistant handle, induction compatible.', features:['Die-cast aluminium','5-layer non-stick','Induction compatible','Heat resistant','Dishwasher safe'] },
    { id:'k2', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80', name:'Nescafé Gold Espresso Instant Coffee 200g', price:649, old:850, stars:4.6, reviews:'15,200', prime:true, badge:'24% off', desc:'Rich espresso-style coffee, finely ground, aromatic blend for the perfect cup.', features:['Rich espresso','200g pack','Resealable jar','No chicory','Hot or cold'] },
  ],
};

const ALL_PRODUCTS = Object.values(PRODUCTS).flat();
let cart = JSON.parse(localStorage.getItem('amazon_cart') || '[]');
let heroIdx = 0;
const heroSlides = 4;

function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
function discount(p, o) { return Math.round((1 - p / o) * 100) + '% off'; }
function stars(n) {
  const full = Math.floor(n), half = n % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}
function saveCart() { localStorage.setItem('amazon_cart', JSON.stringify(cart)); }

let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

function updateCartBadge() {
  document.getElementById('cartBadge').textContent = cart.reduce((s, i) => s + i.qty, 0) || '';
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  updateCartBadge();
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><i class="fa fa-shopping-cart"></i><p>Your cart is empty.</p></div>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  let total = 0;
  body.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `<div class="cart-item" id="ci-${item.id}">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"/></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')">Remove</button>
      </div></div>`;
  }).join('');
  document.getElementById('cartTotal').innerHTML = `Total (${cart.reduce((s,i)=>s+i.qty,0)} items): <span>${fmt(total)}</span>`;
}

function addToCart(id, fromModal = false) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ id: p.id, name: p.name, img: p.img, price: p.price, qty: 1 });
  saveCart(); renderCart();
  showToast(`"${p.name.slice(0,35)}…" added to cart!`, 'success');
  const btn = document.getElementById('atc-' + id);
  if (btn) {
    btn.textContent = '✓ Added'; btn.classList.add('added');
    setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1800);
  }
  if (fromModal) openCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart(); renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart(); renderCart();
  showToast('Item removed from cart');
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function openProduct(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById('productModal');
  const pct = discount(p.price, p.old);
  overlay.querySelector('.modal-body').innerHTML = `
    <div class="modal-img-wrap"><img src="${p.img}" alt="${p.name}"/></div>
    <div class="modal-info">
      <h2>${p.name}</h2>
      <div class="modal-stars">${stars(p.stars)} <span>${p.reviews} ratings</span></div>
      <div class="modal-price-block">
        <span class="modal-price">${fmt(p.price)}</span>
        <span class="modal-old">${fmt(p.old)}</span>
        <span class="modal-discount">${pct}</span>
      </div>
      ${p.prime ? '<div class="modal-prime"><span class="prime-badge">prime</span> FREE delivery</div>' : ''}
      <div class="modal-delivery">Delivery: <strong>Tomorrow, if ordered within 4 hrs</strong></div>
      <div class="modal-stock">✓ In Stock</div>
      <div class="modal-qty-row"><label>Qty:</label>
        <select class="modal-qty-select" id="modalQty">${[1,2,3,4,5].map(n=>`<option>${n}</option>`).join('')}</select>
      </div>
      <button class="modal-atc" onclick="addToCart('${p.id}',true)">Add to Cart</button>
      <button class="modal-buy" onclick="showToast('Proceeding to checkout...','info');closeProductModal();">Buy Now</button>
      <div class="modal-desc"><strong>About this item</strong><p style="margin-top:6px;">${p.desc}</p>
        <ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
      </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function openSignIn() { document.getElementById('signinModal').classList.add('open'); document.body.style.overflow='hidden'; }
function closeSignIn() { document.getElementById('signinModal').classList.remove('open'); document.body.style.overflow=''; }
function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById('signinEmail').value;
  const pass = document.getElementById('signinPass').value;
  if (!email || !pass) { showToast('Please fill all fields'); return; }
  closeSignIn();
  document.getElementById('accountBtn').innerHTML = '<span>Hello, User</span><strong>Account &amp; Lists <i class="fa fa-caret-down" style="font-size:11px;"></i></strong>';
  showToast('Welcome back! You are signed in.', 'success');
}

function slideHero(dir) {
  heroIdx = (heroIdx + dir + heroSlides) % heroSlides;
  document.getElementById('heroTrack').style.transform = `translateX(-${heroIdx*100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('active', i===heroIdx));
}
function goToSlide(i) {
  heroIdx = i;
  document.getElementById('heroTrack').style.transform = `translateX(-${heroIdx*100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,j) => d.classList.toggle('active', j===heroIdx));
}
setInterval(() => slideHero(1), 5000);

function doSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const bar = document.getElementById('searchResultsBar');
  if (!q) { bar.classList.remove('visible'); return; }
  const results = ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  bar.classList.add('visible');
  bar.innerHTML = results.length
    ? `Showing <strong>${results.length}</strong> result${results.length!==1?'s':''} for "<strong>${q}</strong>" — <a href="#" onclick="clearSearch();return false;">Clear</a>`
    : `No results for "<strong>${q}</strong>" — <a href="#" onclick="clearSearch();return false;">Clear</a>`;
  if (results.length) {
    document.getElementById('electronicsSection').scrollIntoView({behavior:'smooth'});
    showToast(`Found ${results.length} product${results.length!==1?'s':''} for "${q}"`, 'info');
  } else showToast(`No products found for "${q}"`);
}
function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResultsBar').classList.remove('visible');
}

function renderCarousel(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = products.map(p => `
    <div class="product-card" onclick="openProduct('${p.id}')">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}"/>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-stars">${stars(p.stars)} <span class="stars-count">(${p.reviews})</span></div>
      <div><span class="product-price">${fmt(p.price)}</span><span class="product-old">${fmt(p.old)}</span></div>
      <div class="product-discount">${discount(p.price,p.old)}</div>
      ${p.prime ? '<div class="prime-badge">prime</div>' : ''}
      <button id="atc-${p.id}" class="atc-btn" onclick="event.stopPropagation();addToCart('${p.id}')">Add to Cart</button>
    </div>`).join('');
}

let secs = 8*3600 + 42*60 + 17;
function tick() {
  secs = (secs - 1 + 86400) % 86400;
  document.getElementById('tH').textContent = String(Math.floor(secs/3600)).padStart(2,'0');
  document.getElementById('tM').textContent = String(Math.floor((secs%3600)/60)).padStart(2,'0');
  document.getElementById('tS').textContent = String(secs%60).padStart(2,'0');
}
setInterval(tick, 1000);

function checkout() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  showToast(`Order placed! Total: ${fmt(cart.reduce((s,i)=>s+i.price*i.qty,0))}`, 'success');
  cart = []; saveCart(); renderCart();
  setTimeout(closeCart, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarousel('carousel1', PRODUCTS.electronics);
  renderCarousel('carousel2', PRODUCTS.fashion);
  renderCarousel('carousel3', PRODUCTS.kitchen);
  renderCart();
  document.getElementById('searchInput').addEventListener('keypress', e => { if(e.key==='Enter') doSearch(); });
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('productModal').addEventListener('click', function(e) { if(e.target===this) closeProductModal(); });
  document.getElementById('signinModal').addEventListener('click', function(e) { if(e.target===this) closeSignIn(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape'){closeCart();closeProductModal();closeSignIn();} });
  document.querySelectorAll('.subnav a').forEach(a => a.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.subnav a').forEach(x => x.style.fontWeight='');
    this.style.fontWeight='bold';
    showToast('Browsing: '+this.textContent.trim(),'info');
  }));
  document.querySelectorAll('.cat-item').forEach(el => el.addEventListener('click', function() {
    showToast('Browsing '+this.querySelector('span:last-child').textContent,'info');
  }));
});