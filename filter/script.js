const arr = [1,2,3,4,5,6,7,8,9,10];

Array.prototype.myFilter = function(callback){
    if(!Array.isArray(this)){
        return `${this} is not a Array`;

    }
    let newArray = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

let ans = arr.myFilter((ele) => {
    return ele%2;
})
console.log(ans);

