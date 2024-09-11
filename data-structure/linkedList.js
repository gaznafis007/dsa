class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head;
            this.head = node
        }
        this.size++
        return this.head;
    }
    append(value){
        
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }
        else{
            let current = this.head;
            let str = ``
            while (current) {
                str = `${str} ${current.value}`
                current = current.next
            }
            console.log(str)
        }
    }
}

const linkedList = new List()

// console.log(linkedList.isEmpty())
// console.log(linkedList.getSize())
linkedList.prepend(5)
linkedList.prepend(10)
console.log(linkedList.prepend(15))
console.log(linkedList.getSize())
linkedList.print()