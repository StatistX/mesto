export default class UserInfo {
  constructor(user) {
    this._userName = document.querySelector(user.userName);
    this._userDescription = document.querySelector(user.userDescription);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent.trim(),
      userDescription: this._userDescription.textContent.trim(),
    }
  }

  setUserInfo(userNameInputValue, userDescriptionInputValue) {
    this._userName.textContent = userNameInputValue;
    this._userDescription.textContent = userDescriptionInputValue;
  }
}