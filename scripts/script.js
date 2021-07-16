const editProfileBtn = document.querySelector('.profile__edit-button'),
      closePopupBtn = document.querySelector('.popup__close-button'),
      popup = document.querySelector('.popup'),
      nameInput = document.querySelector('.popup__input_type_name'),
      descriptionInput = document.querySelector('.popup__input_type_description'),
      nameValue = document.querySelector('.profile__name'),
      descriptionValue = document.querySelector('.profile__description'),
      popupForm = document.querySelector('.popup__form');

function togglePopupClass() {
  popup.classList.toggle("popup_opened");
};

function updateProfileInfo() {
  nameValue.textContent = nameInput.value;
  descriptionValue.textContent = descriptionInput.value;
  togglePopupClass();
};

function getProfileInfo() {
  togglePopupClass();
  nameInput.value = nameValue.textContent.trim();
  descriptionInput.value = descriptionValue.textContent.trim();
};

function submitPopupForm(event) {
  event.preventDefault();
  updateProfileInfo();
}

editProfileBtn.addEventListener('click', getProfileInfo);

closePopupBtn.addEventListener('click', togglePopupClass);

popupForm.addEventListener('submit', submitPopupForm);