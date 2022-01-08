// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

console.time("Runtime");

const isValid = (s) => {
    if (s.length < 2 || s.length > Math.pow(10, 4)) return false;

    const parentheses = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    let open = "([{";
    let close = ")}]";

    let stack = [];

    for (let string of s) {
        // If char exits in open string than push it to the stack
        if (open.indexOf(string) != -1) stack.push(string);

        if (close.indexOf(string) != -1) {
            if (parentheses[stack.pop()] !== string) return false;
        }
    }

    return stack.length ? false : true;
};

console.log(isValid("([])"));

console.timeEnd("Runtime");
