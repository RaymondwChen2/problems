// 451. Sort Characters By Frequency
// Medium

// Given a string s, sort it in decreasing order based on the frequency of the characters.The frequency of a character is the number of times it appears in the string.

// Return the sorted string.If there are multiple answers, return any of them.

//     Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
//     So 'e' must appear before both 'r' and 't'.Therefore "eetr" is also a valid answer.
//         Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
//     Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


var frequencySort = function (s) {
    let charObj = {};
    let charArr = [];
    let newStr = '';
    
    for (let i = 0; i < s.length; i++) {
        if (charObj[s[i]]) {
            charObj[s[i]]++;
        } else {
            charObj[s[i]] = 1;
        }
    }
    
    for (let ele in charObj) {
        charArr.push([ele, charObj[ele]]);
    }

    charArr.sort((a, b) => {
        return b[1] - a[1];
    });
    
    for (let i = 0; i < charArr.length; i++) {
        let charToAdd = charArr[i][0];
        let charFreq = charArr[i][1];
        
        while (charFreq) {
            newStr += charToAdd;
            charFreq--;
        }
    }
    
    return newStr;
}
console.log(frequencySort('Aabb'));