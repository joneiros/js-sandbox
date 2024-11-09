function mainFunk(a) {
    return recurse(a);
}

function recurse(x) {
    if (x > 0) {
        toPrint=x;
        console.log(x);
        return recurse(x - 1);
    }

    return x;
}

module.exports = mainFunk;