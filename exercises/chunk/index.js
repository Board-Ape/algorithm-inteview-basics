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
    // Iterate over array
    let result = [];
    let temp = [];

    for (let i = 0; i < array.length; i++) {

        if (!temp.length || temp.length < size) {
            temp.push(array[i])
        }

        else {
            result.push(temp);
            temp = [];
            temp.push(array[i]);
        }
    }

    if (temp.length) {
        result.push(temp);
    }

    return result;
}

module.exports = chunk;
