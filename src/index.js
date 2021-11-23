import * as variables from './constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import { closePopup, openPopup } from './utils.js';
import '../vendor/normalize.css';
import '../pages/index.css';

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
  cardTemplate,
  closePopupImgBtn,
  validationObj,
  profileForm,
  cardForm,
} = variables;

const profileFormValidator = new FormValidator(validationObj, profileForm);
const cardFormValidator = new FormValidator(validationObj, cardForm);

// ADDING CARD FUNCTIONS

function createCard(cardData, cardTemplateSelector) {
  const card = new Card(cardData, cardTemplateSelector);
  return card.generateCard();
} 

function addCard(container, cardElement) {
  container.prepend(cardElement);
}

function addUserCard(event) {
  event.preventDefault();

  const newUserCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  const cardElement = createCard(newUserCardData, cardTemplate);
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
  cardFormValidator.resetValidation();
  openPopup(popupCard)
});

editProfileBtn.addEventListener('click', () => {
  getProfileInfo();
  profileFormValidator.resetValidation();
  openPopup(popupProfile);
});

popupCard.addEventListener('submit', addUserCard);
popupProfile.addEventListener('submit', updateProfileInfo);

closePopupProfileBtn.addEventListener('click', closePopup);
closePopupCardBtn.addEventListener('click', closePopup);
closePopupImgBtn.addEventListener('click', closePopup);

// SCRIPTS

getProfileInfo();

initialCards.forEach(item => {
  const cardElement = createCard(item, cardTemplate);
  addCard(cardsContainer, cardElement);
});

profileFormValidator.enableValidation();
cardFormValidator.enableValidation(); 