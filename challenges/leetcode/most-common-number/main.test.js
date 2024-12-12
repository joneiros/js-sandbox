const findSpecialInteger = require("./main");

test('findSpecialInteger', () => {
    var input = [1,2,2,6,6,6,6,7,10];
    expect(findSpecialInteger(input)).toEqual(6);
});

test('findSpecialInteger', () => {
    var input = [1,1];
    expect(findSpecialInteger(input)).toEqual(1);
});