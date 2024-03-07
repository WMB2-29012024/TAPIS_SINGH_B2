let nums1 = [-5, 1, 5, 0, -7];
let nums2 = [4, -3, 2, -1, -2];
let nums3 =  [2, 2, -3, -1, 2, 1, -5];

var largestAltitude = function(gain) {
    let sum =0;
    let arr =[];
    for(let i=0; i<=gain.length; i++){
        arr[i] = sum;
        sum += gain[i];
        // arr[i] = sum;
    }
    // arr[arr.length] = sum;
    // console.log(arr)
    let max = -Infinity;
    for(let j=0; j<arr.length; j++){
        if(arr[j] > max){
            max = arr[j];
        }
    }

    return max;

    
//    let count =0; 
//    let res =0;
//    for(let i=0; i<gain.length; i++){
//        count+= gain[i];
//        res = Math.max(res,count);
//    }
//    return res;

    
};
console.log(largestAltitude(nums1));
console.log(largestAltitude(nums2));
console.log(largestAltitude(nums3));