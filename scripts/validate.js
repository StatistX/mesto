const showError = (form, input, errorMessage) => {
  const formError = form.querySelector(`.${input.id}-error`);
  input.classList.add('popup__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active')
};

const hideError = (form, input) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active')
};

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage);
  } else {
    hideError(form, input);
  }
};

const hasInvalidInput = inputList => {
  return inputList.some(input => !input.validity.valid)
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_inactive');
  } else {
    buttonElement.classList.remove('popup__save-button_inactive');
  }
}; 

const setEventListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const buttonElement = form.querySelector('.popup__save-button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(form);
  });
};

enableValidation();

