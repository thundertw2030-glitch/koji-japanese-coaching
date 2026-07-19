(() => {
  const C = window.KOJI_CONFIG || {};
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  const track = (name, params = {}) => {
    if (window.gtag) window.gtag('event', name, params);
    if (window.clarity) window.clarity('event', name);
  };

  function loadAnalytics() {
    if (window.__analyticsLoaded) return;
    window.__analyticsLoaded = true;

    if (C.gaMeasurementId) {
      const googleScript = document.createElement('script');
      googleScript.async = true;
      googleScript.src = `https://www.googletagmanager.com/gtag/js?id=${C.gaMeasurementId}`;
      document.head.appendChild(googleScript);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', C.gaMeasurementId, { anonymize_ip: true });
    }

    if (C.clarityProjectId) {
      ((c, l, a, r, i, t, y) => {
        c[a] = c[a] || function clarityQueue() { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r);
        t.async = 1;
        t.src = `https://www.clarity.ms/tag/${i}`;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', C.clarityProjectId);
    }
  }

  const storage = {
    get(key) {
      try { return window.localStorage?.getItem(key) || null; } catch (_) { return null; }
    },
    set(key, value) {
      try { window.localStorage?.setItem(key, value); return true; } catch (_) { return false; }
    },
  };

  const consent = storage.get('koji_analytics_consent');
  const consentBox = $('#consent');
  if (consent === 'accepted') loadAnalytics();
  else if (!consent && consentBox) consentBox.classList.add('show');

  $('#acceptCookies')?.addEventListener('click', () => {
    storage.set('koji_analytics_consent', 'accepted');
    consentBox?.classList.remove('show');
    loadAnalytics();
  });

  $('#declineCookies')?.addEventListener('click', () => {
    storage.set('koji_analytics_consent', 'declined');
    consentBox?.classList.remove('show');
  });

  $$('[data-contact]').forEach((link) => {
    const type = link.dataset.contact;
    const subject = document.body.dataset.subject || '';
    const message = document.body.dataset.wamsg || '';
    if (type === 'email' && C.email) link.href = `mailto:${C.email}?subject=${encodeURIComponent(subject)}`;
    if (type === 'whatsapp' && C.whatsappUrl) link.href = `${C.whatsappUrl}?text=${encodeURIComponent(message)}`;
    if (type === 'line' && C.lineUrl) link.href = C.lineUrl;
    link.addEventListener('click', () => track('contact_click', {
      contact_method: type,
      page_language: document.documentElement.lang,
      page_path: location.pathname,
    }));
  });

  $('#langSelect')?.addEventListener('change', (event) => {
    track('language_switch', { selected_language: event.target.value });
    location.href = event.target.value;
  });

  const header = $('.header');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuButton = $('#menuBtn');
  const nav = $('#nav');
  const backdrop = $('#navBackdrop');
  const menuUse = menuButton?.querySelector('use');

  const setMenu = (open) => {
    if (!menuButton || !nav) return;
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menuOpen', open);
    menuButton.setAttribute('aria-expanded', String(open));
    if (menuUse) menuUse.setAttribute('href', open ? '#i-close' : '#i-menu');
  };

  menuButton?.addEventListener('click', () => setMenu(!nav?.classList.contains('open')));
  backdrop?.addEventListener('click', () => setMenu(false));
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) setMenu(false);
  });

  const revealElements = $$('.reveal');
  if ('IntersectionObserver' in window) {
    revealElements.forEach((element) => element.classList.add('willReveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px' });
    revealElements.forEach((element) => observer.observe(element));
    // Never leave content hidden if an observer/browser extension misbehaves.
    window.setTimeout(() => revealElements.forEach((element) => element.classList.add('visible')), 2400);
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }

  let trackedNinety = false;
  window.addEventListener('scroll', () => {
    const ratio = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (!trackedNinety && ratio > 0.9) {
      trackedNinety = true;
      track('scroll_90', { page_path: location.pathname });
    }
  }, { passive: true });

  let step = 0;
  const answers = [];
  const questions = $$('.question');
  const progressBar = $('#progressBar');
  const counter = $('.quizTop strong');

  $$('.option').forEach((button) => button.addEventListener('click', () => {
    if (!questions.length || step >= questions.length) return;
    answers.push(button.dataset.value);
    questions[step].classList.remove('active');
    step += 1;

    if (step < questions.length) {
      questions[step].classList.add('active');
      const percentage = ((step + 1) / questions.length) * 100;
      if (progressBar) progressBar.style.width = `${percentage}%`;
      if (counter) counter.textContent = `${String(step + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
      questions[step].querySelector('.option')?.focus({ preventScroll: true });
    } else {
      const key = answers.find((value) => ['job', 'study', 'business', 'it'].includes(value)) || 'default';
      const result = $('#quizResult');
      const resultTitle = $('#resultTitle');
      if (result && resultTitle) {
        resultTitle.textContent = result.dataset[key] || result.dataset.default || '';
        result.classList.add('show');
        result.setAttribute('tabindex', '-1');
        result.focus({ preventScroll: true });
      }
      if (progressBar) progressBar.style.width = '100%';
      if (counter) counter.textContent = `${String(questions.length).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
      track('lesson_finder_complete', {
        recommended_track: key,
        page_language: document.documentElement.lang,
      });
    }
  }));

  // The video section is production-ready but remains hidden until a real file is supplied.
  const videoSection = $('[data-video-section]');
  if (videoSection?.dataset.videoReady === 'true') {
    const video = videoSection.querySelector('video');
    if (video && videoSection.dataset.videoFile && !video.querySelector('source')) {
      const source = document.createElement('source');
      source.src = videoSection.dataset.videoFile;
      source.type = 'video/mp4';
      video.appendChild(source);
      video.load();
    }
    videoSection.hidden = false;
  }
})();
