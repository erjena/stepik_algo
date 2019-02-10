function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (i < arr.length/2) {
            arr1.push(arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }

    var sorted1 = mergeSort(arr1);
    var sorted2 = mergeSort(arr2);

    return merge(sorted1, sorted2);
}


function merge(arr1, arr2) {
    var i1 = 0;
    var i2 = 0;
    var result = [];
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            result.push(arr1[i1++]);
        } else {
            result.push(arr2[i2++]); 
        }
    }
        
    while (i1 < arr1.length) {
        result.push(arr1[i1++]);
    }

    while (i2 < arr2.length) {
        result.push(arr2[i2++]);
    }

    return result;
}

console.log(mergeSort([1, 4, 2, 6, 3]));