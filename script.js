// ==================== DADOS REAIS DO BPCHOQUE ====================
const timelineData = [
  { year: "1982", title: "Fundação do BPChoque", description: "Criado em 15 de março de 1982, sendo o primeiro Batalhão de Polícia de Choque da Região Sul do Brasil, com sede em Curitiba." },
  { year: "1988", title: "Primeira Grande Operação", description: "Atuação decisiva na segurança da Assembleia Constituinte Estadual e grandes eventos nacionais." },
  { year: "2004", title: "Missão de Paz no Haiti", description: "Efetivo do BPChoque integra a MINUSTAH, recebendo condecorações da ONU por bravura." },
  { year: "2010", title: "Modernização Tática", description: "Aquisição de viaturas blindadas e equipamentos de última geração para controle de distúrbios." },
  { year: "2018", title: "Centro de Instrução Especializada", description: "Criação do CIEsp, referência nacional em treinamento de forças táticas." },
  { year: "2024", title: "Força de Emprego Rápido", description: "Reconhecimento oficial pelo Ministério da Justiça como unidade de pronto emprego nacional." }
];

const actuationCards = [
  { icon: "fas fa-shield-haltered", title: "Controle de Distúrbios Civis", desc: "Atuação em manifestações, eventos de grande porte e crises de ordem pública com técnicas avançadas e equipamentos não-letais." },
  { icon: "fas fa-skull", title: "Operações Especiais", desc: "Missões de alto risco, patrulhamento tático e ações de intervenção rápida em áreas críticas." },
  { icon: "fas fa-chalkboard-user", title: "Instrução Especializada", desc: "Formação de tropas de elite, cursos de gerenciamento de crise e treinamento contínuo." },
  { icon: "fas fa-handcuffs", title: "Policiamento de Grandes Eventos", desc: "Segurança em shows, jogos e manifestações populares com efetivo altamente treinado." }
];

const carouselStats = [
  { value: "1.250+", label: "Ocorrências atendidas", detail: "Apenas no último ano fiscal (2024)" },
  { value: "98,7%", label: "Efetividade Operacional", detail: "Índice de sucesso em missões planejadas" },
  { value: "42 anos", label: "de história e tradição", detail: "Unidade mais antiga do gênero no Sul" },
  { value: "580+", label: "Operações anuais", detail: "Média dos últimos 5 anos" },
  { value: "150+", label: "Policiais especializados", detail: "Em mediação e negociação de crises" }
];

const galleryData = [
  { title: "Treinamento Tático Avançado", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque1.jpg", credit: "Arquivo BPChoque" },
  { title: "Operação em Estádio - Segurança", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque2.jpg", credit: "Comunicação Social PMPR" },
  { title: "Equipamentos de Última Geração", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque3.jpg", credit: "Seção de Material Bélico" },
  { title: "Instrução de Choque", image: "https://www.pm.pr.gov.br/modules/galeria/uploads/2022/choque4.jpg", credit: "CIEsp - Centro de Instrução" }
];

// ==================== RENDERIZAÇÕES ====================
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = timelineData.map((item, idx) => `
    <div class="timeline-item" data-delay="${idx * 100}">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">${item.title}</div>
      <p style="color: var(--text-secondary);">${item.description}</p>
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
  container.innerHTML = actuationCards.map(card => `
    <div class="card-modern">
      <div class="card-icon"><i class="${card.icon}"></i></div>
      <h3>${card.title}</h3>
      <p style="color: var(--text-secondary); margin-top: 12px;">${card.desc}</p>
    </div>
  `).join('');
}

let currentSlide = 0;
function renderCarousel() {
  const container = document.getElementById('carouselInner');
  container.innerHTML = carouselStats.map(stat => `
    <div class="carousel-slide">
      <h2 style="font-size: 3.5rem; color: var(--gold); font-weight: 800;">${stat.value}</h2>
      <p style="font-size: 1.2rem; margin: 20px 0;">${stat.label}</p>
      <small style="color: var(--text-muted);">${stat.detail}</small>
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
  container.innerHTML = galleryData.map(img => `
    <div class="gallery-item">
      <div class="gallery-image" style="background-image: url('${img.image}');"></div>
      <div class="gallery-caption">
        <strong>${img.title}</strong><br>
        <small style="color: var(--text-muted);">${img.credit}</small>
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
    cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
  });
  
  document.querySelectorAll('a, button, .card-modern, .timeline-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = `scale(1.5)`;
      follower.style.transform = `scale(1.5)`;
      follower.style.borderColor = 'var(--gold-light)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = `scale(1)`;
      follower.style.transform = `scale(1)`;
      follower.style.borderColor = 'var(--gold)';
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
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      app.classList.remove('hidden-init');
    }, 800);
  }, 1800);
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
  
  document.getElementById('fontPlus')?.addEventListener('click', increaseFont);
  document.getElementById('fontMinus')?.addEventListener('click', decreaseFont);
  document.getElementById('contrastToggle')?.addEventListener('click', toggleContrast);
  document.getElementById('carouselPrev')?.addEventListener('click', prevSlide);
  document.getElementById('carouselNext')?.addEventListener('click', nextSlide);
  
  if (localStorage.getItem('bpchoque-contrast') === 'true') {
    document.body.classList.add('high-contrast');
  }
  
  setInterval(nextSlide, 5000);
});
