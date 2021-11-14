export default class FormValidator {
  constructor(valiationObj, formItem) {
    this._submitButtonSelector = valiationObj.submitButtonSelector;
    this._formInputSelector = valiationObj.formInputSelector;
    this._formInputErrorClass = valiationObj.formInputErrorClass;
    this._submitButtonInactiveClass = valiationObj.submitButtonInactiveClass;
    this._errorSpanClass = valiationObj.errorSpanClass;
    this._errorElementSelector = valiationObj.errorElementSelector;
    this._formItem = formItem;
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

  _hasInvalidInput(inputList) {
    return inputList.some(inputItem => !inputItem.validity.valid)
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._submitButtonInactiveClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._submitButtonInactiveClass);
      buttonElement.disabled = false;
    }
  }
  
  _setEventListeners() {
    const inputList = Array.from(this._formItem.querySelectorAll(this._formInputSelector));
    const buttonElement = this._formItem.querySelector(this._submitButtonSelector);

    this._formItem.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach(inputItem => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem, this._formItem);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _resetValidation() {
    const inputList = Array.from(this._formItem.querySelectorAll(this._formInputSelector));
    const buttonElement = this._formItem.querySelector(this._submitButtonSelector);
  
    inputList.forEach(inputItem => {
      this._hideError(this._formItem, inputItem);
    });
    
    this._toggleButtonState(inputList, buttonElement);
  };

  enableValidation() {
    this._setEventListeners();
    this._resetValidation();
  }
}