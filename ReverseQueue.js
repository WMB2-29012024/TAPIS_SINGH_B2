class Stack {
    constructor(size) {
        this.stack = [];
        this.maxSize = size;
        this.stackSize = 0;

    }
    peek() {
        if (this.stackSize === 0) {
            return "Stack is empty";
        }
        else {
            const lastElem = this.stackPop();
            this.stackPush(lastElem);
            return lastElem;
        }
    }

    isEmpty() {
        if (this.stackSize === 0) {
            return true;
        }
        return false;
    }
    stackPush(item) {
        if (this.stackSize >= this.maxSize) {
            return new Error("Stack Overflow");

        }
        this.stack.push(item);
        this.stackSize += 1;
        return this.stackSize;
    }

    stackPop() {
        if (this.stackSize === 0) {
            return new Error("Stack UnderFlow");
        }
        this.removedItem = this.stack.pop();
        this.stackSize -= 1;
        return this.removedItem;
    }
}
class Node {
    // Node class for storing data and 
    // the reference to the next node
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    // Queue class using linked list
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add an element to the rear of the queue
    enqueue(data) {
        let newNode = new Node(data);
        if (this.rear === null) { // queue is empty
            this.front = this.rear = newNode;
        } else {
// adding the new node in the next of current rear node
            this.rear.next = newNode; 
          
//. changing the current rear node with the new one
            this.rear = newNode; 
        }
        this.size++;
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.front === null) {
            return null;
        }
        let temp = this.front;
        this.front = this.front.next;
        /** when queue has only 1 element */
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return temp.data;
    }

    // Get the front element of the queue
    peek() {
        /** when queue is empty */
        if (this.front === null) {
            return null;
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the number of elements in the queue
    getSize() {
        return this.size;
    }
}


let arr1 =  [1, 2, 3, 4, 5];
let arr2 =  [10, 20, 30, 40, 50];
let arr3 = [5, 7, 9];
const reverse = (arr) => {
    const stack = new Stack(arr.length);

    for(let i=0; i<arr.length; i++){
        stack.stackPush(arr[i]);
    }
    const queue = new Queue(arr.length);
    while(!stack.isEmpty()){
        let temp = stack.stackPop();
        queue.enqueue(temp);

    }
    return JSON.stringify(queue);
}

console.log(reverse(arr1))
console.log(reverse(arr2))
console.log(reverse(arr3))