let nums1 = [[1, 0], [1, 1], [0, 1]];
let nums2 = [[0, 1, 1], [0, 1, 1], [1, 1, 1]];
let nums3 =  [[1, 0, 1], [0, 0, 1], [1, 1, 0]];

var rowAndMaximumOnes = function(mat) {
    let count = 0;
    let ansIdx =0;
    for(let i=0; i< mat.length;i++){
        let temp =0;
        for(let j=0; j<mat[i].length; j++){
            if(mat[i][j] === 1){
                temp++;
            }
        }

        if(count < temp){
            count =temp;
            ansIdx =i;
        }
        
    }
    return [ansIdx,count];
};
console.log(rowAndMaximumOnes(nums1));
console.log(rowAndMaximumOnes(nums2));
console.log(rowAndMaximumOnes(nums3));