const burgerMenu=document.querySelector('#hamburger');
const mobileMenu=document.querySelector('.mobile-menu');

function openMenuBox(){
    burgerMenu.style.display='none';
    mobileMenu.style.display='flex';
}

burgerMenu.addEventListener('click',openMenuBox);

const closeMobileMenu=document.querySelector('.fa-xmark');

function closeMenuBox(){
    burgerMenu.style.display='block';
    mobileMenu.style.display='none';
}
