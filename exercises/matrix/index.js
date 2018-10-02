// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
 
    // For loop for each number
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1;
    let startC = 0;
    let startR = 0;
    let endC = n - 1;
    let endR = n - 1;

    while (startC <= endC && startR <= endR) {

    }

    return results
}

module.exports = matrix;
