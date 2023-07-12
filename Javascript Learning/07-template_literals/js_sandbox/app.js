//Template Literals ES6 Compatible in modern browser


//Template Literals ES6 Compatible with Modern Browsers


const name  = "Rohit";
const age   = 24;
const job   = "Digital Service";
const city  = "Pune";

//Without Template String (ES5 Way)

html = '<ul><li> Name:' + name +'</li><li> Age:'+age+'</li><li>Job:'+job+'</li><li>City:' +city+'</li></ul>';

document.body.innerHTML = html;

//With Template literals
function hello() {
    return 'hello';
}

html = `
<ul>
    <li>Name:${name}</li>
    <li>Age :${age}</li>
    <li>Job :${job}</li>
    <li>City:${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age>30 ? 'Over 30':'You Are Young!'}</li>
</ul>
`;

document.body.innerHTML = html;


