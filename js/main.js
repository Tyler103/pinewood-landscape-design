// Mobile nav
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('open');
});

// Close nav on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = btn.classList.contains('active');
    document.querySelectorAll('.faq-q').forEach(b => {
      b.classList.remove('active');
      b.parentElement.querySelector('.faq-a').classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('active');
      answer.classList.add('open');
    }
  });
});

// Lead form — submits via mailto, shows confirmation after mail client opens
const form = document.getElementById('lead-form');
const success = document.getElementById('form-success');
form?.addEventListener('submit', () => {
  setTimeout(() => {
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  }, 500);
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imgs = document.querySelectorAll('img[data-src]');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.removeAttribute('data-src');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => io.observe(img));
}
