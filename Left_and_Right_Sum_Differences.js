let nums1 =[2, 5, 1, 6];
let nums2 =  [3, 3, 3];


var leftRightDifference = function(nums) {
    let sum1=0;
    let sum2 =0;
    let arr1 =[];
    let arr2 =[];
    for(let i=0; i<nums.length; i++){
        arr1[i] = sum1; 
               
        sum1 += nums[i];
    }
     for(let i=nums.length-1; i>=0; i--){
        arr2[i] = sum2; 
        sum2 += nums[i];
    }
    
    
    let sub =[];
    for(let i=0; i<arr1.length; i++){
        sub[i] = Math.abs(arr1[i]-arr2[i]);
    }
    return sub;
};

console.log(leftRightDifference(nums1));
console.log(leftRightDifference(nums2));
