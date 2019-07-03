
class CanvasApi {
  getCoord(offset) {
    return Math.floor(offset/20);
  }

  isValid(gameConfig, tileConfig, xOffset, yOffset) {
    let xBox = this.getCoord(xOffset);
    let yBox = this.getCoord(yOffset);
  
    let i, j, xTile, yTile;
  
    for (i = 0; i < 5; i++) {
      for (j = 0; j < 5; j++) {
        if (tileConfig[i][j] === 1) {
          xTile = 2 - i;
          yTile = 2 - j;
  
          if ((xTile + xBox <= 20) && (xTile + xBox >= 0) &&
            (yTile + yBox <= 20) && (yTile + yBox >= 0)) {
              if (gameConfig[xTile+xBox][yTile+yBox] === 1) {
                return false;
              }
            }        
        }
      }
    }
  
    return true;
  }
}

module.exports = CanvasApi;