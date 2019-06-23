/* eslint-disable no-undef */
let assert = require('assert');
// import canvasApi from '../src/helpers/canvasApi.js';

describe('Array', function() {
  describe('indexOf()', function() {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
