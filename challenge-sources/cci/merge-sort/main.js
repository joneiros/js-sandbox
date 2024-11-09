/*
    Starts with my "not looking it up" attempt, which was mostly working
    except a missing "let" which i was able to determine as the issue
    only after finding the good solution and simplifying my solution to
    hone in on the culprit.

    SIMPLIFY TO DIAGNOSE!!
*/
function mergeSortMine(list) {
    let sublist1 = list;
    let sublist2 = [];

    if(sublist1.length > 2) {
        /*
            Unintuitive sticking point:
            For lists of more than 4, I was initially getting errors,
            and it took a lot of troubleshooting to figure out why.
            I thought I was misunderstanding how the recursion was happening,
            or misunderstanding slices (or slices VS splices) in JS.

            Turns out that I was missing a "let" on the pivot, which means
            that the pivot was being assigned to the global namespace, and
            because the fuction is recursive, if there is more than 1 layer
            of recursion, the pivot was being overwritten.

            DON'T FORGET LET, VAR, or CONST!!!!
        */
        let pivot = Math.floor(list.length/2);
        sublist1 = mergeSort(list.slice(0, pivot));
        sublist2 = mergeSort(list.slice(pivot, list.length));
    }
    else if(sublist1.length == 2 && sublist1[0] > sublist1[1]) {
        sublist1.push(sublist1.shift());
    }

    var mergedList = [];

    while(true) {
        if(sublist1.length == 0) {
            mergedList.push(...sublist2);
            break;
        }
        else if (sublist2.length == 0) {
            mergedList.push(...sublist1);
            break;
        }

        if(sublist1[0] < sublist2[0]){
            mergedList.push(sublist1.shift());
        } else {
            mergedList.push(sublist2.shift());
        }
    }
    return mergedList;
}

function mergeSortMine2(list) {
    let sublist1 = list;
    let sublist2 = [];

    if(sublist1.length > 1) {
        var pivot = sublist1.length/2;
        sublist1 = mergeSort(sublist1.slice(0, pivot));
        sublist2 = mergeSort(sublist1.slice(pivot, sublist1.length));
    }

    var mergedList = [];
    while(sublist1.length && sublist2.length) {
        if(sublist1[0] < sublist2[0]){
            mergedList.push(sublist1.shift());
        } else {
            mergedList.push(sublist2.shift());
        }
    }

    return [...mergedList, ...sublist1, ...sublist2];
}

function mergeSortMine3(list) {
    const pivot = list.length/2;

    if(list.length < 2) {
        return list;
    }

    let slice1 = list.slice(0, pivot);
    let slice2 = list.slice(pivot, list.length);

    return merge(mergeSort(slice1), mergeSort(slice2));
}

function mergeSort(array) {
    const half = array.length / 2

    if(array.length < 2){
      return array
    }

    const left = array.splice(0, half)

    return merge(mergeSort(left),mergeSort(array))
  }

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

module.exports = mergeSort;