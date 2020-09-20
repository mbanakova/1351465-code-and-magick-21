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
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP + GAP, FONT_GAP + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP + GAP, FONT_GAP + GAP + TEXT_HEIGHT + FONT_GAP);

  // var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  // var points = [2725, 4025, 1244, 1339];

  var maxPoints = getMaxElement(points);

  for (var i = 0; i < players.length; i++) {

    var indention = Math.floor(BAR_HEIGHT - (BAR_HEIGHT * points[i] / maxPoints));

    ctx.fillText(
      Math.round(points[i]),
      CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
      FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + indention
    );

    if (players[i].includes('Вы')) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      var lightness = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      console.log(saturation(100));
      console.log(lightness(100));
      ctx.fillStyle = `hsl(248, ${saturation(90)}%, ${lightness(80)}%)`;
    }

    ctx.fillRect(
      CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + indention,
      BAR_WIDTH,
      BAR_HEIGHT * points[i] / maxPoints
    );
    console.log('отступ' + ' ' + Math.floor(BAR_HEIGHT - (BAR_HEIGHT * points[i] / maxPoints)));

    ctx.fillStyle = '#000';
    ctx.fillText(
      players[i],
      CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + FONT_GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + FONT_GAP + BAR_HEIGHT + FONT_GAP
    );
  }
};
