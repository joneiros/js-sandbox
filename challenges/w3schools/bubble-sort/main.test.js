const main = require("./main");

describe('Main test suite with data provider', () => {
    const dataSet = [
        { base: [], expected: [] },
        { base: [7, 12, 9, 11, 3], expected: [3,7,9,11,12] },
        { base: [1,1,1,1,1], expected: [1,1,1,1,1] },
        { base: [3,2,1,0,-3,-4,-5], expected: [-5,-4,-3,0,1,2,3] },
    ];

    it.each(dataSet) (
        'mainFunk with data ($base, $expected)',
        ({base, expected}) => {
            const result = main.mainFunk(base);

            expect(result).toEqual(expected);
        }
    )
})