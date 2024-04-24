const arr =[1,2,3,4,5,6,7];


Array.prototype.myReduce = function(callback , intialValue){
    if(!Array.isArray(this)){
        return `${this} is not a Array `;

    }
    let acc = intialValue;
    for(let i=0; i<this.length; i++){
        acc= acc ? callback(acc,this[i],i,this):this[i];
    }
    return acc;
}

let arrSum = arr.myReduce((acc,curr) => {
    console.log(acc,curr)
    return acc+curr;
})
console.log(arrSum);