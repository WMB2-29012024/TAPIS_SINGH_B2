let nums1 = [[5,2,3],[0,6,7]];
let nums2 = [[1,2],[3,4],[5,6]];
const maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
};
console.log(maximumWealth(nums1));
console.log(maximumWealth(nums2));
