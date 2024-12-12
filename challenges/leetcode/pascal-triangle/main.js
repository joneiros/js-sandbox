/* Pascal's Triangle
    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    Example 2:
    Input: numRows = 1
    Output: [[1]]


    Constraints:
    1 <= numRows <= 30
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if( numRows === 1) {
        return [[1]];
    }
    var holder = [[1],[1,1]];

    for(var i=1; i < numRows - 1; i++) {
        var toInsert = [1];
        var refRow = holder[i];

        for (var j = 0; j < refRow.length - 1; j++) {
            toInsert.push(refRow[j] + refRow[j + 1]);
        }

        toInsert.push(1);
        holder.push(toInsert);
    }

    return holder;

};

module.exports = generate;