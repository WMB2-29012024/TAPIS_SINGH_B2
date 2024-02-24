// Branch Name: B2_W4_D3

//  Question 15: There are 2 different arrays, write a for-loop, that:
// starts from 0th index, on array one,
// matches all the elements of the array two,
// if any element matches, logs true, and continue to next element
// once all the elements are looped on array 2, go to next element in array 1, then continue from step 1.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9,3, 10, 11, 12]    
function check(numArr1,numArr2){
   for(let idx = 0;idx < numArr1.length;idx++){
    for(let j =0; j <numArr2.length; j++ ){
        if(numArr1[idx] == numArr2[j]){
            console.log(true);
        }
    }
   }
    
}
check(numArr1,numArr2);
   
