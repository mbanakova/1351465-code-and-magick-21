'use strict';

(function () {
  const WIZARDS = [];
  const WIZARDS_AMOUNT = 4;
  const wizardSetupWindow = window.variables.wizardSetupWindow;


  const similarListElement = wizardSetupWindow.querySelector(`.setup-similar-list`);

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

  // создаёт массив магов
  const createWizards = function () {
    for (let i = 0; i < WIZARDS_AMOUNT; i++) {
      WIZARDS.push({
        name: window.setup.getRandomIndex(window.data.WIZARD_NAMES),
        surname: window.setup.getRandomIndex(window.data.WIZARD_SURNAMES),
        coatColor: window.setup.getRandomIndex(window.data.WIZARD_COATS),
        eyesColor: window.setup.getRandomIndex(window.data.WIZARD_EYES)
      });

      let nameIndex = window.data.WIZARD_NAMES.indexOf(WIZARDS[i].name);
      let surnameIndex = window.data.WIZARD_SURNAMES.indexOf(WIZARDS[i].surname);
      let coatIndex = window.data.WIZARD_COATS.indexOf(WIZARDS[i].coatColor);
      let eyeIndex = window.data.WIZARD_EYES.indexOf(WIZARDS[i].eyesColor);

      // Исключает повторяющиеся варианты
      let expelDuplications = function (index, array) {
        if (index > -1) {
          array.splice(index, 1);
        }
      };
      expelDuplications(nameIndex, window.data.WIZARD_NAMES);
      expelDuplications(surnameIndex, window.data.WIZARD_SURNAMES);
      expelDuplications(coatIndex, window.data.WIZARD_COATS);
      expelDuplications(eyeIndex, window.data.WIZARD_EYES);
    }

    return WIZARDS;
  };
  createWizards();

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + ` ` + wizard.surname;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < WIZARDS.length; i++) {
    fragment.appendChild(renderWizard(WIZARDS[i]));
  }
  similarListElement.appendChild(fragment);

  wizardSetupWindow.querySelector(`.setup-similar`).classList.remove(`hidden`);

})();
