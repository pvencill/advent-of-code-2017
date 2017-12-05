const expect = require('chai').expect;
const navigateJumps = require('./index');

describe('Given a set of interrupts', () => {
  const interrupts = '0\n3\n0\n1\n-3';

  it('should yield five steps', () => {
    expect(navigateJumps(interrupts)).to.equal(5);
  });
});