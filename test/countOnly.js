const countOnly = require('../countOnly');
const expect = require('chai').expect;

describe("#countOnly", () => {
  it("returns {a: 3, d: 1} for input array ['a', 'a', 'b', 'c', 'd', 'e', 'a'] and input object {a: true, d: true, b: false, f: true}", () => {
    expect(countOnly(['a', 'a', 'b', 'c', 'd', 'e', 'a'],{a: true, d: true, b: false, f: true})).to.deep.equal({a: 3, d: 1});
  });
});
