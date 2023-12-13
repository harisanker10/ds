class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



class ArrayStack {
    constructor() {
        this.items = [];
    }

    push(value) {
        return this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return (this.items.toString());
    }
}

class ListStack {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    push(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    pop() {
        const removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode.val;
    }

    peek() {
        return this.head?.val;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let curr = this.head;
        let string = ``;
        while (curr) {
            string += `${curr.val} `;
            curr = curr.next;
        }
        return string;
    }
}


// Q1. Balance Paranthesis Check

const balancedParanthesis = (string) => {


    const stack = new ListStack();

    const matchingPairs = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
            stack.push(string[i]);
        }
        else if ((string[i] === ')' || string[i] === '}' || string[i] === ']') && !stack.isEmpty()) {
            if (matchingPairs[stack.pop()] !== string[i]) return false;
        }
        else {
            return false;
        }
    }

    return stack.isEmpty();
}


// Q2. Reverse a sring using stack

const reverse = (string) => {

    const stack = new ListStack();
    let reversed = ``;


    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    for (let i = 0; i < string.length; i++) {
        reversed += stack.pop();
    }

    return reversed;

}


//Q.3 Next Greater Element: Given an array, find the Next Greater Element (NGE) for every element using a stack.


const nextGreaterElt = (nums) => {

    const stack = new ListStack();
    const result = [];

    for (let i = nums.length - 1; i >= 0; i--) {

        while(stack.peek()<nums[i]){
            stack.pop();
        }
        result.unshift(stack.peek() || -1);
        stack.push(nums[i]);

    }

    return result;

}


