function validFilter(passphrase) {
	const words = passphrase.split(/\s+/g);
	let seen = {};
	for(let i = 0;i < words.length; i++) {
		if (seen[words[i]]) return false;
		seen[words[i]] = true;
	}
	return true;
}

module.exports = function countOfValid(data) {
	const passphrases = data.split(/\n/g);

	const validPhrases = passphrases.filter(validFilter);

	return validPhrases.length;
}