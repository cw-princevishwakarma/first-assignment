export const showError = (inputElement, message) => {
    const formGroup = inputElement.closest(".form-group");
    const errorDisplay = formGroup.querySelector(".error");
    inputElement.classList.add("input-error");
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";
};

export const clearError = (inputElement) => {
    const formGroup = inputElement.closest(".form-group");
    const errorDisplay = formGroup.querySelector(".error");
    inputElement.classList.remove("input-error");
    errorDisplay.textContent = "";
    errorDisplay.style.display = "none";
};

export const isValidName = (name) => {
    const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (!allowedChars.includes(char)) {
            return false;
        }
    }
    return true;
};