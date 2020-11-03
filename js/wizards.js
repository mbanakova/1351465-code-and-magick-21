'use strict';

(function () {
  let chars = [];
  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    window.render(chars.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  const wizardElement = document.querySelector(`.setup-wizard`);

  const wizardCoatElement = wizardElement.querySelector(`.wizard-coat`);
  wizardCoatElement.addEventListener(`click`, function () {
    const newColor = window.utils.getRandomElement(window.data.USER_COATS_ARRAY);
    // eslint-disable-next-line no-invalid-this
    this.style.fill = newColor;
    coatColor = newColor;
    window.debounce(updateWizards);
  });

  const wizardEyesElement = wizardElement.querySelector(`.wizard-eyes`);
  wizardEyesElement.addEventListener(`click`, function () {
    const newColor = window.utils.getRandomElement(window.data.USER_EYES_ARRAY);
    // eslint-disable-next-line no-invalid-this
    this.style.fill = newColor;
    eyesColor = newColor;
    window.debounce(updateWizards);
  });

  const successHandler = function (data) {
    chars = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.validation.errorHandler);
})();
