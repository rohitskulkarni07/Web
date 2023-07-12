function isArm(x) {
  //x = 371
  let temp_x = 371;

  let power = 0;

  while (temp_x != 0) {
    temp_x = Math.floor(temp_x / 10);
    power++;
  }
  temp_x = x;

  let digit = 0;
  let sum = 0;

  while (temp_x != 0) {
    digit = temp_x % 10;
    sum = sum + Math.pow(digit, power);
    temp_x = Math.floor(temp_x / 10);
  }

  if (sum === x) {
    return true;
  } else {
    return false;
  }
}

console.log(isArm(1635));
