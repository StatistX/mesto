const editProfileBtn = document.querySelector('.profile__edit-button'),
  closePopupBtn = document.querySelector('.popup__close-button'),
  popup = document.querySelector('.popup'),
  nameValue = document.querySelector('.profile__name'),
  descriptionValue = document.querySelector('.profile__description'),
  popupForm = document.querySelector('.popup__form'),
  addCardBtn = document.querySelector('.profile__add-button'),
  popupTitle = document.querySelector('.popup__title'),
  cardTemplate = document.querySelector('#card').content,
  cards = document.querySelector('.cards'),
  cardText = document.querySelector('.card__text'),
  cardImageSrc = document.querySelector('.card__image');

let nameInput = document.querySelector('.popup__input_type_name');
let descriptionInput = document.querySelector('.popup__input_type_description');
let popupSaveButton = document.querySelector('.popup__save-button');


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

initialCards.map(card => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__text').textContent = card.name;
  cards.append(cardElement);
});

function togglePopupClass() {
  popup.classList.toggle("popup_opened");
};

function updateProfileInfo() {
  nameValue.textContent = nameInput.value;
  descriptionValue.textContent = descriptionInput.value;
  togglePopupClass();
};

function addNewCard() {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = descriptionInput.value;
  cardElement.querySelector('.card__image').alt = nameInput.value;
  cardElement.querySelector('.card__text').textContent = nameInput.value;
  cards.append(cardElement);
  togglePopupClass();
  Array.from(cards.children).map((child, index) => console.log(child, index))
  
}

function getProfileInfo() {
  togglePopupClass();
  setPopupInfoProfile();
};

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

addCardBtn.addEventListener('click', () => {
  togglePopupClass();
  setPopupInfoLocation();
});

editProfileBtn.addEventListener('click', getProfileInfo);

closePopupBtn.addEventListener('click', togglePopupClass);