const input = document.querySelector('.input-email');
const form = document.querySelector('form');
const btnSubmit = document.querySelector('.btn-submit');

const patterns = {
  email: /^\S+@\S+\.\S+$/,
}

const validate = function (e) {
  const testRegex = patterns[e.target.name].test(e.target.value);
  const warningElement = document.querySelector(`.warning[data-name=${e.target.name}]`);
  if (!testRegex) {
    warningElement.classList.add('active');
    e.target.classList.add('error');
    btnSubmit.setAttribute('disabled', 'true');
  } else {
    warningElement.classList.remove('active');
    e.target.classList.remove('error');
    btnSubmit.removeAttribute('disabled');
  }
   
}

input.addEventListener('keyup', validate);