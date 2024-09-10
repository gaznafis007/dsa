class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.items.length === 0) {
            return 'Underflow - The stack is empty.'
        }
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items)
    }
}

// Create a new stack
const myStack = new Stack();

// Push elements onto the stack
myStack.push(5);
myStack.push(10);
myStack.push(15);

// Display the stack's content

// console.log("Stack after push operations:");
// myStack.print();

// Pop an element

// const poppedElement = myStack.pop();
// console.log("Popped element:", poppedElement);


// Check if the stack is empty

// console.log("Is the stack empty?", myStack.isEmpty());

// Display the stack's content after pop

// console.log("Stack after pop operation:");
// myStack.print()


class NewStack {
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        if(this.items.length < 1){
            return "unable to pop an empty array"
        }
        return this.items.pop()
    }

    // This part is not for stack implementation

    // unshift(item){
    //     this.items.unshift(item)
    // }
    // shift(){
    //     return this.items.shift()
    // }
    
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = []
        return this.items
    }
    out(){
        console.log(this.items)
    }
}

const newStack = new NewStack()

newStack.out()

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(1)

newStack.out()

newStack.shift()
newStack.unshift(1)
newStack.out()
console.log(newStack.isEmpty())

newStack.clear();
newStack.out()