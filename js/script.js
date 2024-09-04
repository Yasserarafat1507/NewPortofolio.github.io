// toggle icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    //remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//scroll reveal
ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    dalay: 200
});
    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-box, .contact form, .skill-box',  { origin: 'bottom' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });

    //typed js
    document.addEventListener('DOMContentLoaded', () => {
        try {
        const typed = new Typed('.multiple-text',{
            strings:['Front-End Developer','Android Developer','Back-End Developer','Santri'],
            typeSpeed:100,
            backSpeed:40,
            backDelay:1000,
            loop:true
        });
        } catch (error) {
            console.error('Error occurred:', error);
        }
        });

        const typed = new Typed('.multiple-about',{
            strings:['Front-End Developer','Android Developer','Back-End Developer',],
            typeSpeed:100,
            backSpeed:40,
            backDelay:1000,
            loop:true
        });