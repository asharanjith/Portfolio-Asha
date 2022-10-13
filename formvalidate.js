const form = document.getElementById('contactForm');
const email = document.getElementById('emailAddress');
const validation = document.getElementById('validation-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const errorMsg = ['Please enter a valid email address in lowercase', 'Submission Confirmed'];
  const input = email.value;
  if (input.toLowerCase() !== input) {
    validation.classList.remove('contact-button-sucess');
    validation.classList.add('contact-button-error');
    validation.innerHTML = `${errorMsg[0]}`;
  } else {
    validation.classList.add('contact-button-sucess');
    validation.innerHTML = `${errorMsg[1]}`;
    form.submit();
  }
});
