// Branch Name: B2_W4_D5
      
/* Question 4: Write a for loop to find and log the smallest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];
function smallest(numArr){
    for(let i =0; i<numArr.length; i++){
        if (numArr[i]>numArr[i+1]) {
            let temp = numArr[i];
            numArr[i] = numArr[i+1];
            numArr[i+1]=temp;
        }
    }
    console.log("smallest element in Array : ",numArr[0]);
}
smallest(numArr);
