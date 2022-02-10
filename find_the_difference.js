// 389. Find the Difference
// Easy

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.



//     Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
//     Example 2:

// Input: s = "", t = "y"
// Output: "y"


var findTheDifference = function (s, t) {
    let str = "";
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]]) {
            obj1[s[i]] += 1;
        } else {
            obj1[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (obj2[t[i]]) {
            obj2[t[i]] += 1;
        } else {
            obj2[t[i]] = 1;
        }
    }

    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            str += key
        }
    }

    return str;
};