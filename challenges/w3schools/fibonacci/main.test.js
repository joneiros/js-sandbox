const main = require("./main");

test('single test', () => {
    expect(main.mainFunk(2)).toEqual([0,1]);
});

describe('Main test suite with data provider', () => {
    const dataSet = [
        { base: 0, expected: [] },
        { base: 1, expected: [0] },
        { base: 2, expected: [0, 1] },
        { base: 3, expected: [0, 1, 1] },
        { base: 4, expected: [0, 1, 1, 2] },
    ];

    it.each(dataSet) (
        'mainFunk with data ($base, $expected)',
        ({base, expected}) => {
            const result = main.mainFunk(base);

            expect(result).toEqual(expected);
        }
    )

    it.each(dataSet) (
        'loopedFunk with data ($base, $expected)',
        ({base, expected}) => {
            const result = main.loopedFunk(base);

            expect(result).toEqual(expected);
        }
    )

    describe('Sub-suite with data provider', () => {
        const dataSet2 = [
            { base: 6, expected: [0,1,1,2,3,5] },
        ];

        it.each(dataSet2) (
            'sub-suite with data ($base, $expected)',
            ({base, expected}) => {
                const result = main.mainFunk(base);

                expect(result).toEqual(expected);
            }
        )
    })
})
