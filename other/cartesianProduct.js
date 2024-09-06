// Cartesian Product
// A=[1, 2] , B=[3, 4] ; AxB = [[1,3], [1,4], [2,3], [2, 4]];

const cartesianProduct = (arrOne, arrTwo) =>{
    let result = [];
    let tempStore = [];
    for(let i = 0; i <= arrOne.length - 1; i ++){
        let y = 0
        while(y <= arrTwo.length - 1 && arrOne.length){
            tempStore = [arrOne[i], arrTwo[y]];
            result = [ ...result, tempStore];
            y = y + 1
        }
    }
    return result
}
// O(mn)
let A = [1, 2];
let B = [3, 4, 5];

console.log(cartesianProduct(A, B))

// solution

function solutionCartesianProduct (arr1, arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}

console.log("codevolution", solutionCartesianProduct(A,B))