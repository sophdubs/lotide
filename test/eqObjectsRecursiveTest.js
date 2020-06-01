
const eqObjectsRecursive = require('../eqObjectsRecursive');
const assert = require('chai').assert;

describe("#eqObjectsRecursive", () => {
  it("returns true for equal input objects where keys map to primitive values", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjectsRecursive(ab, ba), true);
  });
  it("returns false for unequal input objects where keys map to primitive values", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjectsRecursive(ab, abc), false);
  });
  it("returns true for equal input objects where keys map to arrays", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjectsRecursive(cd, dc), true);
  });
  it("returns false for unequal input objects where keys map to arrays", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjectsRecursive(cd, cd2), false);
  });
  it("returns true for equal input objects where keys map to objects", () => {
    const ef = { a: { z: 1 }, b: 2 };
    const fe = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjectsRecursive(ef, fe), true);
  });
  it("returns false for unequal input objects where keys map to objects", () => {
    const gh = { a: { y: 0, z: 1 }, b: 2 };
    const hg = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjectsRecursive(gh, hg), false);
  });
});
