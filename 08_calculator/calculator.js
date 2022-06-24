const add = function(...args) {
	let result = 0;
  for(const arg of args){
    result += arg;
  }
  return result
};

const subtract = function(...args) {
	return args[0]-args[1]
};

const sum = function(array) {
	let result = 0;
  for(const value of array){result += value}
  return result
};

const multiply = function(array) {
  let result = 1;
  for(const value of array){ result *= value}
  return result
};

const power = function(num, exp) {
	return num**exp
};

const factorial = function(num) {
	let result = 1;
  for(let i = num; i > 0 ; i--){
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
