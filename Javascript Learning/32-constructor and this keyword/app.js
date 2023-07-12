//Person Constructor
function Person(name, age) {
    this.name = name;
    this.age =  age;

    console.log(this);
}

const brad = new Person("rohit",23)

// const brad = {
    // name: "rohit",
    // age: 23,
// }

console.log(brad);
console.log(brad.name);
console.log(brad.age);

const p =  new Person("Animesh", 25);

console.log(p);
console.log(p.name);
console.log(p.age);
