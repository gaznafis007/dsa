let arrOfDataStructure = [1, 2, 3, 4, 5];
console.log("length", arrOfDataStructure.length);
console.log("access", arrOfDataStructure[0], arrOfDataStructure[3]);

 arrOfDataStructure.push(6);
console.log("push", arrOfDataStructure);
arrOfDataStructure.pop()
console.log("pop", arrOfDataStructure);
arrOfDataStructure.unshift(0)
console.log("unshift", arrOfDataStructure);
arrOfDataStructure.shift(2)
console.log("shift", arrOfDataStructure);