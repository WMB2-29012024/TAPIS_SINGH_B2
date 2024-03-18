
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




let N1 = 2;
let  N2 = 3;
let N3 =5;
const decToBin = (num) => {

    // let arr = [];
    // if (num == 0) return "0";

    // let str = "";
    // while (num > 0) {
    //     let rem = num % 2;
    //     str = rem + str;
    //     num = Math.floor(num / 2);
    //     arr.push(str);
    // }
    // return arr;

    const queue = new Queue(num);
    let arr=[];
    
    if (num == 0) return "0";

    let str = "";
    while (num > 0) {
        let rem = num % 2;
        str = rem + str;
        num = Math.floor(num / 2);
        queue.enqueue(str);
        arr.push(queue.dequeue());

    }
    // return JSON.stringify(queue);
    return arr;



}

console.log(decToBin(N1));
console.log(decToBin(N2));
console.log(decToBin(N3));

