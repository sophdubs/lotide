const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays", () => {
  it("returns true for equal input arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for unequal input arrays ", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
});
