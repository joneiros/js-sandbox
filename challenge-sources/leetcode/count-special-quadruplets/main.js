
/* Count Special Quadruplets
    Given a 0-indexed integer array nums, return the number of distinct quadruplets
    (a, b, c, d) such that:

    nums[a] + nums[b] + nums[c] == nums[d], and
    a < b < c < d


    Example 1:
    Input: nums = [1,2,3,6]
    Output: 1
    Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3)
    because 1 + 2 + 3 == 6.

    Example 2:
    Input: nums = [3,3,6,4,5]
    Output: 0
    Explanation: There are no such quadruplets in [3,3,6,4,5].

    Example 3:
    Input: nums = [1,1,1,3,5]
    Output: 4
    Explanation: The 4 quadruplets that satisfy the requirement are:
    - (0, 1, 2, 3): 1 + 1 + 1 == 3
    - (0, 1, 3, 4): 1 + 1 + 3 == 5
    - (0, 2, 3, 4): 1 + 1 + 3 == 5
    - (1, 2, 3, 4): 1 + 1 + 3 == 5


    Constraints:

    4 <= nums.length <= 50
    1 <= nums[i] <= 100
*/

/* Observations
- at the top it says "a < b < c < d", referring to the indexes, NOT values.
    This means the index order matters, and cannot be tampered with (sorted)
*/

/* Solutions
    - Brute Force
    Make a quad-nested loop to iterate over each
    tri-combination of values, checking their sum against numbers in the list.
    Optimizations might make it better than O (n)^4, but it's still a bad solution.
*/

/* Post-Solution Reflection
    The fastes solution used the same basic strategy as my brute force solution.
    The only difference was that where I used nums[a] in the inner loop, they
    saved a const value at each loop level so that the array didn't have to be
    referenced as often in inner loops.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    quads = 0;
    for(var a = 0; a < nums.length; a++){
        //const numa = nums[a];
        for(var b = a + 1; b < nums.length; b++){
            //const numb = nums[b];
            for(var c = b + 1; c < nums.length; c++){
                //const numc = nums[c];
                for(var d = c + 1; d < nums.length; d++){
                    //if(numa + numb + numc == nums[d]){}
                    if(nums[a] + nums[b] + nums[c] == nums[d]) {
                        quads++;
                    }
                }
            }
        }
    }

    return quads;
};

module.exports = countQuadruplets;