const recursiveFactorial = number =>{
    if(number < 2){
        return 1;
    }
    return number*recursiveFactorial(number-1)
}
// O(n!)
console.log(recursiveFactorial(0))

// codevolution's solution also same
