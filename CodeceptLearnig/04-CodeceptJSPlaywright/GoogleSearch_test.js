Feature('GoogleSearch');

//navigation to page

Scenario('test something', ({ I }) => {
    I.amOnPage('/');    // navigates to page
    I.wait(2);          // wait for 2 seconds

    I.amOnPage('/doodles');
    I.wait(2);          // wait for 2 seconds

    I.amOnPage('https://www.youtube.com/');
    I.wait(2);          // wait for 2 seconds

    I.amOnPage('https://stackoverflow.com/company');
    I.wait(2);          // wait for 2 seconds

});

// Selection using xpath and css selector
// assertion

Scenario('testcase-2',({I}) => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com/');   // navigateion to link
    I.see('LOGIN Panel');                                       // Assertion 
    I.fillField("//input[@id='txtUsername']", "Admin");         // 
    I.fillField("#txtPassword", "admin123");
    I.click('#btnLogin');
    I.see('Dashboard');
    I.dontSee('LOGIN Panel');
    I.wait(2);          // wait for 2 seconds
});

//to get text using asyn and print to console

Scenario('testcase-3',async ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/checkboxes');   
    let a = await I.grabTextFrom('#checkboxes');
    console.log(a);
});

//select check box
Scenario('testcase-4',({I}) => {

    I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
    I.wait(1);        
    I.checkOption('#checkboxes > input[type=checkbox]:nth-child(1)');
    I.wait(1);        
    I.uncheckOption('#checkboxes > input[type=checkbox]:nth-child(3)');
    I.wait(1);        

});

//select option from dropbox
Scenario('testcase-5', ({I}) => {
        I.amOnPage('https://the-internet.herokuapp.com/dropdown');
        I.wait(1);
        I.selectOption('#dropdown', 'Option 1');
        I.wait(1);
});

//smart wait

Scenario('testcase-6', ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1')
    I.click('Start');
    I.waitForText("Hello World!",20);
});

//file:///C:/Users/rohit.kulkarni/Javascript%20Learning/_booklist/index.html

//on custom webpage on local machine
Scenario('testcase-7', ({I}) => {
    
    I.amOnPage('file:///C:/Users/rohit.kulkarni/Javascript%20Learning/_booklist/index.html')
    I.wait(1);
    
    I.fillField('#title', "C++ Primer");
    I.wait(1);
    
    I.fillField('#author', "Stanley Leapman");
    I.wait(1);

    I.fillField('#isbn', "1234-4321-9876");
    I.wait(1);

    I.click("#book-form > div:nth-child(4) > input");
    I.wait(2);

});

