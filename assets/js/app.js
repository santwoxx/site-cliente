/* =========================================================
   FERRAGENS SANTA RITA — HOME CENTER & CONSTRUÇÃO
   app.js — Lógica Dinâmica, Vitrine, Filtros, Busca & Orçamento
   ========================================================= */

const CONFIG = {
  // Telefone WhatsApp (DDI + DDD + Número sem espaços)
  whatsapp: '5500000000000',
  // Formato visual
  telefoneVisivel: '(00) 00000-0000',
  // Endereço físico
  endereco: 'Rua das Ferragens, 500 — Centro Industrial<br>Sua Cidade / UF',
  // Nome institucional
  loja: 'Ferragens Santa Rita Home Center',
  // Horário de funcionamento
  horario: 'Seg a Sex: 07h30 às 18h | Sábado: 07h30 às 13h'
};

/* =========================================================
   CATÁLOGO EXPANDIDO DE PRODUTOS
   ========================================================= */
const PRODUTOS = [
  {
    id: 'porta-lisa-interna',
    nome: 'Porta de Madeira Lisa Interna',
    marca: 'Santa Rita Madeiras',
    spec: 'Folha de madeira lisa padrão eucalipto curado, ideal para quartos e banheiros. Medidas 2,10 x 0,70 / 0,80m.',
    preco: 119.00,
    precoAntigo: 149.90,
    apartir: true,
    unidade: 'und',
    cats: ['Ferragens', 'Portas & Telhas'],
    icone: 'ic-door',
    selo: '-20% OFF',
    tipoSelo: 'sale',
    estrelas: 4.9,
    avaliacoes: 38,
    parcelas: 3
  },
  {
    id: 'porta-aluminio-branca',
    nome: 'Porta de Alumínio Veneziana Branca 2,10x0,80m',
    marca: 'Alumilux',
    spec: 'Perfil em alumínio com pintura eletrostática branca, fechadura instalada e alta resistência à corrosão.',
    preco: 595.00,
    precoAntigo: 689.00,
    apartir: false,
    unidade: 'und',
    cats: ['Ferragens', 'Portas & Telhas'],
    icone: 'ic-door',
    selo: 'DESTAQUE',
    tipoSelo: 'tag',
    estrelas: 5.0,
    avaliacoes: 24,
    parcelas: 6
  },
  {
    id: 'escada-aluminio-7',
    nome: 'Escada de Alumínio Extensível 7 Degraus Profissional',
    marca: 'Alumaster',
    spec: 'Estrutura reforçada de liga especial, sapatas antiderrapantes e trava de segurança para até 150 kg.',
    preco: 279.00,
    precoAntigo: 329.00,
    apartir: false,
    unidade: 'und',
    cats: ['Ferramentas'],
    icone: 'ic-ladder',
    selo: 'MAIS VENDIDO',
    tipoSelo: 'hot',
    estrelas: 4.9,
    avaliacoes: 56,
    parcelas: 4
  },
  {
    id: 'bomba-periferica-1-2hp',
    nome: 'Bomba de Água Periférica 1/2 HP Bivolt',
    marca: 'Ferrari Motores',
    spec: 'Ideal para transferência e elevação de água em caixas, poços rasos e pressurização de redes residenciais.',
    preco: 199.00,
    precoAntigo: 239.00,
    apartir: false,
    unidade: 'und',
    cats: ['Hidráulicos', 'Elétricos'],
    icone: 'ic-pump',
    selo: 'OFERTA DO DIA',
    tipoSelo: 'sale',
    estrelas: 4.8,
    avaliacoes: 42,
    parcelas: 3
  },
  {
    id: 'ducha-lorenzetti-topjet',
    nome: 'Ducha Eletrônica Lorenzetti Top Jet Turbo',
    marca: 'Lorenzetti',
    spec: 'Controle gradual de temperatura tipo haste, pressurizador embutido e jato multidirecional largo.',
    preco: 149.00,
    precoAntigo: 179.90,
    apartir: false,
    unidade: 'und',
    cats: ['Elétricos', 'Hidráulicos'],
    icone: 'ic-shower',
    selo: '-17% OFF',
    tipoSelo: 'sale',
    estrelas: 4.9,
    avaliacoes: 78,
    parcelas: 3
  },
  {
    id: 'ducha-zagonel-ss',
    nome: 'Ducha Zagonel Sublime 4 Temperaturas',
    marca: 'Zagonel',
    spec: 'Excelente pressão com troca fácil de resistência. Economia de água e energia garantida.',
    preco: 59.00,
    precoAntigo: 74.90,
    apartir: false,
    unidade: 'und',
    cats: ['Elétricos', 'Hidráulicos'],
    icone: 'ic-shower',
    selo: 'IMPERDÍVEL',
    tipoSelo: 'hot',
    estrelas: 4.7,
    avaliacoes: 95,
    parcelas: 2
  },
  {
    id: 'vaso-luzarte-acoplado',
    nome: 'Kit Vaso Sanitário com Caixa Acoplada Luzarte',
    marca: 'Luzarte',
    spec: 'Kit completo: bacia em cerâmica branca, caixa com acionamento duplo 3/6L, assento e kit fixação.',
    preco: 445.00,
    precoAntigo: 519.00,
    apartir: false,
    unidade: 'kit',
    cats: ['Hidráulicos'],
    icone: 'ic-toilet',
    selo: 'ECONOMIA',
    tipoSelo: 'tag',
    estrelas: 4.9,
    avaliacoes: 31,
    parcelas: 5
  },
  {
    id: 'folha-eternit-telha',
    nome: 'Telha de Fibrocimento Ondulada 2,44 x 0,50m',
    marca: 'Eternit',
    spec: 'Alta durabilidade e leveza para coberturas residenciais, galpões e garagens. Instalação rápida.',
    preco: 29.00,
    precoAntigo: 36.50,
    apartir: false,
    unidade: 'und',
    cats: ['Ferragens', 'Portas & Telhas'],
    icone: 'ic-sheet',
    selo: 'PREÇO BAIXO',
    tipoSelo: 'sale',
    estrelas: 4.8,
    avaliacoes: 64,
    parcelas: 1
  },
  {
    id: 'lampada-led-glight',
    nome: 'Lâmpada LED Bulbo 9W / 12W / 15W Bivolt',
    marca: 'G-Light',
    spec: 'Economia de até 85% de energia elétrica. Luz branca fria 6500K ou quente 3000K.',
    preco: 3.99,
    precoAntigo: 6.99,
    apartir: true,
    unidade: 'und',
    cats: ['Elétricos', 'Iluminação'],
    icone: 'ic-bulb',
    selo: 'SUPER OFERTA',
    tipoSelo: 'hot',
    estrelas: 4.9,
    avaliacoes: 112,
    parcelas: 1
  },
  {
    id: 'tinta-coralar-18l',
    nome: 'Tinta Acrílica Fosca Coralar Branca 18L',
    marca: 'Coral',
    spec: 'Rendimento superior, fácil aplicação e acabamento fosco suave para paredes internas.',
    preco: 188.00,
    precoAntigo: 219.00,
    apartir: false,
    unidade: 'lata',
    cats: ['Tintas'],
    icone: 'ic-paint',
    selo: 'LÍDER DE VENDAS',
    tipoSelo: 'hot',
    estrelas: 5.0,
    avaliacoes: 87,
    parcelas: 3
  },
  {
    id: 'tinta-hydrolux-15l',
    nome: 'Tinta Látex Econômica Hydrolux 15L',
    marca: 'Hydrolux',
    spec: 'Tinta antimofo à base de água, secagem rápida e cobertura balanceada para tetos e paredes.',
    preco: 89.00,
    precoAntigo: 109.90,
    apartir: false,
    unidade: 'lata',
    cats: ['Tintas'],
    icone: 'ic-paint',
    selo: '-19% OFF',
    tipoSelo: 'sale',
    estrelas: 4.6,
    avaliacoes: 50,
    parcelas: 2
  },
  {
    id: 'furadeira-impacto-vonder',
    nome: 'Furadeira de Impacto 1/2 Pol 650W com Maleta',
    marca: 'Vonder',
    spec: 'Função impacto e rotação, velocidade variável e reversível. Acompanha chave de mandril e kit de brocas.',
    preco: 219.00,
    precoAntigo: 269.00,
    apartir: false,
    unidade: 'und',
    cats: ['Ferramentas'],
    icone: 'ic-wrench',
    selo: 'NOVIDADE',
    tipoSelo: 'tag',
    estrelas: 4.9,
    avaliacoes: 29,
    parcelas: 4
  }
];

