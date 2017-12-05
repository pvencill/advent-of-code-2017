const expect = require('chai').expect;
const captcha = require('./index');

describe('Given a string of digits', () => {
  describe('All samples', () => {
    const digits = { 
      '1122' : 3,
      '1111' : 4,
      '1234' : 0,
      '91212129': 9
    };

    it('should be correct', () => {
      for(let key in digits) {
        expect(captcha(key)).to.equal(digits[key]);
      }
    });
  })
});