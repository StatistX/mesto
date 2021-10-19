// FUNCTIONS

const showError = (formItem, inputItem, errorMessage, valiationObj) => {

  const { formInputErrorClass, errorSpanClass, errorElementSelector } = valiationObj;

  const errorElement = formItem.querySelector(`.${inputItem.id}${errorElementSelector}`);
  inputItem.classList.add(formInputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSpanClass);
};

const hideError = (formItem, inputItem, valiationObj) => {

  const { formInputErrorClass, errorSpanClass, errorElementSelector } = valiationObj;

  const errorElement = formItem.querySelector(`.${inputItem.id}${errorElementSelector}`);
  inputItem.classList.remove(formInputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorSpanClass)
};

const checkInputValidity = (inputItem, formItem, valiationObj) => {
  if (!inputItem.validity.valid) {
    showError(formItem, inputItem, inputItem.validationMessage, valiationObj);
  } else {
    hideError(formItem, inputItem, valiationObj);
  }
};

const hasInvalidInput = inputList => {
  return inputList.some(inputItem => !inputItem.validity.valid)
};

const toggleButtonState = (inputList, buttonElement, valiationObj) => {
  const { submitButtonInactiveClass } = valiationObj;
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(submitButtonInactiveClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(submitButtonInactiveClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formItem, valiationObj) => {
  const { formInputSelector, submitButtonSelector } = valiationObj;
  const inputList = Array.from(formItem.querySelectorAll(formInputSelector));
  const buttonElement = formItem.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, valiationObj);

  inputList.forEach(inputItem => hideError(formItem, inputItem, valiationObj));
  
  inputList.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
      checkInputValidity(inputItem, formItem, valiationObj);
      toggleButtonState(inputList, buttonElement, valiationObj);
    });
  });
};

const enableValidation = valiationObj => {
  const { formSelector } = valiationObj;

  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(formItem => {
    formItem.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    setEventListeners(formItem, valiationObj);
  });
};

// SCRIPTS

enableValidation(valiationObj);