/* =========================================================
   UTILITÁRIOS
   ========================================================= */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const semAcento = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const produtoPorId = id => PRODUTOS.find(p => p.id === id);

/* =========================================================
   ESTADO GLOBAL
   ========================================================= */
let filtroAtual = 'all';
let buscaAtual = '';
let ordenacaoAtual = 'destaques';
let categoriaSelectAtual = 'all';
let slideAtual = 0;
let slideTimer = null;
let quickViewItem = null;
let quickViewQty = 1;
let produtosRenderedOnce = false;
let cartCountAnterior = 0;
const prefereMovimentoReduzido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Orçamento no LocalStorage */
const CHAVE_STORAGE = 'fsr_homecenter_cart';
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
} catch (e) {
  cart = [];
}

function salvarCart() {
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(cart));
  } catch (e) {}
}

function totalItens() {
  return cart.reduce((acc, i) => acc + i.qty, 0);
}
// Evita que o badge "pule" já na primeira renderização quando o cliente
// volta ao site com itens salvos de uma visita anterior.
cartCountAnterior = totalItens();

function totalValor() {
  return cart.reduce((acc, i) => {
    const p = produtoPorId(i.id);
    return acc + (p ? p.preco * i.qty : 0);
  }, 0);
}

/* =========================================================
   INICIALIZAÇÃO DE DADOS INSTITUCIONAIS
   ========================================================= */
