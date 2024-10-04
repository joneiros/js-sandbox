const mainFunk = require("./main");

test('a', () => {
    nums = [5,1,4,1];
    indexDiff = 2;
    valueDiff = 4;
    expect(mainFunk(nums, indexDiff, valueDiff)).toEqual([0,3]);
});

test('b', () => {
    nums = [2,1];
    indexDiff = 0;
    valueDiff = 0;
    expect(mainFunk(nums, indexDiff, valueDiff)).toEqual([1,1]);
});

test('c', () => {
    nums = [2,1];
    indexDiff = 2;
    valueDiff = 4;
    expect(mainFunk(nums, indexDiff, valueDiff)).toEqual([-1,-1]);
});

test('d', () => {
    nums = [5,10];
    indexDiff = 1;
    valueDiff = 2;
    expect(mainFunk(nums, indexDiff, valueDiff)).toEqual([0,1]);
});