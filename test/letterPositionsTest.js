const expect = require('chai').expect;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns an object with the characters of the string as keys and the an array of indices where each character was found as the value", () => {
    const result = letterPositions('hello');
    expect(result['h']).to.deep.equal([0]);
  });
  it("returns an object with the characters of the string as keys and the an array of indices where each character was found as the value", () => {
    const result = letterPositions('hello');
    expect(result['l']).to.deep.equal([2, 3]);
  });
});