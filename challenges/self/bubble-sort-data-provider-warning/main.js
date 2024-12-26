//naive implementation
function mainFunk(input) {
    let length = input.length;
    for(let i = 0; i < length - 1; i++) {
        for(let j= 0; j < length - 1; j++) {
            if(input[j] > input[j + 1]) {
                let tmp = input[j];
                input[j] = input[j+1];
                input[j+1] = tmp;
            }
        }
    }
    return input;
}

function optimizedBubbleSort(input) {
    let length = input.length;
    for(let i = 0; i < length - 1; i++) {
        let switchedThisRun = false;

        for(let j= 0; j < length - 1; j++) {
            if(input[j] > input[j + 1]) {
                console.log("Reached Switch");
                let tmp = input[j];
                input[j] = input[j+1];
                input[j+1] = tmp;
                switchedThisRun = true;
            }
        }

        if(switchedThisRun && i == length - 2) {
            console.log(`Changes made until the end`);
        }
    }
    return input;
}

module.exports = {mainFunk, optimizedBubbleSort};