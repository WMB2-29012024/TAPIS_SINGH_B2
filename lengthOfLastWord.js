
let string = "Hello world"

function wordLength(string){
     let lastIndex = string.length-1;
     count =0;
     while (string[lastIndex] === " " && lastIndex >=0) {
        lastIndex--;
     }
     while (string[lastIndex] !== " " && lastIndex >=0) {
        count++;
        lastIndex--;
     }
     console.log("Length of of last word is : ",count);
     return count;

}
wordLength(string);
