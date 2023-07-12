let rads = [5, 10, 15, 20, 25];

Array.prototype.calculate = function (calcFun) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(calcFun(this[i]));
  }
  return output;
};

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

console.log(rads.calculate(area));
console.log(rads.calculate(circumference));
console.log(rads.calculate(diameter));