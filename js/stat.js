'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 20;
const BAR_GAP = 50;
const TEXT_HEIGHT = 12;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + FONT_GAP + GAP, FONT_GAP + GAP + TEXT_HEIGHT);
  ctx.fillText(`Список результатов:`, CLOUD_X + FONT_GAP + GAP, FONT_GAP + GAP + TEXT_HEIGHT + FONT_GAP);

  const maxTimes = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {

    let indention = Math.floor(BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTimes));
    let SIDE_GAP = (CLOUD_WIDTH - (BAR_WIDTH * names.length + BAR_GAP * (names.length - 1))) / 2;

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i,
        FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + indention
    );

    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      let getRandomPercent = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      };
      ctx.fillStyle = `hsl(248, ${getRandomPercent(90)}%, ${getRandomPercent(80)}%)`;
    }

    ctx.fillRect(
        CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + indention,
        BAR_WIDTH,
        BAR_HEIGHT * times[i] / maxTimes
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + BAR_HEIGHT + FONT_GAP
    );
  }
};
