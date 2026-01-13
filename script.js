const form = document.querySelector("form");

form.addEventListener("submit", e => {
  form.classList.add("submitted");

  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    e.preventDefault();
    alert("Message Sent!\nThanks for completing the form. We'll be in touch soon!");
    form.reset();
    form.classList.remove("submitted");
  }
});
