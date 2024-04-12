const generate = require("./main");

test('generate', () => {
    expect(generate(1)).toEqual([[1]]);
});

test('generate', () => {
    expect(generate(2)).toEqual([[1], [1,1]]);
});

test('generate', () => {
    var expected = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
    expect(generate(5)).toEqual(expected);
});