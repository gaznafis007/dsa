class Queue {
    constructor (){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    head(){
        return this.items[0]
    }
    tail(){
        return this.items[this.items.length-1]
    }
    isNull(){
        return this.items.length === 0;
    }
    print(){
        console.log(this.items)
    }
}

const newQueue = new Queue()

console.log("empty?", newQueue.isNull())

newQueue.enqueue(5)
newQueue.enqueue(10)
newQueue.enqueue(15)
newQueue.enqueue(20)

newQueue.print()

console.log("dequeue", newQueue.dequeue())
console.log("head", newQueue.head())
console.log("tail", newQueue.tail())

newQueue.print()

class OptimalQueue{
    constructor() {
        this.items = {}
        this.rear = 0;
        this.front = 0;
    }
    enqueue(item){
        this.items[this.rear] = item;
        this.rear++
    }
    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front];
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front === 0;
    }
    peak(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
}

const optimalNewQueue = new OptimalQueue();

optimalNewQueue.enqueue(10);
optimalNewQueue.enqueue(20);
optimalNewQueue.enqueue(30);
optimalNewQueue.enqueue(40);

optimalNewQueue.print()

optimalNewQueue.dequeue()

console.log(optimalNewQueue.size())

optimalNewQueue.print()
