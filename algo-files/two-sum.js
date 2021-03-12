let nums = [3, 3, 7, 6, 5, 10, 9]
let target = 9;


// Method #1
// Time complexity is O(n^2)
// Space complexity O(1)

var twoSum_method_1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum_method_1(nums, target))



// Method #2
// Time complexity is O(n^2)
// Space complexity O(1)

var twoSum_method2 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let next_number_index = nums.indexOf(target - nums[i]);
        if (next_number_index != i) {
            if (next_number_index != -1) {
                return [i, next_number_index];
            }
        }
    }
};


console.log(twoSum_method2(nums, target))