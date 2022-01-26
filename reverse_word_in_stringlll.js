// 557. Reverse Words in a String III
// Easy

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



//     Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"


var reverseWords = function (s) {
    let split = s.split(" ");
    let arr = [];

    for (let i = 0; i < split.length; i++) {
        arr.push(reverse(split[i]));
    }

    return arr.join(' ');
};

function reverse(word) {
    let str = "";

    for (let i = word.length - 1; i >= 0; i--) {
        str += word[i];
    }

    return str;
}