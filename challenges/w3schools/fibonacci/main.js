function mainFunk(requestedFibNums, fib = []) {
    if(fib.length == 0) {
        switch(requestedFibNums) {
            case 0: return [];
            case 1: return [0];
            default:
        }
        fib = [0, 1];
        requestedFibNums -= 2;
    }

    if(requestedFibNums < 1) {
        return fib;
    }

    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

    return mainFunk(--requestedFibNums, fib);
}

function loopedFunk(requestedFibNums) {
    switch(requestedFibNums) {
        case 0: return [];
        case 1: return [0];
    }
    let fib = [0, 1];
    requestedFibNums -=2;

    for(let i=0; i < requestedFibNums; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }

    return fib;
}

module.exports = {mainFunk, loopedFunk};