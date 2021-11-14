import FormValidator from "./FormValidator.js";

// VARIABLES

export const validationObj = {
  formSelector: '.popup__form',
  submitButtonSelector: '.popup__save-button',
  formInputSelector: '.popup__input',
  formInputErrorClass: 'popup__input_type_error',
  submitButtonInactiveClass: 'popup__save-button_inactive',
  errorSpanClass: 'popup__input-error_active',
  errorElementSelector: '-error',
};

export const editProfileBtn = document.querySelector('.profile__edit-button'),
  addCardBtn = document.querySelector('.profile__add-button'),
  popupProfile = document.querySelector('#popup-profile'),
  profileForm = popupProfile.querySelector('.popup__form'),
  popupCard = document.querySelector('#popup-card'),
  cardForm = popupCard.querySelector('.popup__form'),
  popupImg = document.querySelector('#popup-img'),
  popupImgPicture = popupImg.querySelector('.popup__image'),
  popupImgDescription = popupImg.querySelector('.popup__image-description'),
  closePopupProfileBtn = popupProfile.querySelector('.popup__close-button'),
  closePopupCardBtn = popupCard.querySelector('.popup__close-button'),
  closePopupImgBtn = popupImg.querySelector('.popup__close-button'),
  profileNameInput = popupProfile.querySelector('#profile-name'),
  profileDescriptionInput = popupProfile.querySelector('#profile-description'),
  cardNameInput = popupCard.querySelector('#place-name'),
  cardLinkInput = popupCard.querySelector('#place-email'),
  nameValue = document.querySelector('.profile__name'),
  descriptionValue = document.querySelector('.profile__description'),
  cardsContainer = document.querySelector('.cards'),
  cardTemplate = '#card',
  profileFormValidator = new FormValidator(validationObj, profileForm),
  cardFormValidator = new FormValidator(validationObj, cardForm);

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