// Branch Name: B2_W4_D3

//  Question 14: There are 2 different arrays, write a for-loop, that should log elements at the same index in both the arrays. The loop should run till the longer array's length.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9, 10, 11, 12]  


function check(numArr1,numArr2){
    let len = 0;
    if(numArr1.length > numArr2.length){
        len = numArr1.length;

    }
    else{
        len= numArr2.length;
    }
    for(let idx =0;idx <len;idx++){
        console.log(numArr1[idx],numArr2[idx]);
    }
}
check(numArr1,numArr2);

