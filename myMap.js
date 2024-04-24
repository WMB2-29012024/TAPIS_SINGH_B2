let arr = [1,2,3,4,5];

Array.prototype.mapBuildByMe = function(callback){
    if(!Array.isArray(this)){
        return `${this} is not a Array`;
    }
    let newArr = [];
    for(let i=0; i<this.length; i++){
        newArr.push(callback(this[i],i,this));
    }
    return newArr;
}

let ans= arr.mapBuildByMe((ele, index, myArray)=>{
    console.log(ele,index, myArray);
    return ele*2;
})