function initDadosLoja() {
  $$('[data-phone-display]').forEach(el => { el.textContent = CONFIG.telefoneVisivel; });
  $$('[data-address]').forEach(el => { el.innerHTML = CONFIG.endereco; });
  $$('[data-hours]').forEach(el => { el.textContent = CONFIG.horario; });
  $$('[data-wa]').forEach(el => {
    el.href = waLink(el.dataset.wa);
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* =========================================================
   NOTIFICAÇÃO TOAST
   ========================================================= */
let toastTimeout;
function toast(msg, icon = '✓') {
  const t = $('#toast');
  if (!t) return;
  t.innerHTML = `<span>${icon}</span> ${msg}`;
  t.classList.add('is-on');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    t.classList.remove('is-on');
  }, 2800);
}

/* =========================================================
   RENDERIZAÇÃO DE CARDS DE PRODUTOS
   ========================================================= */
function cardHTML(p) {
  const precoFormatado = brl(p.preco).replace('R$', '').trim();
  const precoOldFormatado = p.precoAntigo ? brl(p.precoAntigo) : null;
  const badgeClass = p.tipoSelo === 'sale' ? 'prod-badge--sale' : (p.tipoSelo === 'hot' ? 'prod-badge--hot' : 'prod-badge--tag');
  const badgeHtml = p.selo ? `<span class="prod-badge ${badgeClass}">${p.selo}</span>` : '';
  const isAdded = cart.some(i => i.id === p.id);
  
  const parcelaVal = (p.preco / (p.parcelas || 1));
  const parcelasTexto = (p.parcelas && p.parcelas > 1) 
    ? `<span class="prod-card__installments">ou ${p.parcelas}x de ${brl(parcelaVal)} sem juros</span>` 
    : `<span class="prod-card__installments" style="color: #15803D;">à vista no PIX com entrega rápida</span>`;

  return `
  <article class="prod-card ${isAdded ? 'is-added' : ''}" data-id="${p.id}">
    <div class="prod-card__badge-wrap">
      ${badgeHtml}
    </div>
    
    <button class="prod-card__quick-btn" data-quick="${p.id}" title="Visualização Rápida" aria-label="Visualização rápida de ${p.nome}">
      <svg class="ic"><use href="#ic-search"/></svg>
    </button>
    
    <div class="prod-card__media" data-quick="${p.id}">
      <svg class="prod-card__icon"><use href="#${p.icone}"/></svg>
    </div>
    
    <div class="prod-card__body">
      <div class="prod-card__category">${p.marca} • ${p.cats[0]}</div>
      <h3 class="prod-card__name" data-quick="${p.id}" title="${p.nome}">${p.nome}</h3>
      
      <div class="prod-card__rating">
        ★★★★★ <span>${p.estrelas.toFixed(1)} (${p.avaliacoes})</span>
      </div>
      
      <div class="prod-card__price-box">
        ${p.apartir ? '<span class="prod-card__from">a partir de</span>' : (precoOldFormatado ? `<span class="prod-card__old-price">${precoOldFormatado}</span>` : '')}
        <div class="prod-card__price">
          <sup>R$</sup>${precoFormatado}
          <span class="prod-card__unit">/ ${p.unidade}</span>
        </div>
        ${parcelasTexto}
      </div>
      
      <div class="prod-card__actions">
        <button class="prod-card__add-btn" data-add="${p.id}">
          <svg class="ic"><use href="#ic-cart"/></svg>
          <span>${isAdded ? 'No Orçamento' : 'Adicionar'}</span>
        </button>
        <a class="prod-card__wa-btn" 
           href="${waLink(`Olá, ${CONFIG.loja}! Gostaria de tirar dúvidas sobre o produto: *${p.nome}* (${brl(p.preco)}). Está disponível?`)}" 
           target="_blank" rel="noopener noreferrer" 
           title="Perguntar no WhatsApp" aria-label="Perguntar no WhatsApp">
          <svg class="ic"><use href="#ic-whats"/></svg>
        </a>
      </div>
    </div>
  </article>`;
}

function renderProdutos() {
  const grid = $('#productsGrid');
  const empty = $('#emptyState');
  const countEl = $('#productsCount');
  if (!grid) return;

  const termo = semAcento(buscaAtual.trim());
  
  let lista = PRODUTOS.filter(p => {
    // Filtro por departamento chips
    const okChip = filtroAtual === 'all' || p.cats.some(c => semAcento(c) === semAcento(filtroAtual));
    // Filtro por dropdown da busca
    const okSelect = categoriaSelectAtual === 'all' || p.cats.some(c => semAcento(c) === semAcento(categoriaSelectAtual));
    // Filtro por busca textual
    const okBusca = !termo || semAcento(`${p.nome} ${p.spec} ${p.marca} ${p.cats.join(' ')}`).includes(termo);
    return okChip && okSelect && okBusca;
  });

  // Ordenação
  if (ordenacaoAtual === 'menor-preco') {
    lista.sort((a, b) => a.preco - b.preco);
  } else if (ordenacaoAtual === 'maior-preco') {
    lista.sort((a, b) => b.preco - a.preco);
  } else if (ordenacaoAtual === 'nome') {
    lista.sort((a, b) => a.nome.localeCompare(b.nome));
  } else {
    // Destaques / Avaliações
    lista.sort((a, b) => b.avaliacoes - a.avaliacoes);
  }

  if (countEl) {
    countEl.textContent = `Mostrando ${lista.length} de ${PRODUTOS.length} ofertas`;
  }

  if (lista.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.hidden = false;
  } else {
    grid.innerHTML = lista.map(cardHTML).join('');
    if (empty) empty.hidden = true;
  }

  // Reanima a cascata de entrada dos cards a cada nova filtragem/ordenação
  // (a primeira renderização fica a cargo do IntersectionObserver, que revela
  // o grid apenas quando ele entra na viewport).
  if (produtosRenderedOnce && !prefereMovimentoReduzido) {
    grid.classList.remove('is-in');
    void grid.offsetWidth; // força reflow para reiniciar a transição CSS
    requestAnimationFrame(() => grid.classList.add('is-in'));
  }
  produtosRenderedOnce = true;
}

/* =========================================================
   CONTROLE DE FILTROS, BUSCA & ORDENAÇÃO
   ========================================================= */
function aplicarFiltro(cat) {
  filtroAtual = cat;
  $$('.filter-chips .chip').forEach(c => {
    c.classList.toggle('is-on', semAcento(c.dataset.filter) === semAcento(cat));
  });
  $$('.dept-nav__link').forEach(l => {
    l.classList.toggle('is-active', semAcento(l.dataset.jump || '') === semAcento(cat));
  });
  renderProdutos();
}

function initEventosVitrine() {
  // Filtro Chips
  const filterChips = $('#filterChips');
  if (filterChips) {
    filterChips.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (chip) aplicarFiltro(chip.dataset.filter);
    });
  }

  // Ordenação
  const sortSelect = $('#sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      ordenacaoAtual = e.target.value;
      renderProdutos();
    });
  }

  // Input de Busca
  const searchInput = $('#searchInput');
  const searchClear = $('#searchClear');
  const searchSelect = $('#searchCategory');

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      buscaAtual = e.target.value;
      if (searchClear) searchClear.classList.toggle('is-active', buscaAtual.length > 0);
      renderProdutos();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      buscaAtual = '';
      if (searchInput) searchInput.value = '';
      searchClear.classList.remove('is-active');
      renderProdutos();
    });
  }

  if (searchSelect) {
    searchSelect.addEventListener('change', e => {
      categoriaSelectAtual = e.target.value;
      renderProdutos();
    });
  }

  // Links de salto para categorias
  $$('[data-jump]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const targetCat = el.dataset.jump;
      aplicarFiltro(targetCat);
      const prodsSec = $('#produtos');
      if (prodsSec) prodsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      fecharMenuMobile();
    });
  });
}

