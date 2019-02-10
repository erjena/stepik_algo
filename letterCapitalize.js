function LetterCapitalize(str) { 
    var arr = str.split(' ');
    var result = [];
    arr.forEach(function(elem) {
        elem = elem[0].toUpperCase() + elem.slice(1);
        result.push(elem);
    });
    return result.join(' ');
}

console.log(LetterCapitalize('hello world'));