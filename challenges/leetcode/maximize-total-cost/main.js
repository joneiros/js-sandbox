//https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/description/



// my initial solution fails some test cases when there are many negative numbers back to back,
// and is becoming far too complicated. More practice with dynamic programming required.

// Check site for working solutions.
function mainFunk(nums) {
    //edge cases
    if(nums.length == 1) {
        return nums[0];
    }
    if(nums.length == 2) {
        return nums[0] + Math.abs(nums[1]);
    }

    //subarray split simulation can be done by flipping the sign in any appropriate places
    //i > 0 (rather than i >= 0) because first digit in array can't be altered.
    var justFlipped = false;
    for(i = nums.length -1; i > 0; i--) {
        console.log(nums[i]);
        if(justFlipped) {
            justFlipped = false;
            continue;
        }
        justFlipped = false;

        if( nums[i-1] < nums[i] && i !== 1) {
            if(i > 2 && nums[i-2] < 0 && nums[i-1] < 0 && nums[i] < 0 && nums[i] + nums[i-2] < nums[i-1]) {
                //do nothing
            }
            else if( i > 2 && nums[i-2] <= nums[i-1]) {
                //do nothing
            }
            else {
                continue;
            }
        }

        if(nums[i] < 0) {
            nums[i] = nums[i] * -1;
            justFlipped = true;
        }
    }

    var total = 0;

    for(i=0; i < nums.length; i++) {
        total += nums[i];
    }

    return total;
}

module.exports = mainFunk;