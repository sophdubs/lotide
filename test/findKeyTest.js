const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const stars = {
    "Blue Hill": 1,
    "Akaleri": 3,
    "noma": 2,
    "elBulli": 1,
    "Ora": 2,
    "Akelarre": 3
  };
  it("returns the first key for which the callback returns a truthy value", () => {
    assert.strictEqual(findKey(stars, x => x === 1), 'Blue Hill');
  });
  it("returns the first key for which the callback returns a truthy value", () => {
    assert.strictEqual(findKey(stars, x => x === 2), 'noma');
  });
  it("returns the undefined if there is no key for which the callback returns a truthy value", () => {
    assert.strictEqual(findKey(stars, x => x === 4), undefined);
  });
});