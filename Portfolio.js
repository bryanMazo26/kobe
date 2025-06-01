  document.addEventListener('DOMContentLoaded', () => {
  // Responsive Nav Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Highlight active navigation link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Contact form submission (simulate success)
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form && formMessage) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (form.checkValidity()) {
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        form.reset();
      } else {
        formMessage.textContent = 'Please fill in all fields correctly.';
      }
    });
  }
});
