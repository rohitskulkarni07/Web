let rads = [5, 10, 15, 20, 25];
const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

console.log(rads.map(area));
console.log(rads.map(circumference));
console.log(rads.map(diameter));
