function rowValue(row) {
	row.sort((a, b) => a - b);
	const result = row[row.length - 1] - row[0];
	return result;
}

const checksum = (data) => {
	const result = data.split('\n')
		.map(row => row.split(/\s+/g).map(item => parseInt(item, 0)))
		.reduce((accumulator, current) => accumulator + rowValue(current), 0);

	return result;
};

module.exports = {
  checksum
}