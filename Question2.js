// Branch Name: B2_W4_D5
      
/* Question 2:  Write a for loop to log the sum of all elements.
*/

const numArr = [1, 2, 3, 4, 5];
function sum(numArr ){
    let sum =0;
    for(let idx =0; idx<numArr.length;idx++){
        sum +=numArr[idx];
    }
    console.log(sum);
}
sum(numArr);
