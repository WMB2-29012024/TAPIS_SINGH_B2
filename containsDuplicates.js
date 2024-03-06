let nums1= [1, 2, 3, 4];
let nums2= [1, 2, 3, 1];

const containsDuplicate = function(nums) {
    let obj={};
    for(let i=0; i< nums.length; i++){
        if(obj[nums[i]]){
            return true;
        }else{
            obj[nums[i]] = true;
        }
    }
    return false;
};
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));