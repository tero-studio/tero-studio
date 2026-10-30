/* =========================================================
   TERO STUDIO — shared vanilla JavaScript
   Global shell, accessible interactions, and page-specific
   modules guarded by their corresponding element selectors.
   ========================================================= */
(() => {
  'use strict';

  const page = document.body.dataset.page || 'home';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navItems = [
    { label: 'Home', href: 'index.html', page: 'home' },
    { label: 'Video Editing', href: 'video-editing.html', page: 'video' },
    { label: 'Graphic Design', href: 'graphic-design.html', page: 'graphics' },
    { label: 'Web Design', href: 'web-design.html', page: 'web' },
    { label: 'YouTube', href: 'youtube.html', page: 'youtube' },
    { label: 'Contact', href: 'contact.html', page: 'contact' }
  ];

  const whatsappSvg = `<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-5.1a8.5 8.5 0 1 1 16.4-3.2Z"/><path d="M9 9c.7 2 2 3.3 4.2 4.2l1.1-1.1 2 1c-.1 1.4-.9 2.2-2.3 2.1-3.5-.3-6.5-3.3-6.8-6.8C7.1 7 8 6.2 9.4 6.1z"/></svg>`;
  const facebookSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5h2V3.8c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V10H7v3h3v8z"/></svg>`;
  const pinterestSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-3.3 17.4c0-.7 0-1.6.2-2.4l1.2-5.1s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2-.8 3.1-.2.9.5 1.7 1.4 1.7 1.7 0 3-1.8 3-4.4 0-2.3-1.6-3.9-4-3.9-2.7 0-4.3 2-4.3 4.2 0 .8.3 1.6.7 2 .2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.2-1.2-.5-1.9-2-1.9-3.5 0-2.8 2.3-6.1 6.7-6.1 3.6 0 6.3 2.6 6.3 6 0 3.6-2.2 6.5-5.4 6.5-1.1 0-2.1-.6-2.5-1.2l-.7 2.7c-.2.9-.8 1.8-1.2 2.5A9 9 0 1 0 12 3Z"/></svg>`;
  const youtubeSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/></svg>`;
  const instagramSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg>`;

  /* Shared navbar, footer, floating contact button, modal shell. */
  function injectSiteShell() {
    const navLinks = navItems.map((item) => {
      const current = item.page === page ? ' aria-current="page"' : '';
      return `<a href="${item.href}"${current}>${item.label}</a>`;
    }).join('');

    const header = document.createElement('header');
    header.className = 'site-nav';
    header.innerHTML = `
      <div class="nav-inner">
        <a class="brand-link" href="index.html" aria-label="TERO STUDIO home">
          <img src="tero-studio-logo.png" alt="TERO STUDIO logo" width="1024" height="1024">
          <span class="brand-wordmark"><strong>TERO</strong><small>STUDIO</small></span>
        </a>
        <nav class="desktop-links" aria-label="Main navigation">${navLinks}<a class="button button-primary nav-cta" href="contact.html">Hire Us</a></nav>
        <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
      </div>`;

    const menu = document.createElement('nav');
    menu.className = 'mobile-menu';
    menu.id = 'mobile-menu';
    menu.setAttribute('aria-label', 'Mobile navigation');
    menu.setAttribute('aria-hidden', 'true');
    menu.innerHTML = `${navLinks}<a class="button button-primary mobile-hire" href="contact.html">Hire Us</a>`;

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <span class="footer-giant" aria-hidden="true">TERO STUDIO</span>
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="brand-link" href="index.html" aria-label="TERO STUDIO home"><img src="tero-studio-logo.png" alt="" width="1024" height="1024" loading="lazy" decoding="async"><span class="brand-wordmark"><strong>TERO</strong><small>STUDIO</small></span></a>
          <p>Create • Edit • Elevate<br>Video, design, web and YouTube growth, all under one creative studio.</p>
          <div class="footer-socials" aria-label="Social links">
            <a href="https://www.facebook.com/TODO" target="_blank" rel="noopener noreferrer" aria-label="Facebook (TODO: replace link)">${facebookSvg}</a>
            <a href="https://www.pinterest.com/TODO" target="_blank" rel="noopener noreferrer" aria-label="Pinterest (TODO: replace link)">${pinterestSvg}</a>
            <a href="https://www.youtube.com/@TODO" target="_blank" rel="noopener noreferrer" aria-label="YouTube (TODO: replace link)">${youtubeSvg}</a>
            <a href="https://www.instagram.com/TODO" target="_blank" rel="noopener noreferrer" aria-label="Instagram (TODO: replace link)">${instagramSvg}</a>
          </div>
        </div>
        <div class="footer-column"><h2>Explore</h2><nav class="footer-links" aria-label="Footer navigation">${navLinks}</nav></div>
        <div class="footer-column"><h2>Studio</h2><p class="micro-copy">Create • Edit • Elevate<br>Have an idea? Message us and let's bring it to life.</p></div>
        <div class="footer-column"><h2>Start here</h2><p class="micro-copy">Have a project in mind? Tell us what you're working on.</p><a class="button button-quiet" href="contact.html">Hire Us</a></div>
      </div>
      <div class="footer-bottom"><span>© <span data-current-year></span> TERO STUDIO. All rights reserved.</span><span>Made with care.</span></div>`;

    const wa = document.createElement('a');
    wa.className = 'whatsapp-float';
    wa.href = 'https://wa.me/9203258581583?text=Hello%20Tero%20Studio%2C%20I%20want%20to%20discuss%20a%20project';
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.innerHTML = `${whatsappSvg}<span class="whatsapp-tooltip">Chat with us</span>`;

    const modal = document.createElement('div');
    modal.className = 'site-modal';
    modal.id = 'site-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `<div class="modal-panel"><div class="modal-top"><h2 id="modal-title">TODO: Video title</h2><button class="modal-close" type="button" aria-label="Close video window">Close</button></div><div class="modal-player"><p>TODO: Replace this placeholder with an approved video source. No video file was supplied.</p></div><p class="micro-copy">TODO: Add video credit and description.</p></div>`;

    const lightbox = document.createElement('div');
    lightbox.className = 'site-lightbox';
    lightbox.id = 'site-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Graphic design preview');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `<div class="lightbox-panel"><div class="lightbox-art" id="lightbox-art"></div><div class="lightbox-controls"><button type="button" data-lightbox-prev>Prev</button><button type="button" class="modal-close" data-lightbox-close aria-label="Close lightbox">Close</button><button type="button" data-lightbox-next>Next</button></div></div>`;

    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to content';
    document.body.prepend(skipLink, header, menu);
    document.body.append(footer, wa, modal, lightbox);
    const year = document.querySelector('[data-current-year]');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* The full logo preloader only appears once per browser session. */
  function setupPreloader() {
    if (reducedMotion) return;
    let hasSeen = false;
    try { hasSeen = sessionStorage.getItem('tero-preloader-seen') === 'true'; } catch (error) { hasSeen = false; }
    if (!hasSeen) {
      const curtain = document.createElement('div');
      curtain.className = 'page-curtain';
      curtain.setAttribute('aria-hidden', 'true');
      curtain.innerHTML = `<div class="preload-content"><svg class="preload-ring" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35"/><path class="preload-mark" d="m32 24 22 16-22 16z"/></svg><span class="preload-word">TERO STUDIO</span><span class="preload-count">0%</span></div>`;
      document.body.append(curtain);
      try { sessionStorage.setItem('tero-preloader-seen', 'true'); } catch (error) { /* Storage can be unavailable for local files. */ }
      window.setTimeout(() => {
        const count = curtain.querySelector('.preload-count');
        if (count) count.textContent = '100%';
      }, 950);
      window.setTimeout(() => curtain.classList.add('is-gone'), 1350);
      window.setTimeout(() => curtain.remove(), 1900);
    } else {
      document.body.classList.add('page-enter');
      window.setTimeout(() => document.body.classList.remove('page-enter'), 400);
    }
  }

  /* Accessible mobile overlay, Escape key handling, and body scroll lock. */
  function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };
    toggle.addEventListener('click', () => {
      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
      menu.classList.toggle('is-open', opening);
      menu.setAttribute('aria-hidden', String(!opening));
      document.body.classList.toggle('menu-open', opening);
      if (opening) {
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus({ preventScroll: true });
      }
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        close();
        toggle.focus({ preventScroll: true });
      }
    });
  }

  /* Hide navbar while scrolling down and reveal it when scrolling back up. */
  function setupScrollNavigation() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    let lastY = window.scrollY;
    let queued = false;
    window.addEventListener('scroll', () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (currentY < 40 || currentY < lastY - 4) nav.classList.remove('nav-hidden');
        else if (currentY > lastY + 7 && currentY > 120) nav.classList.add('nav-hidden');
        lastY = currentY;
        queued = false;
      });
    }, { passive: true });
  }

  /* Same-folder HTML navigation gets a quick fade; browser history stays native. */
  function setupPageTransitions() {
    if (reducedMotion) return;
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      const rawHref = link.getAttribute('href') || '';
      if (!rawHref.endsWith('.html')) return;
      let next;
      try { next = new URL(rawHref, window.location.href); } catch (error) { return; }
      if (next.protocol !== window.location.protocol || next.pathname === window.location.pathname) return;
      event.preventDefault();
      document.body.classList.add('page-leaving');
      if (typeof document.body.animate === 'function') {
        document.body.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 280, easing: 'ease', fill: 'forwards' });
      }
      window.setTimeout(() => { window.location.href = next.href; }, 280);
    });
  }

  /* Reveal sections only when they enter the viewport. */
  function setupScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Math.min(Array.from(items).indexOf(entry.target) % 5, 4) * 65;
          entry.target.classList.add('is-animating');
          entry.target.classList.add('is-visible');
          if (typeof entry.target.animate === 'function') {
            const revealAnimation = entry.target.animate(
              [
                { opacity: 0, transform: 'translateY(18px)' },
                { opacity: 1, transform: 'translateY(0)' }
              ],
              { duration: 650, delay, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'both' }
            );
            revealAnimation.onfinish = () => {
              entry.target.classList.remove('is-animating');
              revealAnimation.cancel();
            };
          } else {
            entry.target.classList.remove('is-animating');
          }
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 5, 4) * 65}ms`;
      observer.observe(item);
    });
  }

  /* Respectively available page elements are guarded before any initialization. */
  function setupHeroTypewriter() {
    const target = document.getElementById('typewriter');
    if (!target) return;
    const text = 'Create • Edit • Design • Develop • Grow';
    if (reducedMotion) { target.textContent = text; return; }
    /* Loop: type the line, hold it, erase it, then start again. */
    const TYPE_MS = 55, ERASE_MS = 28, HOLD_FULL_MS = 1800, HOLD_EMPTY_MS = 450;
    let index = 0;
    let deleting = false;
    let waitUntil = 0;
    let lastTime = 0;
    target.textContent = '';
    const tick = (time) => {
      if (time >= waitUntil && time - lastTime >= (deleting ? ERASE_MS : TYPE_MS)) {
        lastTime = time;
        index += deleting ? -1 : 1;
        target.textContent = text.slice(0, index);
        if (!deleting && index >= text.length) { deleting = true; waitUntil = time + HOLD_FULL_MS; }
        else if (deleting && index <= 0) { deleting = false; waitUntil = time + HOLD_EMPTY_MS; }
      }
      window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  }

  /* Pointer tilt is only active for fine-pointer devices and uses RAF. */
  function setupTilt() {
    if (reducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      let frame = 0;
      let bounds = null;
      element.addEventListener('pointerenter', () => { bounds = element.getBoundingClientRect(); }, { passive: true });
      element.addEventListener('pointermove', (event) => {
        if (event.pointerType !== 'mouse' || !bounds) return;
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const x = (event.clientX - bounds.left) / bounds.width - .5;
          const y = (event.clientY - bounds.top) / bounds.height - .5;
          element.style.transform = `perspective(1000px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
        });
      }, { passive: true });
      element.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        element.style.transform = '';
        bounds = null;
      }, { passive: true });
    });
  }

  /* Hero logo parallax: sets --px / --py so rings, logo and chips drift at different depths. */
  function setupHeroParallax() {
    const visual = document.querySelector('[data-hero-parallax]');
    if (!visual || reducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    visual.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const bounds = visual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        visual.style.setProperty('--px', x.toFixed(3));
        visual.style.setProperty('--py', y.toFixed(3));
      });
    }, { passive: true });
    visual.addEventListener('pointerleave', () => {
      if (frame) cancelAnimationFrame(frame);
      visual.style.setProperty('--px', 0);
      visual.style.setProperty('--py', 0);
    }, { passive: true });
  }

  /* Numeric placeholders animate when supplied with real values. */
  function setupCounters() {
    const values = document.querySelectorAll('[data-count]');
    if (!values.length) return;
    const animate = (node) => {
      const finalValue = Number(node.dataset.count);
      if (!Number.isFinite(finalValue)) return;
      const suffix = node.dataset.suffix || '';
      const ring = node.closest('.stat-ring');
      if (ring) { ring.style.setProperty('--stat-progress', Math.max(0, Math.min(Number(ring.dataset.progress) || 0, 100))); ring.classList.add('is-filled'); }
      if (reducedMotion || finalValue === 0) { node.textContent = new Intl.NumberFormat().format(finalValue) + suffix; return; }
      const duration = 1100;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = new Intl.NumberFormat().format(Math.round(finalValue * eased)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window) || reducedMotion) { values.forEach(animate); return; }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animate(entry.target); currentObserver.unobserve(entry.target); }
      });
    }, { threshold: .45 });
    values.forEach((node) => observer.observe(node));
  }

  /* Fill the process line progressively as it scrolls into view. */
  function setupProcessLine() {
    const list = document.querySelector('.process-list');
    if (!list || reducedMotion) return;
    let queued = false;
    const update = () => {
      const rect = list.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (rect.height + viewport * .25)));
      list.style.setProperty('--process-progress', progress.toFixed(3));
      queued = false;
    };
    window.addEventListener('scroll', () => {
      if (!queued) { queued = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* Chart and skill rings animate when revealed. */
  function setupPortfolioVisuals() {
    const chart = document.querySelector('.growth-chart');
    if (chart) {
      if (reducedMotion || !('IntersectionObserver' in window)) chart.classList.add('is-drawn');
      else {
        const chartObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { entry.target.classList.add('is-drawn'); observer.unobserve(entry.target); }
          });
        }, { threshold: .25 });
        chartObserver.observe(chart);
      }
    }
    const rings = document.querySelectorAll('.skill-ring');
    if (rings.length) {
      const fill = (ring) => {
        const target = Math.max(0, Math.min(Number(ring.dataset.progress) || 0, 100));
        const label = ring.querySelector('.sr-value');
        ring.style.setProperty('--skill-progress', target);
        ring.classList.add('is-filled');
        if (!label) return;
        if (reducedMotion) { label.textContent = `${target}%`; return; }
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1400, 1);
          label.textContent = `${Math.round(target * (1 - Math.pow(1 - t, 3)))}%`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      if (reducedMotion || !('IntersectionObserver' in window)) rings.forEach(fill);
      else {
        const ringObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { fill(entry.target); observer.unobserve(entry.target); }
          });
        }, { threshold: .4 });
        rings.forEach((ring) => ringObserver.observe(ring));
      }
    }
  }

  /* Home page: accessible dot-only 3D review slider with pointer swipes. */
  /* Shared 3D coverflow: each card gets data-offset (distance from the active card); CSS positions it.
     Click / Enter on a side card, a dot, swipe/drag or Left/Right keys bring a card to the centre. */
  function createCoverflow(stage, dots, cards, label) {
    let active = Math.floor(cards.length / 2);
    cards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Show ${label} ${index + 1}`);
      dot.addEventListener('click', () => show(index));
      dots.append(dot);
    });
    const show = (index) => {
      active = Math.max(0, Math.min(index, cards.length - 1));
      cards.forEach((card, cardIndex) => {
        const offset = cardIndex - active;
        card.dataset.offset = String(Math.max(-3, Math.min(3, offset)));
        if (offset === 0) card.setAttribute('aria-current', 'true'); else card.removeAttribute('aria-current');
      });
      Array.from(dots.children).forEach((dot, dotIndex) => dot.setAttribute('aria-current', String(dotIndex === active)));
    };
    show(active);
    let dragged = false;
    cards.forEach((card, index) => {
      card.addEventListener('click', () => { if (!dragged && index !== active) show(index); });
      card.addEventListener('keydown', (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && event.target === card && index !== active) { event.preventDefault(); show(index); }
      });
    });
    stage.addEventListener('keydown', (event) => {
      if (event.target.closest('input, textarea, select')) return;
      if (event.key === 'ArrowLeft') show(active - 1);
      if (event.key === 'ArrowRight') show(active + 1);
    });
    let pointerStart = null;
    stage.addEventListener('pointerdown', (event) => { pointerStart = event.clientX; dragged = false; }, { passive: true });
    stage.addEventListener('pointerup', (event) => {
      if (pointerStart === null) return;
      const delta = event.clientX - pointerStart;
      if (Math.abs(delta) > 45) {
        dragged = true;
        show(active + (delta < 0 ? 1 : -1));
        setTimeout(() => { dragged = false; }, 0);
      }
      pointerStart = null;
    }, { passive: true });
    stage.addEventListener('pointercancel', () => { pointerStart = null; }, { passive: true });
  }

  function setupReviews() {
    const stage = document.getElementById('review-stage');
    const dots = document.getElementById('review-dots');
    if (!stage || !dots) return;
    const cards = Array.from(stage.querySelectorAll('.review-card'));
    if (cards.length) createCoverflow(stage, dots, cards, 'review');
  }

  /* Video modal: no source was provided, so the UI clearly says TODO. */
  function setupVideoModal() {
    const modal = document.getElementById('site-modal');
    if (!modal) return;
    const title = modal.querySelector('#modal-title');
    const closeButton = modal.querySelector('.modal-close');
    let returnFocus = null;
    const close = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overlay-open');
      if (returnFocus) returnFocus.focus({ preventScroll: true });
    };
    document.querySelectorAll('[data-video]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        returnFocus = trigger;
        if (title) title.textContent = trigger.dataset.title || 'TODO: Video title';
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overlay-open');
        if (!reducedMotion && typeof modal.animate === 'function') {
          modal.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: 'ease-out' });
        }
        if (closeButton) closeButton.focus({ preventScroll: true });
      });
    });
    if (closeButton) closeButton.addEventListener('click', close);
    modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) close(); });
    modal.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab') return;
      const focusable = Array.from(modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }

  /* Graphic-design lightbox with text controls and touch swipe. */
  function setupLightbox() {
    const lightbox = document.getElementById('site-lightbox');
    const artSlot = document.getElementById('lightbox-art');
    const cards = Array.from(document.querySelectorAll('.graphic-card'));
    if (!lightbox || !artSlot || !cards.length) return;
    const closeButton = lightbox.querySelector('[data-lightbox-close]');
    let active = 0;
    let returnFocus = null;
    const render = () => {
      const sourceArt = cards[active].querySelector('.graphic-art');
      if (!sourceArt) return;
      artSlot.replaceChildren(sourceArt.cloneNode(true));
      const graphicTitle = cards[active].querySelector('.graphic-caption strong');
      lightbox.setAttribute('aria-label', graphicTitle ? graphicTitle.textContent : `Design preview ${active + 1}`);
    };
    const open = (index, trigger) => {
      active = (index + cards.length) % cards.length;
      returnFocus = trigger;
      render();
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overlay-open');
      if (!reducedMotion && typeof lightbox.animate === 'function') {
        lightbox.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: 'ease-out' });
      }
      if (closeButton) closeButton.focus({ preventScroll: true });
    };
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overlay-open');
      if (returnFocus) returnFocus.focus({ preventScroll: true });
    };
    cards.forEach((card, index) => card.addEventListener('click', () => open(index, card)));
    lightbox.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => { active = (active - 1 + cards.length) % cards.length; render(); });
    lightbox.querySelector('[data-lightbox-next]')?.addEventListener('click', () => { active = (active + 1) % cards.length; render(); });
    if (closeButton) closeButton.addEventListener('click', close);
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close(); });
    lightbox.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab') return;
      const focusable = Array.from(lightbox.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    let startX = null;
    const panel = lightbox.querySelector('.lightbox-panel');
    panel?.addEventListener('pointerdown', (event) => { startX = event.clientX; }, { passive: true });
    panel?.addEventListener('pointerup', (event) => {
      if (startX === null) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 55) { active = (active + (delta < 0 ? 1 : -1) + cards.length) % cards.length; render(); }
      startX = null;
    }, { passive: true });
  }

  /* Show a clear notice for unconfigured website links. */
 function setupLivePreviewButtons() {
  const buttons = document.querySelectorAll('.live-preview');

  const projectLinks = [
    'https://drsarahredesign.netlify.app',
    'https://qualiaredesign.netlify.app',
    'https://jessicaleeredesign.netlify.app/jessica%20lee%20reader%20home.dc'
  ];

  buttons.forEach((button, index) => {
    if (!projectLinks[index]) return;

    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(
        projectLinks[index],
        '_blank',
        'noopener,noreferrer'
      );
    });
  });
}

  /* Contact demo form validation; it does not claim to send a message. */
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form || !status) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = '';
      if (!form.reportValidity()) return;
      status.textContent = 'Your details passed validation. Demo only: no message was sent. TODO: connect a form endpoint.';
      form.reset();
    });
  }

  /* Turn a static preview into a soft fade rather than a hard color flash. */
  function setupPageEntry() {
    if (reducedMotion) return;
    document.body.classList.add('page-enter');
    window.setTimeout(() => document.body.classList.remove('page-enter'), 400);
  }

  function init() {
    injectSiteShell();
    setupPreloader();
    setupMobileMenu();
    setupScrollNavigation();
    setupPageTransitions();
    setupScrollReveal();
    setupHeroTypewriter();
    setupTilt();
    setupHeroParallax();
    setupCounters();
    setupProcessLine();
    setupPortfolioVisuals();
    setupReviews();
    setupVideoModal();
    setupLightbox();
    setupLivePreviewButtons();
    setupContactForm();
    setupPageEntry();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();