const mergeSort = require("./main");

test('a', () => {
    list = [1,3,2,4];
    expect(mergeSort(list)).toEqual([1,2,3,4]);
});

test('b', () => {
    list = [1,2,3,4];
    expect(mergeSort(list)).toEqual([1,2,3,4]);
});

test('c', () => {
    list = [4,3,2,1];
    expect(mergeSort(list)).toEqual([1,2,3,4]);
});

test('d', () => {
    list = [8,7,6,5,4,3,2,1];
    expect(mergeSort(list)).toEqual([1,2,3,4,5,6,7,8]);
});

test('e', () => {
    list = [4,3,3,3,2,1];
    expect(mergeSort(list)).toEqual([1,2,3,3,3,4]);
});