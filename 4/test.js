const expect = require('chai').expect;
const countOfValid = require('./index');

describe('Given the sample input', () => {
	const data = 'aa bb cc dd ee\naa bb cc dd aa\naa bb cc dd aaa';

	it('should have two valid passphrases', () => {
		expect(countOfValid(data)).to.equal(2);
	})

  describe('When the data includes anagrams', () => {
    // this  yields 3 valid results
    const dataWithAnagrams = 'abcde fghij\nabcde xyz ecdab\na ab abc abd abf abj\niiii oiii ooii oooi oooo\noiii ioii iioi iiio';

    it('should invalidate the passphrases with anagrams', () => {
      expect(countOfValid(dataWithAnagrams)).to.equal(3);
    });
  });
})