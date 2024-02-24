// Branch Name: B2_W4_D5
      
/* Question 1: Write a for loop to log each element multiplied by 2.
*/

const numArr = [1, 2, 3, 4, 5];

function mul(numArr){
    for(let idx =0; idx <numArr.length;idx++){
        console.log(2*numArr[idx]);
    }
}
mul(numArr);