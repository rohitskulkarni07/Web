function factorial(n) {

    let fact = BigInt(1);

    for(let i = BigInt(n); i>=1; i--) {
        fact *= i;
    }
    return BigInt(fact);   
}

function calculateWays(gridSize) {

    let n = BigInt(gridSize * 2);   // left moves + down moves
    let k = BigInt(gridSize);
    let nk = factorial(BigInt(n-k));                   //n-k
    //According to binomial Co-efficient 

    return parseInt(BigInt(factorial(n)/(factorial(k) *nk)));

}

console.log(calculateWays(2));
console.log(calculateWays(4));
console.log(calculateWays(9));
console.log(calculateWays(20));


/*
    BINOMIAL CO-EFFICEINT FORMULA
                      
    .    .    n!       
 nCr =  --------------
    .    . k! * (n-k)!  
                      
    */
