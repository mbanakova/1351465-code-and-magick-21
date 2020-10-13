'use strict';

(function () {
  const USER_COAT = document.querySelector(`.setup-wizard .wizard-coat`);
  const USER_EYE = document.querySelector(`.setup-wizard .wizard-eyes`);
  const USER_FIREBALL = document.querySelector(`.setup-fireball-wrap`);
  const userCoatInput = document.querySelector(`input[name=coat-color]`);
  const userEyesInput = document.querySelector(`input[name=eyes-color]`);
  const userFireballInput = document.querySelector(`input[name=fireball-color]`);

  // Покраска магов
  const colorize = function (element, array, direction) {
    element.addEventListener(`click`, function () {
      let randomColor = window.setup.getRandomIndex(array);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = randomColor;
      } else {
        element.style.fill = randomColor;
      }
      direction.value = randomColor;
    });
  };
  colorize(USER_COAT, window.data.USER_COATS_ARRAY, userCoatInput);
  colorize(USER_EYE, window.data.USER_EYES_ARRAY, userEyesInput);
  colorize(USER_FIREBALL, window.data.USER_FIREBALLS_ARRAY, userFireballInput);
})();
