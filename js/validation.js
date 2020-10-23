'use strict';

(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;
  const userNameInput = window.variables.userNameInput;

  userNameInput.addEventListener(`input`, function () {
    const valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Ещё ${(MIN_NAME_LENGTH - valueLength)} симв.`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ${(valueLength - MAX_NAME_LENGTH)} симв.`);
    } else {
      userNameInput.setCustomValidity(``);
    }

    userNameInput.reportValidity();
  });

  const submitValidForm = function () {
    window.variables.wizardSetupWindow.classList.add(`hidden`);
  };

  const submitInvalidForm = function (error) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 15px auto; text-align: center; background-color: transparent;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `36px`;

    node.textContent = error;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const submitHandler = function (evt) {
    window.backend.save(new FormData(form), submitValidForm, submitInvalidForm);
    evt.preventDefault();
  };

  const form = window.variables.wizardSetupWindow.querySelector(`.setup-wizard-form`);
  form.addEventListener(`submit`, submitHandler);
})();
