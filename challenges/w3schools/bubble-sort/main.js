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

module.exports = {mainFunk};