/* =============================================
   MAIN.JS — Arunagiri Industries Interactions
   ============================================= */

// ---- NAV: Scroll effect ----
(function () {
  const nav = document.getElementById('nav');
  const updateNav = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

// ---- NAV: Active link on scroll ----
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
})();

// ---- NAV: Mobile hamburger ----
(function () {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close when a link is clicked
  links.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
    }
  });
})();

// ---- SCROLL REVEAL ----
(function () {
  // Attach .reveal to elements we want animated
  const targets = [
    '.hero-content',
    '.hero-photo-frame',
    '.about-text',
    '.about-visual',
    '.service-card',
    '.machine-item',
    '.gym-card',
    '.product-card',
    '.contact-left',
    '.contact-right',
    '.section-header',
    '.footer-brand',
  ];

  targets.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add('reveal');
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children of the same parent slightly
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 0);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  // Add stagger to grid children
  const staggerContainers = [
    '.services-grid',
    '.gym-grid',
    '.products-grid',
    '.machinery-list',
  ];

  staggerContainers.forEach((sel) => {
    const container = document.querySelector(sel);
    if (!container) return;
    const children = container.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 60}ms`;
    });
  });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

// ---- HERO: Typewriter-style subtle entrance ----
(function () {
  const title = document.getElementById('hero-title');
  if (!title) return;
  title.style.opacity = '0';
  title.style.transform = 'translateY(20px)';

  // Stagger hero elements
  const heroEls = [
    { id: 'hero-eyebrow', delay: 0 },
    { id: 'hero-title', delay: 100 },
    { id: 'hero-desc', delay: 200 },
    { id: 'hero-cta-primary', delay: 300 },
    { id: 'hero-cta-ghost', delay: 350 },
    { id: 'hero-photo', delay: 200 },
    { id: 'scroll-indicator', delay: 600 },
  ];

  const heroStatEls = document.querySelectorAll('.stat, .stat-divider');

  heroEls.forEach(({ id, delay }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    setTimeout(() => {
      el.style.opacity = '';
      el.style.transform = '';
    }, 50);
  });

  heroStatEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${400 + i * 60}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${400 + i * 60}ms`;
    setTimeout(() => {
      el.style.opacity = '';
      el.style.transform = '';
    }, 50);
  });
})();

// ---- CONTACT FORM: Submit handler ----
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('form-submit');
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showFormStatus(form, 'error', 'Please fill in all required fields.');
      return;
    }

    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate send (replace with real endpoint)
    setTimeout(() => {
      btn.textContent = '✓ Enquiry Sent';
      btn.style.background = '#1a1a1a';
      showFormStatus(form, 'success', `Thank you, ${name}. We will be in touch shortly.`);
      setTimeout(() => {
        form.reset();
        btn.textContent = 'Send Enquiry';
        btn.disabled = false;
        btn.style.background = '';
        removeFormStatus(form);
      }, 4000);
    }, 1000);
  });

  function showFormStatus(form, type, msg) {
    removeFormStatus(form);
    const el = document.createElement('div');
    el.className = `form-status form-status--${type}`;
    el.textContent = msg;
    el.style.cssText = `
      padding: 10px 14px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      background: ${type === 'success' ? '#f6f6f4' : '#fff0f0'};
      color: ${type === 'success' ? '#1a1a1a' : '#c0392b'};
      border: 1px solid ${type === 'success' ? '#e5e5e5' : '#f5c6cb'};
    `;
    form.appendChild(el);
  }

  function removeFormStatus(form) {
    form.querySelector('.form-status')?.remove();
  }
})();

// ---- NAV ACTIVE STYLE INJECTION ----
const navActiveStyle = document.createElement('style');
navActiveStyle.textContent = `.nav-link.active { color: var(--fg) !important; font-weight: 600; }`;
document.head.appendChild(navActiveStyle);
