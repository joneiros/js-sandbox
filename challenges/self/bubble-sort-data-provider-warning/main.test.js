const main = require("./main");

describe('Main test suite with data provider', () => {
    /**
     * WARNING
     * This dataSet reflects modifications from one test into another, and
     * misleadingly says it doesn't.
     * Steps:
     * - first it.each() uses the dataSet.
     * - if an error occurs, the param string containing string interpolation shows unmodified dataSet values
     * - `base` array is modified by mainFunk
     * - second it.each() uses the modified dataSet
     * - if an error occurs, the param string containing string interpolation shows UNMODIFIED dataSet values
     *
     *  In this scenario tests still pass because both mainFunk() and optimizedBubbleSort() are making test assertions against
       the outcome, and the outcome is still sorted, BUT now all the inputs for optimizedBubbleSort are also sorted.
       The solution is relatively simple (see `baseClone` lines below), but there should be a better solution
       that leaves the tests clean and reduces likelihood of people making the error in the first place.
       - Does Jest have an actual DataProvider that doesn't have this issue?
       - Is there a refactor of dataSet that avoids this issue?
       - Overload assingment operator? https://stackoverflow.com/questions/22309585/overriding-assignment-operator-in-js
     *
     *
     *
     *
     */
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