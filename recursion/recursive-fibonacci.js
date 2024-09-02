// Recursive Fibonacci
// Give a number 'n', find its fibonacci value

const recursiveFibonacci = number =>{
    let result = [0, 1];
    if(number < 2){
        return result[number]
    }
    for(let i = 2; i<= number ; i++){
        result[i] = result[i - 1] + result [i - 2]
    }
    console.log(result)
    return result[result.length - 1]
}
// O(n)

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(2))
// console.log(recursiveFibonacci(3))
// console.log(recursiveFibonacci(4))
// console.log(recursiveFibonacci(5))
console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(7))
// console.log(recursiveFibonacci(8))
// console.log(recursiveFibonacci(9))
// console.log(recursiveFibonacci(10))

// solution using recursion
function optimalRecursiveFibonacci (n){
    if (n < 2){
        return n;
    }
    return optimalRecursiveFibonacci(n-1) + optimalRecursiveFibonacci(n-2);
}
// O(2^n)
console.log(optimalRecursiveFibonacci(2))
console.log(optimalRecursiveFibonacci(3))
console.log(optimalRecursiveFibonacci(6))