let input = 121 /* if 121 reverted number like 121 == 121 then its palindrome */

/* Method #1 
Time complexity: O(n)
Space complexity: O(1)
*/

const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x == reverse_1(x) || x == 0) {
        return true;
    } else {
        return false
    }
};

/* this is reverse integer algo */
const reverse_1 = function (x) {
    let result = 0
    let limit = 2147483648;
    let k = x > 0 ? 1 : -1
    let temp_num = x;
    while (temp_num) {
        /* Multiply result with 10 and add it with the reminder of argument */
        result = (result * 10) + (temp_num % 10);
        temp_num = parseInt(temp_num / 10)
    }
    return result * k > limit ? 0 : result;
};


// this is a palidrome string algo
const is_palindrome_string = function (str) {
    if (str.split('').length == 1) {
        return true
    }
    let reverse_string = str.split('').reverse().join('')
    if (str === reverse_string) {
        return true;
    } else {
        return false;
    }
}