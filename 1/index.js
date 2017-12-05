
module.exports = (input) => {

  const digits = input.split('');

  const matches = [];

  const first = digits[0];

  let last = null;
  console.log(input);
  console.log(digits.length);

  const reducer = (accumulator, current) => {
    console.log(`${last} : ${current}`)
    if (last === current) {
      last = current;
      return accumulator + parseInt(current, 10);
    }
    last = current;
    return accumulator;
  }

  let result = digits.reduce(reducer, 0);

  if (last === first) {
    result += parseInt(last, 10);
  }

  return result
}