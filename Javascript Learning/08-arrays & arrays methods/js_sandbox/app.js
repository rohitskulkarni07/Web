// Create array
let val;

const numbers = [14,22,4,32,12,88,76,96];

const numbers2 = new Array(22,43,32,21,32);

const fruits = ['carrot','banana', 'apple', 'peach', 'pear'];

const mixed = [22, 'Hello', null, true, undefined, {a:1,b:2}, new Date()];


console.log(numbers);
console.log(val);

//get array length
val =  numbers.length;
console.log(val);

//check if is array
val = Array.isArray(numbers);
console.log(val);

//check if is array
val = Array.isArray('hello');
console.log(val);

//get single value
val = numbers[0];
console.log(val);

val = numbers[1];
console.log(val);

val = numbers[2];
console.log(val);

val = numbers[3];
console.log(val);

//inser data into array at specific index
numbers[2] = 100;
console.log(numbers);

//find index of value
val = numbers.indexOf(88);
console.log(val);

//Mutating array 

//add at the end
numbers.push(250);
console.log(numbers);

//add at the front(0th position)
numbers.unshift(120);
console.log(numbers);

//remove last elements
numbers.pop();
console.log(numbers);

//remove 0th elements
numbers.shift();
console.log(numbers);

//splice values (remove elements between range)
numbers.splice(1,1);
console.log(numbers);

numbers.splice(1,3);
console.log(numbers);

//reverase array
numbers.reverse();
console.log(numbers);

//concat array
console.log("array1: "+numbers);
console.log("array2: "+numbers2);

val = numbers.concat(numbers2);
console.log(val);

//sorting array
console.log("Before Sorting \" "+fruits+"\"");

fruits.sort();
console.log(fruits);

numbers.sort();
console.log(numbers);

numbers2.sort();
console.log(numbers2);



const numbers3 = [100,14,22,4,32,12,88,76,96];


//use compare function
//ascending
val = numbers3.sort(function(x,y){
    return x-y;
});

console.log(val);

//use compare function
//descending
val = numbers3.sort(function(x,y){
    return y-x;
});

console.log(val);

//find method
const numbers4 = [100,14,22,4,32,12,88,76,96];

function under50(num) {
    return(num<50);
}
console.log(numbers4);
val = numbers4.find(under50);
console.log(val);


function over50(num) {
    return(num>50);
}
console.log(numbers4);
val = numbers4.find(over50);
console.log(val);