/* eslint-disable no-undef */
let assert = require('assert');
let CanvasApi = require('../src/CanvasApi.js');

describe('Array', function() {
  describe('indexOf()', function() {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('CanvasApi', function() {
  describe('canvas api', function() {
    it('should initialize', () => {
      let canvasApi = new CanvasApi();
      canvasApi.getCoord(200, 100);
    });
  })
});
