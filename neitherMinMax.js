var findNonMinOrMax = function (nums) {
    let min = nums[0];
    let max = nums[0];
    if (nums.length < 3) {
        return -1;
    }

    for (let i = 1; i < nums.length; i++) {
        if (min > nums[i]) {
            min = nums[i];
        }
        if (max < nums[i]) {
            max = nums[i];
        }

    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== min && nums[j] !== max) {
            return nums[j];
        }
    }
};