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

    const table = document.getElementById('cenikTable');
    const odrasli = document.getElementById('odrasli');
    const otroci = document.getElementById('otroci');
    const detox = document.getElementById('detox');
    const paketi = document.getElementById('paketi');

    if(value == 'odrasli') {
        odrasli.style.textDecoration = "underline";
        otroci.style.textDecoration = "none";
        detox.style.textDecoration = "none";
        paketi.style.textDecoration = "none";

        table.rows[1].cells[1].textContent = "1 oseba";
        table.rows[2].cells[1].textContent = "2 osebi";
        table.rows[3].cells[1].textContent = "3 osebe";
        table.rows[4].cells[1].textContent = "vsaka nadaljna oseba";

        table.rows[1].cells[0].textContent = "50 minut";
        table.rows[1].cells[2].textContent = "20€";
        table.rows[2].cells[2].textContent = "30€";
        table.rows[3].cells[2].textContent = "40€";
        table.rows[4].cells[2].textContent = "+10€";
    }
    else if(value == 'otroci') {
        otroci.style.textDecoration = "underline";
        odrasli.style.textDecoration = "none";
        detox.style.textDecoration = "none";
        paketi.style.textDecoration = "none";

        table.rows[1].cells[1].textContent = "1 oseba";
        table.rows[2].cells[1].textContent = "2 osebi";
        table.rows[3].cells[1].textContent = "3 osebe";
        table.rows[4].cells[1].textContent = "vsaka nadaljna oseba";

        table.rows[1].cells[0].textContent = "30 minut";
        table.rows[1].cells[2].textContent = "15€";
        table.rows[2].cells[2].textContent = "20€";
        table.rows[3].cells[2].textContent = "25€";
        table.rows[4].cells[2].textContent = "+5€";
    }
    else if(value == 'detox') {
        detox.style.textDecoration = "underline";
        otroci.style.textDecoration = "none";
        odrasli.style.textDecoration = "none";
        paketi.style.textDecoration = "none";

        table.rows[1].cells[1].textContent = "1 oseba";
        table.rows[2].cells[1].textContent = "2 osebi";
        table.rows[3].cells[1].textContent = "3 osebe";
        table.rows[4].cells[1].textContent = "vsaka nadaljna oseba";

        table.rows[1].cells[0].textContent = "60 minut";
        table.rows[1].cells[2].textContent = "26€";
        table.rows[2].cells[2].textContent = "38€";
        table.rows[3].cells[2].textContent = "50€";
        table.rows[4].cells[2].textContent = "+12€";
    }
    else if(value == 'paketi') {
        paketi.style.textDecoration = "underline";
        otroci.style.textDecoration = "none";
        detox.style.textDecoration = "none";
        odrasli.style.textDecoration = "none";

        table.rows[1].cells[0].textContent = "30/50/60 minut";

        table.rows[1].cells[1].textContent = "5 oseb";
        table.rows[2].cells[1].textContent = "10 oseb";
        table.rows[3].cells[1].textContent = "15 oseb";
        table.rows[4].cells[1].textContent = "";

        table.rows[1].cells[2].textContent = "1 gratis";
        table.rows[2].cells[2].textContent = "2 gratis";
        table.rows[3].cells[2].textContent = "3 gratis";
        table.rows[4].cells[2].textContent = "";
    }
}