// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // MI SOLUCIÓN
    /*
    let subArr = [];
    let finalArr = [];
    array.map((element, i) => {
        subArr.push(element)
        if (array.length % size !== 0 && i + 1 === array.length) {
            finalArr.push(subArr)
        }
        if (subArr.length >= size) {
            finalArr.push(subArr);
            subArr = [];
        }

    })
    return finalArr
    */

    // PRIMERA SOLUCIÓN DE STEPHEN
    /*
    const chunked = [];

    for(let element of array){
        const last = chunked[chunked.length-1];
        
        if(!last || last.length === size){
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    
    return chunked
    */

    // SEGUNDA SOLUCIÓN DE STEPHEN
    const chunked = [];
    let index = 0;

    while(index< array.length){
        chunked.push(array.slice(index, index + size))
        index += size
    }
    return chunked;
}

module.exports = chunk;
