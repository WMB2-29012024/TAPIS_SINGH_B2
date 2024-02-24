// Branch Name: B2_W4_D5
      
/* Question 24: Write a for loop to remove duplicate elements from an array.
*/

const arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];;

function withoutDuplicate(arr){
    const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueArr.push(arr[i]);
    }
}

console.log("Array with duplicates removed:", uniqueArr);
}
withoutDuplicate(arr);