/* =========================================================
   CARROUSEL PRINCIPAL (HERO SLIDER)
   ========================================================= */
function initHeroSlider() {
  const slider = $('#heroSlider');
  const track = $('#sliderTrack');
  const dots = $$('.slider-dot');
  const prevBtn = $('#sliderPrev');
  const nextBtn = $('#sliderNext');
  const totalSlides = 3;
  let pausado = false;

  function irParaSlide(index) {
    slideAtual = (index + totalSlides) % totalSlides;
    if (track) {
      track.style.transform = `translateX(-${slideAtual * 100}%)`;
    }
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === slideAtual);
    });
  }

  function reiniciarTimer() {
    clearInterval(slideTimer);
    if (prefereMovimentoReduzido) return; // usuário prefere sem autoplay
    slideTimer = setInterval(() => {
      if (!pausado && !document.hidden) irParaSlide(slideAtual + 1);
    }, 5500);
  }

  if (dots.length) {
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        irParaSlide(idx);
        reiniciarTimer();
      });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      irParaSlide(slideAtual - 1);
      reiniciarTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      irParaSlide(slideAtual + 1);
      reiniciarTimer();
    });
  }

  // Pausa o autoplay ao interagir com o slider (mouse ou teclado)
  if (slider) {
    slider.addEventListener('mouseenter', () => { pausado = true; });
    slider.addEventListener('mouseleave', () => { pausado = false; });
    slider.addEventListener('focusin', () => { pausado = true; });
    slider.addEventListener('focusout', () => { pausado = false; });
  }

  // Iniciar timer automático
  reiniciarTimer();
}

