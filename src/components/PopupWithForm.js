import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._formSubmit = formSubmit;
    this._inputList = Array.from(this._form.querySelectorAll('input'));
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  _formSubmitHandler = evt => {
    evt.preventDefault();
    this._formSubmit(this._getInputValues());
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._formSubmitHandler);
  }
}