// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



//     Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function (s, t) {
    let obj1 = {};
    let obj2 = {};


    if (s.length !== t.length) return false;

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

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
};