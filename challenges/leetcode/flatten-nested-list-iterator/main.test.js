const mainFunk = require("./main");

test('a', () => {
    expect(mainFunk(1,2)).toEqual(3);
});