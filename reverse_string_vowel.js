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