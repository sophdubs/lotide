const expect = require('chai').expect;
const without = require('../without');

describe("#without", () => {
  it("Returns a subset of a given array, removing unwanted elements", () => {
    const data = [1, 2, 3, 4, 5];
    const unwantedVal = [2, 5];
    expect(without(data, unwantedVal)).to.deep.equal([1, 3, 4]);
  });
  it("Returns the whole array if array does not contain the given unwanted value", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    const unwantedVal = [9];
    expect(without(data, unwantedVal)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});


