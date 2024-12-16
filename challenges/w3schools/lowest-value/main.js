function mainFunk(a) {
    if(a.length == 0) {
        return null;
    }

    let lowest = a[0];

    a.forEach((item) => {
        if(item < lowest) {
            lowest = item;
        }
    });

    return lowest;
}

module.exports = {mainFunk};