const person = {
    firstName: "Rohit",
    lastName:  "Kulkarni",
    age:       24,
    email:     "joyrohit07@gmail.com",
    hobbies:   ['music', 'sport', 'cooking'],
    address: {
        city:   "Pune",
        state:  "MH"
    },
    getBirthYear: function() {
        return 2021 - this.age;
    }
}

let val;

val = person;
console.log(val);

val = person.firstName;
console.log(val);

val = person['firstName'];
console.log(val);

val = person.lastName;
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address;
console.log(val);

val = person.address.city;
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val);

const people =  [
    {name: "rohit", age: 24},
    {name: "Animesh", age: 25},
    {name: "Vijay", age: 23},
    {name: "Pranav", age: 23}
];

for(let i = 0 ; i < people.length;i++) {
    console.log(people[i].name);
}

