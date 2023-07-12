//Object.prototype
//Person.type

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  
}

const rohit = new Person('Rohit', 'Kulkarni', '9-7-1997');
const animesh = new Person('Animesh', 'Wakade', '12-12-1996');

console.log(rohit);
console.log(animesh);

//calculate age proto
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate =  new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
}

console.log(rohit.calculateAge());
console.log(animesh.calculateAge());


//getFullname
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`; 
}

console.log(rohit.getFullName());
console.log(animesh.getFullName());


Person.prototype.getMarried = function(newLastName) {
    this.lastName = newLastName;
}
 
animesh.getMarried("patil");
console.log(animesh.getFullName());


console.log(rohit.hasOwnProperty('firstName'));
console.log(rohit.hasOwnProperty('getFullName'));