class node():
    def __init__(self, v, n):
        self.value = v
        self.next = n

class stack():
    def __init__(self):
        self.head = None

    def push(self, v):
        self.head = node(v, self.head)

    def pop(self):
        if (self.head is None):
            return None
        tmp = self.head
        self.head = self.head.next
        return tmp.value

s = stack()
s.push(8)
s.push(5)
# print(s.pop())
# print(s.pop())
# print(s.pop())
# print(s.pop())



def myStack(s): 
    stack = []
    for c in s:
        if c == ')':
            if not stack or stack[-1] != '(':
                return len(s)
            stack.pop()
        elif c == '}':
            if not stack or stack[-1] != '{':
                return len(s)
            stack.pop()
        elif c == ']':
            if not stack or stack[-1] != '[':
                return len(s)
            stack.pop()
        else: 
            stack.append(c)

    if len(stack) == 0: 
        return 'Success'
    else: 
        return len(s)

# inp = input()
inp = '({[]})'
print(myStack(inp))