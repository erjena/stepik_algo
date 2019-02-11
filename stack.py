class Node():
    def __init__(self, v, n):
        self.value = v
        self.next = n

class Stack():
    def __init__(self):
        self.head = None
        self.size = 0

    def push(self, v):
        self.head = Node(v, self.head)
        self.size += 1

    def pop(self):
        if self.head is None:
            return None
        tmp = self.head
        self.head = self.head.next
        self.size -= 1
        return tmp.value

    def top(self):
        if self.head is None:
            return None
        return self.head.value

    def empty(self):
        return self.head is None

    def size(self):
        return self.size 

    def p(self):
        n = self.head
        while n:
            print(n)
            n = n.next

def myStack(s): 
    stack = Stack()
    for i, c in enumerate(s):
        pos = i + 1
        if c == ')':
            if stack.empty() or stack.top()[0] != '(':
                return pos
            stack.pop()
        elif c == '}':
            if stack.empty() or stack.top()[0] != '{':
                return pos
            stack.pop()
        elif c == ']':
            if stack.empty() or stack.top()[0] != '[':
                return pos
            stack.pop()
        elif c == '(' or c == '{' or c == '[':
            pair = (c, pos)
            stack.push(pair)

    if stack.empty():
        return 'Success'
    else:
        return stack.top()[1]

# inp = input()
inp = 'foo(bar[i);'
print(myStack(inp))