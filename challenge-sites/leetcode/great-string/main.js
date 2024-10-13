//https://leetcode.com/problems/make-the-string-great/description/
function mainFunk(s) {
    if(s.length < 2) {
        return s;
    }

    s = s.split('');

    for(i=0; i < s.length - 1; i++) {
        if(s[i].toUpperCase() === s[i + 1].toUpperCase() && s[i] !== s[i + 1]) {
            s.splice(i, 2);
            i=-1;
        }
    }

    return s.join('');
}

module.exports = mainFunk;

//This solution (not mine) has better runtime
var makeGood = function(s) {
    const stack = [];

    for(const letter of s) {
        if(stack.length) {
            const top = stack[stack.length - 1];
            if (top != letter && (top.toUpperCase() == letter || top.toLowerCase() == letter)) {
                stack.pop();
                continue;
            }
        }
        stack.push(letter);
    }

    return stack.join('');
};