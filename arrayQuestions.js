//Leetcode.com/harisanker10




// 2138. Divide a String Into Groups of Size k


/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = function(s, k, fill) {
    
    let string = s;
    let array = [];
    while(string.length > 0){
        array.push(string.slice(0,k));
        string = string.slice(k);
    
    }

    while(array[array.length-1].length<k){
        array[array.length-1] = array[array.length-1]+fill;
    }

  

    return array;

};



//2119. A Number After a Double Reversal



/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = function (num) {

    const reverse = (arr) => {
        const array = arr;
        const length = parseInt(array.length / 2);
        //swap
        for (let i = 0; i < length; i++) {
            array[array.length - 1 - i] += array[i];
            array[i] = array[array.length - 1 - i] - array[i];
            array[array.length - 1 - i] = array[array.length - 1 - i] - array[i];
        }
        return array.join('');
    }


const numToArray = (num)=>{
    let number = num;
    number = number.toString().split('');
    return number.map(n=>{
        return parseInt(n);
    })
} 


    const reversed1 = parseInt(reverse(numToArray(num)));
    const reversed2 = parseInt(reverse(numToArray(reversed1)));

    console.log(num,reversed1,reversed2)

    return (reversed2.toString() === num.toString())


};


//2108. Find First Palindromic String in the Array

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function (word) {

    console.log(word)

    const isPalindrome = (word) => {
        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };





    for (let i = 0; i < word.length; i++) {
        if (isPalindrome(word[i])) {
            return word[i];
        }
    }

    return "";



};