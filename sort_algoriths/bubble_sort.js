const bubbleSort = (nums)=>{
    for(let i=0;i<nums.length-1; i++){
        
        let swapped = false;
            for(let j=0; j<nums.length-1-i;j++){
                if(nums[j+1]<nums[j]){
                    const temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                    swapped = true;
               }
            }
            if(!swapped)break;
            console.log(`Pass no: ${i+1}`)
    
    }
    return nums
}

console.log(bubbleSort([1,2,1,3,4,5,6,7])) 