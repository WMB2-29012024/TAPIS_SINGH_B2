// Branch Name: B2_W4_D5
      
/* Question 10: Write a for loop to log elements less than or equal to 3.
*/

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function lesser3(numArr){
    let arr =[];
    for(let i=0; i<numArr.length;i++){
        if (numArr[i] <= 3) {
            arr.push(numArr[i]);
        }
    }
    console.log(arr);

}
lesser3(numArr);