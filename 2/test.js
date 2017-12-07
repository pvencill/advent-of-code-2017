const expect = require('chai').expect;
const checksum = require('./index').checksum;

describe('Given the sample data', () => {
	const data = "5 1 9 5\n7 5 3\n2 4 6 8"
	it('should evaluate the checksum as 18', () => {
		const results = checksum(data);
		expect(results).to.equal(18);
	});
});

describe('Given the multidigit sample data', () => {
	const data = "50 1 955 56\n78 5777 3\n23 45 678 856"
	const correctSum = (955 - 1) + (5777-3) + (856 - 23);
	it('should evaluate the checksum correctly', () => {
		const results = checksum(data);
		expect(results).to.equal(correctSum);
	});
});

describe('Given the sample data', () => {
	const data = '5 9 2 8\n9 4 7 3\n3 8 6 5';
	describe('When the correct sum is based on the evenly divisible pairs', () => {
		const answer = 9;

		it('Should yield the correct sum', () => {

		});
	});
});