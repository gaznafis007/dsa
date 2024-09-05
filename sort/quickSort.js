// Quick Sort

let testArray = [ 20, -6, 8, -19, 4, 13, -2];

const quickSort = arr=>{
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [... quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(testArray))

function descendingQuickSort (array){
    if(array.length < 2){
        return array
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length -1; i++){
        if(array[i] > pivot){
            left = [...left, array[i]];
        }
        else{
            right= [...right, array[i]]
        }
    }
    return [...descendingQuickSort(left), pivot, ...descendingQuickSort(right)]
}
// O(nlogn)
console.log("descending", descendingQuickSort(testArray))