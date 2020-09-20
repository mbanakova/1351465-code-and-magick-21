'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_GAP = 50;
var TEXT_HEIGHT = 12;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
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
    'rgba(0, 0, 0, 0.7)'
  );

  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP + GAP, FONT_GAP + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP + GAP, FONT_GAP + GAP + TEXT_HEIGHT + FONT_GAP);

  var maxTimes = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var indention = Math.floor(BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTimes));
    var SIDE_GAP = (CLOUD_WIDTH - (BAR_WIDTH * names.length + BAR_GAP * (names.length - 1))) / 2;

    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i,
      FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + indention
    );

    if (names[i].includes('Вы')) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      var lightness = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      ctx.fillStyle = `hsl(248, ${saturation(90)}%, ${lightness(80)}%)`;
    }

    ctx.fillRect(
      CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + indention,
      BAR_WIDTH,
      BAR_HEIGHT * times[i] / maxTimes
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
      names[i],
      CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + BAR_HEIGHT + FONT_GAP
    );
  }
};
