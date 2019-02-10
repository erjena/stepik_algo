function node(value, next) {
    this.value = value;
    this.next = next;
}

function push(stack, value) {
    return new node(value, stack);
}

function pop(stack) {
    if (stack === null || stack === undefined) {
        return undefined;
    }

    return [stack.value, stack.next];
}

function parenthesis(str) {
    var stack = [];

    for (var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case '(':
                // push(stack, str[i]);
                stack.push(str[i]);
                break;
            case '{':
                stack.push(str[i]);
                break;
            case '[':
                stack.push(str[i]);
                break;
            case ')':
                // var result = pop(stack);
                // value = result[0];
                // stack = result[1];
                if (stack.length === 0) {
                    return str.length;
                } else if (stack.pop() !== '(') {
                    return str.length;
                }
                break;
            case '}':
                if (stack.length === 0) {
                    return str.length;
                } else if (stack.pop() !== '{') {
                    return str.length;
                }
                break;
            case ']':
                if (stack.length === 0) {
                    return str.length;
                } else if (stack.pop() !== '[') {
                    return str.length;
                }
                break;
        }        
    }

    if (stack.length === 0) {
        return 'Success';
    } else {
        return str.length;
    }
}


var input = '{{[()]]';
//console.log(parenthesis(input));




function myStack(str) {
    var stack = [];

    for (var i = 0; i < str.length; i++) {
        if (stack[stack.length-1] === '(' && str[i] === ')') {
            stack.pop();
        } else if (stack[stack.length-1] === '{' && str[i] === '}') {
            stack.pop();
        } else if (stack[stack.length-1] === '[' && str[i] === ']') {
            stack.pop();
        } else {
            stack.push(str[i]);
        }  
    }

    if (stack.length === 0) {
        return 'Success';
    } else {
        console.log(stack);
        return str.length;
    }

}

console.log(myStack('({[]})'));