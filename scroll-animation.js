ScrollReveal({
  //reset: true,
  distance: '60px',
  duration: 2500,
  delay: 100
});

ScrollReveal().reveal('.navbar-nav', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.fa-edge-legacy', { delay: 200, origin: 'left' });
// ScrollReveal().reveal('.navbar', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.title', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.btn', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.subtitle', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.description', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.event-card', { delay: 200, origin: 'bottom'});
// ScrollReveal().reveal('.cards', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.gallery-img', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.footer', { delay: 200, origin: 'bottom'});


window.addEventListener('load', function () {
      const preloader = document.getElementById('preloader');
      preloader.classList.add('hidden'); // Add hidden class to fade out preloader
    });