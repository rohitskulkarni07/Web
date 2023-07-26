function findHighestUncommon(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  let elementFrequency = {};

  for (const element of mergedArray) {
    if (elementFrequency[element] === undefined) {
      elementFrequency[element] = 1;
    } else {
      delete elementFrequency[element];
    }
  }
  let uncommonHighest = -1;

  for (let element in elementFrequency) {
    uncommonHighest = Math.max(uncommonHighest, parseInt(element));
  }
  return uncommonHighest;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12];
const arr2 = [5, 6, 6, 7, 8, 8, 9, 10, 11, 12];

console.log(findHighestUncommon(arr1, arr2));
