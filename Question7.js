// Branch Name: B2_W4_D5
      
/* Question 7: Write a for loop to log only even numbers in the array.
*/

const numArr = [10, 2, 9, 8, 6, 12, 201, 30, 4, 50];

function even(numArr){
    let arr =[];
    for(let idx =0; idx <numArr.length; idx++){
        if(numArr[idx] % 2 ===0){
            // arr[idx] = numArr[idx];
            arr.push(numArr[idx]);
        }
        
    }
    console.log(arr);
}
even(numArr);