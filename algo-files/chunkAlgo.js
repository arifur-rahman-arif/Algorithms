/* Chunk Algo */
/* [1, 2, 3, 4, 5] => [[1,2], [3, 4], [5] ] */


// Solution #1
function chunkArray(array, size) {
    let result = [];
    let arrayCopy = array;
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size));
    }
    return result;
}

// Solution #2
function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}



console.log(chunkArray([1, 2, 3, 4, 5], 2))