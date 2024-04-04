/* License Key Formatting
You are given a license key represented as a string s that consists of
only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes.
You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters,
except for the first group, which could be shorter than k but still must contain at least one character.
Furthermore, there must be a dash inserted between two groups,
and you should convert all lowercase letters to uppercase.

Return the reformatted license key.



Example 1:

Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:

Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts,
each part has 2 characters except the first part as it could be shorter as mentioned above.


Constraints:

1 <= s.length <= 105
s consists of English letters, digits, and dashes '-'.
1 <= k <= 104
*/

/* Solution
    - make array from string
    - remove original dashes. We don't need them.
    - compare length of array to modulus of k. This will give us the number of
        items in the first array segment. if Mod is zero, we have k characters
        in the first segment
    EITHER
        - for each letter in array, add it to a new array, adding a dash every time length % k == 0
    OR
        - push dash into existing array at each increment of k.
            - This would be best done from the end of the array to the beginning to
            avoid messing with existing keys.
                - Could also be done by reversing the array, but it would make traversal more complicated
 */

/* Post-Solution Reflection
    My result ranked among the slowest, without meaningful memory gains.
    The better solution is to create a new array, which avoids the need to
    split (the string can be interated over without being explicitly transformed into an array),
    and also the need to filter (original dashes can be ignored while iterating)
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    var arr = s.split('').filter((x) => x != "-");

    var cnt = 0;
    for(i = arr.length - 1; i > 0; i--) {
        cnt++;
        if(cnt % k == 0) {
            cnt = 0;
            arr.splice(i, 0, "-");
        }
    }

    return arr.join("").toUpperCase();
};

module.exports = licenseKeyFormatting;
