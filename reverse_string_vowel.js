// 345. Reverse Vowels of a String
// Easy

// 1322

// 1670

// Add to List

// Share
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.



//     Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"




var reverseVowels = function (s) {
    let vowels = 'aeiou';
    let queue = [];
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            queue.push(s[i]);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            newStr += queue.pop();
        } else {
            newStr += s[i];
        }
    }

    return newStr;
};