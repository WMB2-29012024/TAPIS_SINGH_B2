let arr = [1,2,3,4,5,6,7,8,9,10];
let res = arr.reduce((sum,curr) => {
    if(curr%2==0){
        
        return sum += curr;
    }else{
        return sum;
    }
},0)

console.log(res);