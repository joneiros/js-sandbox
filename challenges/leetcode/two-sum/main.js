// https://leetcode.com/problems/two-sum/description/

//Mine: Good memory, bad runtime
function twoSum(nums, target) {
    for(i=0; i < nums.length; i++) {
        for(j = i+1; j < nums.length; j++) {
            if( nums[i] + nums[j] == target) {
                return [i,j];
            }
        }
    }
}

module.exports = twoSum;

//Better Runtime, worse memory
var twoSumFaster = function(nums, target) {

    let map = {}
    for(let i = 0 ; i < nums.length ; i++){
        let diff = target-nums[i]
        if(diff in map){
            return [map[diff] , i]
        }
        map[nums[i]] = i
    }
};

