const minOperations = require("./main");

test('minOperations', () => {
    expect(minOperations(11)).toBe(5);
});

test('minOperations', () => {
    expect(minOperations(1)).toBe(0);
});