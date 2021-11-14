import * as variables from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const {
  initialCards,
  cardsContainer,
  cardNameInput,
  cardLinkInput,
  addCardBtn,
  popupCard,
  profileNameInput,
  profileDescriptionInput,
  nameValue,
  descriptionValue,
  popupProfile,
  editProfileBtn,
  closePopupProfileBtn,
  closePopupCardBtn,
  valiationObj
} = variables;


// POPUP FUNCTIONS

function closePopupByEscBtn(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

function closePopupByClickOutside(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
};

function closePopup() {
  const activePopup = document.querySelector('.popup_opened');

  activePopup.classList.remove('popup_opened');

  document.removeEventListener('click', closePopupByClickOutside);
  document.removeEventListener('keydown', closePopupByEscBtn);
}

function openPopup(popup) {
  const { formSelector } = valiationObj;
  const formItem = popup.querySelector(formSelector);

  const formValidator = new FormValidator(valiationObj, formItem);
  formValidator.enableValidation();

  popup.classList.add('popup_opened');

  document.addEventListener('click', closePopupByClickOutside);
  document.addEventListener('keydown', closePopupByEscBtn);
}

// ADDING CARD FUNCTIONS

function addCard(container, cardElement) {
  container.prepend(cardElement);
}

function addUserCard(event) {
  event.preventDefault();
  const newUserCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  const newCard = new Card(newUserCardData, '#card');

  const cardElement = newCard.generateCard();

  addCard(cardsContainer, cardElement);

  cardNameInput.value = '';
  cardLinkInput.value = '';

  closePopup();
}

function setPlaceCardInfo() {
  cardNameInput.value = '';
  cardLinkInput.value = '';
}

// EDIT PROFILE FUNCTIONS

function updateProfileInfo(event) {
  event.preventDefault();
  nameValue.textContent = profileNameInput.value;
  descriptionValue.textContent = profileDescriptionInput.value;
  closePopup();
}

function getProfileInfo() {
  profileNameInput.value = nameValue.textContent.trim();
  profileDescriptionInput.value = descriptionValue.textContent.trim();
}

// EVENT LISTENERS

addCardBtn.addEventListener('click', () => {
  setPlaceCardInfo();
  openPopup(popupCard)
});

editProfileBtn.addEventListener('click', () => {
  getProfileInfo();
  openPopup(popupProfile);
});

popupCard.addEventListener('submit', addUserCard);
popupProfile.addEventListener('submit', updateProfileInfo);

closePopupProfileBtn.addEventListener('click', closePopup);
closePopupCardBtn.addEventListener('click', closePopup);

// SCRIPTS

getProfileInfo();


initialCards.forEach(item => {
  const newCard = new Card(item, '#card');
  const cardElement = newCard.generateCard();

  addCard(cardsContainer, cardElement);
});