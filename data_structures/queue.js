class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class ArrayQueue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(val) {
        this.items.push(val);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

}

class ListQueue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue() {
        const removedNode = this.head;
        this.head = removedNode.next;
        return removedNode.val;
    }

    print() {
        let list = '';
        let ptr = this.head;
        while (ptr) {
            list += ptr.val;
            ptr = ptr.next;
        }

        return list;
    }

}

class circularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(val) {
        if (!this.isFull) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = val;
            this.currentLength++;

            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (!this.isEmpty) {
            const removedValue = this.front;
            this.front--;
            this.currentLength--;
            return removedValue;
        }
    }



}