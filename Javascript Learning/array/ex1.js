// Add 2 array into single array
//________________________________________________

let arr1 = [1,2,3,4,5,6,7,8,9,10]

let arr2 = [21,32,43,54,65,86,77,98,29,10];

arr1.push(...arr2); // mutable operation

console.log(arr1);

//________________________________________________

let arr3 = [91,82,73,64,55,64,73,82,29,91]

let arr4 = [2,3,3,4,6,8,7,9,2,1];

arr3.concat(arr4); // non mutable operation

console.log(arr3);

//________________________________________________


let arr_mut = arr3.concat(arr4); // non mutable operation

console.log(arr_mut);


