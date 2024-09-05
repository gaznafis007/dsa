const bubbleSorting = array =>{
    let swapped
    do{
        swapped = false
        for(i = 0; i < array.length -1; i++){
            if(array[i] > array[i + 1]){
                let firstElement = array[i]
                array[i] = array[i + 1]
                array[i + 1] = firstElement
                swapped = true
            }
        }
    }while(swapped)
    return array
}

let testArray = [ 20, -6, 8, -19, 4, 13, -2];

// bubbleSorting(testArray);
// console.log(testArray)

console.log(bubbleSorting(testArray))



