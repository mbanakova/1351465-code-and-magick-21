'use strict';

(function () {
  const wizardSetupWindow = window.variables.wizardSetupWindow;
  const MAX_SIMILAR_WIZARD_COUNT = 4;

  const similarListElement = wizardSetupWindow.querySelector(`.setup-similar-list`);

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    wizardSetupWindow.querySelector(`.setup-similar`).classList.remove(`hidden`);
  }, window.validation.errorHandler);
})();
