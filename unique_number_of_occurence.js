// 1207. Unique Number of Occurrences
// Easy


// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.



//     Example 1:

// Input: arr = [1, 2, 2, 1, 1, 3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
//     Example 2:

// Input: arr = [1, 2]
// Output: false
// Example 3:

// Input: arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
// Output: true


var uniqueOccurrences = function (arr) {
    let obj = {};
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }

    for (let key in obj) {
        if (!arr2.includes(obj[key])) {
            arr2.push(obj[key]);
        } else {
            return false;
        }
    }

    return true;
};