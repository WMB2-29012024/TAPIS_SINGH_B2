let nums = [1,2,3,1], k = 3
let nums1 = [1,2,3,1,2,3], k1 = 2

const fun =(nums,k)=>{
    let i =0; 
    let j = nums.length-1;
    while(i< j && (i-j) <=k){
        if(nums[i] === nums[j]){
            return true;
        }
        else{
            return false;
        }
    }
}

console.log(fun(nums,k));
console.log(fun(nums1,k1));