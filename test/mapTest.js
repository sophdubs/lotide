const map = require('../map');
const expect = require('chai').expect;

describe("#map", () => {
  it("should work for input arrays containing strings", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const cb = word => word[0];
    expect(map(words, cb)).to.deep.equal(['g', 'c', 't', 'm', 't']);
  });
  it("should work for input arrays containing numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    const cb = num => num * 2;
    expect(map(nums, cb)).to.deep.equal([2, 4, 6, 8, 10]);
  });
  it("should work for input arrays containing objects", () => {
    const input = [
      { x: 3, y: 4 },
      { x: 12, y: 5 },
      { x: 8, y: 15 }
    ];
    const cb = obj => Math.sqrt(obj.x ** 2 + obj.y ** 2)
    expect(map(input, cb)).to.deep.equal([5, 13, 17]);
  });
});