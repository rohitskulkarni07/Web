const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some(); // looks at least for one occurrence that you are looking for!
// 1. Is at-least one person 19
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.table({ isAdult });

// Array.prototype.every();
// 2. Is Everyone 19?

const isAllAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.table({ isAllAdults });

// Array.prototype.find();
// 3. Find comment 823423
const comment = comments.find((comment) => comment.id === 823423);
console.table({ comment });

// Array.prototype.findIndex();
// 4. Delete comment 823423
const index = comments.findIndex(comment=> comment.id === 823423);
console.table({ index });
comments.splice(index, 1);
console.table(comments);