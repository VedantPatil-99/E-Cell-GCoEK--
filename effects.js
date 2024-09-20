function styleEventCards() {
    const eventCards = document.querySelectorAll('.card');

    eventCards.forEach((card) => {
        const blob = document.createElement('div');
        blob.classList.add('blob');
        card.appendChild(blob);

        const grid = document.createElement('div');
        grid.classList.add('grid');
        card.appendChild(grid);

        const particlesContainer = document.createElement('div');
        particlesContainer.classList.add('particles');
        card.appendChild(particlesContainer);

        for (let i = 1; i <= 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.animationDelay = `${Math.random() * 25}s`;
            particle.style.left = `${Math.random() * 100}%`;
            particlesContainer.appendChild(particle);
        }
    });
}

styleEventCards();

function openModal(index) {
    const myCarousel = new bootstrap.Carousel(document.getElementById('carouselGallery'));
    myCarousel.to(index);
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', function() {
            navLinks.forEach((nav) => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});