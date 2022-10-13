const burgerMenu = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

function openMenuBox() {
  burgerMenu.style.display = 'none';
  mobileMenu.style.display = 'flex';
}

burgerMenu.addEventListener('click', openMenuBox);

const closeMobileMenu = document.querySelector('.fa-xmark');

function closeMenuBox() {
  burgerMenu.style.display = 'block';
  mobileMenu.style.display = 'none';
}
closeMobileMenu.addEventListener('click', closeMenuBox);

const mainSection = document.querySelector('.main-section');
const aboutSection = document.querySelector('.about-section');
const contactSection = document.querySelector('.contact-section');

function goToMainSection() {
  closeMenuBox();
  window.location = '#introductionMain';
}
mainSection.addEventListener('click', goToMainSection);

function goToAboutSection() {
  closeMenuBox();
  window.location = '#about-myself';
}
aboutSection.addEventListener('click', goToAboutSection);

function goToContactSection() {
  closeMenuBox();
  window.location = '#contactMeID';
}
contactSection.addEventListener('click', goToContactSection);
