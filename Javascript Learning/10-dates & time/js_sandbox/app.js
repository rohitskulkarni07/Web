let val;

let today =  new Date();

val = today;
console.log(typeof val);

val = today.toString();
console.log(typeof val);

let birtday =  new Date('9-7-1997');
val = birtday ;
console.log(val);

birtday = new Date('9-7-1997 12:31:00');
val = birtday ;
console.log(val);

birtday =  new Date('September 7 1997');
val = birtday ;
console.log(val);

//getMonth is 0th based
val = today.getMonth();
console.log(val);

//date
val = today.getDate();
console.log(val);

//day
val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val); 

val = today.getHours();
console.log(val); 

val = today.getMinutes();
console.log(val); 

val = today.getSeconds();
console.log(val); 

val = today.getMilliseconds();
console.log(val);

val = today.getTime();
console.log(val);

birtday.setMonth(7);
console.log(birtday); 

birtday.setDate(30);
console.log(birtday);

birtday.setFullYear(1989);
console.log(birtday);
