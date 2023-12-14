const container = document.querySelector('.container');
const shuffleBtn = document.querySelector('#shuffle'); 

const selectionSortButton = document.querySelector('#selection-sort');
const insertionSortButton = document.querySelector('#insertion-sort');
const bubbleSortButton = document.querySelector('#bubble-sort');

let isSorted = false;

const generateBar = (height)=>{
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${height}%`;
    return bar;
}

const sleep = (time)=>{

  return  new Promise(res=>{
        setTimeout(() => {
            res()
        }, time);
    })
    
} 

const genArray = ()=>{


    const array = [];
    const length = 40;
    const min = 1;
    const max = 100;
    for(let i = 0; i<length; i++){
        array.push(Math.floor(Math.random()*(max-min + 1))+min);
    }
    return array;
}

const append = (arr)=>{
    container.innerHTML = '';
    arr.forEach(num => {
        const bar = generateBar(num);
        container.append(bar);
    });
}



const selectionSort = async (nums)=>{
    
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
        await sleep(50);
        append(nums);
    }
    return nums;
}

const bubbleSort = async(nums) => {
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

        await sleep(50);
        append(nums);
    }


    return nums;
}

const insertionSort = async(nums)=>{
    for(let i=1; i<nums.length; i++){

        let j=i;

        while(j>0 && nums[j-1]>nums[j]){
            const temp = nums[j-1];
            nums[j-1] = nums[j];
            nums[j] = temp
        j--;
        };

        
        await sleep(50);
        append(nums);
    }

    return nums;
}

let currentArray = genArray();
currentArray = genArray()
    append(currentArray)

shuffleBtn.addEventListener('click',()=>{
    currentArray = genArray();
    append(currentArray);
    isSorted = false;
})

selectionSortButton.addEventListener('click',()=>{
    if(isSorted)shuffleBtn.click();
    selectionSort(currentArray);
isSorted = true;
})
insertionSortButton.addEventListener('click',()=>{
    if(isSorted)shuffleBtn.click();
    insertionSort(currentArray);
    isSorted = true;
})
bubbleSortButton.addEventListener('click',()=>{
    if(isSorted)shuffleBtn.click();
    bubbleSort(currentArray);
    isSorted = true;
})
