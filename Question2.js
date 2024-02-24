// Branch Name: B2_W4_D3

//  Question 2: Write a for loop starting from last index, and store each element in a new array. Log the array.

const numArr = [1, 234_45, 89,75, 4e9]
const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"]
const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true]
    


function print_strArr(strArr){
    const arr = [];
    for(let idx = strArr.length-1; idx >=0; idx--){
     arr[idx] = strArr[idx];

    }
    return arr;
   
}
console.log(print_strArr(strArr));
console.log();
function print_numArr(numArr){
    const a = [];
    for(let idx = numArr.length-1; idx >=0; idx--){
     a[idx] = numArr[idx];

    }
    return a;
   
}
console.log(print_strArr(numArr));

console.log();
function print_numArr(mixArr){
    const mix = [];
    for(let idx = mixArr.length-1; idx >=0; idx--){
     mix[idx] = mixArr[idx];

    }
    return mix;
   
}
console.log(print_strArr(mixArr));
