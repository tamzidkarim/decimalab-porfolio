// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('.splide').mount();
// });
new Splide('.splide', {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  focus: 'center',
  gap: 10,
}).mount();

const links = document.querySelectorAll('.header-nav ul a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

  const offsetTop = document.getElementById(`#${e.target.id}`).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

// FORM HANDLING
const form = document.getElementById('contact-form');

function hasValue(input) {
  if (input.value.trim() === '') {
    return false;
  }
  return true;
}

function validateEmail(input) {
  // check if the value is not empty
  if (!hasValue(input)) {
    return false;
  }
  // validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault();

  let nameValid = hasValue(form.elements['name']);
  let emailValid = validateEmail(form.elements['email']);
  let queryValid = hasValue(form.elements['query']);

  if (!queryValid || !nameValid || !emailValid) {
    alert('Please check your inputs. No empty field is allowed.');
  }

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const query = form.elements['query'].value;

  console.log(name, email, query);
});
