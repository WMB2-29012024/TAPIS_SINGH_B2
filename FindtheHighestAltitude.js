// let nums1 = [-5, 1, 5, 0, -7];
// let nums2 = [4, -3, 2, -1, -2];
// let nums3 =  [2, 2, -3, -1, 2, 1, -5];

// var largestAltitude = function(gain) {
//     let sum =0;
//     let arr =[];
//     for(let i=0; i<=gain.length; i++){
//         arr[i] = sum;
//         sum += gain[i];
//         // arr[i] = sum;
//     }
//     // arr[arr.length] = sum;
//     // console.log(arr)
//     let max = -Infinity;
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] > max){
//             max = arr[j];
//         }
//     }

//     return max;

    
// //    let count =0; 
// //    let res =0;
// //    for(let i=0; i<gain.length; i++){
// //        count+= gain[i];
// //        res = Math.max(res,count);
// //    }
// //    return res;

    
// };
// console.log(largestAltitude(nums1));
// console.log(largestAltitude(nums2));
// console.log(largestAltitude(nums3));


// const obj1 = {a: 1, b: 2, c: 3}
// const obj2 = {c: 101, d: 205, e: 309}
 
// const mergedObject = Object.assign(obj1, obj2);
// console.log(mergedObject);

// Create a new Map
const userDataMap = new Map();

// Adding key-value pairs to the map
userDataMap.set('John', { age: 30, city: 'New York' });
userDataMap.set('Alice', { age: 25, city: 'Los Angeles' });

// Checking if a specific key exists in the map
console.log(userDataMap.has('John')); // Output: true

// Getting the value associated with a specific key
console.log(userDataMap.get('Alice')); 
// Output: { age: 25, city: 'Los Angeles' }


