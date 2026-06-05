const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      nav.classList.remove('active');
      burger.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (href === 'index.html' && current === '')) {
      link.classList.add('active-link');
    }
  });
});

// Admin panel router - Check if user is trying to access /g
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const pathParts = path.split('/').filter(p => p);
  
  if (pathParts[pathParts.length - 1] === 'g') {
    window.location.href = 'g.html';
  }
});
