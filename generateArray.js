
module.exports = 
 generateArray = (length,min,max)=>{


    const array = [];
    if(!min)min = 0;
    if(!max)max = length;
    for(let i = 0; i<length; i++){
        array.push(Math.floor(Math.random()*(max-min + 1))+min);
    }
    return array;
}

