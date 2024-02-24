// Branch Name: B2_W4_D5
      
/* Question 16: Write a for loop to find the index of a specific element in the array.
*/

const arr = ["apple", "banana", "orange", "grape"];
const target = "grape";

function fun(arr,target){
    for(let idx =0; idx <arr.length;idx++){
        if (arr[idx] === target) {
            console.log(idx);
        }
    }
}
fun(arr,target);