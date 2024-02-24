// Branch Name: B2_W4_D3

//  Question 9: Write a for-loop, and log the current and its immediate previous element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
function previous(numArr){
    const arr=[];
    const Value_not = "value not available";
    for(let idx = 0;idx <numArr.length;idx+=1){
        arr.push(
            {
                previous: (idx === 0 ? Value_not : numArr[idx-1]),
                curr: numArr[idx],
                
            }
        )
    }
    
    console.log(arr);
}
previous(numArr);
