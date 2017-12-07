const reducer = (skip, accumulator, current, index, elements) => {
  let nextIt = index + skip;
  nextIt = nextIt < elements.length ? nextIt : nextIt - elements.length;

  const next = elements[nextIt];

  if (current === next)
    return accumulator + current;

  return accumulator;
}


function next(input) {
  const digits = input.split('');

  let result = digits.map(it => parseInt(it, 10)).reduce(reducer.bind(null, 1), 0);

  return result
}

function halfAround(input) {
  const digits = input.split('');

  let result = digits.map(it => parseInt(it, 10)).reduce(reducer.bind(null, digits.length / 2), 0);

  return result;
}

module.exports = {
  next, halfAround
}