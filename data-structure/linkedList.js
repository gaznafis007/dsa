class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
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
        return this.head
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++
        return this.head
    }
    print(){
        if(this.isEmpty()){
            console.log("unfortunately the list is empty!")
        }else{
            let currentValue = this.head;
            let result = ``;
            while(currentValue){
                result = `${result} ${currentValue.value}`
                currentValue = currentValue.next
            }
            console.log(result)
        }
    }
}

const linkedList = new List();

console.log(linkedList.isEmpty())
console.log(linkedList.getSize())
console.log(linkedList.prepend(5))
console.log(linkedList.prepend(10))
console.log(linkedList.prepend(15))
console.log(linkedList.append(20))
// console.log(linkedList.getSize())
// console.log(linkedList.isEmpty())
linkedList.print()