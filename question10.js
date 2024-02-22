function atlernateNum(num){
    const arr=[];
    for(let idx = 0;idx <num.length;idx+=1){
        if(idx === num.length-1){
            arr.push([
                num[idx],
                
            ]);
        }
        else{
            arr.push([
                num[idx],
                num[idx+1]
            ]);
        }
    }
    console.log(arr);
    return arr;
}
atlernateNum([1,2,3,4,5,6,7,8,9,10]);