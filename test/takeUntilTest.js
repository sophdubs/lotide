const expect = require('chai').expect;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("Returns the first 5 elements of the input array if the 6th element would return a truthy value when called with the callback function", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const cb = val => val < 0;
    expect(takeUntil(data, cb)).to.deep.equal([1, 2, 5, 7, 2]);
  });
  it("Returns the whole array if none of the array elements would return truthy values when being called with the callback", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const cb = val => val < -5;
    expect(takeUntil(data, cb)).to.deep.equal([1, 2, 5, 7, 2, -1, 2, 4, 5]);
  });
});