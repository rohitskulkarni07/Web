const color = 'yelow';

switch (color) {
    case 'red':
        console.log("red");
        break;
    case 'blue':
        console.log("blue");
        break;
    case 'yellow':
        console.log("yellow");
        break;
    case 'green':
        console.log("green");
        break;
    default:
        console.log("No Such Color");
        break;
}

let day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
 
    case 2:
        console.log("Tuesday");
        break;       

    case 3:
        console.log("Wednesday");
        break;
        
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
    default:
        break;
}