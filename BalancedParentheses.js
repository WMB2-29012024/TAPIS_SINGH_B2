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


let s = "{[()]}";


const isValid = (s) => {
    const stack = new Stack(s.length);
    for(let i=0; i< s.length; i++){
        let currChar = s.charAt(i);
        if(currChar ==='[' || currChar ==='(' || currChar === '{'){
            stack.stackPush(currChar);
        }else{
            const peekElement = stack.peek();
            if(!stack.isEmpty() && ((currChar ===']' && peekElement ==='[')|| (currChar ===')' && peekElement === '(') ||  (currChar ==='}' && peekElement === '{'))){
                stack.stackPop();

            }else{
                return false;
            }
        }
    }
    return stack.isEmpty();
}
console.log(isValid(s))