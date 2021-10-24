// FUNCTIONS

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

function openPopup(popup) {
  const { formSelector } = valiationObj;
  const formItem = popup.querySelector(formSelector);

  if (formItem !== null) {
    resetValidation(formItem, valiationObj);
  }

  popup.classList.add('popup_opened');

  document.addEventListener('click', closePopupByClickOutside);
  document.addEventListener('keydown', closePopupByEscBtn);
}

function closePopup() {
  const activePopup = document.querySelector('.popup_opened');

  activePopup.classList.remove('popup_opened');

  document.removeEventListener('click', closePopupByClickOutside);
  document.removeEventListener('keydown', closePopupByEscBtn);
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

  closePopup();
}

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

function setPlaceCardInfo() {
  cardNameInput.value = '';
  cardLinkInput.value = '';
}

// SCRIPTS

getProfileInfo();

initialCards.forEach(item => {
  addCard(cards, createCard(item))
});

addCardBtn.addEventListener('click', () => {
  setPlaceCardInfo();
  openPopup(popupCard)
});

popupCard.addEventListener('submit', addUserCard);

editProfileBtn.addEventListener('click', () => {
  getProfileInfo();
  openPopup(popupProfile);
});

popupProfile.addEventListener('submit', updateProfileInfo);

closePopupProfileBtn.addEventListener('click', closePopup);
closePopupCardBtn.addEventListener('click', closePopup);
closePopupImgBtn.addEventListener('click', closePopup);