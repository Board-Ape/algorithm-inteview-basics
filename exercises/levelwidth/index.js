// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // When you hear width, immediately think Breadth First 

    // A neat trick to not using a counter index pointer:
    // utilize the length of the array - 1 to obtain the 
    // current index.
    let countersArray = [0];
    let treeArray = [root, 'stop'];

    while (treeArray.length > 1) {
        const node = treeArray.shift();

        if (node === 'stop') {
            countersArray.push(0)
            treeArray.push(node);
        }
        else {
            treeArray.push(...node.children);
            countersArray[countersArray.length - 1]++;
        }
    }

    return countersArray;
}

module.exports = levelWidth;
