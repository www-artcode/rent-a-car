const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

document.addEventListener('scroll', () => {
    navbar.classList.remove('active');
});



themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Store the user's preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});
menu.onclick = () => {
    navbar.classList.toggle('active');
}

document.addEventListener('scroll', () => {
    navbar.classList.remove('active');
});


ScrollReveal().reveal('.heading', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.ride-container .box', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.services-container .box', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about-container .about-img', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about-container .about-text', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.reviews-container .box', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.newsletter .box', { delay: 200, origin: 'bottom' });