export default class FormValidator {
  constructor(validationObj, formItem) {
    this._submitButtonSelector = validationObj.submitButtonSelector;
    this._formInputSelector = validationObj.formInputSelector;
    this._formInputErrorClass = validationObj.formInputErrorClass;
    this._submitButtonInactiveClass = validationObj.submitButtonInactiveClass;
    this._errorSpanClass = validationObj.errorSpanClass;
    this._errorElementSelector = validationObj.errorElementSelector;
    this._formItem = formItem;
    this._inputList = Array.from(this._formItem.querySelectorAll(this._formInputSelector));
    this._buttonElement = this._formItem.querySelector(this._submitButtonSelector);
  }

  _showError(formItem, inputItem, errorMessage) {
    const errorElement = formItem.querySelector(`.${inputItem.id}${this._errorElementSelector}`);
    inputItem.classList.add(this._formInputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorSpanClass);
  }
  
  _hideError(formItem, inputItem) {
    const errorElement = formItem.querySelector(`.${inputItem.id}${this._errorElementSelector}`);
    inputItem.classList.remove(this._formInputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorSpanClass)
  }

  _checkInputValidity(inputItem, formItem) {
    if (!inputItem.validity.valid) {
      this._showError(formItem, inputItem, inputItem.validationMessage);
    } else {
      this._hideError(formItem, inputItem);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(inputItem => !inputItem.validity.valid)
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._submitButtonInactiveClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._submitButtonInactiveClass);
      this._buttonElement.disabled = false;
    }
  }
  
  _setEventListeners() {
    this._formItem.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    this._toggleButtonState();

    this._inputList.forEach(inputItem => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem, this._formItem);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._inputList.forEach(inputItem => {
      this._hideError(this._formItem, inputItem);
    });
    
    this._toggleButtonState();
  };

  enableValidation() {
    this._setEventListeners();
  }
}