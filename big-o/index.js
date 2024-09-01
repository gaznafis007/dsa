function summation(n){
    let sum = 0;
    for (let i=0; i<=n; i++){
        sum += i
    }
    return sum
} //This has the time complexity of O(n)
const summationOfN = n =>{
    return (n*(n+1)/2)
}  //This has the time complexity of O(1)

console.log(summation(5))
console.log(summationOfN(5))