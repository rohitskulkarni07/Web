function mergeStringsAlternately(str1, str2) {
  let merged = "";
  let i = 0;
  // Iterate through both strings alternately
  while (i < str1.length || i < str2.length) {
    if (i < str1.length) {
      merged += str1[i];
    }
    if (i < str2.length) {
      merged += str2[i];
    }
    i++;
  }
  return merged;
}

// Test case
let str1 = "abcdefg";
let str2 = "123456780987";
console.log(mergeStringsAlternately(str1, str2)); // Output: a1b2c3d4e5f6g78987
