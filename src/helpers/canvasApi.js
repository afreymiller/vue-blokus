/* eslint-disable no-console */
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

const getCoord = (offset) => {
  return Math.floor(offset/constants.TILE_LENGTH);
}

const renderPolyominoTiles = (coords, ctx) => {
  coords.map(c => ctx.fillRect(c.x, 
    c.y, 
    constants.TILE_LENGTH - 1, 
    constants.TILE_LENGTH - 1)
  )
}

const getTileCoordsToRender = (shapeConfig, xOffSet, yOffset) => {
  let xBox = getCoord(xOffSet);
  let yBox = getCoord(yOffset);

  let i, j = 0;
  const coords = [];

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (shapeConfig[i][j] === 1) {
        let xDel = 2 - i;
        let yDel = 2 - j;

        coords.push({
          x: ((xBox + xDel) * constants.TILE_LENGTH) + 1,
          y: ((yBox + yDel) * constants.TILE_LENGTH) + 1
        });
      }
    }
  }

  return coords;
}

const isValid = (gameConfig, tileConfig, xCoord, yCoord) => {  

  let i, j, xCenterOffset, yCenterOffset, tileX, tileY;

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (tileConfig[i][j] === 1) {
        xCenterOffset = 2 - i;
        yCenterOffset = 2 - j;

        if ((xCenterOffset + xCoord <= 20) && (xCenterOffset + xCoord >= 0) &&
          (yCenterOffset + yCoord <= 20) && (yCenterOffset + yCoord >= 0)) {

            tileX = xCenterOffset + xCoord;
            tileY = yCenterOffset + yCoord;

            if (gameConfig[tileX - 1][tileY] === 1 
              || gameConfig[tileX + 1][tileY] === 1
              || gameConfig[tileX][tileY - 1] === 1
              || gameConfig[tileX][tileY + 1] === 1) {
                return false;
              }
            
            if (gameConfig[tileX][tileY] === 1) {
              return false;
            }
          }        
      }
    }
  }

  return true;
}

const canvasApi = {
  getCoords: (x) => {
    return getCoord(x);
  },
  updateCanvas: (tileConfig, gameConfig, xOffset, yOffset) => {
  
    let ctx = initGrid();

    ctx.fillStyle = constants.BLUE;

    let i, j = 0;

    const currState = [];

    /* TODO: This should eventually live in its own function */
    for (i = 0; i < 20; i++) {
      for (j = 0; j < 20; j++) {
        if (gameConfig[i][j] === 1) {
          currState.push({
            x: (20 * i) + 1,
            y: (20 * j) + 1
          });
        }
      }
    }

    /* TODO: Coord should just be its own class */
    let xCoord = getCoord(xOffset);
    let yCoord = getCoord(yOffset);

    const isValidMove = isValid(gameConfig, tileConfig, xCoord, yCoord);

    renderPolyominoTiles(currState, ctx);

    if (isValidMove) {
      const coords = getTileCoordsToRender(tileConfig, xOffset, yOffset);
      renderPolyominoTiles(coords, ctx);
    }
  }
}

export default canvasApi;