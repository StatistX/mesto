import * as variables from './constants.js';

const { popupImg, closePopupImgBtn } = variables;

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    const popupImgPicture = popupImg.querySelector('.popup__image');
    const popupImgDescription = popupImg.querySelector('.popup__image-description');

    popupImgPicture.src = this._image;
    popupImgPicture.alt = this._name;
    popupImgDescription.textContent = this._name;

    popupImg.classList.add('popup_opened');

    document.addEventListener('click', this._closePopupByClickOutside);
    document.addEventListener('keydown', this._closePopupByEscBtn);
  }

  _closePopupByClickOutside = evt => {
    if (evt.target.classList.contains('popup')) {
      this._handleClosePopup();
    }
  }

  _closePopupByEscBtn = evt => {
    if (evt.key === 'Escape') {
      this._handleClosePopup();
    }
  }

  _handleClosePopup() {
    popupImg.classList.remove('popup_opened');

    document.removeEventListener('click', this._closePopupByClickOutside);
    document.removeEventListener('keydown', this._closePopupByEscBtn);
  }

  _setEventListeners() {
    const cardLikeBtn = this._element.querySelector('.card__like-button');
    const cardDeleteBtn = this._element.querySelector('.card__delete-button');
    const cardImg = this._element.querySelector('.card__image');

    cardDeleteBtn.addEventListener('click', () => {
      this._element.remove();
    });

    cardLikeBtn.addEventListener('click', () => {
      cardLikeBtn.classList.toggle('card__like-button_active');
    });

    cardImg.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    closePopupImgBtn.addEventListener('click', () => {
      this._handleClosePopup();
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}