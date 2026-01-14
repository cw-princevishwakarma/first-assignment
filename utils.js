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

export const checkName = (inputElement) => {
    if (inputElement.value.trim() === "") {
        showError(inputElement, "This field is required");
        return false;
    }
    if (!isValidName(inputElement.value)) {
        showError(inputElement, "The name is invalid");
        return false;
    }
    return true;
}

export const checkEmail = (inputElement) => {
    if (inputElement.value.trim() === "") {
        showError(inputElement, "Please enter an email address");
        return false;
    }
    if (!inputElement.validity.valid) {
        showError(inputElement, "Please enter a valid email address");
        return false;
    }
    return true;
}


export const checkQueryType = () => {
    const querySelected = document.querySelector('input[name="query"]:checked');

    if (!querySelected) {
        const firstRadioInGroup = document.querySelector('input[name="query"]');
        if (firstRadioInGroup) {
            showError(firstRadioInGroup, "Please select a query type");
        }
        return false;
    }
    return true;
}

export const checkMessage = (inputElement) => {
    if (inputElement.value.trim() === "") {
        showError(inputElement, "This field is required");
        return false;
    }
    return true;
}

export const checkConsent = (inputElement) => {
    if (!inputElement.checked) {
        showError(inputElement, "To submit this form, please consent to being contacted");
        return false;
    }
    return true;
}