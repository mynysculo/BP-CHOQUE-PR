const timelineData = [
  { year: "1977", title: "Primeiras Companhias Especializadas", description: "Formação das primeiras companhias especializadas em policiamento de choque, iniciando a tradição da unidade. Nascia o embrião do que viria a ser o Batalhão de Polícia de Choque." },
  { year: "1982", title: "Criação da Companhia de Polícia de Choque", description: "Fundação oficial da Companhia de Polícia de Choque, consolidando a atuação especializada no estado. Primeira unidade do gênero na região Sul do Brasil." },
  { year: "1987", title: "Criação da COE", description: "Estabelecimento da Companhia de Operações Especiais (COE), ampliando as capacidades táticas da unidade para operações de alto risco." },
  { year: "2004", title: "Missão de Paz no Haiti - MINUSTAH", description: "Policiais do BPChoque integram a Missão das Nações Unidas para a Estabilização do Haiti, recebendo elogios internacionais por bravura e profissionalismo." },
  { year: "2018", title: "Fundação do BPChoque", description: "Criação oficial do Batalhão de Polícia de Choque como unidade de excelência e pronto emprego, reunindo todas as companhias especializadas." },
  { year: "2023", title: "Criação da Medalha do Mérito", description: "Instituição oficial da Medalha do Mérito do Batalhão de Choque em setembro de 2023, a mais alta honraria concedida pela unidade." },
  { year: "2024", title: "Primeira Outorga da Medalha", description: "Primeira cerimônia de entrega da Medalha do Mérito do BPChoque em junho de 2024, homenageando policiais que se destacaram por atos de bravura." },
  { year: "2025", title: "7º Aniversário do BPChoque", description: "Celebração de 7 anos do Batalhão com homenagem solene a 151 policiais militares, consolidando a unidade como referência nacional." }
];

const actuationCards = [
  { icon: "fas fa-shield-haltered", icon2: "fas fa-shield-alt", title: "Controle de Distúrbios Civis", desc: "Atuação especializada em manifestações, eventos de grande porte e crises de ordem pública, utilizando técnicas avançadas e equipamentos não-letais." },
  { icon: "fas fa-skull", icon2: "fas fa-crosshairs", title: "Operações de Alta Complexidade", desc: "Missões de alto risco, enfrentamento a situações críticas e patrulhamento tático em áreas de vulnerabilidade com preparo incomparável." },
  { icon: "fas fa-dog", icon2: "fas fa-paw", title: "Operações com Cães", desc: "Emprego da Cia de Operações com Cães (COC) em missões de busca, resgate, faro e controle de distúrbios, com cães especialmente treinados." },
  { icon: "fas fa-handcuffs", icon2: "fas fa-gavel", title: "Reintegrações de Posse", desc: "Atuação em ações de reintegração de posse com segurança jurídica, mediação de conflitos e proteção de todas as partes envolvidas." },
  { icon: "fas fa-tree", icon2: "fas fa-leaf", title: "Missões Ambientais", desc: "Operações especiais em áreas de preservação ambiental, combate a crimes ambientais e proteção de reservas naturais do Paraná." },
  { icon: "fas fa-truck-fast", icon2: "fas fa-truck", title: "Apoio Tático Móvel", desc: "Suporte especializado a outras unidades policiais em situações de alta complexidade, com deslocamento rápido e resposta imediata." },
  { icon: "fas fa-chalkboard-user", icon2: "fas fa-brain", title: "Centro de Instrução", desc: "CIEsp - Centro de Instrução Especializada, referência nacional na formação de tropas de elite e capacitação contínua." },
  { icon: "fas fa-hand-peace", icon2: "fas fa-handshake", title: "Mediação de Conflitos", desc: "Técnicas avançadas de negociação e mediação em situações de crise, preservando vidas e solucionando conflitos de forma pacífica." }
];

const carouselStats = [
  { value: "47+", label: "Anos de História Ininterrupta", detail: "Desde as primeiras companhias em 1977 até os dias atuais" },
  { value: "151", label: "Policiais Homenageados", detail: "Com a Medalha do Mérito do Batalhão de Choque" },
  { value: "7 anos", label: "de Criação Oficial do Batalhão", detail: "Fundado oficialmente em 2018, consolidando a unidade" },
  { value: "100%", label: "Preparo Tático", detail: "Treinamento especializado contínuo e atualização constante" },
  { value: "500+", label: "Operações Anuais", detail: "Média de atendimentos e missões realizadas por ano" },
  { value: "24h", label: "Prontidão Permanente", detail: "Unidade em alerta 24 horas por dia, 7 dias por semana" }
];

const galleryData = [
  { title: "Cerimônia de Aniversário do BPChoque", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque1.jpg", credit: "Arquivo Histórico do BPChoque" },
  { title: "Entrega da Medalha do Mérito", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque2.jpg", credit: "Comunicação Social PMPR" },
  { title: "Treinamento Tático Avançado", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque3.jpg", credit: "Seção de Instrução e Treinamento" },
  { title: "Operação de Controle de Distúrbios", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque4.jpg", credit: "COC - Centro de Operações" },
  { title: "Equipamentos Especializados de Última Geração", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque5.jpg", credit: "Arsenal do Batalhão de Choque" },
  { title: "Instrução de Choque - Formação de Elite", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque6.jpg", credit: "CIEsp - Centro de Instrução Especializada" }
];

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  container.innerHTML = timelineData.map((item, idx) => `
    <div class="timeline-item" data-delay="${idx * 100}">
      <div class="timeline-year"><i class="fas fa-calendar-alt"></i> ${item.year}</div>
      <div class="timeline-title"><i class="fas fa-flag-checkered"></i> ${item.title}</div>
      <p><i class="fas fa-quote-left"></i> ${item.description} <i class="fas fa-quote-right"></i></p>
    </div>
  `).join('');
  
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
      <div class="card-icon">
        <i class="${card.icon}"></i>
        <i class="${card.icon2}"></i>
      </div>
      <h3><i class="fas fa-bolt"></i> ${card.title} <i class="fas fa-bolt"></i></h3>
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
      <h2><i class="fas fa-chart-line"></i> ${stat.value} <i class="fas fa-chart-line"></i></h2>
      <p><i class="fas fa-info-circle"></i> ${stat.label}</p>
      <small><i class="fas fa-clock"></i> ${stat.detail}</small>
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
        <strong><i class="fas fa-camera"></i> ${img.title}</strong><br>
        <small><i class="fas fa-database"></i> ${img.credit}</small>
      </div>
    </div>
  `).join('');
}

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

function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !follower) return;
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    follower.style.transform = `translate(${e.clientX - 17}px, ${e.clientY - 17}px)`;
  });
  
  document.querySelectorAll('a, button, .card-modern, .timeline-item, .gallery-item, .fact').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = `scale(1.5)`;
      follower.style.transform = `scale(1.5)`;
      follower.style.opacity = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = `scale(1)`;
      follower.style.transform = `scale(1)`;
      follower.style.opacity = '0.3';
    });
  });
}

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

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.card-modern, .timeline-item, .gallery-item, .fact, .historia-texto p');
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
  }, 2200);
}

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
  
  setInterval(() => {
    nextSlide();
  }, 5000);
});
