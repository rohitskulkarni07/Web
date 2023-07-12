//Object.prototype
//Person.type

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function() {
    return `Hello there! ${this.firstName} ${this.lastName}`;
}

const p1= new Person('John', 'Doe');
console.log(p1.greeting());


//customer
function Customer(firstName, lastName, phone, memship) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.memship = memship;

}

//inherit Person Methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype to return Customer()
Customer.prototype.constructor = Customer;

const c1 = new Customer('rohit','kulkarni', '123', 'Std');

Person.prototype.greeting = function() {
    return `Hello there! ${this.firstName} ${this.lastName} Welcome To Company`;
}
console.log(c1);

console.log(c1.greeting());