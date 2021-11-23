// POPUP FUNCTIONS

export function closePopupByEscBtn(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

export function closePopupByClickOutside(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
};

export function closePopup() {
  const activePopup = document.querySelector('.popup_opened');

  activePopup.classList.remove('popup_opened');

  document.removeEventListener('click', closePopupByClickOutside);
  document.removeEventListener('keydown', closePopupByEscBtn);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('click', closePopupByClickOutside);
  document.addEventListener('keydown', closePopupByEscBtn);
}