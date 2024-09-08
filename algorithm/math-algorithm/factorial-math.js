// Factorial problem
// Problem statement: Give an integer 'n', Find the factorial of that integer.
// n! = n*(n-1)*(n-2)*....*1

const factorialDeterminer = factorialNumber=>{
    let number = 1;
    for(let i = 1; i<= factorialNumber; i++ ){
        number = number * i;
    }
     console.log(number)   
}
// O(n)
factorialDeterminer(1)
factorialDeterminer(3)
factorialDeterminer(4)
factorialDeterminer(5)

function factorial (n){
    let result = 1;
    for(let i = 2; i<= n; i++ ){
        result = result * i;
    }
    return result   
}
console.log("solution", factorial(1))
console.log("solution", factorial(4))
console.log("solution", factorial(5))