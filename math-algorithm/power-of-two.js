// power of two

const determinePowerOfTwo = number =>{
    let result = Math.log2(number)
    if(Math.floor(result) < result || number < Math.ceil(result)){
        return false
    }
    return true
}
// O(1)
console.log(determinePowerOfTwo(1))

// solution 
function isPrime (n){
    while (n > 1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true
}
// O(logn)
console.log(isPrime(16))

// optimal solution

function optimalIsPrime (n){
    if ((n & (n-1)) === 0){
        return true
    }
    return false
}
// O(1)
console.log(optimalIsPrime(16))