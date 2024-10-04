// https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/description/
function mainFunk(nums, indexDifference, valueDifference) {
    for(i = nums.length - 1; i >= 0; i--) {
        for(j = i - indexDifference; j >= 0; j--) {
            if(Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return[j, i];
            }
        }

    }

    return [-1, -1];
}

module.exports = mainFunk;