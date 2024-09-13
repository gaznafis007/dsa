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
    insert(value, index){
        if(index < 0 || index > this.size){
            return;
        }
        if(index === 0){
            this.prepend(value)
        }
        else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
        }
        this.size++
    }
    removeByIndex(index){
        let removeItem;
        if(index < 0 || index > this.size){
            return null;
        }
        if(index === 0){
            removeItem = this.head;
            this.head = this.head.next;
        }
        else{
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            removeItem = prev.next;
            prev.next = removeItem.next
            console.log(prev)
        }
        this.size--
        return removeItem.value
    }
    removeByValue(value){
        let removeItem = value;
        if(this.isEmpty()){
            return "List is empty"
        }
        if(this.head.value === value){
            this.head.next = this.head
            this.size--
        }
        else{
            let prev = this.head;
            while(prev.next && prev.next.value !== removeItem){
                prev = prev.next
            }
            removeItem = prev.next;
            prev.next = removeItem.next
            this.size--
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("unfortunately the list is empty!")
        }else{
            let currentValue = this.head;
            // console.log(currentValue)
            let result = ``;
            while(currentValue){
                result += ` ${currentValue.value}`
                currentValue = currentValue.next
            }
            console.log(result)
        }
    }
}

const linkedList = new List();

// console.log(linkedList.isEmpty())
// console.log(linkedList.getSize())
console.log(linkedList.prepend(5))
console.log(linkedList.prepend(10))
console.log(linkedList.prepend(15))
console.log(linkedList.append(20))
console.log(linkedList.append(50))
console.log(linkedList.append(60))
console.log(linkedList.append(70))
// console.log(linkedList.getSize())
// console.log(linkedList.isEmpty())
// linkedList.insert(40, 1)
console.log(linkedList.removeByIndex(3))
// console.log(linkedList.getSize())
linkedList.removeByValue(10)
linkedList.print()