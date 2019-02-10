function objectPath(input, path) {
    var pathArr = path.split('.'); // ["people", "1"]
    for (var i = 0; i < pathArr.length; i++) {
        input = input[pathArr[i]];
        if (input === undefined) {
            return undefined;
        }
    }
    return input;
}

console.log(objectPath({user: { name: 'Dan' } }, 'user.wallet.money'));
