// //Window Object

// //promt
// let input = prompt();
// alert(input);

// if(confirm('Do You Want To Conitnue?')) {
//     console.log("YES");
// }else {
//     console.log("NO");
// }

let val = window.innerWidth;
console.log(val);

val = window.innerHeight;
console.log(val);

val = window.outerWidth;
console.log(val);

val = window.outerWidth;
console.log(val);

//scroll point
let x,y;

x = window.scrollY;
y = window.scrollY;
console.log(x , y);



//location object
val = window.location;
console.log(val);

val = location.hostname;
console.log(val);

val = location.port;
console.log(val);

val = location.port;
console.log(val);

val = location.href;
console.log(val);

val = location.search;
console.log(val);

//redirect
//location.href = "https://google.com";
console.log(val);

//relode
//location.reload();

//History Object
//window.history.go(-4);

val = window.history.length;
console.log(val);


//navigator object Browser dependent

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
