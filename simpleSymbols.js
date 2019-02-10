function SimpleSymbols(str) { 
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/g)) {
            if (str[i-1] !== '+' || str[i+1] !== '+') {
                return false;
            }
        }
    }
    return true;
}
   

console.log(SimpleSymbols("+d+=3=+s+"));  
console.log(SimpleSymbols("f++d+")); 
