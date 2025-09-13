// Animation globale pour tous les éléments avec scroll reveal
class ScrollReveal {
  constructor() {
    this.elements = [];
    this.observer = null;
    this.init();
  }

  init() {
    // Configuration de l'Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          this.animateElement(element);
          this.observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observer tous les éléments à animer
    this.observeElements();
  }

  observeElements() {
    // Animation automatique pour les cartes
    const cards = document.querySelectorAll('.bg-white, .bg-cream');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.transitionDelay = `${index * 100}ms`;
      this.observer.observe(card);
    });

    // Animation pour les titres
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach((title, index) => {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      title.style.transitionDelay = `${index * 200}ms`;
      this.observer.observe(title);
    });

    // Animation pour les boutons
    const buttons = document.querySelectorAll('a[class*="button"], button');
    buttons.forEach((btn, index) => {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0.9)';
      btn.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      btn.style.transitionDelay = `${index * 150}ms`;
      this.observer.observe(btn);
    });
  }

  animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
  }
}

// Initialiser les animations après le chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  new ScrollReveal();
  
  // Animation de la navigation au scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(248, 246, 241, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
      } else {
        nav.style.background = 'rgba(248, 246, 241, 0.9)';
        nav.style.backdropFilter = 'blur(4px)';
      }
    }
  });

  // Animation de parallaxe pour les images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05) rotate(1deg)';
      img.style.transition = 'transform 0.5s ease';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  // Animation des tags au hover
  const tags = document.querySelectorAll('[class*="tag"], [class*="px-3"]');
  tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = 'translateY(-2px) scale(1.05)';
      tag.style.transition = 'transform 0.3s ease';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Animation de typing effect pour les titres
function typeWriter(element, text, speed = 100) {
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Exposer la fonction globalement
window.typeWriter = typeWriter;

// Animation de confetti pour les interactions spéciales
function createConfetti(x, y) {
  const colors = ['#DB8F75', '#A5C9E8', '#C8B5A0', '#E8D5B7'];
  
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.width = '6px';
    confetti.style.height = '6px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.pointerEvents = 'none';
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '1000';
    
    document.body.appendChild(confetti);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    const gravity = 0.5;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    
    function animate() {
      vy += gravity;
      confetti.style.left = (parseFloat(confetti.style.left) + vx) + 'px';
      confetti.style.top = (parseFloat(confetti.style.top) + vy) + 'px';
      confetti.style.opacity = parseFloat(confetti.style.opacity || 1) - 0.02;
      
      if (parseFloat(confetti.style.opacity) <= 0) {
        document.body.removeChild(confetti);
      } else {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  }
}

// Ajouter l'effet confetti aux clics sur les boutons principaux
document.addEventListener('click', (e) => {
  if (e.target.matches('[class*="primary"]') || e.target.closest('[class*="primary"]')) {
    createConfetti(e.clientX, e.clientY);
  }
});
