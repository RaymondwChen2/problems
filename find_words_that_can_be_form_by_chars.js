// 1160. Find Words That Can Be Formed by Characters
// Easy

// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars(each character can only be used once).

// Return the sum of lengths of all good strings in words.


//     Example 1:

// Input: words = ["cat", "bt", "hat", "tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

var countCharacters = function (words, chars) {
    let total = 0;
    let objChars = obj(chars);

    for (let i = 0; i < words.length; i++) {
        let objWords = obj(words[i])
        let bool = true;

        for (let key in objWords) {
            if (!(objWords[key] <= objChars[key])) {
                bool = false;
                break;
            }
        }

        if (bool) {
            total += words[i].length
        }
    }

    return total;
};

function obj(word) {
    let obj1 = {};

    for (let i = 0; i < word.length; i++) {
        if (obj1[word[i]]) {
            obj1[word[i]] += 1;
        } else {
            obj1[word[i]] = 1;
        }
    }

    return obj1
}