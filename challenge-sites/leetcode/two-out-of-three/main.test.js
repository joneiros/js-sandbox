const twoOutOfThree = require("./main");

test('twoOutOfThree', () => {
    nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3];

    expect(twoOutOfThree(nums1, nums2, nums3)).toEqual(expect.arrayContaining([3, 2]));
});

test('twoOutOfThree', () => {
    nums1 = [3,1], nums2 = [2,3], nums3 = [1,2];

    expect(twoOutOfThree(nums1, nums2, nums3)).toEqual(expect.arrayContaining([1, 3, 2]));
});

test('twoOutOfThree', () => {
    nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5];

    expect(twoOutOfThree(nums1, nums2, nums3)).toEqual([]);
});