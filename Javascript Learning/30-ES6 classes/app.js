class Person {

    constructor(fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
    }

    greeting() {
        return `Hello There ${this.fname} ${this.lname}!`;
    }

    calculateAge() {

        const diff = Date.now() - this.dob.getTime();
        const ageDate =  new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);    
    }

    getMarried(newLastName) {
        this.lname = newLastName;
    }

}


const mary = new  Person('Marry', 'Williamms', '11-13-1980');
mary.getMarried("Thomson");

console.log(mary);