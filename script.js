document.addEventListener('DOMContentLoaded', function() {

    // Gestion de l'année en cours dans le footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Gestion du bouton flottant (Sticky CTA)
    const stickyCta = document.getElementById('sticky-cta-button');

    if (stickyCta) {
        window.addEventListener('scroll', function() {
            // Seuil de défilement pour afficher le bouton (en pixels)
            const scrollThreshold = 400; 

            if (window.scrollY > scrollThreshold) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }
});