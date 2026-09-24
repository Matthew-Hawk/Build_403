/* ==============================================================
   403 Studio — small, framework-free enhancements
   The pages remain readable and usable if JavaScript is disabled.
   ============================================================== */

// Mark that JavaScript is active before enabling scroll reveal styles.
document.documentElement.classList.add('js');

// Keep the copyright year up to date on every page.
document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

// Toggle the mobile navigation and keep its accessibility state in sync.
const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.nav-links');

if (menuButton && menuLinks) {
  function closeMenu() {
    menuLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // A selected link or Escape key closes the menu on small screens.
  menuLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

// Add a restrained entrance animation when sections first enter the viewport.
// The reduced-motion media query in CSS disables the animation for users who prefer it.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// This concept form intentionally has no endpoint and sends no data.
// Avoid reporting a successful submission when nothing has been delivered.
const contactForm = document.querySelector('[data-demo-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = contactForm.querySelector('.form-feedback');
    feedback.textContent = 'This is a preview form. No message was sent.';
  });
}
