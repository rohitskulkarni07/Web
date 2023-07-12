const sumAll = function (n, m) {
  /**
   * S = n(a + l)/2
   * where,
   * S = sum of the consecutive integers
   * n = number of integers
   * a = first term
   * l = last term
   */
  // number should be positive and non-zero else return ERROR
  if (Number.isInteger(n) && Number.isInteger(m) && n > 0 && m > 0) { 
    //if first number is greater than second then swap both with each other
    if (n > m) {
      [n, m] = [m, n];
    }
    return ((m - n + 1) * (n + m)) / 2;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
