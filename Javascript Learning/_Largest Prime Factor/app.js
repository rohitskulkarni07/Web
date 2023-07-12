

//function  : largestPrimeFactor
//@param    : number (who's max prime factor to be calculate)
//returns   : number (largest prime factor)

//constrain : number >= 2

//algorithm:
//step 1: divide the number repeatedly by least prime number i.e 2 until remainder get 1
//if remainder 1 move to next prime number to divide i.e 3 and so on until remainder get 1


function largestPrimeFator(number) {

    //error checking
    if(typeof number != "number" || number === 1) {
        console.log("Please Enter Valid Number");
        return NaN;
    }

    let currentDivisor; 
    let quotient =  number;

    //code
    while ((quotient % 2) === 0) {    
        currentDivisor = 2;         // if number is divisible by to keep current divisor as 2
        quotient = quotient/2;      // update quotient
    }

    let nextDivisor = 3;    //next least prime after 2 
    while(quotient > 1) {   //stops when 1

        while((quotient % nextDivisor) === 0) {

            quotient = quotient/nextDivisor;    // divide quotient with new-divisor
            currentDivisor = nextDivisor;       // update current divisor as it is max prime factor
        }
        nextDivisor +=2;                        // update the nextDivisor
    }

    return(currentDivisor);                     
}

console.log(largestPrimeFator(460));



// find the max prime factor of 460

// 460 / 2 = 230

// 230 / 2 = 115

// 115 / 2 =  57.5 loops break as its not divisble by 2 completely

//move to next prime
// 115 / 3  =  38.3 not divisible move to next number
// 115 / 5  =  23

// 23 / 5 =  4.6 not divisble move to next

// 23 / 7 = 3.8.....
//.
//.
//.     keep updating number to divide until get 1
//.
// 23 / 23 = 1;

