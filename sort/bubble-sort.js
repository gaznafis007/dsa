// const bubbleSorting = array =>{
//     let swapped
//     do{
//         swapped = false
//         for(i = 0; i < array.length -1; i++){
//             if(array[i] > array[i + 1]){
//                 let firstElement = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = firstElement
//                 swapped = true
//             }
//         }
//     }while(swapped)
//     return array
// }

const bubbleSorting = arr =>{
    let swapped;
    do{
        swapped = false
        for(let i = 0; i <= arr.length -1; i++){
            let element = arr[i];
            if(arr[i+1] > arr[i]){
                arr[i] = arr[i+1];
                arr[i+1] = element
                swapped = true;
            }
        }
    }while(swapped)
    return arr
}

let testArray = [ 20, -6, 8, -19, 4, 13, -2];

// bubbleSorting(testArray);
// console.log(testArray)

const ascendingBubbleSort = arr =>{
    let swapped;
    do{
        swapped = false
        for(i=0; i<= arr.length; i++){
            let earlyElement = arr[i];
            if (arr[i+1]<arr[i]){
                arr[i] = arr[i+1]
                arr[i+1] = earlyElement
                swapped=true
            }
        }
    }while(swapped)
    return arr
}
console.log(ascendingBubbleSort(testArray))
console.log(bubbleSorting(testArray))



