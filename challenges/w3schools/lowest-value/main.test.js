const main = require("./main");

describe('Main test suite with data provider', () => {
    const dataSet = [
        { base: [1,2,3,4,5], expected: 1 },
        { base: [5,4,3,2,1], expected: 1 },
        { base: [3,-1,1,3,2], expected: -1 },
        { base: [1,1,1,1,1], expected: 1 },
    ];

    it.each(dataSet) (
        'mainFunk with data ($base, $expected)',
        ({base, expected}) => {
            const result = main.mainFunk(base);

            expect(result).toEqual(expected);
        }
    )
})