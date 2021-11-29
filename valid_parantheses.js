// 20. Valid Parentheses
// Easy

// 9925

// 387

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


//     Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true




var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
        } else if (char === ')' && stack[stack.length - 1] === "(") {
            stack.pop();
        } else if ((char === "}" && stack[stack.length - 1] === "{")) {
            stack.pop();
        } else {
            return false;
        }
    }
    console.log(stack);
    return stack.length === 0;
};

console.log(isValid('()'));// true
console.log(isValid('()[]{}'));// true
console.log(isValid('(['));// false
console.log(isValid('([)]'));// true

