let integer = 1234; /* Becomes 4321 */

// Method #1
// Time complexity is O(n)
// Space complexity O(1)

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

console.log(reverse_1(integer));


// Method #3
// Time complexity is O(n)
// Space complexity O(1)
// Is not correct for non-squential number
const reverse_3 = function (x) {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};


// Method #2
// Time complexity is O(n ^ 2)
// Space complexity O(1)
// Is not correct for non-squential number
const reverse_2 = function (x) {
    let result = 0
    let temp_num = x;
    while (temp_num) {
        let reminder = (temp_num % 10);
        result = (result * 10) + reminder;
        if (reminder == 0) {
            temp_num = temp_num / 10
        } else if (reminder < 0) {
            temp_num = ((temp_num / 10) * 10) + get_1_sperated(reminder < 0 ? reminder * -1 : reminder)
        } else {
            temp_num = ((temp_num / 10) * 10) + get_1_sperated(reminder)
        }
    }

    return result;
};


/* 
Example:
    arg = 4  returns 1111
    arg = 3 returns 111
 */
function get_1_sperated(loop_count) {
    let substraction_num = 1;
    let series_array = []
    let n = 10;
    for (let i = 0; i < loop_count - 1; i++) {
        series_array.push(((1 * n)))
        substraction_num += series_array[i]
        n *= 10
    }
    return substraction_num;
}
