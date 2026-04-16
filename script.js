// ==================== DADOS REAIS DO BPCHOQUE ====================
// Fonte: Dados históricos oficiais do Batalhão de Polícia de Choque [citation:2]

const timelineData = [
  { year: "1977", title: "Primeiras Companhias Especializadas", description: "Formação das primeiras companhias especializadas em policiamento de choque, iniciando a tradição da unidade." },
  { year: "1982", title: "Criação da Companhia de Polícia de Choque", description: "Fundação oficial da Companhia de Polícia de Choque, consolidando a atuação especializada." },
  { year: "1987", title: "Criação da COE", description: "Estabelecimento da Companhia de Operações Especiais (COE), ampliando as capacidades táticas da unidade." },
  { year: "2018", title: "Fundação do BPChoque", description: "Criação oficial do Batalhão de Polícia de Choque como unidade de excelência e pronto emprego." },
  { year: "2023", title: "Criação da Medalha do Mérito", description: "Instituição oficial da Medalha do Mérito do Batalhão de Choque em setembro de 2023." },
  { year: "2024", title: "Primeira Outorga da Medalha", description: "Primeira cerimônia de entrega da Medalha do Mérito do BPChoque em junho de 2024." },
  { year: "2025", title: "7º Aniversário do BPChoque", description: "Celebração de 7 anos do Batalhão com homenagem a 151 policiais militares." }
];

const actuationCards = [
  { icon: "fas fa-shield-haltered", title: "Controle de Distúrbios Civis", desc: "Atuação especializada em manifestações, eventos de grande porte e crises de ordem pública." },
  { icon: "fas fa-skull", title: "Operações de Alta Complexidade", desc: "Missões de alto risco e enfrentamento a situações críticas com preparo tático avançado." },
  { icon: "fas fa-dog", title: "Operações com Cães", desc: "Emprego de cães policiais em missões de busca, resgate e controle de distúrbios." },
  { icon: "fas fa-handcuffs", title: "Reintegrações de Posse", desc: "Atuação em ações de reintegração de posse com segurança e mediação de conflitos." },
  { icon: "fas fa-tree", title: "Missões Ambientais", desc: "Operações especiais em áreas de preservação e combate a crimes ambientais." },
  { icon: "fas fa-truck-fast", title: "Apoio Tático", desc: "Suporte especializado a outras unidades em situações de alta complexidade." }
];

const carouselStats = [
  { value: "47+", label: "Anos de História", detail: "Desde as primeiras companhias em 1977" },
  { value: "151", label: "Policiais Homenageados", detail: "Com a Medalha do Mérito do BPChoque" },
  { value: "7 anos", label: "de Criação do Batalhão", detail: "Fundado oficialmente em 2018" },
  { value: "100%", label: "Preparo Tático", detail: "Treinamento especializado contínuo" }
];

const galleryData = [
  { title: "Cerimônia de Aniversário do BPChoque", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque1.jpg", credit: "Arquivo BPChoque" },
  { title: "Entrega da Medalha do Mérito", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque2.jpg", credit: "Comunicação Social PM" },
  { title: "Treinamento Tático Avançado", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque3.jpg", credit: "Seção de Instrução" },
  { title: "Operação de Controle de Distúrbios", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque4.jpg", credit: "COC - Centro de Operações" },
  { title: "Equipamentos Especializados", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque5.jpg", credit: "Arsenal do BPChoque" },
  { title: "Instrução de Choque", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque6.jpg", credit: "CIEsp - Centro de Instrução" }
];

// ==================== RENDERIZAÇÕES ====================
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  container.innerHTML = timelineData.map((item, idx) => `
    <div class="timeline-item" data-delay="${idx * 100}">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">${item.title}</div>
      <p>${item.description}</p>
    </div>
  `).join('');
  
  // Scroll reveal for timeline
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

function renderCards() {
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  
  container.innerHTML = actuationCards.map(card => `
    <div class="card-modern">
      <div class="card-icon"><i class="${card.icon}"></i></div>
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `).join('');
}

let currentSlide = 0;
function renderCarousel() {
  const container = document.getElementById('carouselInner');
  if (!container) return;
  
  container.innerHTML = carouselStats.map(stat => `
    <div class="carousel-slide">
      <h2>${stat.value}</h2>
      <p>${stat.label}</p>
      <small>${stat.detail}</small>
    </div>
  `).join('');
}

function updateCarousel() {
  const inner = document.getElementById('carouselInner');
  if (inner) {
    inner.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselStats.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselStats.length) % carouselStats.length;
  updateCarousel();
}

function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;
  
  container.innerHTML = galleryData.map(img => `
    <div class="gallery-item">
      <div class="gallery-image" style="background-image: url('${img.image}'); background-size: cover; background-position: center;"></div>
      <div class="gallery-caption">
        <strong>${img.title}</strong><br>
        <small>${img.credit}</small>
      </div>
    </div>
  `).join('');
}

// ==================== ACESSIBILIDADE ====================
let fontSize = 16;
function increaseFont() {
  if (fontSize < 22) {
    fontSize += 1;
    document.documentElement.style.fontSize = fontSize + 'px';
  }
}

function decreaseFont() {
  if (fontSize > 12) {
    fontSize -= 1;
    document.documentElement.style.fontSize = fontSize + 'px';
  }
}

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
  localStorage.setItem('bpchoque-contrast', document.body.classList.contains('high-contrast'));
}

// ==================== CUSTOM CURSOR ====================
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !follower) return;
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    follower.style.transform = `translate(${e.clientX - 17}px, ${e.clientY - 17}px)`;
  });
  
  document.querySelectorAll('a, button, .card-modern, .timeline-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = `scale(1.5)`;
      follower.style.transform = `scale(1.5)`;
      follower.style.opacity = '0.7';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = `scale(1)`;
      follower.style.transform = `scale(1)`;
      follower.style.opacity = '0.4';
    });
  });
}

// ========== HEADER SCROLL EFFECT ==========
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

// ========== SCROLL REVEAL ANIMATIONS ==========
function initScrollReveal() {
  const elements = document.querySelectorAll('.card-modern, .timeline-item, .gallery-item, .fact');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// ========== ACTIVE NAV LINK ==========
function initActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ========== PRELOADER ==========
function initPreloader() {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    const app = document.getElementById('app');
    if (preloader && app) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        app.classList.remove('hidden-init');
      }, 800);
    }
  }, 2000);
}

// ========== INITIALIZE ALL ==========
window.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderCards();
  renderCarousel();
  renderGallery();
  initCustomCursor();
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initActiveNav();
  initPreloader();
  
  const fontPlus = document.getElementById('fontPlus');
  const fontMinus = document.getElementById('fontMinus');
  const contrastToggle = document.getElementById('contrastToggle');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  
  if (fontPlus) fontPlus.addEventListener('click', increaseFont);
  if (fontMinus) fontMinus.addEventListener('click', decreaseFont);
  if (contrastToggle) contrastToggle.addEventListener('click', toggleContrast);
  if (carouselPrev) carouselPrev.addEventListener('click', prevSlide);
  if (carouselNext) carouselNext.addEventListener('click', nextSlide);
  
  if (localStorage.getItem('bpchoque-contrast') === 'true') {
    document.body.classList.add('high-contrast');
  }
  
  // Auto-rotate carousel every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
});
