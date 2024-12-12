/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    for(var i=1; i <= n; i++) {
        var fb = getIfFizz(i) + getIfBuzz(i);
        var out = fb === "" ? i : fb;
        console.log(out);
    }
}

function getIfFizz(n) {
    if(n%3 === 0) {
        return "Fizz";
    }

    return "";
}

function getIfBuzz(n) {
    if(n%5 === 0) {
        return "Buzz";
    }

    return "";
}

console.log("fooo");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

  readline.question('FizzBuzz?', fizzBuzzNum => {
    //console.log(`Hey there ${fizzBuzzNum}!`);
    fizzBuzz(fizzBuzzNum);
    readline.close();
  });