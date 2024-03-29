#! /usr/bin/env node

/***
    Goal: Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

    Solved first in PHP. See that implementation for more in-depth goal details:
    https://github.com/joneiros/php-sandbox/commit/4d4b8742bccebb6ca75b45f892c8c28ed4849fbe
 */

function maxFrequencyElements(nums) {
    if(nums.length == 0) {
        return 0;
    }

    countDuplicates = 1;
    duplicateNums = [];

    nums.sort()

    tmpCount = 1;
    for( i = 1; i < nums.length; i++){
        if(nums[i] != nums[i-1]) {
            tmpCount = 1;
            continue;
        }

        tmpCount++;

        if(tmpCount > countDuplicates) {
            countDuplicates = tmpCount;
            duplicateNums = [nums[i]]
        }
        else if(tmpCount == countDuplicates) {
            duplicateNums.push(nums[i])
        }

    }

    return duplicateNums.length == 0 ? nums.length : duplicateNums.length * countDuplicates;
}

//nums = [];
// nums = [1,2,3,4,5];
// nums = [1,2,2,3,1,4];
nums = [1, 1, 2, 2, 3, 3, 3, 1, 5, 5, 5];

console.log(maxFrequencyElements(nums));