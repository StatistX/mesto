// VARIABLES

const editProfileBtn = document.querySelector('.profile__edit-button'),
  closePopupBtn = document.querySelector('.popup__close-button'),
  closePopupImgBtn = document.querySelector('.popup-img__close-button'),
  popup = document.querySelector('.popup'),
  nameValue = document.querySelector('.profile__name'),
  descriptionValue = document.querySelector('.profile__description'),
  popupForm = document.querySelector('.popup__form'),
  addCardBtn = document.querySelector('.profile__add-button'),
  popupTitle = document.querySelector('.popup__title'),
  cardTemplate = document.querySelector('#card').content,
  cards = document.querySelector('.cards'),
  cardText = document.querySelector('.card__text'),
  cardImageSrc = document.querySelector('.card__image'),
  popupImg = document.querySelector('.popup-img');

let nameInput = document.querySelector('.popup__input_type_name'),
    descriptionInput = document.querySelector('.popup__input_type_description'),
    popupSaveButton = document.querySelector('.popup__save-button');

const initialCards = [
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

// FUNCTIONS

function initCards(card) {
  const cardElement = cardTemplate.firstElementChild.cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__text').textContent = card.name;

  cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
    cardElement.remove();
  });

  cardElement.querySelector('.card__like-button').addEventListener('click', () => {
    cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__image').addEventListener('click', () => {
    popupImg.classList.toggle('popup-img_opened');
    popupImg.querySelector('.popup-img__image').src = card.link;
    popupImg.querySelector('.popup-img__image').alt = card.name;
    popupImg.querySelector('.popup-img__description').textContent = card.name;
  });

  cards.append(cardElement);
}

function togglePopupClass() {
  popup.classList.toggle('popup_opened');
}

function togglePopupImgClass() {
  popupImg.classList.toggle('popup-img_opened');
}

function updateProfileInfo() {
  nameValue.textContent = nameInput.value;
  descriptionValue.textContent = descriptionInput.value;
  togglePopupClass();
}

function addNewCard() {
  const newCard = {
    name: nameInput.value,
    link: descriptionInput.value,
  };

  initCards(newCard)

  togglePopupClass();
}

function getProfileInfo() {
  togglePopupClass();
  setPopupInfoProfile();
}

function submitPopupFormProfile(event) {
  event.preventDefault();
  updateProfileInfo();
  popupForm.removeEventListener('submit', submitPopupFormProfile);
}

function submitPopupFormLocation(event) {
  event.preventDefault();
  addNewCard();
  popupForm.removeEventListener('submit', submitPopupFormLocation);
}

function setPopupInfoProfile() {
  popupTitle.textContent = 'Редактировать профиль';
  nameInput.placeholder = 'Имя';
  nameInput.value = nameValue.textContent.trim();
  descriptionInput.placeholder = 'О себе';
  descriptionInput.value = descriptionValue.textContent.trim();
  popupSaveButton.textContent = 'Сохранить';
  popupForm.addEventListener('submit', submitPopupFormProfile);
}

function setPopupInfoLocation() {
  popupTitle.textContent = 'Новое место';
  nameInput.placeholder = 'Название';
  nameInput.value = '';
  descriptionInput.placeholder = 'Ссылка на картинку';
  descriptionInput.value = '';
  popupSaveButton.textContent = 'Создать';
  popupForm.addEventListener('submit', submitPopupFormLocation);
}

// SCRIPTS

initialCards.forEach(initCards);

addCardBtn.addEventListener('click', () => {
  togglePopupClass();
  setPopupInfoLocation();
});

editProfileBtn.addEventListener('click', getProfileInfo);

closePopupBtn.addEventListener('click', togglePopupClass);
closePopupImgBtn.addEventListener('click', togglePopupImgClass);