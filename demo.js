function isValidPair(str) {
  let pairMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let pairStack = [];

  for (let bracket of str) {
    console.log(`iteration: for ${bracket}\n`);
    if (bracket in pairMap) {
      console.log(`${bracket} in Map is present\n`);
      let lastElement = pairStack.length ? pairStack.pop() : "#";
      console.log(`poped: ${lastElement}\n`);
      if (lastElement !== pairMap[bracket]) {
        console.log(
          ` returning false as ${lastElement} !== ${pairMap[bracket]}\n`
        );
        return false;
      }
    } else {
      console.log(`Pushed ${bracket} on to stack`);
      pairStack.push(bracket);
      console.log(`Stack looks like ${pairStack}`);
    }
  }
  console.log(`Stack looks like ${pairStack}`);
  console.log(
    `returning${pairStack.length === 0} as pairStack.length is ${
      pairStack.length
    } `
  );

  return pairStack.length === 0;
}

let str = "()";
let str2 = "({})";
let str3 = "({))})";
console.log(isValidPair(str), "\n");
console.log(isValidPair(str2), "\n");
console.log(isValidPair(str3), "\n");
