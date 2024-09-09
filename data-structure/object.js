const obj = {
    name: 'john doe',
    age: '24',
    sayMyName: function(){
        console.log(this.name)
    }
}
console.log(obj);
console.log("keys", Object.keys(obj));
console.log("entries", Object.entries(obj));
console.log("values", Object.values(obj))

obj.hobby = 'gardening';

console.log(obj);

console.log(obj['age'])
console.log(obj.hobby)
obj.sayMyName()
delete obj.sayMyName;
console.log(obj)