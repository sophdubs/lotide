const expect = require('chai').expect;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns a flattened single-level array when passed in a nested array", () => {
    expect(flatten([1, [2, 3]])).to.deep.equal([1, 2, 3]);
  });
  it("returns an empty flattened single-level array when passed in a nested empty array", () => {
    expect(flatten([[]])).to.deep.equal([]);
  });
});