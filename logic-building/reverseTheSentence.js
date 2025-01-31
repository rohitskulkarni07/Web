// using split reverse join

// function reverseSentence(sentence) {
//   return sentence.split(" ").reverse().join(" ");
// }

//using for lop
function reverseSentence(sentence) {
  let reversed = "";
  let word = "";
  let arr = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      arr.push(word + " ");
      word = "";
    } else {
      word += sentence[i];
    }
  }
  // to add the last word

  arr.push(word + " ");

  for (let word of arr) {
    reversed = word + reversed;
  }
  return reversed.trim();
}

console.log(`"${reverseSentence("Hi, This Is Rohit!")}"`);
