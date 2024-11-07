//https://leetcode.com/problems/flatten-nested-list-iterator/
/**
 * Jon's Note: This is not easily testable locally as it uses a background interface hinted at below.
 *
 * My goal was to flatten the list within the constructor. I realized this would require recursion,
 * but recursion in JS doesn't work quite the same as PHP or other languages, because when JS
 * returns to the previous version of the function, it doesn't hold on to the original context.
 * The trick to getting recursion to remember prior context was to use Generators (the function nestBuster below)
 * Generators reference:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 *
 */


/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.currentIndex = 0;
    this.iteratorList = nestBuster(nestedList);
    this.flattenedList = [];

    while(true) {
        const next = this.iteratorList.next();
        if(next.done) {
            break;
        }
        this.flattenedList.push(next.value);
    }
};

const nestBuster = function*(nestedList) {
    for (var item of nestedList) {
    if (item.isInteger()) {
      yield item.getInteger();
    } else {
      yield* nestBuster(item.getList());
    }
  }
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    if(this.currentIndex < this.flattenedList.length) {
        return true;
    }

    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.flattenedList[this.currentIndex++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/