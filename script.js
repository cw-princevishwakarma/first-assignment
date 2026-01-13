import { showError, clearError, isValidName } from './utils.js';

const form = document.querySelector("form");
const toast = document.querySelector(".toast");
const allInputs = form.querySelectorAll("input, textarea");

allInputs.forEach(input => {
  ['input', 'change'].forEach(eventType => {
    input.addEventListener(eventType, () => {
      if (input.classList.contains("input-error")) {
        clearError(input);
      }
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = true;

  const firstName = document.getElementById("first_name");
  if (firstName.value.trim() === "") {
    showError(firstName, "This field is required");
    isFormValid = false;
  }

  if(!isValidName(firstName.value)){
    showError(firstName,"The name is invalid")
    isFormValid = false
  }

  const lastName = document.getElementById("last_name");
  if (lastName.value.trim() === "") {
    showError(lastName, "This field is required");
    isFormValid = false;
  }

  if(!isValidName(lastName.value)){
    showError(lastName,"The name is invalid")
    isFormValid = false
  }

  const email = document.getElementById("email_address");
  if (email.value.trim() === "") {
    showError(email, "Please enter an email address");
    isFormValid = false;
  } else if (!email.validity.valid) { 
    showError(email, "Please enter a valid email address");
    isFormValid = false;
  }

  const querySelected = document.querySelector('input[name="query"]:checked');
  if (!querySelected) {
    const firstRadio = document.getElementById("general_enquiry");
    showError(firstRadio, "Please select a query type");
    isFormValid = false;
  }

  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    showError(message, "This field is required");
    isFormValid = false;
  }

  const consent = document.getElementById("consent");
  if (!consent.checked) {
    showError(consent, "To submit this form, please consent to being contacted");
    isFormValid = false;
  }

  if (isFormValid) {
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);

    form.reset();
  }
});