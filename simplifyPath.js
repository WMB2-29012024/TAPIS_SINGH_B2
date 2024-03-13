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

let s = "/a//b////c/d//././/..";
let s1="/../";
let s2 = "/home//foo/";
const path = (s) => {
    let arr = s.split("/");

    const stack = new Stack(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '.' || arr[i] === '') {
            continue;
        }
        

        else if (!stack.isEmpty() && arr[i] === '..') {
            stack.stackPop();
        }
        else if( arr[i] !== '..') {
            stack.stackPush(arr[i]);

        }



    }
    let ans ="";
    while(!stack.isEmpty()){
        ans = "/"+stack.stackPop()+ans;
    }
    return ans.length ? ans :"/";

}
console.log(path(s));
console.log(path(s1));
console.log(path(s2));