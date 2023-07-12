const personPrtotypes = {
    greetings: function() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    },

    getMarried: function(newLastName) {
        this.lastName =  newLastName;
    }
}

const m = Object.create(personPrtotypes);


m.firstName = "Rohit";
m.lastName  = "Kulkarni";
console.log(m.firstName, m.lastName);

console.log(m.greetings());

m.getMarried("Kothawade");

console.log(m.firstName, m.lastName);

const rohit =  Object.create(personPrtotypes, {
    firstName: {value: "Rohit"},
    lastName: {value: "Kulkarni"},
    age: {value: 23}
});

console.log(rohit);
console.log(rohit.firstName,rohit.lastName, rohit.age);