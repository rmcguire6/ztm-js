class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        return this.first
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length == 0) {
            this.first = newNode
        } else {
            this.last.next = newNode
        }
        this.last = newNode
        this.length = this.length + 1
        return this
    }
    dequeue() {
        if (this.length == 0) {
            return this.first
        } else {
            let temp = this.first
            this.first = temp.next
            this.length = this.length - 1
        }
        return this
    }
}
const myQueue = new Queue()
myQueue.peek()
myQueue.enqueue(1)
console.log(myQueue.peek())
myQueue.enqueue(2)
console.log(myQueue.peek())
