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

let arr1 = [4, 5, 2, 25];
let arr2 = [13, 7, 6, 12];
let arr3 = [1, 2, 3, 4, 5];
const nextGreater = (arr) => {
    const stack = new Stack(arr.length);
    let num = [];
    for(let i= arr.length-1; i>=0; i--){
        let curr = arr[i];
       
        while(!stack.isEmpty() && curr > stack.peek()){
            stack.stackPop();
            

        }
        num[i] =stack.isEmpty() ? -1:stack.peek();
        stack.stackPush(curr);
        
        
    }
    return num;
}
console.log(nextGreater(arr1));
console.log(nextGreater(arr2));
console.log(nextGreater(arr3));
