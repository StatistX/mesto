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
    return {
      name: this._inputList[0].value,
      description: this._inputList[1].value,
    }
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