/* [1, 2, 3, 4, 5] => [[1,2], [3, 4], [5] ] */


function chunkArray(array, size) {
    let result = []
    let arrayCopy = array
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}



console.log(chunkArray([1, 2, 3, 4, 5], 2))