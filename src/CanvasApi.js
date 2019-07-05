
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

              if (gameConfig[tileX - 1][tileY - 1] === 1
                || gameConfig[tileX - 1][tileY + 1] === 1
                || gameConfig[tileX + 1][tileY + 1] === 1
                || gameConfig[tileX + 1][tileY - 1] === 1) {

                isTouchingCorner = true;
            }        
          }
        }
      }
    }

    return isTouchingCorner;
  }
}

module.exports = CanvasApi;