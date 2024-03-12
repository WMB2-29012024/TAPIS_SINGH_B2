class Stack{
    constructor(size){
        this.stack = [];
        this.maxSize = size;
        this.stackSize =0;

    }
    peek(){
        if(this.stackSize ===0){
            return "Stack is empty";
        }
        else{
            const lastElem = this.stackPop();
            this.stackPush(lastElem);
            return lastElem;
        }
    }

    isEmpty(){
        if(this.stackSize ===0){
            return true;
        }
        return false;
    }
    stackPush(item){
        if(this.stackSize >= this.maxSize){
            return new Error("Stack Overflow");

        }
        this.stack.push(item);
        this.stackSize +=1;
        return this.stackSize;
    }

    stackPop(){
        if(this.stackSize ===0){
            return new Error("Stack UnderFlow");
        }
        this.removedItem = this.stack.pop();
        this.stackSize -=1;
        return this.removedItem;
    }
}


let s = "Hello, World!";

const reverseString =(s) => {
    const stack = new Stack(s.length);
    let ans="";
    for(let i=0; i<s.length; i++){
        const curr = s.charAt(i);
        stack.stackPush(curr);
    }
    while(!stack.isEmpty()){


        ans += stack.stackPop();

    }
    return ans;
}

console.log(reverseString(s));