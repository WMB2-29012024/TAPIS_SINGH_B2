// Branch Name: B2_W4_D3

//  Question 11: Write a for-loop and count frequency of each element in the numArray. Store the element and its frequency in an object.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
function frequency(nnumArr){
    obej = {};

    for(let i=0; i<numArr.length;i++){
        if (obej[numArr[i]]) {
            obej[numArr[i]] += 1;
        }else{
            obej[numArr[i]] = 1;
        }
    }
    console.log(obej);
}
frequency(numArr);
