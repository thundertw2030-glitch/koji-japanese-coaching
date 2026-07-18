
(() => {
  const c = window.SITE_CONFIG || {};
  document.querySelectorAll('[data-email-link]').forEach(a => {
    const subject = encodeURIComponent(a.dataset.subject || 'Japanese lesson inquiry');
    a.href = `mailto:${c.email}?subject=${subject}`;
  });
  document.querySelectorAll('[data-email-text]').forEach(el => el.textContent = c.email || '');
  document.querySelectorAll('[data-whatsapp-link]').forEach(a => {
    const msg = encodeURIComponent(a.dataset.message || 'Hello Koji, I am interested in a Japanese lesson.');
    a.href = `${c.whatsappUrl}?text=${msg}`;
    a.target = '_blank'; a.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('[data-whatsapp-text]').forEach(el => el.textContent = c.whatsappDisplay || '');
  document.querySelectorAll('[data-line-link]').forEach(a => {
    a.href = c.lineUrl;
    a.target = '_blank'; a.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('.lang').forEach(menu => {
    document.addEventListener('click', e => {
      if (!menu.contains(e.target)) menu.removeAttribute('open');
    });
  });
})();
