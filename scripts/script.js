// VARIABLES

const editProfileBtn = document.querySelector('.profile__edit-button'),
  addCardBtn = document.querySelector('.profile__add-button'),
  popupProfile = document.querySelectorAll('.popup')[0],
  popupCard = document.querySelectorAll('.popup')[1],
  popupImg = document.querySelectorAll('.popup')[2],
  closePopupProfileBtn = popupProfile.querySelector('.popup__close-button'),
  closePopupCardBtn = popupCard.querySelector('.popup__close-button'),
  closePopupImgBtn = popupImg.querySelector('.popup__close-button'),
  profileNameInput = popupProfile.querySelectorAll('.popup__input')[0],
  profileDescriptionInput = popupProfile.querySelectorAll('.popup__input')[1],
  cardNameInput = popupCard.querySelectorAll('.popup__input')[0],
  cardLinkInput = popupCard.querySelectorAll('.popup__input')[1],
  nameValue = document.querySelector('.profile__name'),
  descriptionValue = document.querySelector('.profile__description'),
  cardTemplate = document.querySelector('#card').content,
  cards = document.querySelector('.cards'),
  cardText = document.querySelector('.card__text'),
  cardImageSrc = document.querySelector('.card__image');

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

function openPopup(popup) {
  const form = popup.querySelector('.popup__form');
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  inputList.forEach((input) =>   hideError(form, input));
  enableValidation();
  setEventListeners(form);

  popup.classList.add('popup_opened');
  popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  const form = popup.querySelector('.popup__form');
  form.reset();
  popup.classList.remove('popup_opened');
}

function createCard(card) {
  const cardElement = cardTemplate.firstElementChild.cloneNode(true),
    cardImg = cardElement.querySelector('.card__image'),
    cardLikeBtn = cardElement.querySelector('.card__like-button');

  cardImg.alt = card.name;
  cardImg.src = card.link;
  cardElement.querySelector('.card__text').textContent = card.name;

  cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
    cardElement.remove();
  });

  cardLikeBtn.addEventListener('click', () => {
    cardLikeBtn.classList.toggle('card__like-button_active');
  });

  cardImg.addEventListener('click', () => {
    const popupImgPicture = popupImg.querySelector('.popup__image'),
      popupImgDescription = popupImg.querySelector('.popup__image-description');

    openPopup(popupImg);
    popupImgPicture.src = card.link;
    popupImgPicture.alt = card.name;
    popupImgDescription.textContent = card.name;
  });

  return cardElement;
}

function addCard(container, cardElement) {
  container.prepend(cardElement);
}

function addUserCard(event) {
  event.preventDefault();
  const newUserCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  addCard(cards, createCard(newUserCard));

  cardNameInput.value = '';
  cardLinkInput.value = '';

  closePopup(popupCard);
}

function updateProfileInfo(event) {
  event.preventDefault();
  nameValue.textContent = profileNameInput.value;
  descriptionValue.textContent = profileDescriptionInput.value;
  closePopup(popupProfile);
}

function getProfileInfo() {
  profileNameInput.value = nameValue.textContent.trim();
  profileDescriptionInput.value = descriptionValue.textContent.trim();
}

// SCRIPTS

getProfileInfo();

initialCards.forEach(item => {
  addCard(cards, createCard(item))
});

addCardBtn.addEventListener('click', () => openPopup(popupCard));
popupCard.addEventListener('submit', addUserCard);

editProfileBtn.addEventListener('click', () => {
  getProfileInfo();
  openPopup(popupProfile);
});

popupProfile.addEventListener('submit', updateProfileInfo);

closePopupProfileBtn.addEventListener('click', () => closePopup(popupProfile));
closePopupCardBtn.addEventListener('click', () => closePopup(popupCard));
closePopupImgBtn.addEventListener('click', () => closePopup(popupImg));