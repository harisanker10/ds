class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {

        const node = new Node(value);

        node.next = this.head;
        this.head = node;
        this.size++;
    }
    append(value) {

        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let pointer = this.head;
            while (pointer.next) pointer = pointer.next;
            pointer.next = node;
        }
        this.size++;
    }

    insert(value, index) {

        if (index < 0 || index > this.size) return null;

        
        if(index === 0 ) this.prepend(value);
        else{
            
            const node = new Node(value);
            let pointer = this.head;
            for (let i = 0; i < index - 1; i++){
                
                pointer = pointer.next;
            }
            
            node.next = pointer.next;
            pointer.next = node;
            
        }
            this.size++;

    }

    removeFrom(index){
        if(index<0 || index >= this.size || this.isEmpty()){
            return null;
        }

        let removedNode;

        if(index === 0){
            removedNode = this.head;    
            this.head = this.head.next;
        }else{
            
            let pointer = this.head;

            for(let i=0; i< index-1; i++){
                pointer = pointer.next;
            }
            removedNode = pointer.next;
            pointer.next = removedNode.next;
        }

        this.size--;
        return removedNode.value;
    }

    removeValue(value){
        if(this.isEmpty() || index<0 || index >= this.size) return null;

        let removedNode;

        if(this.head.value === value){
            removedNode = this.head;
            this.head = removedNode.next;
        
        }else{

            
            let pointer = this.head;
            while(pointer.next && pointer.next.value !== value){
                pointer = pointer.next;
            }
            
            if(pointer.next === null)return("value doesn't exist")
            
            removedNode = pointer.next;
            pointer.next = removedNode.next;
        }
            
        size--;
        return removedNode.value;
    }

    search(value){
        if(this.isEmpty()){
            return -1;
        }

        let pointer = this.head;
        for(let i=0; i<this.size; i++){
            if(pointer.value ===value )return i;
            pointer = pointer.next;
        }

        return -1


    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

    }

    getMiddleVal(){
        let fastPtr = this.head;
        let slowPtr = this.head;
        
        while(fastPtr?.next){
            fastPtr = fastPtr.next.next;
            slowPtr = slowPtr.next;
        }

        return slowPtr.value;
    
    
    }


}

const list = new LinkedList();

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.append(10)

console.log(list.getMiddleVal())







module.exports = {LinkedList,Node};