const fs = require('fs');

let name = document.getElementById('name');
let email = document.getElementById('email');



const customer = {
    'name' : 'Rohit Kulkarni',
    'email' : 'joyrohit07@gmail.com',
    'src'   : 'Pune(PNQ)',
    'dest' : 'Mumbai(BOM)',
}


const jsonString = JSON.stringify(customer);

//  write to json file
fs.writeFile('./testdata.json', jsonString, (e) => {
    if(e) {
        console.log('Error Writtng File', e);
    } else {
        console.log('Successfully Wrote File');
    }
});


//read file testdata.json having character set UTF8| err is error and jsonString is read object
fs.readFile('./testdata.json', 'utf8', (e, jsonString) => {
    if(e) {
        console.log('Cant Read!',e);
        return;
    } else {
        console.log('FileData=>', jsonString);
    }
});
name.innerHTML = customer;
console.log(typeof jsonString);