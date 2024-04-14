const hasTrailingZeros = require("./main");

test('hasTrailingZeros', () => {
    nums = [1,2,3,4,5];
    expect(hasTrailingZeros(nums)).toBe(true);
});

test('hasTrailingZeros', () => {
    nums = [2,4,8,16];
    expect(hasTrailingZeros(nums)).toBe(true);
});

test('hasTrailingZeros', () => {
    nums = [1,3,5,7,9];
    expect(hasTrailingZeros(nums)).toBe(false);
});