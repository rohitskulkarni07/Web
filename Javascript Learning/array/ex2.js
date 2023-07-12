//________________________________________________

// Add Array at starting/beginning of first array

let arr1 = [1,2,3,4,5];
let arr2 = [5,6,7,8,9];

arr1.unshift(...arr2); // mutable

console.log(arr1);