// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animación de aparición al hacer scroll
const reveals = document.querySelectorAll('.card, .project, .section__head, .chips, .contact__card');
reveals.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 4) * 60 + 'ms';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));
