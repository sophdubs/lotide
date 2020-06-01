const expect = require('chai').expect;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for input []", () => {
    expect(middle([])).to.deep.equal([]);
  });
  it("returns [] for input [1]", () => {
    expect(middle([1])).to.deep.equal([]);
  });
  it("returns [] for input [1, 2]", () => {
    expect(middle([1, 2])).to.deep.equal([]);
  });
  it("returns [2] for input [1, 2, 3]", () => {
    expect(middle([1, 2, 3])).to.deep.equal([2]);
  });
  it("returns [2, 3] for input [1, 2, 3, 4]", () => {
    expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
});