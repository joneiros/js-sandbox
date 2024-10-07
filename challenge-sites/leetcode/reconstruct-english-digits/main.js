//https://leetcode.com/problems/reconstruct-original-digits-from-english/description/
/* Notes
zero one two three four five six seven eight nine

- Risk of letters being used by the wrong word is mitigated by checking
words with unique characters first (since string is guaranteed to be valid)
- Once initial words are checked, their letters no longer count towards
uniqueness of letters in remaining words

-First order Unique:
    - Zero
    - tWo
    - foUr
    - siX
    - eiGht
- Unique After removal of others before it (including in this ordered list)
    - Seven
    - Five (also fiVe)
    - One
    - Three (also tHree, and thRee)
    - Nine
*/
function mainFunk(s) {
    var frequencyMap = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0
    };


    for(i=0; i < s.length; i++) {
        frequencyMap[s[i]]++;
    }

    var checkOrder = [
        ["z", "o", 0],
        ["w", "to", 2],
        ["u", "o", 4],
        ["x", "si", 6],
        ["g", "it", 8],
        ["s", "v", 7],
        ["v", "i", 5],
        ["o", "", 1],
        ["t", "", 3],
        ["i", "", 9],
    ];

    var digits = [];

    for(i=0; i < 10; i++) {
        var currentUniqLetter = checkOrder[i][0];
        var currentUniqLetterCount = frequencyMap[currentUniqLetter];
        for(j=0; j < currentUniqLetterCount; j++) {
            digits.push(checkOrder[i][2]);

            checkOrder[i][1].split('').forEach((element) => {
                frequencyMap[element]--;
            });
        }

    }

    return digits.sort().join('');
}

module.exports = mainFunk;

function mainFunkTooSlow(s) {
    var checkOrder = [
        ["z", "zero", 0],
        ["w", "two", 2],
        ["x", "six", 6],
        ["s", "seven", 7],
        ["u", "four", 4],
        ["v", "five", 5],
        ["g", "eight", 8],
        ["o", "one", 1],
        ["t", "three", 3],
        ["i", "nine", 9],
    ];
    var digits = [];
    var t = s.split('').sort().reverse();
    checkOrderLength = checkOrder.length;

    for(i=0; i < checkOrderLength && t.length > 0; i++) {
        var current = checkOrder[i];
        count = 0;
        found = false;
        for(j=0; j < t.length; j++){
            if(t[j] == current[0]) {
                count++;
                continue;
            }
            if(found) {
                break;
            }
        }
        const currentSplit = current[1].split('');
        for(k=0; k < count; k++) {
            currentSplit.forEach((element) => {
                var idx = t.indexOf(element);
                if(idx !== -1) {
                    t.splice(idx, 1);
                }
            });
            digits.push(current[2]);
        }
    }

    return digits.sort().join('');
}

function mainFunk2StillTooSlow(s) {
    var checkOrder = [
        ["z", "ero", 0],
        ["w", "to", 2],
        ["x", "si", 6],
        ["s", "even", 7],
        ["u", "for", 4],
        ["v", "fie", 5],
        ["g", "eiht", 8],
        ["o", "ne", 1],
        ["t", "hree", 3],
        ["i", "nne", 9],
    ];
    var digits = [];
    var t = s.split('').sort().reverse();
    checkOrderLength = checkOrder.length;

    for(i=0; i < checkOrderLength && t.length > 0; i++) {
        var current = checkOrder[i];
        const tailings = current[1].split('');
        for(j=0; j < t.length; j++){
            if(t[j] == current[0]) {
                digits.push(current[2]);

                t.splice(j, 1);
                tailings.forEach((element) => {
                    var idx = t.indexOf(element);
                    if(idx !== -1) {
                        t.splice(idx, 1);
                    }
                });
                j=-1;
                continue;
            }
        }
    }

    return digits.sort().join('');
}