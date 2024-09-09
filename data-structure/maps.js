const maps = new Map([['name', 'john doe'], ['age', 21]]);
console.log(maps)

console.log(maps.has('age'))

maps.set('hobby', 'football')

console.log(maps.size)

console.log(maps)

maps.delete('age')

console.log(maps)

// maps.clear()

console.log(maps.entries())
