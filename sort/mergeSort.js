const splitArray = arr =>{
    if(arr.length < 2){
        return arr;
    }
    let midPoint = Math.ceil(arr.length/2);
    let leftArray = arr.slice(0, midPoint);
    let rightArray = arr.slice(midPoint);
    return descendingMergeSort(splitArray(leftArray), splitArray(rightArray))

}

function ascendingMergeSort(leftArray, rightArray){
    let sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift())
        }
        else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}

let testArray = [ 20, -6, 8, -19, 4, 13, -2];

// console.log((splitArray(testArray)))

function descendingMergeSort(left,right){
    let sortedArray = [];
    while(left.length, right.length){
        if(left[0] > right[0]){
            sortedArray.push(left.shift());
        }
        else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]
}

console.log((splitArray(testArray)))
