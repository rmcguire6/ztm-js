class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor () {
        this = []
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this[0]
    }
    push(value) {
        const node = new Node(value)
        this.push(node)
    }
    pop(){
        if (!this.top) {
            return null
        }
        
    }
}
const myStack = new Stack()
myStack.push(16)
myStack.push(24)
myStack.push(8)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())