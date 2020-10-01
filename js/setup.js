'use strict';

const WIZARDS = [];
const WIZARDS_AMOUNT = 4;
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

const USER_COATS_ARRAY = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const USER_EYES_ARRAY = [`black`, `red`, `blue`, `yellow`, `green`];
const USER_FIREBALLS_ARRAY = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const USER_COAT = document.querySelector(`.setup-wizard .wizard-coat`);
const USER_EYE = document.querySelector(`.setup-wizard .wizard-eyes`);
const USER_FIREBALL = document.querySelector(`.setup-fireball-wrap`);

const wizardSetupWindow = document.querySelector(`.setup`);
const userIcon = document.querySelector(`.setup-open`);
const setupCloseButton = document.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);
const userCoatInput = document.querySelector(`input[name=coat-color]`);
const userEyesInput = document.querySelector(`input[name=eyes-color]`);
const userFireballInput = document.querySelector(`input[name=fireball-color]`);

const ESCAPE = `Escape`;

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

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

const similarListElement = wizardSetupWindow.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

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

USER_COAT.addEventListener(`click`, function () {
  let randomColor = getRandomIndex(USER_COATS_ARRAY);
  USER_COAT.style.fill = randomColor;
  userCoatInput.value = randomColor;
});

USER_EYE.addEventListener(`click`, function () {
  let randomColor = getRandomIndex(USER_EYES_ARRAY);
  USER_EYE.style.fill = randomColor;
  userEyesInput.value = randomColor;
});

USER_FIREBALL.addEventListener(`click`, function () {
  let randomColor = getRandomIndex(USER_FIREBALLS_ARRAY);
  USER_FIREBALL.style.backgroundColor = randomColor;
  userFireballInput.value = randomColor;
});
