// Create a Car class with properties brand, model, and year. Add a method to display car details.

const { error } = require("console");

class Car {
  constructor(brand, model, year) {
   this.brand = brand;
    this.model = model;
    this.year = year;
    this.cars = [];
  }

  showCarDetails() {
    console.log(`Brand: ${this.brand} Model: ${this.model} year ${this.year}`);
    console.log(this.cars);
  }

  updateCar(brand) {
    this.brand = brand;
  }

  addCar() {
    this.cars.push({
      Brand: this.brand,
      Model: this.model,
      Year: this.year,
    });
  }
}

const car = new Car("Creta", "SX", 2020);

car.addCar()

console.log(car.showCarDetails());

// make list print detail

class A {
    //properties
    //methods
}

class B extends A {
     //properties
    //methods
}

//ES5 -> Promises -> way achieve -> parallel

// ES6 -> async await

async function name(params) {
    
}



// sleep(5000)

const id = setTimeout(async ()=>{
    await name(); //ms
}, 5000)

await name();
name();
await name();
await name();
await name();

clearTimeout(id);


// var ES5

// let const ES6

let -> var-> 
const -> 

if() {
    var a = 10 // let
}
a = 0 / logging// let -> error

undefined/ null


page.getCookies():



test("Login", (page)=>{
    page.url("www.example.com")
})

import LoginPage from LoginPage;


{
    LoginPage.methodName();
    
}

