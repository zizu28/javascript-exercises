const add = function(a, b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(a) {
  return a.reduce((total, curr) => total + curr, 0)
};

const multiply = function(...values) {
  let product = 1;
  for (let i = 0; i < values.length; i++) {
    product *= values[i];
  }
  return product;
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	if(a === 0) {
    return 1
  }
  return a * factorial(a-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  testPathPattern: '~/javascript-exercises/08_calculator/.*\\.spec\\.js$'
};
