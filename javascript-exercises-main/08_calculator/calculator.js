const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (sumArray) {
  return sumArray.reduce((total, curr) => total + curr, 0);
};

const multiply = function (a) {
  return a.length ? a.reduce((acc, next) => acc * next) : 0;
};

const power = function (a, b) {
  return Math.pow(a,b)
};

const factorial = function (n) {
  if(n===0 ) {
    return 1;
  }
  let prod = 1;
  for(i =1; i <= n; i++) {
    prod = prod * i
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
