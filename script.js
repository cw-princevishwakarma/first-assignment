import { clearError, checkName, checkEmail, checkQueryType, checkMessage, checkConsent } from './utils.js';

const form = document.querySelector("form");
const toast = document.querySelector(".toast");
const allInputs = form.querySelectorAll("input, textarea");

allInputs.forEach(input => {
  ['input', 'change'].forEach(event => {
    input.addEventListener(event, () => {
      if (input.classList.contains("input-error")) {
        clearError(input);
      }
    });
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
  }
});