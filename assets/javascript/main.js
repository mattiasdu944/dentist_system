const navMenu = document.getElementById('nav-menu');
const btnMenu = document.getElementById('btn-menu');
const navbar = document.getElementById('navbar');
const navToogle = document.getElementById('navId');

/*===== MENU SHOW =====*/ 
navToogle.addEventListener('click', () => {
    navMenu.classList.toggle('show-nav');
});

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-nav');
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

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