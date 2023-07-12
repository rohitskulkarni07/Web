
//Assignmnet
let id = 100;

//Equal To
if(id == 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}


let id1 = 101;

//Equal To
if(id1 == 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}


let id2 = 103;

//Equal To
if(id2 != 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}


const id3 = '100';

//Equal To 
if(id3 == 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

//EQUAL TO VALUE As Well As TYPE
const id4 ='100';

if(id4 === 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

const id5 = '100';

if(id4 !== 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

if(id) {
    console.log(`The id is ${id}`);
} else {
    console.log("No ID");
}

let id6;
if(id6) {
    console.log(`The id is ${id}`);
} else {
    console.log("No ID");
}

//id7 is not present in code
if(typeof id7 !== 'undefined') {
    console.log(`The id is ${id7}`);
} else {
    console.log("No ID");
}

let num = 200;

if(num >= 200){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

const color = 'yellow';

if(color === 'red') {
    console.log("Color Is Red");
} else if(color ==='blue') {
    console.log("Color Is Blue");
}else {
    console.log("Color Is Yellow");

}

const name = 'Rohit';
const age = 24;

if(age >0 && age < 12) {
    console.log(`${name} is a child`)

} else if(age >13 && age <=19) {s

    console.log(`${name} is a teenager`)

} else {

    console.log(`${name} is a adult`)
}

//ternary
console.log(id == 100 ?'Correct':'Incorrect');