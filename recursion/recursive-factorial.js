const recursiveFactorial = number =>{
    if(number < 1){ //base case
        return 1;
    }
    return number*recursiveFactorial(number-1)
}
// O(n)
console.log(recursiveFactorial(5))

// codevolution's solution also same
