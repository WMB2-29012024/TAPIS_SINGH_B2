// Branch Name: B2_W4_D5
      
/* Question 11: Write a for loop to log elements between 2 and 7.
*/

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function between(numArr){
    let arr =[];
    for(let i=0; i<numArr.length;i++){
        if (numArr[i]>=2 && numArr[i] <=7) {
            arr.push(numArr[i]);
        }
    }
    console.log(arr);
}
between(numArr);
