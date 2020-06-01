const expect = require('chai').expect;
const countLetters = require('../countLetters');


describe("#countLetters", () => {
  it("returns {L : 2, H: 1} for 'LHL'", () => {
    expect(countLetters('LHL')).to.deep.equal({L: 2, H: 1});
  });
  it("returns {h: 1, e: 1, l: 2, o: 1} for 'hello'", () => {
    expect(countLetters('hello')).to.deep.equal({h: 1, e: 1, l: 2, o: 1});
  });
});