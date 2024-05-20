document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');

  const overlay = document.getElementById('overlay');

  menuIcon.addEventListener('click', function () {
    if (overlay.style.height === '100%') {
      overlay.style.height = '0';
    } else {
      overlay.style.height = '100%';
    }
  });

  overlayLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = this.getAttribute('data-target');

      sections.forEach((section) => {
        if (section.id === target + '-section') {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      overlay.style.height = '0';
    });
  });
});

function scrollToParticles() {
  const particlesSection = document.getElementById('particles-section');
  particlesSection.scrollIntoView({ behavior: 'smooth' });
}
