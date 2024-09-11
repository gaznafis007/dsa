class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(value){
        this.size = value;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    isFull(){
        return this.length === this.size
    }
}

const linkedList = new List(5);

console.log(linkedList.isEmpty());
console.log(linkedList.isFull());

