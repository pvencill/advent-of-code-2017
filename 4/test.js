const expect = require('chai').expect;
const countOfValid = require('./index');

describe('Given the sample input', () => {
	const data = 'aa bb cc dd ee\naa bb cc dd aa\naa bb cc dd aaa';

	it('should have two valid passphrases', () => {
		expect(countOfValid(data)).to.equal(2);
	})
})