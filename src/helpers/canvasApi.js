var $ = require('jquery');

import constants from './constants.js';

const initGrid = () => {
  var bw = constants.CANVAS_WIDTH;
  var bh = constants.CANVAS_HEIGHT;
  //padding around grid
  let x;

  $(`#${constants.BOARD_SELECTOR}`).attr({width: bw + 1, height: bh + 1});

  let canvas = document.getElementById(constants.BOARD_SELECTOR);

  let ctx = canvas.getContext("2d");
  for (x = 0; x <= bw; x += constants.TILE_LENGTH) {
    ctx.moveTo(0.5 + x, 0);
    ctx.lineTo(0.5 + x, bh);
  }

  for (x = 0; x <= bh; x += constants.TILE_LENGTH) {
    ctx.moveTo(0, 0.5 + x);
    ctx.lineTo(bw, 0.5 + x);
  }

  ctx.strokeStyle = constants.BLACK;
  ctx.stroke();

  return ctx;
}

const renderShape = (shapeConfig, xOffSet, yOffset, ctx) => {
  let xBox = Math.floor(xOffSet/constants.TILE_LENGTH);
  let yBox = Math.floor(yOffset/constants.TILE_LENGTH);

  let i, j = 0;

  /* TODO: Annotate this function */

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (shapeConfig[i][j] === 1) {
        let xDel = 2 - i;
        let yDel = 2 - j;

        ctx.fillRect(((xBox + xDel) * constants.TILE_LENGTH) + 1, 
          ((yBox + yDel) * constants.TILE_LENGTH) + 1, 
          constants.TILE_LENGTH - 1, 
          constants.TILE_LENGTH - 1);
      }
    }
  }
}

const canvasApi = {
  updateCanvas: (shapeConfig, xOffSet, yOffset) => {
    //let canvas = document.getElementById('grid')
  
    let ctx = initGrid();

    ctx.fillStyle = constants.LIGHT_GRAY;

    renderShape(shapeConfig, xOffSet, yOffset, ctx);
  }
}

export default canvasApi;