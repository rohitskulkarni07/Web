// using split reverse join

// function myReverseString(str) {
//   return str.split("").reverse().join("");
// }

// using for loop
// function myReverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

//using split and reducer
// function myReverseString(str) {
//   return str.split("").reduce((reversed, char) => char + reversed, "");
// }

//using for of
function myReverseString(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(myReverseString("Hi, This Is Rohit!"));
