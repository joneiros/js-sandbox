const minimumRefill = require("./main");

test('minimumRefill when Bob needs to refill once', () => {
    var plants = [2,2,3,3];
    var capacityA = 5;
    var capacityB = 5;
    expect(minimumRefill(plants, capacityA, capacityB)).toBe(1);
});

test('minimumRefill when each needs to refill once', () => {
    var plants = [2,2,3,3];
    var capacityA = 3;
    var capacityB = 4;
    expect(minimumRefill(plants, capacityA, capacityB)).toBe(2);
});

test('minimumRefill when there is only one plant', () => {
    var plants = [5];
    var capacityA = 10;
    var capacityB = 8;
    expect(minimumRefill(plants, capacityA, capacityB)).toBe(0);
});