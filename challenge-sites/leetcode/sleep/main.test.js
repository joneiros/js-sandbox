const sleep = require("./main");

test('sleep', () => {
    const t = Date.now()
    let elapsed = 0;
    sleep(100).then(() => {
        elapsed = Date.now() - t;
    }) // 100
    expect(elapsed).toEqual(100);
});