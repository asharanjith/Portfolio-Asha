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

// Local Storage Implementation

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22
      || e.code === 1014 || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  const input = [form.fullname, form.email, form.message];
  input.forEach((input) => {
    input.addEventListener('input', () => {
      const localData = {
        fullname: form.fullname.value,
        email: form.email.value,
        message: form.message.value,
      };
      localStorage.setItem('inputValues', JSON.stringify(localData));
    });
  });
  const getData = JSON.parse(localStorage.getItem('inputValues'));

  form.fullname.value = getData.fullname;
  form.email.value = getData.email;
  form.message.value = getData.message;
}
