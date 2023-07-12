let rads = [5, 10, 15, 20, 25];

function calculateArea(radiusArray) {
  let output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(Math.PI * radiusArray[i] * radiusArray[i]);
  }
  return output;
}

function calculateCircumference(radiusArray) {
  let output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(2 * Math.PI * radiusArray[i]);
  }
  return output;
}

function calculateDiameter(radiusArray) {
  let output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(2 * radiusArray[i]);
  }
  return output;
}

console.log(calculateArea(rads));
console.log(calculateCircumference(rads));
console.log(calculateDiameter(rads));
