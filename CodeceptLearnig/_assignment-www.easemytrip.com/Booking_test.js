const { locator } = require('codeceptjs');
const fs = require('fs');

let customer;

//read file testdata.json having character set UTF8| e is error-event and jsonString is read object
fs.readFile('./testdata.json', 'utf8', (e, jsonString) => {
    if(e) {
        console.log('Cant Read!',e);
        return;
    }
    try{
        customer = JSON.parse(jsonString);
        console.log('FileData=>', jsonString);
    }
    catch(e) {
        console.log('Error While Parsing!',e);
    }
});

Feature('Booking');

// From And To Selection
Scenario('test-case-01', ({ I }) => {
    
    I.amOnPage('.');
    I.fillField('#FromSector_show',customer.src);
    I.fillField('#Editbox13_show',customer.dest);

}); 

// Date Selection
Scenario('test-case-02', ({ I }) => {
    
    I.click('#ddate');
    I.click(locate('span').withAttr({id:customer.ddate}));
    I.click('.dropdown_n'); 

    I.click('#rdatelbl');
    I.click(locate('span').withAttr({id:customer.rdate}));

});

//Passesngers Selection
Scenario('test-case-03', ({ I }) => {

    let adult = parseInt(customer.adult);
    let child = parseInt(customer.child);

    //for adult
    for(i =0; i < adult; i++) {
        I.click('.plus_box1');
    }
    //for children
    for(i =0; i < child; i++) {
        I.click('.plus_boxChd');
    }

    I.click('#traveLer')
    I.wait(1); //remove this line before 

});

//Search For Result
Scenario('test-case-04', ({ I }) => {

    I.click('Search');
    I.wait(2);//remove this line before 

    //verify
    I.see("FLIGHTS", ".active_n");
    I.wait(5);//remove this line before 

});

