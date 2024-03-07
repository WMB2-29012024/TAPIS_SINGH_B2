let nums1 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

let nums2 = [[1,0],
[0,1]];

let nums3 = [[5]];
var diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i] + mat[i][mat.length - i - 1];

    }
    if (mat.length % 2 !== 0) {
        let mid = Math.floor(mat.length / 2);
        sum -= mat[mid][mid];
    }
    return sum;

};
console.log(diagonalSum(nums1));
console.log(diagonalSum(nums2));
console.log(diagonalSum(nums3));