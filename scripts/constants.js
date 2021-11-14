// VARIABLES

export const editProfileBtn = document.querySelector('.profile__edit-button'),
  addCardBtn = document.querySelector('.profile__add-button'),
  popupProfile = document.querySelector('#popup-profile'),
  popupCard = document.querySelector('#popup-card'),
  popupImg = document.querySelector('#popup-img'),
  closePopupProfileBtn = popupProfile.querySelector('.popup__close-button'),
  closePopupCardBtn = popupCard.querySelector('.popup__close-button'),
  closePopupImgBtn = popupImg.querySelector('.popup__close-button'),
  profileNameInput = popupProfile.querySelector('#profile-name'),
  profileDescriptionInput = popupProfile.querySelector('#profile-description'),
  cardNameInput = popupCard.querySelector('#place-name'),
  cardLinkInput = popupCard.querySelector('#place-email'),
  nameValue = document.querySelector('.profile__name'),
  descriptionValue = document.querySelector('.profile__description'),
  cardTemplate = document.querySelector('#card').content,
  cardsContainer = document.querySelector('.cards'),
  cardText = document.querySelector('.card__text'),
  cardImageSrc = document.querySelector('.card__image');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const valiationObj = {
  formSelector: '.popup__form',
  submitButtonSelector: '.popup__save-button',
  formInputSelector: '.popup__input',
  formInputErrorClass: 'popup__input_type_error',
  submitButtonInactiveClass: 'popup__save-button_inactive',
  errorSpanClass: 'popup__input-error_active',
  errorElementSelector: '-error',
};