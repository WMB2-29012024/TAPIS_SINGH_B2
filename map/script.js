const arr = [1,2,3,4,5];

Array.prototype.myMap = function (callback){
    if(!Array.isArray(this)){
        return `${this} is not Array`;

    }

    let resultArray = [];
    for(let i=0; i<this.length; i++){
        resultArray.push(callback(this[i],i,this))
    }
    return resultArray;
}
let mul = arr.myMap(function(ele,index,myArray){
    return ele*2;
})
let Sum = arr.myMap(function(ele){
    return ele+2;
})
console.log(mul)
console.log(Sum)