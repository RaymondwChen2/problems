// 1446. Consecutive Characters
// Easy

// The power of the string is the maximum length of a non - empty substring that contains only one unique character.

// Given a string s, return the power of s.



//     Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
//     Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

var maxPower = function (s) {
    let count = 1;
    let most = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];


        if (char === s[i + 1]) {
            count += 1;
        } else if (most <= count) {
            most = count;
            count = 1;
        } else {
            count = 1;
        }

    }

    return most;
};