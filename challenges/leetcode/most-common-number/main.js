/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const length = arr.length;
    const quarter = Math.ceil(length/4);
    var num = arr[0];
    var count = 1;


    for(var i = 1; i < length; i++) {
        if(arr[i] === num) {
            count++;
            if(count > quarter) {
                return num;
            }
        }
        else {
            num = arr[i];
            count = 1;
        }
    }

};

module.exports = findSpecialInteger;