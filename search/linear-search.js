const findArrayIndexNo = (array, targetedNumber)=>{
    if(![...array].indexOf(targetedNumber)){
        return -1;
    }
    return [...array].indexOf(targetedNumber)
}
// O(1)
// console.log(findArrayIndexNo([12,3,67,100,2], 2))


const linearArrayIndexSearch = (array, targetedNumber) =>{
    let newArray = [...array];

    let arrayNumber = newArray.find(number=> number === targetedNumber)
    if(!arrayNumber){
        return -1
    }
    return newArray.indexOf(targetedNumber)
}

console.log(linearArrayIndexSearch([1,2,3,4,5], 6))

// solution
const linearSearch = (arr, target)=>{
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
//O(n)
console.log(linearSearch([1,2,3,4,5], 4))