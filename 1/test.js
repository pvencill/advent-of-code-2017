const expect = require('chai').expect;
const captcha = require('./index');

describe('Given a string of digits', () => {
  describe('#next', () => {
    describe('All samples', () => {
      const digits = { 
        '1122' : 3,
        '1111' : 4,
        '1234' : 0,
        '91212129': 9
      };

      it('should be correct', () => {
        for(let key in digits) {
          expect(captcha.next(key)).to.equal(digits[key]);
        }
      });
    });
  });

  describe('#halfAround', () => {
    describe('All samples', () => {
      const digits = {
        '1212': 6,
        '1221': 0,
        '123425': 4,
        '123123': 12,
        '12131415': 4
      };

      it('should be correct', () => {
        for(let key in digits) {
          expect(captcha.halfAround(key)).to.equal(digits[key]);
        }
      });
    });
  });
});