export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
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
      this._handleCardClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardText = this._element.querySelector('.card__text');
    const cardImage = this._element.querySelector('.card__image');

    cardImage.src = this._image;
    cardImage.alt = this._name;
    cardText.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}