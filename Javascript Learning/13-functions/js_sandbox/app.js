
function greet() {
    console.log("Hello World");
}
greet();

function greet1() {
    return'hello';
}

console.log(greet1());

function attachName(fname, lname) {
    return fname + " " + lname;
}

console.log(attachName("rohit", "Kulkarni"));


function attachName2(fname, lname = "Kulkarni") {
    return fname + " " + lname;
}

console.log(attachName2("rohit"));

//Funcition Expression

const square = function(x = 3) {
    return x*x;
};

console.log(square());

console.log(square(2));


//Immedietly Invokable function expression IIFEs

(function(){
    console.log("IIFEs Running");
})(); 

(function(name){
    console.log(name);
})('rohit');

//Properties Method
const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function(id) {
        console.log(`Edit Todo ${id}`);
    }
}

todo.delete = function() {
    console.log("Delete todo...");
}

todo.add();
todo.edit(100);
todo.delete();