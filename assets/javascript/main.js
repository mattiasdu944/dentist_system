const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});