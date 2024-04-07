const maxProductDifference = require("./main");

test('maxProductDifference', () => {
    input = [5,6,2,7,4];
    expect(maxProductDifference(input)).toBe(34);
});

test('maxProductDifference', () => {
    input = [4,2,5,9,7,4,8];
    expect(maxProductDifference(input)).toBe(64);
});

test('maxProductDifference', () => {
    input = [4906,1698,2201,4334,1892,1754,9065,2547,
        4463,4617,9910,3451,5618,3336,4326,8281,8005,
        4115,833,1513,6940,4534,723,59,5465,2144,4292,
        2648,7240,9039,7008,9190,159,1833,1233,2443,
        8939,591,6050,9544,9053,2427,7042,2089,686,5051,
        5975,654,5863,3442,4089,2171,5719,1128,4003,6055,
        4670,2585,7180,8901,4957,8667,129,9087];
    expect(maxProductDifference(input)).toBe(94573429);
});