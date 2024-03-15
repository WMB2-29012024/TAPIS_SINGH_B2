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

let arr1 = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let size1 =3;
let arr2 = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
let size2 =4;
let arr3 = [1,2,3,4,5];
let size3 =3;

const maxOfSub =(arr,size) => {
    const queue = new Queue(arr.length);

    let max =Number.MIN_VALUE;
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        
        max = Math.max(max, element);
        if(i >= size-1){
            queue.enoqueue(max);
        }


    }
    let num = [];
    while(!queue.isEmpty()){
        num.push(queue.dequeue());
    }
    return num;
}

console.log(maxOfSub(arr1,size1));
console.log(maxOfSub(arr2,size2));
console.log(maxOfSub(arr3,size3));
