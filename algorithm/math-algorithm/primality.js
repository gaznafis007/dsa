// Prime Number Test
// Problem Statement: Determine the given integer 'n' is prime or not

const isPrime = number =>{
    let numberArray = [...Array(number)]
    let canNotBeDivided = []
    // console.log(numberArray.length)
    if(number === 1){
        return `${number} is ot a prime number`
    }
    for(let i= 2; i<numberArray.length; i++){
        // console.log(i)
        // console.log(number%i)
        if(number%i > 0){
            canNotBeDivided.push(true)
        }
        else{
            return `${number} is not a prime number`
        }
    }
    if(canNotBeDivided.length == numberArray.length-2){
        return `${number} is a prime number`
    }
}
// O(n)
// console.log(isPrime(1))
// console.log(isPrime(5))
console.log(isPrime(39))

// solution
function primalityTest (n){
    if(n < 2){
        return false
    }
    for (let i = 2; i < n; i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
// O(n)
// console.log("solution", primalityTest(1))
// console.log("solution", primalityTest(5))
console.log("solution", primalityTest(39))

// optimal solution
function optimalPrimalityTest (n){
    if(n < 2){
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
// O(sqrt(n))
console.log("optima; solution", optimalPrimalityTest(39))