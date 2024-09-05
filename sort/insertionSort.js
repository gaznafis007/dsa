// Ascending insertion Sort
const insertionSorting = arr =>{
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }
    
}

let testArray = [ 20, -6, 8, -19, 4, 13, -2];
console.log("base",testArray)
insertionSorting(testArray);
console.log(testArray)

// Descending insertion sort

const descendingInsertionSort = arr =>{
    for(i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] < numberToInsert){
            arr[j + 1] = arr[j];
            j = j -1
        }
        arr[j + 1] = numberToInsert
    }
}
descendingInsertionSort(testArray);
console.log("descending", testArray)

// solution

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let numberToInsert = arr[i]
//       let j = i - 1
//       while (j >= 0 && arr[j] > numberToInsert) {
//         arr[j + 1] = arr[j]
//         j = j - 1
//         console.log("while", arr)
//       }
//       arr[j + 1] = numberToInsert
//       console.log("for",arr)
//     }
//   }
//   insertionSort(testArray);
//   console.log(testArray)