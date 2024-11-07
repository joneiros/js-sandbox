//https://leetcode.com/problems/function-composition/description/
var compose = function(functions) {

    return function(x) {
        var res = x;
        for(i = functions.length -1; i >= 0; --i) {
            res = functions[i](res);
        }
        return res;
    }
};

module.exports = compose;