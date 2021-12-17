import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgPicture = this._popup.querySelector('.popup__image');
    this._popupImgDescription = this._popup.querySelector('.popup__image-description');
  }

  openPopup = data => {
    super.openPopup();
    super.setEventListeners();
    this._popupImgPicture.src = data.link;
    this._popupImgPicture.alt = data.name;
    this._popupImgDescription.textContent = data.name;
  }
}