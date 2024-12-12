/**
 *
 * @param {Array} arr
 * @returns
 */
function quicksort(arr, left, right) {
    if(arr.length < 2) {
        return arr;
    }
    let index = partition(arr, left, right);

    if( left < index - 1) {
        quicksort(arr, left, index -1);
    }

    if( index < right ) {
        quicksort(arr, index, right);
    }
    return arr;
}

/**
 *
 * @param {Array} arr
 * @param {*} left
 * @param {*} right
 */
function partition(arr, left, right){
    let pivot = arr[Math.floor((left + right) / 2)];

    while( left <= right) {
        while(arr[left] < pivot) {
            left++;
        }

        while(arr[right] > pivot) {
            right--;
        }

        if( left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}

module.exports = quicksort;