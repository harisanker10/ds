const generateArray = require('../generateArray');

const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j + 1] < nums[j]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) return nums;

    }


    return nums;
}


module.exports = bubbleSort
