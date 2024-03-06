let nums1 = [1,2,3,4];
let nums2 = [1,1,1,1,1];
let nums3 = [3,1,2,10,1]
let nums4 = [-1,2,-3,4,-5];

const runningSum = function(nums) {
    let sum = 0;
    let arr =[];
    
    for(let i=0; i<nums.length; i++){
        sum +=  nums[i];
        arr[i] = sum;

    }
    return arr;
};

console.log(runningSum(nums1));
console.log(runningSum(nums2));
console.log(runningSum(nums3));
console.log(runningSum(nums4));


