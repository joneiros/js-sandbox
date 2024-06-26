/* Apply Operations to Make Sum of Array Greater Than or Equal to K

    You are given a positive integer k. Initially, you have an array nums = [1].

    You can perform any of the following operations on the array any number of times (possibly zero):

    Choose any element in the array and increase its value by 1.
    Duplicate any element in the array and add it to the end of the array.
    Return the minimum number of operations required to make the sum of elements
    of the final array greater than or equal to k.



    Example 1:
    Input: k = 11
    Output: 5
    Explanation:

    We can do the following operations on the array nums = [1]:

    Increase the element by 1 three times. The resulting array is nums = [4].
    Duplicate the element two times. The resulting array is nums = [4,4,4].
    The sum of the final array is 4 + 4 + 4 = 12 which is greater than or equal to k = 11.
    The total number of operations performed is 3 + 2 = 5.

    Example 2:
    Input: k = 1
    Output: 0
    Explanation:
    The sum of the original array is already greater than or equal to 1, so no operations are needed.



    Constraints:

    1 <= k <= 10^5
 */

/* Observations
    - Despite the title, the only operations being applied are addition in a couple different ways.
    The most effective strategy will always be to add
    - The number doesn't have to be hit exactly.
 */

/* Solution

    - (not quite right)
    In theory, to get output >= k, the fastest path is to duplicate whatever
    bigger or equal number whose square root is whole. To get that number,
    add 1 until the number is reached, then duplicate the number in the array until
    k is surpassed.
        - This is not quite it, as the first example succeeds with 4*3 (rather than 4^2)

    - ceil(sqrt(k)) should give the number that is most effective to mutliply by.
    Multiply until k is reached or supassed

 */

/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function(k) {
    var bestNum = Math.ceil(Math.sqrt(k));
    var outCount = bestNum - 1;
    var tmpCount = bestNum;
    var nums = [bestNum];

    while(tmpCount < k) {
        tmpCount += bestNum;
        nums.push(bestNum);
        outCount++;
    }

    return outCount;
};

module.exports = minOperations;