const mainFunk = require("./main");

test('a', () => {
    var input = "leEeetcode";
    expect(mainFunk(input)).toEqual("leetcode");
});

test('b', () => {
    var input = "abBAcC";
    expect(mainFunk(input)).toEqual("");
});

test('c', () => {
    var input = "s";
    expect(mainFunk(input)).toEqual("s");
});