function atlernateNum(num){
    const arr=[];
    const Value_not = "value not available";
    for(let idx = 0;idx <num.length;idx+=1){
        arr.push(
            {
                previous: (idx === 0 ? Value_not : num[idx-1]),
                curr: num[idx],
                next: (idx === num.length-1 ? Value_not : num[idx+1]),
            }
        )
    }
    
    return arr;
}
console.log(atlernateNum([1,2,3,4,5,6,7,8,9,10]))