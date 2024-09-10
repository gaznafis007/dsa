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

// console.log("empty?", newQueue.isNull())

newQueue.enqueue(5)
newQueue.enqueue(10)
newQueue.enqueue(15)
newQueue.enqueue(20)

// newQueue.print()

// console.log("dequeue", newQueue.dequeue())
// console.log("head", newQueue.head())
// console.log("tail", newQueue.tail())

// newQueue.print()

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

// optimalNewQueue.print()

// optimalNewQueue.dequeue()

// console.log(optimalNewQueue.size())

// optimalNewQueue.print()


// CIRCULAR QUEUE

class CircularQueue {
    constructor(size){
        this.items = new Array(size);
        this.capacity = size;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isEmpty(){
        return this.currentLength === 0;
    }
    isFull(){
        return this.capacity == this.currentLength;
    }
    enqueue(item){
        if(this.isFull()){
            return "Memory is full please make space for new item"
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.currentLength += 1;
        if(this.front === -1){
            this.front = this.rear
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return "No item to delete"
        }
        let item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1
        }
        return item
    }
    size(){
        return this.currentLength
    }
    print(){
        if(this.isEmpty()){
            return "no item to print"
        }else{
            let i;
            let str = "";
            for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
                str += this.items[i] + " "
                // console.log(str)
            }

            str += this.items[i]
            console.log(str)

        }
    }
}

const circularNewQueue = new CircularQueue(5);

// console.log(circularNewQueue.isEmpty())
// console.log(circularNewQueue.isFull())

// circularNewQueue.enqueue(10)
// circularNewQueue.enqueue(20)
// circularNewQueue.enqueue(30)
// circularNewQueue.enqueue(40)
// circularNewQueue.enqueue(50)

// console.log(circularNewQueue.isEmpty())
// console.log(circularNewQueue.isFull())

// circularNewQueue.dequeue()
// circularNewQueue.enqueue(60)

// circularNewQueue.print()
// console.log(circularNewQueue.isFull())
// console.log(circularNewQueue.dequeue())

// circularNewQueue.print()
// console.log(circularNewQueue.isFull())