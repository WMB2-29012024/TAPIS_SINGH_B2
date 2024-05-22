let nums = [3,2,3];

const fun = (nums)=>{
    let count=0;
    for(let i=0; i<nums.length-1; i++){
        for(let j=1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                count++;
                
            }
        }

    }
    console.log(nums[count])
    return nums[count];

}

const fun1 = (nums)=>{
    let count1=0;
    let obj ={};

    
    for (let num of nums) {
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        
        
        if (obj[num] > Math.floor(nums.length/2)) {
            return num;
        }
    }
   
    

}



console.log(fun(nums));
console.log(fun1(nums));