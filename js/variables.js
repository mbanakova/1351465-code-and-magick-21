'use strict';

(function () {
  const userNameInput = document.querySelector(`.setup-user-name`);
  const wizardSetupWindow = document.querySelector(`.setup`);

  window.variables = {
    userNameInput: userNameInput,
    wizardSetupWindow: wizardSetupWindow
  };
})();
