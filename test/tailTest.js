const expect = require('chai').expect;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for input [1, 2, 3]", () => {
    expect(tail([1, 2, 3])).to.deep.equal([2, 3]);
  });
  it("returns [] for input ['5']", () => {
    expect(tail([])).to.deep.equal([]);
  });
  it("returns [] for input []", () => {
    expect(tail([])).to.deep.equal([]);
  });
});