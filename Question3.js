// Branch Name: B2_W4_D5
      
/* Question 3: Write a for loop to find and log the largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];
function largest(numArr){
    for(let i =0; i<numArr.length;i++){
        // for(let j=0; j<numArr.length;)
        if(numArr[i]>numArr[i+1]){
            let temp = numArr[i];
            numArr[i] = numArr[i+1];
            numArr[i+1] = temp;
        }
        
    }
    console.log(numArr[numArr.length-1]);
}
largest(numArr);