/* =========================================================
   CARRINHO / ORÇAMENTO (MINICART DRAWER)
   ========================================================= */
function addItemCart(id, qty = 1) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  salvarCart();
  atualizarDrawerCart();
  renderProdutos();
  const prod = produtoPorId(id);
  if (prod) {
    toast(`<strong>${prod.nome}</strong> adicionado ao orçamento!`, '🛒');
  }
}

function setQtyCart(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  salvarCart();
  atualizarDrawerCart();
  renderProdutos();
}

function removeItemCart(id) {
  cart = cart.filter(i => i.id !== id);
  salvarCart();
  atualizarDrawerCart();
  renderProdutos();
  toast('Item removido do orçamento');
}

function atualizarDrawerCart() {
  const count = totalItens();
  const total = totalValor();
  
  // Badges e Totais no Header
  const badges = $$('.cart-button__badge');
  badges.forEach(b => {
    b.textContent = count;
    b.hidden = count === 0;
    if (count > cartCountAnterior && !prefereMovimentoReduzido) {
      b.classList.remove('is-bump');
      void b.offsetWidth;
      b.classList.add('is-bump');
    }
  });
  cartCountAnterior = count;

  const totalHeader = $('#cartTotalHeader');
  if (totalHeader) totalHeader.textContent = brl(total);

  const drawerTotal = $('#drawerTotal');
  if (drawerTotal) drawerTotal.textContent = brl(total);

  const drawerBody = $('#drawerBody');
  if (!drawerBody) return;

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty__icon">🛒</div>
        <h4>Seu orçamento está vazio</h4>
        <p>Navegue pelas ofertas da Ferragens Santa Rita, adicione os materiais que precisa e envie a lista pronta no WhatsApp com 1 clique.</p>
        <button class="btn btn--primary btn--sm" data-explore-products>Explorar Ofertas</button>
      </div>`;
  } else {
    drawerBody.innerHTML = cart.map(i => {
      const p = produtoPorId(i.id);
      if (!p) return '';
      const subtotal = p.preco * i.qty;
      return `
      <div class="drawer-item" data-id="${p.id}">
        <div class="drawer-item__img">
          <svg class="ic" style="width:28px;height:28px;"><use href="#${p.icone}"/></svg>
        </div>
        <div class="drawer-item__info">
          <div class="drawer-item__name">${p.nome}</div>
          <div class="drawer-item__price">${brl(p.preco)} un. (${brl(subtotal)})</div>
          <div class="drawer-item__controls">
            <div class="drawer-item__qty">
              <button data-cart-qty="-1" data-id="${p.id}" aria-label="Diminuir quantidade">−</button>
              <span>${i.qty}</span>
              <button data-cart-qty="1" data-id="${p.id}" aria-label="Aumentar quantidade">+</button>
            </div>
            <button class="drawer-item__del" data-cart-del="${p.id}" aria-label="Remover item">
              <svg class="ic"><use href="#ic-close"/></svg>
            </button>
          </div>
        </div>
      </div>`;
    }).join('');
  }
}

function abrirDrawer() {
  const drawer = $('#cartDrawer');
  const backdrop = $('#drawerBackdrop');
  if (drawer) drawer.classList.add('is-open');
  if (backdrop) backdrop.classList.add('is-open');
  document.body.classList.add('is-locked');
}

function fecharDrawer() {
  const drawer = $('#cartDrawer');
  const backdrop = $('#drawerBackdrop');
  if (drawer) drawer.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-open');
  document.body.classList.remove('is-locked');
}

function enviarOrcamentoWhatsApp() {
  if (cart.length === 0) {
    toast('Adicione pelo menos um item ao orçamento!', '⚠️');
    return;
  }

  const itensTexto = cart.map(i => {
    const p = produtoPorId(i.id);
    const subtotal = p ? brl(p.preco * i.qty) : '';
    return `• ${i.qty}x ${p ? p.nome : i.id} (${brl(p ? p.preco : 0)} un) = ${subtotal}`;
  }).join('\n');

  const mensagem = 
    `*NOVO PEDIDO DE ORÇAMENTO — ${CONFIG.loja.toUpperCase()}*\n\n` +
    `Olá! Montei uma lista de materiais pelo site e gostaria de confirmar valores, disponibilidade e entrega na minha obra:\n\n` +
    `${itensTexto}\n\n` +
    `*Total Estimado:* ${brl(totalValor())}\n\n` +
    `Podem me passar o prazo de entrega e formas de pagamento?`;

  window.open(waLink(mensagem), '_blank', 'noopener,noreferrer');
}

/* =========================================================
   MODAL QUICK VIEW (VISUALIZAÇÃO RÁPIDA)
   ========================================================= */
function abrirQuickView(id) {
  const p = produtoPorId(id);
  if (!p) return;
  quickViewItem = p;
  quickViewQty = 1;

  const modal = $('#quickModal');
  const media = $('#modalMedia');
  const cat = $('#modalCat');
  const title = $('#modalTitle');
  const price = $('#modalPrice');
  const specs = $('#modalSpecs');
  const qtyEl = $('#modalQty');

  if (media) media.innerHTML = `<svg class="ic"><use href="#${p.icone}"/></svg>`;
  if (cat) cat.textContent = `${p.marca} • ${p.cats.join(' / ')}`;
  if (title) title.textContent = p.nome;
  if (price) price.innerHTML = `<sup>R$</sup>${brl(p.preco).replace('R$', '').trim()} <span>/ ${p.unidade}</span>`;
  if (specs) specs.textContent = p.spec;
  if (qtyEl) qtyEl.textContent = quickViewQty;

  if (modal) modal.classList.add('is-open');
  document.body.classList.add('is-locked');
}

function fecharQuickView() {
  const modal = $('#quickModal');
  if (modal) modal.classList.remove('is-open');
  document.body.classList.remove('is-locked');
  quickViewItem = null;
}

/* =========================================================
   MENU MOBILE & SCROLL EVENTS
   ========================================================= */
function fecharMenuMobile() {
  const nav = $('#deptNavMenu');
  const btn = $('#mobileMenuBtn');
  if (nav) nav.classList.remove('is-mobile-open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function initMenuMobile() {
  const btn = $('#mobileMenuBtn');
  const nav = $('#deptNavMenu');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-mobile-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }
}

function initHeaderScroll() {
  const header = $('#header');
  const backToTop = $('#backToTop');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-stuck', y > 40);
    if (backToTop) backToTop.classList.toggle('is-visible', y > 400);
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* =========================================================
   FORMULÁRIO DE ORÇAMENTO EXPRESSO
   ========================================================= */
function initFormularioContato() {
  const form = $('#expressForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const tel = form.tel.value.trim();
    const msg = form.msg.value.trim();
    const erro = $('#formErr');

    if (!nome || !tel || !msg) {
      if (erro) erro.hidden = false;
      return;
    }
    if (erro) erro.hidden = true;

    const texto = 
      `*ORÇAMENTO EXPRESSO — SITE ${CONFIG.loja.toUpperCase()}*\n\n` +
      `*Nome:* ${nome}\n` +
      `*Telefone:* ${tel}\n\n` +
      `*Lista de Materiais / Dúvida:*\n${msg}`;

    window.open(waLink(texto), '_blank', 'noopener,noreferrer');
    toast('Enviando seu pedido para o WhatsApp...', '💬');
    form.reset();
  });
}

/* =========================================================
   EVENTOS GLOBAIS DE CLIQUE (DELEGAÇÃO)
   ========================================================= */
document.addEventListener('click', e => {
  // Adicionar ao carrinho
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    e.preventDefault();
    addItemCart(addBtn.dataset.add);
    return;
  }

  // Visualização Rápida
  const quickBtn = e.target.closest('[data-quick]');
  if (quickBtn) {
    e.preventDefault();
    abrirQuickView(quickBtn.dataset.quick);
    return;
  }

  // Controles do Drawer
  const cartQtyBtn = e.target.closest('[data-cart-qty]');
  if (cartQtyBtn) {
    setQtyCart(cartQtyBtn.dataset.id, Number(cartQtyBtn.dataset.cartQty));
    return;
  }

  const cartDelBtn = e.target.closest('[data-cart-del]');
  if (cartDelBtn) {
    removeItemCart(cartDelBtn.dataset.cartDel);
    return;
  }

  // Abrir / Fechar Drawer
  if (e.target.closest('#openCartBtn') || e.target.closest('#cartBtnFloat')) {
    abrirDrawer();
    return;
  }
  if (e.target.closest('#drawerClose') || e.target.closest('#drawerBackdrop')) {
    fecharDrawer();
    return;
  }

  // Botão "Explorar Ofertas" dentro do orçamento vazio
  if (e.target.closest('[data-explore-products]')) {
    fecharDrawer();
    const prodsSec = $('#produtos');
    if (prodsSec) prodsSec.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Enviar Carrinho no WhatsApp
  if (e.target.closest('#sendCartWa')) {
    enviarOrcamentoWhatsApp();
    return;
  }

  // Controles Modal Quick View
  if (e.target.closest('#modalClose') || e.target.closest('#quickModalBackdrop')) {
    fecharQuickView();
    return;
  }

  const modalQtyMinus = e.target.closest('#modalQtyMinus');
  if (modalQtyMinus) {
    if (quickViewQty > 1) {
      quickViewQty--;
      $('#modalQty').textContent = quickViewQty;
    }
    return;
  }

  const modalQtyPlus = e.target.closest('#modalQtyPlus');
  if (modalQtyPlus) {
    quickViewQty++;
    $('#modalQty').textContent = quickViewQty;
    return;
  }

  const modalAddBtn = e.target.closest('#modalAddBtn');
  if (modalAddBtn && quickViewItem) {
    addItemCart(quickViewItem.id, quickViewQty);
    fecharQuickView();
    return;
  }
});

// Tecla ESC para fechar modais
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    fecharDrawer();
    fecharQuickView();
    fecharMenuMobile();
  }
});

/* =========================================================
   OBSERVER DE ANIMAÇÃO DE ENTRADA (REVEAL)
   ========================================================= */
function initIntersectionObserver() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.reveal').forEach(el => io.observe(el));
}

/* =========================================================
   INICIALIZAÇÃO COMPLETA
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initDadosLoja();
  initHeroSlider();
  initEventosVitrine();
  renderProdutos();
  atualizarDrawerCart();
  initHeaderScroll();
  initMenuMobile();
  initFormularioContato();
  initIntersectionObserver();
});

