import * as variables from './utils/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import './index.css';

const {
  initialCards,
  cardsContainer,
  addCardBtn,
  profileNameInput,
  profileDescriptionInput,
  nameValue,
  descriptionValue,
  editProfileBtn,
  cardTemplate,
  validationObj,
  profileForm,
  cardForm,
} = variables;

const profileFormValidator = new FormValidator(validationObj, profileForm);
const cardFormValidator = new FormValidator(validationObj, cardForm);
const user = new UserInfo({ userName: nameValue, userDescription: descriptionValue });

const popupCard = new PopupWithForm('#popup-card', addUserCard);
const popupProfile = new PopupWithForm('#popup-profile', updateProfileInfo);
const popupImg = new PopupWithImage('#popup-img');

const cardsList = new Section({
  items: initialCards,
  renderer: item => {
    const card = new Card({
      data: item,
      handleCardClick: () => {
        popupImg.openPopup(item);
      }
    },
      cardTemplate);

    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, cardsContainer);

// ADDING CARD FUNCTIONS

function addUserCard(cardData) {

  const newUserCardData = {
    name: cardData.name,
    link: cardData.description,
  }

  const card = new Card({
    data: newUserCardData,
    handleCardClick: () => {
      popupImg.openPopup(newUserCardData);
    }
  },
    cardTemplate);

  const cardElement = card.generateCard();

  cardsList.addItem(cardElement);

  popupCard.closePopup();
}

// EDIT PROFILE FUNCTIONS

function updateProfileInfo(userData) {
  user.setUserInfo(userData.name, userData.description);
  popupProfile.closePopup();
}

function getProfileInfo() {
  const userInfo = user.getUserInfo();
  profileNameInput.value = userInfo.userName;
  profileDescriptionInput.value = userInfo.userDescription;
}

// EVENT LISTENERS

addCardBtn.addEventListener('click', () => {
  cardFormValidator.resetValidation();
  popupCard.openPopup();
  popupCard.setEventListeners();
});

editProfileBtn.addEventListener('click', () => {
  getProfileInfo();
  profileFormValidator.resetValidation();
  popupProfile.openPopup();
  popupProfile.setEventListeners();
});

// SCRIPTS

cardsList.renderItems();

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();