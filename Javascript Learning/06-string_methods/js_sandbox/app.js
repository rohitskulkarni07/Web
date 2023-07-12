const firstName = "Rooohit";
const lastName  = "KulKarni";
const age = 24;
let val;

//concatnation
val = firstName + lastName;
console.log(val);

val = firstName + ' ' + lastName;
console.log(val);

//Append
val = 'Mohit';
val += 'Kulkarni';
console.log(val);

val = 'Hello My Name Is '+ firstName + ' And I am ' + age;
console.log(val);

//double qoute or escape sequnence
val  = 'That\'s Awsome, I Can\'t Wait';
console.log(val);

//double qoute
val  = "That's Awsome, I Can't Wait";
console.log(val);

//length is Property of String
val = firstName.length;
console.log(val);

//concat using method
val = firstName.concat(' ', lastName);
console.log(val);

val = firstName.toUpperCase();
console.log(val);

val = lastName.toLowerCase();
console.log(val);

val = firstName[0];
console.log(val);

val = firstName[4];
console.log(val);

//finding first occurence index of specific charachter? returns index else -1 if not found
val = firstName.indexOf('o');
console.log(val);

//last index
val = firstName.lastIndexOf('o');
console.log(val);

//char specific position
val = firstName.charAt(2);
console.log(val);

//last charachter from string
val = firstName.charAt(firstName.length-1);
console.log(val);

//substring from to specific index
val = firstName.substring(0,3);
console.log(val);

//same as substring slice
val = firstName.slice(0,4);
console.log(val);

//to get last remaining characher after removing paramenter number of charachter from string
val = lastName.slice(3);
console.log(val);

//to get last three charachter from string
val = lastName.slice(-3);
console.log(val);

//split()
const  str = "Hello There My Name is Rohit!";
//split by space
val = str.split(' ');
console.table(val);

tags = "Web Design,Web App,html,css,Web Dev"

//split by comma
val = tags.split(',');
console.table(val);

//replace string with 1st parameter
console.log(str);
val = str.replace('Hello', 'Hiiii');
console.log(val);

//return true if given word is availale in string 
val = str.includes("Rohit");
console.log(val);

//return false if given word is not availale in string 
val = str.includes("Kulkarni");
console.log(val);
