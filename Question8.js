// Branch Name: B2_W4_D3

//  Question 8: Write a for-loop, and log the current and its immediate next element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function immediate(numArr){
    const arr=[];
    for(let idx = 0;idx <numArr.length;idx+=1){
        if(idx === numArr.length-1){
            arr.push([numArr[idx],]);
        }
        else{
            arr.push([
                numArr[idx],
                numArr[idx+1]
            ]);
        }
    }
    console.log(arr);
    return arr;
}
immediate(numArr);