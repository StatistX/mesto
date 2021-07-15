const editProfileBtn = document.querySelector('.profile__edit-button'),
      closePopupBtn = document.querySelector('.popup__close-button'),
      saveProfileBtn = document.querySelector('.popup__save-button'),
      popup = document.querySelector('.popup'),
      nameInput = document.querySelector('.popup__input_type_name'),
      descriptionInput = document.querySelector('.popup__input_type_description');
      nameValue = document.querySelector('.profile__name'),
      descriptionValue = document.querySelector('.profile__description');

function togglePopupClass() {
  popup.classList.toggle("popup_opened");
};

function updateProfileInfo() {
  nameValue.innerText = nameInput.value;
  descriptionValue.innerText = descriptionInput.value;
}

editProfileBtn.addEventListener('click', () => {
  togglePopupClass();
  nameInput.value = nameValue.innerText;
  descriptionInput.value = descriptionValue.innerText;
});

closePopupBtn.addEventListener('click', () => {
  togglePopupClass();
});

saveProfileBtn.addEventListener('click', () => {
  updateProfileInfo();
  togglePopupClass();
});