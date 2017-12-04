const expect = require('chai').expect;
const calculateDistance = require('./index');

/**
	17  16  15  14  13
	18   5   4   3  12
	19   6   1   2  11
	20   7   8   9  10
	21  22  23  24  25
**/

describe('Given a spiral number group progressing as above', () => {
	it('Should calculate 9 as 2 moves away', () => {
		expect(calculateDistance(9)).to.equal(2);
	});

	it('Should calculate 23 as 2 moves away', () => {
		expect(calculateDistance(23)).to.equal(2);
	});

	it('Should calculate 18 as 3 moves away', () => {
		expect(calculateDistance(18)).to.equal(3);
	});

	it('Should calculate 11 as 2 moves away', () => {
		expect(calculateDistance(11)).to.equal(2);
	});

	it('Should calculate 83 as 8 moves away', () => {
		expect(calculateDistance(83)).to.equal(8);
	});
});