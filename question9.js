function atlernateNum(num){
    for(let idx=num.length-1;idx>=0; idx-=4){
        console.log(num[idx]);
    }
}
atlernateNum([1,2,3,4,5,6,7,8,9,10]);