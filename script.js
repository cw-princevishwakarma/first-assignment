import { clearError, checkName, checkEmail, checkQueryType, checkMessage, checkConsent } from './utils.js';

const form = document.querySelector("form");
const toast = document.querySelector(".toast");
const allInputs = form.querySelectorAll("input, textarea");

allInputs.forEach(input => {
  const eventType = (input.type === "checkbox" || input.type === "radio")
    ? 'change'
    : 'input';

  input.addEventListener(eventType, () => {
    if (input.type === 'radio') {
      const formGroup = input.closest('.form-group');
      const errorInput = formGroup.querySelector('.input-error');
      if (errorInput) {
        clearError(errorInput);
      }
      formGroup.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
      input.closest('.radio-option').classList.add('selected');
    } 
    else {
      if (input.classList.contains("input-error")) {
        clearError(input);
      }
    }
  });
});

function checkValidity() {
  const isFirstNameValid = checkName(document.getElementById("first_name"));
  const isLastNameValid = checkName(document.getElementById("last_name"));
  const isEmailValid = checkEmail(document.getElementById("email_address"));
  const isQueryValid = checkQueryType();
  const isMessageValid = checkMessage(document.getElementById("message"));
  const isConsentValid = checkConsent(document.getElementById("consent"));

  return isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isQueryValid &&
    isMessageValid &&
    isConsentValid;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkValidity()) {
    toast.style.opacity = "1";
    setTimeout(() => {
      toast.style.opacity = "0";
    }, 3000);

    form.reset();

    document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.input-error').forEach(el => clearError(el));
  }
});