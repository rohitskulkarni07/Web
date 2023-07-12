//Person Constructor
class Person {
    constructor(firstName, lastName, age) {    

        this.firstName = firstName;
        this.lastName = lastName;
        this.age =  age;
    }

    greetings() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {

    constructor(firstName, lastName, phone, memship) {
        super(firstName,lastName);

        this.phone = phone;
        this.memship = memship;

    }

    static getMemshipCost() {
        return 500;
    }

}


const a = new Customer("Rohit", "Kulkarni", "999", "std");

console.log(a);
console.log(a.greetings());

const b = new Customer("Animesh", "Wakade", "888", "prime");

console.log(b);
console.log(b.greetings());

//static methods needs Class Name to Call
console.log(Customer.getMemshipCost());
