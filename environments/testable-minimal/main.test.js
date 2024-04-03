const sum = require("./main");

test('sum when two positives', () => {
    expect(sum(1,2)).toBe(3);
});