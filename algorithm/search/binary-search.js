// find the index number of a given sorted array

function binarySearch(array,target){
    let leftIndex = 0
    let rightIndex = array.length-1;
    while(leftIndex <= rightIndex){
        let midIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target == array[midIndex]){
            return midIndex
        }
        if(target > array[midIndex]){
            leftIndex = midIndex + 1;
        }
        if(target < array[midIndex]){
            rightIndex = midIndex - 1
        }
    }
    return -1
}
// O(logn)
let array = [1,2,3,4,5,6]

console.log(binarySearch(array, 8))

function recursiveBinarySearch (arr, target, left, right){
    if(left >= right){
        return -1;
    }
    let middle = Math.floor((left + right)/2);
    if(target == arr[middle]){
        return middle
    }
    if(target > arr[middle]){
        return recursiveBinarySearch(arr, target, middle+1, right)
    }
    if(target < arr[middle]){
        return recursiveBinarySearch(arr,target, left, middle-1)
    }
}
console.log("recursive", recursiveBinarySearch(array, 7, 0, array.length-1))