/* Bitwise Trailing Zeroes
https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/description/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    var hasOneEven = false;
    var numLength = nums.length;
    for (var x = 0; x < numLength; x++) {
        if(nums[x] % 2 === 0) {
            if(hasOneEven === true) {
                return true;
            } else {
                hasOneEven = true;
            }
        }
    }

    return false;
};

module.exports = hasTrailingZeros;