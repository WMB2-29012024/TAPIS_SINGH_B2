// Branch Name: B2_W4_D5
      
/* Question 25: Write a for loop to find the intersection of two arrays.
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function inter(arr1,arr2){
    const intersection = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            break; 
        }
    }
}

console.log("Intersection of the two arrays:", intersection);
}
inter(arr1,arr2);