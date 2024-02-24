// Branch Name: B2_W4_D5
      
/* Question 5: Write a for loop to find and log the index of largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

function largestIdx(numArr){
    let max = numArr[0];
    let idx = 0;
    for(let i =0; i<numArr.length; i++){
        if(max <numArr[i]){
            max = numArr[i];
            idx =i;
        }
    }
    console.log("Index position of larget value in an array is  :  " , idx);
}

largestIdx(numArr);

