export default class Popup {
  constructor(popupSelector) {
    this._popup =  document.querySelector(popupSelector);
    this._closePopupButton = this._popup.querySelector('.popup__close-button');
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupByEscBtn);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('keydown', this._closePopupByEscBtn);
  }

  _closePopupByEscBtn = evt => {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _closePopupByClickOutside = evt => {
    if (evt.target.classList.contains('popup')) {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._closePopupButton.addEventListener('click', this.closePopup);
    this._popup.addEventListener('click', this._closePopupByClickOutside);
  }
}