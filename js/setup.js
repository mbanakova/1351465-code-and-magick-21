'use strict';
(function () {
  const getRandomIndex = function (array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  window.setup = {
    getRandomIndex: getRandomIndex
  };
})();
