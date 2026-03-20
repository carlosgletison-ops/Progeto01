// Executive Performance - Strategic Reveal & Interactions
document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Revela um pouco antes de chegar ao centro
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Selecionamos as seções e cards para revelar de forma fluida
    const elementsToReveal = document.querySelectorAll('section, .grid > div, .relative.z-10');
    
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    // 2. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Efeito Glass no Header ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glass-scrolled');
        } else {
            header.classList.remove('glass-scrolled');
        }
    });
});
