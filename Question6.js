// Branch Name: B2_W4_D5
      
/* Question 6: Write a for loop to find and log the index of smallest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];
function smallestidx(numArr){
    let min = numArr[0];
    let index =0;
    for(let i =0; i<numArr.length;i++){
        if(min > numArr[i]){
            min = numArr[i];
            index= i;
        }
    }
    console.log("Index position of smallest value in an array is  :  " + index);
}
smallestidx(numArr);
