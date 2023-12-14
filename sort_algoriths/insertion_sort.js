// const generator = require('../generateArray');


const insertionSort = (nums)=>{
    for(let i=1; i<nums.length; i++){

        let j=i;

        while(j>0 && nums[j-1]>nums[j]){
            const temp = nums[j-1];
            nums[j-1] = nums[j];
            nums[j] = temp
            j--;
        };
    }

    return nums;
}



console.log(insertionSort([32,6354,6754,654,3214,3211,32,4,6,43,2]))



module.exports = insertionSort;