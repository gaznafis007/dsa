// bubble Sort;
let testArray = [ 20, -6, 8, -19, 4, 13, -2];

const ascendingBubbleSort = arr =>{
let swapped;
    do{
        swapped = false
        for(let i= 0; i< arr.length - 1; i++){
            let tempElement = arr[i+1];
            if(arr[i] > arr [i+1]){
                arr[i+1] = arr[i];
                arr[i] = tempElement
                swapped = true
            }
        }
    }while(swapped)
    return arr
}
function descendingBubbleSort (arr){
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < arr.length -1; i++){
            let tempElement = arr[i]
            if(arr[i] < arr[i + 1]){
                arr[i] = arr[i+1];
                arr[i+1] = tempElement;
                swapped = true
            }
        }
    }while(swapped)
    return arr
}
// console.log("ascendingBubbleSort", ascendingBubbleSort(testArray))
// console.log("descendingBubbleSort", descendingBubbleSort(testArray))

// Insertion Sort

const ascendingInsertionSort = arr =>{
    for(let i = 1; i < arr.length; i ++){
        let elementToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > elementToInsert){
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = elementToInsert
    }
    return arr
}
function descendingInsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let elementToInsert = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] < elementToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j + 1] = elementToInsert
    }
    return arr
}
// console.log("ascendingInsertionSort", ascendingInsertionSort(testArray))
// console.log("descendingInsertionSort", descendingInsertionSort(testArray))

// Quick Sort

const ascendingQuickSort = arr =>{
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let leftPart = [];
    let rightPart = [];
    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] < pivot){
            leftPart = [...leftPart, arr[i]];
        }
        else{
            rightPart = [...rightPart, arr[i]]
        }
    }
    return [...ascendingQuickSort(leftPart), pivot, ...ascendingQuickSort(rightPart)]
}

function descendingQuickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];
    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] > pivot){
            leftArray = [...leftArray, arr[i]]
        }
        else{
            rightArray = [...rightArray, arr[i]]
        }
    }
    return [...descendingQuickSort(leftArray), pivot, ...descendingQuickSort(rightArray)]
}

// console.log("ascendingQuickSort", ascendingQuickSort(testArray))
// console.log("descendingQuickSort", descendingQuickSort(testArray))

// Merge Sort

const ascendingMergeSort = arr =>{
    if(arr.length < 2){
        return arr
    }
    let mid = Math.ceil(arr.length/2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    return mergeArray(ascendingMergeSort(leftArray), ascendingMergeSort(rightArray))
}

function mergeArray(leftPart, rightPart){
    let sortedArray = []
    while(leftPart.length && rightPart.length){
        if(leftPart[0] <= rightPart[0]){
            sortedArray.push(leftPart.shift())
        }
        else{
            sortedArray.push(rightPart.shift())
        }
    }
    return [...sortedArray, ...leftPart, ...rightPart]
}

const descendingMergeSort = arr =>{
    if(arr.length < 2){
        return arr
    }
    let mid = Math.ceil(arr.length/2);
    let leftArray = arr.slice(0,mid);
    let rightArray = arr.slice(mid);
    return joinArray(descendingMergeSort(leftArray), descendingMergeSort(rightArray))
}
function joinArray(leftPart,rightPart){
    let sortedArray = [];
    while(leftPart.length && rightPart.length){
        if(leftPart[0] > rightPart[0]){
            sortedArray.push(leftPart.shift())
        }
        else{
            sortedArray.push(rightPart.shift())
        }
    }
    return [...sortedArray, ...leftPart, ...rightPart]
}
console.log("ascendingMergeArraySort", ascendingMergeSort(testArray))
console.log("descendingMergeArraySort", descendingMergeSort(testArray))

