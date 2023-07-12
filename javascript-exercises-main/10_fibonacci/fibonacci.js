const fibonacci = function (count) {
  if (count < 0) {
    return "OOPS";
  }
  if (count === 0) {
    return 0;
  }
  let prev = 0;
  let next = 1;
  for (i = 1; i < count; i++) {
    const c = next;
    next = prev + next;
    prev = c;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
