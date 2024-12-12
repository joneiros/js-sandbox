const quicksort = require("./main");

test('a', () => {
    let input = [0, 10, 4, 1, 3];
    expect(quicksort(input, 0, input.length - 1)).toEqual([0, 1, 3, 4, 10]);
});

test('a', () => {
    let input = [0, 1, 3, 4, 10];
    expect(quicksort(input, 0, input.length - 1)).toEqual([0, 1, 3, 4, 10]);
});

test('a', () => {
    let input = [10, 4, 3, 1, 0];
    expect(quicksort(input, 0, input.length - 1)).toEqual([0, 1, 3, 4, 10]);
});

test('a', () => {
    let input = [5, 5, 5, 5, 6, 1, 1, 1];
    expect(quicksort(input, 0, input.length - 1)).toEqual([1,1,1,5,5,5,5,6]);
});