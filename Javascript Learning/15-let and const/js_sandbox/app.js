var a = '1';

let b = '2';

const c = '3';

function test() {
    var a = '4';

    let b = '5';

    const c = '6';
    
    console.log('Global Scope: ',a,b,c);

}

if(true) {
    var a = 4; //var changes global as well local value

    let b = 5;
    const c = 6;
    
    console.log('Global Scope: ',a,b,c);

}

console.log('Global Scope: ',a,b,c);

test(); 

