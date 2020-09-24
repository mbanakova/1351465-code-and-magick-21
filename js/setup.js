'use strict';
const WIZARDS = [];
const WIZARDS_AMOUNT = 4;
const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');

const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const getRandomIndex = function (array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const createWizards = function () {

  for (let i = 0; i < WIZARDS_AMOUNT; i++) {
    WIZARDS.push({
      name: getRandomIndex(WIZARD_NAMES),
      surname: getRandomIndex(WIZARD_SURNAMES),
      coatColor: getRandomIndex(WIZARD_COATS),
      eyesColor: getRandomIndex(WIZARD_EYES)
    });

    let nameIndex = WIZARD_NAMES.indexOf(WIZARDS[i].name);
    if (nameIndex > -1) {
      WIZARD_NAMES.splice(nameIndex, 1);
    }

    let surnameIndex = WIZARD_SURNAMES.indexOf(WIZARDS[i].surname);
    if (surnameIndex > -1) {
      WIZARD_SURNAMES.splice(surnameIndex, 1);
    }
    let coatIndex = WIZARD_COATS.indexOf(WIZARDS[i].coatColor);
    if (coatIndex > -1) {
      WIZARD_COATS.splice(coatIndex, 1);
    }
    let eyeIndex = WIZARD_EYES.indexOf(WIZARDS[i].eyesColor);
    if (eyeIndex > -1) {
      WIZARD_EYES.splice(eyeIndex, 1);
    }
  }

  return WIZARDS;
};
createWizards();

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ` ` + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < WIZARDS.length; i++) {
  fragment.appendChild(renderWizard(WIZARDS[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
