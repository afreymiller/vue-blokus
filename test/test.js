/* eslint-disable no-undef */
let assert = require('assert');
let CanvasApi = require('../src/CanvasApi.js');

describe('CanvasApi', function() {
  describe('canvas api', function() {
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
});
