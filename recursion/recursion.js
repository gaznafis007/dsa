const recursiveHello = number =>{
    if(number == 0){
        return "END";
    }
    recursiveHello(number-1)
    console.log(`hello ${number}`)
}
// console.log(recursiveHello(1))

function sumOfN (number){
    if(number === 0){
        return 0;
    }
    // console.log(result)
     let result = sumOfN(number-1) //solution by utkarsh gupta
    return number + result;
}

// console.log(sumOfN(10))

function patternPrint (number){
    if(number < 2){
        console.log(1)
        return;
    }
    for(let i = 1; i<=number; i++){
        console.log(i)
    }
    console.log("")
    patternPrint(number-1)
    for (let i = 1; i<= number; i++){
        console.log(i)
    }
    console.log("")
}

// patternPrint(4)

function sumOfBit(number){
    if(number < 1){
        return 0;
    }
    let lastDigit = number%10;
    let remaining = Math.floor(number/10);
    return sumOfBit(remaining)+lastDigit
}
console.log(sumOfBit(987654321))