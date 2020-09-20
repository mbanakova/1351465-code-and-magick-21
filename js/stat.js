'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_GAP = 50;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
// var BAR_HEIGHT = CLOUD_HEIGHT - FONT_GAP - (TEXT_HEIGHT + FONT_GAP) * 4 - FONT_GAP;
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

window.renderStatistics = function (ctx, players, points) {
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
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, FONT_GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, FONT_GAP + TEXT_HEIGHT + FONT_GAP);

  // var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  // var points = [2725, 4025, 1244, 1339];

  var maxPoints = getMaxElement(points);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
      Math.round(points[i]),
      CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
      FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + GAP
    );

    if (players[i].includes('Вы')) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var hsl = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      console.log(hsl(100));
      ctx.fillStyle = `hsl(248, ${hsl(100)}%, ${hsl(100)}%)`;
    }

    ctx.fillRect(
      CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + GAP,
      BAR_WIDTH,
      BAR_HEIGHT * points[i] / maxPoints
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
      players[i],
      CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + BAR_HEIGHT + GAP
      // FIRST_PLAYER_NAME_X,
      // FIRST_PLAYER_NAME_Y
    );
  }
};
