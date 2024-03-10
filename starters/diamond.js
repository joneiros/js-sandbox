/*
For N, create a diamond shape with N vertical radius
ex. 5
  *
 ***
*****
 ***
  *
*/

function createDiamond(n) {
    var dmap = [];
    var midpoint = Math.ceil(n/2);
    var padding = midpoint - 1;
    var starsNum = 1;
    for( var i=1; i <= n; i++) {
        var linepad = padding > 0 ? " ".repeat(padding) : '';
        var line = linepad + "*".repeat(starsNum);
        //console.log(line); //prints directly
        dmap.push(line);

        if(i < midpoint) {
            padding--;
            starsNum +=2;
        }
        else {
            padding++;
            starsNum -=2;
        }
    }


    dmap.forEach((line) => console.log(line));
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Diamond size(odd)?', n => {
    if(n < 1 || n%2 === 0) {
        console.log("Invalid!");
    }
    else {
        createDiamond(n);
    }

    readline.close();
});