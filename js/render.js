'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const wizardSetupWindow = window.variables.wizardSetupWindow;
  const similarListElement = wizardSetupWindow.querySelector(`.setup-similar-list`);
  const similar = document.querySelector(`.setup-similar`);
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

  window.render = function (wizards) {
    const takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT
      ? MAX_SIMILAR_WIZARD_COUNT
      : wizards.length;

    similarListElement.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    similar.classList.remove(`hidden`);
  };
})();
