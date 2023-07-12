let rads = [5, 10, 15, 20, 25];

function calculate(radiusArray, calcFun) {
  let output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(calcFun(radiusArray[i]));
  }
  return output;
}

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

console.log(calculate(rads, area));
console.log(calculate(rads, circumference));
console.log(calculate(rads, diameter));
