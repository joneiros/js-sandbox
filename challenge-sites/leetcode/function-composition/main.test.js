const compose = require("./main");

test('a', () => {
    functions = [x => x + 1, x => x * x, x => 2 * x];
    x = 4;
    const fn = compose(functions);
    expect(fn(x)).toEqual(65);
});

test('b', () => {
    functions = [x => 10 * x, x => 10 * x, x => 10 * x];
    x = 1;
    const fn = compose(functions);
    expect(fn(x)).toEqual(1000);
});

test('c', () => {
    functions = [];
    x = 42;
    const fn = compose(functions);
    expect(fn(x)).toEqual(42);
});