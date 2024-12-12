const shortestToChar = require("./main");

test('shortestToChar', () => {
    s = "loveleetcode";
    c = "e";
    expected = [3,2,1,0,1,0,0,1,2,2,1,0];
    expect(shortestToChar(s,c)).toEqual(expected);
});
test('shortestToChar', () => {
    s = "aaab";
    c = "b";
    expected = [3,2,1,0];
    expect(shortestToChar(s,c)).toEqual(expected);
});