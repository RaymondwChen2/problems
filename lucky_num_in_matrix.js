// 1380. Lucky Numbers in a Matrix
// Easy


// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.



//     Example 1:

// Input: matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
//     Example 2:

// Input: matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
//     Example 3:

// Input: matrix = [[7, 8], [1, 2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.


var luckyNumbers = function (matrix) {
    let luckyNum = [];
    let max = [];

    if (matrix === [] || matrix.length === 0) return [];


    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0];
        let pos = 0;

        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                pos = j;
            }

        }
        let flag = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][pos] > min) {
                flag = false;
                break;
            }
        }
        if (flag) luckyNum.push(min);
    }
    return luckyNum;
};