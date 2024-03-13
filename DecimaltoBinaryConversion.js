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



let num = 18;
// const decToBin = (num) => {
//     if(num == 0) return "0";

//     let str = "";
//     while(num > 0){
//         let rem = num %2;
//         str = rem+str;
//         num = Math.floor(num/2);
//     }
//     return str;
// }

///BY Using Stack data Structure

const decToBin = (num) => {
    
    const stack = new Stack(num);

    if(num == 0) return "0";

    while(num > 0){
        let rem = num % 2;
        stack.stackPush(rem);
        num = Math.floor(num/2);

    }

    let str ="";
    while(!stack.isEmpty()){
        str += stack.stackPop();
    }
    return str;
}

console.log(decToBin(num));