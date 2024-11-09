//https://leetcode.com/problems/flatten-nested-list-iterator/
/**
 * Jon's Note: This is not easily testable locally as it uses a background interface hinted at below.
 *
 * My goal was to flatten the list within the constructor. I realized this would require recursion,
 *
 * (THIS NEXT PART IS WRONG)
 * but recursion in JS doesn't work quite the same as PHP or other languages, because when JS
 * returns to the previous version of the function, it doesn't hold on to the original context.
 * (WHY IT WAS WRONG)
 * (Recursion does maintain context in JS. The generator below is a different case.
 * While I'm not 100% sure of the isssue I was having before with recursion,
 * a recent bug in my merge-sort
 *     (see https://github.com/joneiros/js-sandbox/commit/c6f97dcbf27e96d0270c7eec3e90c54c12f1fe77?diff=unified )
 * implementation suggests that I was likely having
 * context issues here because I was accidentally creating a global variable that was
 * being overwritten, OR because I was doing it in a constructor
 * (I have not yet tested recursion in constructors, but I'm guessing it works fine and the
 *  problem was a missing let/var/const).)
 *
 * ~~The~~ Another trick to getting recursion to remember prior context was to use Generators (the function nestBuster below)
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