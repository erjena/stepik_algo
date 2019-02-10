function Node(value, next) {
    this.value = value;
    this.next = next;
}

function printList(h) {
    while (h !== null) {
        console.log(h.value);
        h = h.next;
    }
}

function elementAt(h, position) {
    var i = 0;
    while (i < position && h !== null) {
        h = h.next;
        i++;
    }

    if (h === null) {
        return 'Out of bound!';
    }
    return h.value;
}

function size(h) {
    var count = 0;
    while (h !== null) {
        count++;
        h = h.next;
    }
    return count;
}

function add(h, value) {
    h = new Node(value, h);
    return h;
}

function addToTail(h, value) {
    while (h.next !== null) {
        h = h.next;
    }
    h.next = new Node(value, null);
}

function find(h, elem) {
    while (h !== null) {
        if (h.value === elem) {
            return 'Found!';
        }
        h = h.next;
    }
    return 'Not in List!';
}

function remove(h, elem) {
    if (h.value === elem) {
        return h.next;
    }

    var n = h.next;
    var p = h; // previous
    while (n !== null) {
        if (n.value === elem) {
            if (n.next === null) {
                p.next = null;
            } else {
                p.next = n.next;
            }
            return h;
        }
        p = n;
        n = n.next;
    }
    return h;
}

var head = new Node(5, null); // 5 -> null
head = new Node(7, head); // 7 -> 5 -> null
head = new Node(6, head);
head = add(head, 9);
addToTail(head, 11);
remove(head, 6);

printList(head);
//console.log(elementAt(head, 4));
//console.log(size(head));
//console.log(find(head, 67));
