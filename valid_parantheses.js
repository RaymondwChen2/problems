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