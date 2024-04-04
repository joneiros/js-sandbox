const countQuadruplets = require("./main");

test('countQuadruplets when one quadruplet exists', () => {
    nums = [1,2,3,6];
    expect(countQuadruplets(nums)).toBe(1);
});

test('countQuadruplets when no quadruplet exists', () => {
    nums = [1,2,3,7];
    expect(countQuadruplets(nums)).toBe(0);
});

test('countQuadruplets when multile quadruplets exist', () => {
    nums = [1,1,1,3,5];
    expect(countQuadruplets(nums)).toBe(4);
});