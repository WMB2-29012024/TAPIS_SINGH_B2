let n=6;

var smallestEvenMultiple = function(n) {
    if(n%2===0){
        return n;
    }else{
        return n*2;
    }
};

console.log(smallestEvenMultiple(n));