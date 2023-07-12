const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car){
    console.log(car);
});

//Map
const  users = [
    {id:1, name: 'rohit'},
    {id:2, name: 'mohit'},
    {id:3, name: 'animesh'}
];

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);

cars.forEach(function(car,index, cars){
    console.log(index+" "+car);
    console.log(cars);
});


//For In Loop
const user = {
    fname :'Rohit',
    lname :'Kulkarni',
    age : 24
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}