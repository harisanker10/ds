const generate = require('../generateArray');

const selectionSort = (nums)=>{
    
    let k,j;

    for(let i=0; i<nums.length;i++){
        k = i;
        j = i+1;

        while(j<nums.length){
            
            if(nums[j]<nums[k])k=j;
            j++;
        }
        const temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
    }
    return nums;
}



module.exports = selectionSort;




