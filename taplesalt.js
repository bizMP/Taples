// SCROLL ANIMATION
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale'
    );
    
    animatedElements.forEach(el => observer.observe(el));
});

// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

function spremeniCenik(value) {
    
}