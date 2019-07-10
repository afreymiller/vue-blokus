var _ = require('lodash');

class CanvasApi {
  getCoord(offset) {
    return Math.floor(offset/20);
  }

  isValid(gameConfig, tileConfig, xCoord, yCoord) {
    let i, j, xCenterOffset, yCenterOffset, tileX, tileY, isTouchingCorner = false;

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (tileConfig[i][j] === 1) {
        xCenterOffset = 2 - i;
        yCenterOffset = 2 - j;

        tileX = xCenterOffset + xCoord;
        tileY = yCenterOffset + yCoord;

        if ((tileX <= 19) && (tileX >= 0) &&
          (tileY <= 19) && (tileY >= 0)) {

            if (_.get(gameConfig, `${tileX-1}.${tileY}`) === 1 ||
              _.get(gameConfig, `${tileX+1}.${tileY}`) === 1 ||
              _.get(gameConfig, `${tileX}.${tileY-1}`) === 1 ||
              _.get(gameConfig, `${tileX}.${tileY+1}`) === 1 
            ) {
              return false;
            }
            
            if (gameConfig[tileX][tileY] === 1) {
              return false;
            }

            if (_.get(gameConfig, `${tileX-1}.${tileY-1}`) === 1 ||
              _.get(gameConfig, `${tileX-1}.${tileY+1}`) === 1 ||
              _.get(gameConfig, `${tileX+1}.${tileY+1}`) === 1 ||
              _.get(gameConfig, `${tileX+1}.${tileY-1}`) === 1
            ) {
              isTouchingCorner = true;
            }
          } else {
            return false;
          }      
      }
    }
  }

  return isTouchingCorner;
  }
  updateGameState(gameConfig, tileConfig, xCoord, yCoord) {
    let i, j;
    if (this.isValid(gameConfig, tileConfig, xCoord, yCoord)) {
      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
          if (tileConfig[i][j] === 1) {
            let xDel = 2 - i;
            let yDel = 2 - j;
    
            
            let mapX = xCoord + xDel;
            let mapY = yCoord + yDel;
              
            gameConfig[mapX][mapY] = 1;
          }
        }
      }
    }
    
    return gameConfig;
  }
}

module.exports = CanvasApi;