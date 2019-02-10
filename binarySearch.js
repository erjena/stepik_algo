//input => array and number to find
//output => true if found; false if not

function binarySearch(arr, num) {
    if (num > arr[arr.length-1]) {
        return false;
    }
    if (num < arr[0]) {
        return false;
    }

    var middle = arr[arr.length/2];
    if (num === middle) {
        return true;
    } else if (num > middle) {
        return binarySearch(arr.slice(arr.length/2), num);
    } else {
        return binarySearch(arr.slice(0, arr.length/2), num);
    }
}

console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 5));