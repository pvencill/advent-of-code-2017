function validFilter(passphrase) {
	const words = passphrase.split(/\s+/g);
	let seen = {};
	for(let i = 0;i < words.length; i++) {
		if (seen[words[i]]) return false;
		seen[words[i]] = true;
	}
	return true;
}

function anagramFilter(passphrase) {
	const words = passphrase.split(/\s+/g).map(word => word.split('').sort().join(''));
	words.sort();
	let current = words.shift();
	while(words.length) {
		let last = current;
		current = words.shift();
		if (current === last)
			return false;
	}

	return true;
}

module.exports = function countOfValid(data) {
	const passphrases = data.split(/\n/g);

	const validPhrases = passphrases.filter(validFilter).filter(anagramFilter);

	return validPhrases.length;
}