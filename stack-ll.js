class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor () {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this.top
    }
    push(value) {
        const node = new Node(value)
        node.next = this.top
        if (this.bottom === null) {
            this.bottom = this.top
        }
        this.top = node
        this.length++
        return this
    }
    pop(){
        if (!this.top) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }
        const oldTop = this.top
        this.top = oldTop.next
        this.length--
        return oldTop
    }
}
const myStack = new Stack()
myStack.push(16)
myStack.push(24)
myStack.push(8)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())