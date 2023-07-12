let val;

val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//Number String 
val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//expression to string
val = String(4+4);
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//boolean to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//Date To Strig
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//Array To String 
val = String([1,2,3,4,5]);
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//Number To String Using toString()
val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');

//Boolean To String Using toString();
val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('_________________________________');


//String to Number
val = Number('5');
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed());

console.log('_________________________________');

//Boolean to Number
val = Number(true);
console.log(val);
val = Number(false);
console.log(val);

console.log('_________________________________');

//nul to Number
val = Number(null);
console.log(val);

console.log(typeof val);
console.log('_________________________________');

//String to Number
val =  Number('Hello');
console.log(val);
console.log(typeof val);

console.log('_________________________________');

//Array To Number
val =  Number([1,2,3]);
console.log(val);
console.log(typeof val);

console.log('_________________________________');

//To Number Integer Using parseInt()
val =  parseInt('100');
console.log(val);
console.log(typeof val);

console.log('_________________________________');

//To Number decimal Using parseFloat()
val =  parseFloat('100.012');
console.log(val);
console.log(typeof val);

console.log('_________________________________');

//type coversion implicilty by JS

const val1 = String(5);
const val2 = 6;
const sum =  val1 + val2;
console.log(sum);
console.log(typeof sum);