'use strict';
(function () {
  const userIcon = document.querySelector(`.setup-open`);
  const setupCloseButton = document.querySelector(`.setup-close`);
  const userNameInput = window.variables.userNameInput;
  const wizardSetupWindow = window.variables.wizardSetupWindow;
  const ESCAPE = `Escape`;

  const onPopupEscPress = function (evt) {
    if (evt.key === ESCAPE && userNameInput !== document.activeElement) {
      evt.preventDefault();
      closePopup();
    }
  };

  const openPopup = function () {
    wizardSetupWindow.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = function () {
    wizardSetupWindow.classList.add(`hidden`);
    wizardSetupWindow.style.top = ``;
    wizardSetupWindow.style.left = ``;
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  userIcon.addEventListener(`click`, function () {
    openPopup();

    document.addEventListener(`keydown`, function (evt) {
      if (evt.key === ESCAPE && userNameInput !== document.activeElement) {
        evt.preventDefault();
        closePopup();
      }
    });
  });

  userIcon.addEventListener(`click`, function () {
    openPopup();
  });

  setupCloseButton.addEventListener(`click`, function () {
    closePopup();
  });
})();
