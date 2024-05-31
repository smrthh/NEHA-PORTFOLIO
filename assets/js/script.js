"use strict"

//? REFERENCES
const $header = document.querySelector(".header");
const $menuOpenBtn = document.querySelector(".menu-open-btn");
const $menuCloseBtn = document.querySelector(".menu-close-btn");
const $closeNavLinks = document.querySelector("[data-nav-link]");

//! MENU BAR FUNCTIONALITIES
$menuOpenBtn.addEventListener('click' , () => {
    $header.classList.toggle("active");
})

$menuCloseBtn.addEventListener("click" , () => {
    $header.classList.remove("active");
})

//! FOR HEADER ACTIVE
window.addEventListener("scroll" , () => {
    if(window.scrollY > 60){
        $header.style.boxshadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }

    else {
        $header.style.background = "#Fff"
    }
})

//! FOR CLOSING NAVBAR WHENEVER LINKS ACTIVETED
function closeNav() {
  $header.classList.remove("active");
}

$closeNavLinks.addEventListener("click" , closeNav);


ScrollReveal().reveal('.reveal');

// const $scrollReveals = () => {
    
// HOME ICON
ScrollReveal().reveal('.pro-link', { origin: 'left', distance: '100px', duration: 800, delay: 300 , interval : 200 , reset : true });

// HOME TITLE 
ScrollReveal().reveal('.sec-title', { origin: 'left', distance: '100px', duration: 800, delay: 300 , interval : 200 , reset : true});

ScrollReveal().reveal('.sec-subtext', { origin: 'top', distance: '30px', duration: 800, delay: 300 , interval : 200 , reset : true });

// A
ScrollReveal().reveal('.sec-text', { origin: 'bottom', distance: '100px', duration: 800, delay: 300 , interval : 200 , reset : true});

ScrollReveal().reveal('.btn', { origin: 'bottom', distance: '130px', duration: 800, delay: 800 , interval : 200 , reset : true});

// sec-secn-title
ScrollReveal().reveal('.sec-secn-title',{ origin: 'left', distance: '130px', duration: 1000, delay: 800 , interval : 200 , reset:true});

// B
ScrollReveal().reveal('.right',{ origin: 'left', distance: '60px', duration: 1000, delay: 800 , interval : 200 , reset:true});

// C
ScrollReveal().reveal('.left',{ origin: 'right', distance: '60px', duration: 1000, delay: 800 , interval : 200 , reset:true});

// D
ScrollReveal().reveal('.ion-icon',{ origin: 'left', distance: '100px', duration: 1000, delay: 800 , interval : 300 , reset:true});

//tech-text
ScrollReveal().reveal('.tech-text',{ origin: 'top', distance: '50px', duration: 1000, delay: 800 , interval : 200 , reset:true});

// }

// $scrollReveals();