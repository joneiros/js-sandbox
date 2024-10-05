const mainFunk = require("./main");

test('a', () => {
    expect(mainFunk("owoztneoer")).toEqual("012");
});

test('b', () => {
    expect(mainFunk("fviefuro")).toEqual("45");
});

test('c', () => {
    expect(mainFunk("nine")).toEqual("9");
});

test('d', () => {
    expect(mainFunk("zerozero")).toEqual("00");
});