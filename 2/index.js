function minMax(row) {
	row.sort((a, b) => a - b);
	const result = row[row.length - 1] - row[0];
	return result;
}

function evenlyDivisible(row) {
  const digits = row.split(/\s+/g).map(item => parseInt(item, 0))
    .sort((a, b) => b - a);

  let first = digits.shift();
  while(digits.length) {
    for(let i=0; i < digits.length; i++) {
      let second = digits[i];
      if (!(first % second)) return first / second
    }
    first = digits.shift();
  }
}

const checksum = (data, rowValue) => {
  rowValue = rowValue || minMax;
	const result = data.split('\n')
		.map(row => row.split(/\s+/g).map(item => parseInt(item, 0)))
		.reduce((accumulator, current) => accumulator + rowValue(current), 0);

	return result;
};

const checksumByPairs = (data) => {
  const result = data.split(/\n/g).reduce((accumulator, current) => accumulator + evenlyDivisible(current), 0);
  return result;
}

module.exports = {
  checksum, checksumByPairs
}