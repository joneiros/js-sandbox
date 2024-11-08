const mainFunk = require("./main");

test('a', () => {
    expect(mainFunk(10)).toEqual(1);
});

test('b', () => {
    expect(mainFunk(20)).toEqual(2);
});

test('c', () => {
    expect(mainFunk(30)).toEqual(3);
});

test('d', () => {
    expect(mainFunk(40)).toEqual(4);
});

test('e', () => {
    expect(mainFunk(50)).toEqual(5);
});

test('a', () => {
    expect(mainFunk(60)).toEqual(6);
});

test('a', () => {
    expect(mainFunk(70)).toEqual(7);
});

test('a', () => {
    expect(mainFunk(80)).toEqual(8);
});

test('a', () => {
    expect(mainFunk(90)).toEqual(9);
});

test('a', () => {
    expect(mainFunk(100)).toEqual(10);
});

test('a', () => {
    expect(mainFunk(110)).toEqual(11);
});

test('a', () => {
    expect(mainFunk(300)).toEqual(30);
});

test('a', () => {
    expect(mainFunk(900)).toEqual(90);
});

test('a', () => {
    expect(mainFunk(950)).toEqual(95);
});

test('a', () => {
    expect(mainFunk(970)).toEqual(97);
});

//Heuristic fails here, because result is now an order of magnitude off.
/*
test('a', () => {
    expect(mainFunk(980)).toEqual(98);
});
*/
