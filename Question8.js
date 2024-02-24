// Branch Name: B2_W4_D5
      
/* Question 8: Write a for loop to log only odd numbers in the array.
*/

const numArr = [10, 2, 9, 8, 6, 121, 20, 301, 4, 50];
function odd(numArr){
    let arr=[];
    for(let i =0 ; i<numArr.length; i++){
        if(numArr[i] %2 !==0){
            arr.push(numArr[i]);
        }
    }
    console.log(arr);

}
odd(numArr);
