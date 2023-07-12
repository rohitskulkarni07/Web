const name1 = "Rohit";

const name2 = new String("Rohit");

console.log(name1);
console.log(name2);


if(name1 === "Rohit"){
    
    console.log("Yes!");
    
} else {

    console.log("NO!");
}



if(name2=== "Rohit"){
    
    console.log("Yes!");
    
} else {

    console.log("NO!");
}


const num1 = 5; 
const num2 = new Number(5);

console.log(num1);
console.log(num2);

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);


const getsum1 = function(x, y) {

    return x + y;

}

const getsum2 = new Function('x','y', 'return 1+1');

console.log(getsum1);
console.log(getsum2);

const obj1 = {name: "Rohit"};
const obj2 = new Object({name: "Rohit"});

console.log(obj1);
console.log(obj2);

const arr1 = [1,2,3,4,5];
const arr2 = new Array([1,2,3,4,5]);

console.log(arr1);
console.log(arr2);

