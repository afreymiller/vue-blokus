/* eslint-disable no-undef */
let assert = require('assert');
let CanvasApi = require('../src/CanvasApi.js');
let TileExamples = require('./tileExamples.js');
let GameExamples = require('./gameExamples.js');

describe('CanvasApi', function() {
  describe('getCoord()', function() {
    it('should return 20 when offset is 401', () => {
      let canvasApi = new CanvasApi();
      let coord = canvasApi.getCoord(401);

      assert.equal(coord, 20);
    });

    it('should return 20 when offset is 400', () => {
      let canvasApi = new CanvasApi();
      let coord = canvasApi.getCoord(400);

      assert.equal(coord, 20);
    });

    it('should return 19 when offset is 399', () => {
      let canvasApi = new CanvasApi();
      let coord = canvasApi.getCoord(399);

      assert.equal(coord, 19);
    });

    /* TODO: Double check this test case */
    it('should return 0 when offset is -19', () => {
      it('should return 20 when offset is 400', () => {
        let canvasApi = new CanvasApi();
        let coord = canvasApi.getCoord(-19);
  
        assert.equal(coord, 0);
      });
    })
  })

  describe('isValidMove()', function() {

    it('should return is valid for gameConfig 1, tileConfig 1, where cursor corresponds to coord x = 2, y = 3', () => {
      let x = 2;
      let y = 3;

      let canvasApi = new CanvasApi();

      assert.equal(canvasApi.isValid(GameExamples.GAME_1, TileExamples.TILE_1, x, y), true);
    });

    it('should return is invalid for gameConfig 1, tileConfig 1, where cursor corresponds to coord x = 15, y = 15', () => {
      let x = 15;
      let y = 15;

      let canvasApi = new CanvasApi();

      assert.equal(canvasApi.isValid(GameExamples.GAME_1, TileExamples.TILE_1, x, y), false);
    });
  });
});
