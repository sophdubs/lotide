const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("returns the first key for which contains the given value", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it("returns undefined if there is no key with that given value is found", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});