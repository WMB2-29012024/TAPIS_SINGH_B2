// Branch Name: B2_W4_D5
      
/* Question 26: Write a for loop to find the union of two arrays.
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function unionOfArr(arr1,arr2){
    let union =[];
    for (let i = 0; i < arr1.length; i++) {
        let isUnique = true;
        for (let j = 0; j < union.length; j++) {
            if (arr1[i] === union[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            union.push(arr1[i]);
        }
    }
    
    
    for (let i = 0; i < arr2.length; i++) {
        let isUnique = true;
        for (let j = 0; j < union.length; j++) {
            if (arr2[i] === union[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            union.push(arr2[i]);
        }
    }
    
    console.log("Union of the two arrays:", union);
}
unionOfArr(arr1,arr2);