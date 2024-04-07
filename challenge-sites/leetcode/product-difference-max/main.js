/* Maximum Product Difference Between Two Pairs
    The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

    For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
    Given an integer array nums, choose four distinct indices w, x, y, and z
    such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

    Return the maximum such product difference.



    Example 1:

    Input: nums = [5,6,2,7,4]
    Output: 34
    Explanation: We can choose indices 1 and 3 for the first pair (6, 7)
    and indices 2 and 4 for the second pair (2, 4).
    The product difference is (6 * 7) - (2 * 4) = 34.
    Example 2:

    Input: nums = [4,2,5,9,7,4,8]
    Output: 64
    Explanation: We can choose indices 3 and 6 for the first pair (9, 8)
     and indices 1 and 5 for the second pair (2, 4).
    The product difference is (9 * 8) - (2 * 4) = 64.


    Constraints:

    4 <= nums.length <= 10^4
    1 <= nums[i] <= 10^4
*/

/* Observations
    - Because of the constraints on the value of nums[i], the smallest and largest
    can be set to limits which will definitely be overridden
 */

/* Solution

    - All that matters is the two smallest numbers and the two largest numbers
    (could be the same number at different indexes)
    - Sorting and choosing the first and last two indeces would work,
    (and would be practical for most production settings)
    but sorting will have a time penalty compared to doing a single iteration and simple comparisons,
    so let's see if we can do this with one (slightly messier) iteration.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    var smallest= 100000, small = 100000, large = 0, largest = 0;
    nums.forEach((num) => {
        if(small >= num) {
            small = num;
        }
        if(large <= num) {
            large = num;
        }

        if( smallest > small) {
            var tmp = smallest;
            smallest = small;
            small = tmp;
        }
        if(largest < large) {
            var tmp = largest;
            largest = large;
            large = tmp;
        }
    });

    return (largest * large) - (smallest * small);
};

module.exports = maxProductDifference;