const mainFunk = require("./main");

test('a', () => {
    nums = [1,-2,3,4];
    expect(mainFunk(nums)).toEqual(10);
});

test('b', () => {
    nums = [1,-1,1,-1];
    expect(mainFunk(nums)).toEqual(4);
});

test('c', () => {
    nums = [0];
    expect(mainFunk(nums)).toEqual(0);
});

test('d', () => {
    nums = [1, -1];
    expect(mainFunk(nums)).toEqual(2);
});

test('e', () => {
    nums = [-11,-9,1];
    expect(mainFunk(nums)).toEqual(-1);
});

test('f', () => {
    nums = [-14,-13,-20];
    expect(mainFunk(nums)).toEqual(-7);
});

test('g', () => {
    nums = [2,-4,-3,-1];
    expect(mainFunk(nums)).toEqual(4);
});

test('h', () => {
    nums = [3,-2,-2,-1,0];
    expect(mainFunk(nums)).toEqual(4);
});

test('i', () => {
    nums = [-12,2,-4,-7,-4,9,7];
    expect(mainFunk(nums)).toEqual(7);
});

test('i', () => {
    nums = [-5,-4,-2];
    expect(mainFunk(nums)).toEqual(-3);
});

test('j', () => {
    nums = [0,-5,2,-3,-2,-2,-1];
    expect(mainFunk(nums)).toEqual(9);
});