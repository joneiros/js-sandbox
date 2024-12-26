const main = require("./main");

describe('Main test suite with data provider', () => {
    const dataSet = [
        { base: [], expected: [] },
        { base: [7, 12, 9, 11, 3], expected: [3,7,9,11,12] },
        { base: [1,1,1,1,1], expected: [1,1,1,1,1] },
        { base: [3,2,1,0,-3,-4,-5], expected: [-5,-4,-3,0,1,2,3] },
        { base: [1,2,3], expected: [1,2,3] },
        { base: [3,3,3,1], expected: [1,3,3,3] },
    ];

    it.each(dataSet) (
        'mainFunk with data ($base, $expected)',
        ({base, expected}) => {
            baseClone = Array.from(base); //avoid test cross-contamination
            const result = main.mainFunk(baseClone);
            expect(result).toEqual(expected);
        }
    )

    it.each(dataSet) (
        'optimizedBubbleSort with data ($base, $expected)',
        ({base, expected}) => {
            baseClone = Array.from(base); //avoid test cross-contamination
            console.log(`Base: ${base}`);
            const result = main.optimizedBubbleSort(baseClone);

            expect(result).toEqual(expected);
        }
    )
})