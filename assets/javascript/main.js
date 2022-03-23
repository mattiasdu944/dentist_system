const navbar = document.getElementById('navbar');


/*========== NAVBAR SCROLL ==========*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

/*========== SCROLL-TOP ==========*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 100) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
/*========== SCROLLREVEAL ==========*/
ScrollReveal().reveal('.reveal', { delay: 600 });