// Branch Name: B2_W4_D3

//  Question 1: Write a for loop and log each element, starting from 0th index.

const numArr = [1, 234_45, 89,75, 4e9]
function print_numArr(numArr){
    for(let num of numArr){
        console.log(num);
    }
}
print_numArr(numArr);

console.log();


const strArr = ["asd", "qwe", "ert", "asdasdzxczxc"]
function print_strArr(strArr){
    for(let idx of strArr){
        console.log(idx);
    }
}
print_strArr(strArr);

console.log();

 const mixArr = ["first", "234_45", {first: "Web", last: "Masters"}, true]

function print_mixArr(mixArr){
    for(let i of mixArr){
        console.log(i);
    }
}
print_mixArr(mixArr);
