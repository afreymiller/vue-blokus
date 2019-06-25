/* eslint-disable no-undef */
let assert = require('assert');
let Set = require('./Set.js');

describe('Array', function() {
  describe('indexOf()', function() {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Set', function() {
  describe('isEmpty()', function() {
    it('should return true if set is empty', () => {
      let s = new Set();
      assert.equal(s.isEmpty(), true);
    })
  });
});
