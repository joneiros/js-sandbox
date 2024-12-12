const twoSum = require("./main");

test('a', () => {
    var nums = [2,7,11,15];
    var target = 9;
    expect(twoSum(nums, target)).toEqual([0,1]);
});

test('b', () => {
    var nums = [3,2,4];
    var target = 6;
    expect(twoSum(nums, target)).toEqual([1,2]);
});

test('c', () => {
    var nums = [3,3];
    var target = 6;
    expect(twoSum(nums, target)).toEqual([0,1]);
});