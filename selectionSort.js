function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var indexOfSmallest = i;
        var smallest = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (smallest > arr[j]) {
                smallest = arr[j];
                indexOfSmallest = j;
            }
        }
        var temp = arr[i];
        arr[i] = smallest;
        arr[indexOfSmallest] = temp;
    }
    return arr;
}

console.log(selectionSort([4, 3, 7, 1, 6, 5]));