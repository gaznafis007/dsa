//fibonacci sequence
//Problem Statement: Give a number 'n'. Find the first 'n' of the Fibonacci sequence.
// Fibonacci sequence (2) = [0,1]
// Fibonacci sequence (4) = [0, 1, 1, 2]

const fibonacciSequenceMaker = sequencer =>{
    let sequence = [0,1];
    if (sequencer <= 2){
        console.log(`Please enter greater number than 2 first sequence is given which is`)
    }
    let fibonacciNumber = 0;
    let loopNumber = sequencer - sequence.length;
    for(let i = 0; i<loopNumber; i++){
        fibonacciNumber = sequence[sequence.length-1] + sequence[sequence.length -2]
        sequence.push(fibonacciNumber)
    }
    console.log(sequence)
}
// O(n)
fibonacciSequenceMaker(2)
fibonacciSequenceMaker(3)
fibonacciSequenceMaker(7)
// let arrayExample = [0, 1, 1, 2, 3, 5, 8, 13]

// console.log(arrayExample.length)

// solutionByCodevolution
 function fibonacci (n){
    let fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib [i-2]
    }
    return fib
 }
 console.log("solution",fibonacci(2));
 console.log("solution",fibonacci(3));
 console.log("solution",fibonacci(7));

//  O(n)