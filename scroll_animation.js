//common reveal options to create reveal animations
ScrollReveal({
  //reset: true,
  distance: '100px',
  duration: 2500,
  delay: 100
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.navbar-nav', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.fa-edge-legacy', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.navbar', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.title', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.btn', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.subtitle', { delay: 600, origin: 'top' });
ScrollReveal().reveal('.description', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.card', { delay: 500, origin: 'bottom', interval: 100 });
// ScrollReveal().reveal('.cards', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.gallery-img', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.footer', { delay: 700, origin: 'bottom', interval: 100 });