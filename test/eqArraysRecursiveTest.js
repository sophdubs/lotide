const eqArraysRecursive = require('../eqArraysRecursive');
const assert = require('chai').assert;

describe("#eqArraysRecursive", () => {
  it("returns true for equal input arrays", () => {
    assert.strictEqual(eqArraysRecursive([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for unequal input arrays ", () => {
    assert.strictEqual(eqArraysRecursive([1, 2, 3], [1, 2]), false);
  });
  it("returns true for equal input arrays that include nested arrays", () => {
    assert.strictEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false for unequal input arrays that include nested arrays", () => {
    assert.strictEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
});