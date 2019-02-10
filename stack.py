class Node():
    def __init__(self, v, n):
        self.value = v
        self.next = n

class Stack():
    def __init__(self):
        self.head = None

    def push(self, v):
        self.head = Node(v, self.head)

    def pop(self):
        if self.head is None:
            return None
        tmp = self.head
        self.head = self.head.next
        return tmp.value

    def top(self):
        if self.head is None:
            return None
        return self.head.value

    def empty(self):
        return self.head is None

    def p(self):
        n = self.head
        while n:
            print(n)
            n = n.next

def myStack(s): 
    stack = Stack()
    for c in s:
        if c == ')':
            if stack.empty() or stack.top() != '(':
                return len(s)
            stack.pop()
        elif c == '}':
            if stack.empty() or stack.top() != '{':
                return len(s)
            stack.pop()
        elif c == ']':
            if stack.empty() or stack.top() != '[':
                return len(s)
            stack.pop()
        else: 
            stack.push(c)

    if stack.empty():
        return 'Success'
    else:
        return len(s)

# inp = input()
inp = '({[]})'
print(myStack(inp))