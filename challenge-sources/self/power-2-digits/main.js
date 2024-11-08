/*
    Hypothesis: The approximate value of powers of 2 at multiples of 10
    can be estimated usiing the following heuristic:
    For 2^A, the approximate value of A is "N groups of 3 zeroes", where N=A/10,

    For example,
    2^10 is 1 group of 3 zeroes, so 1 000
    2^20 is 2 group of 3 zeroes, so 1 000 000
    2^30 is 3 group of 3 zeroes, so 1 000 000 000

    Does this pattern hold? Let's test.

    Results: Not true indefinitely, but true for most numbers humanity is likely to use.
    Accuracy gets worse with larger numbers:
    2^10 = 1024, a 2.4% variance from heuristic value (1000)
    2^50 = 1125899906842624, a 12% variance from heuristic value
    2^100 = 1.2676506002282294e+30, a 27% variance from heuristic value
    Heuristic doesn't break down until result is an order of magnitude off,
    which happens after 2^970
    Run tests to see more details.
*/
function mainFunk(power) {
    const groups = power/10;
    const powerValue = 2 ** power;
    const stringPower = powerValue.toString();
    let digits = stringPower.length;
    let threes = 0;

    //handle as scientific notation (happens for 2^70 and greater)
    if(stringPower.includes(".")) {
        const indexe = stringPower.indexOf("e");
        const power = stringPower.substring(indexe + 2);
        digits = Number.parseInt(power) + 1;
        threes = power / 3;
    } else {
        threes = (digits - 1) / 3;
    }

    console.log(`
        Hypothetical value of 2^${power} is ${groups} groups of 3 zeroes.
        Actual value: ${powerValue},
        which has ${digits} digits, or ${threes} groups of 3.
    `);

    return threes;
}

module.exports = mainFunk;