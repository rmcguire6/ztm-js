class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        previous: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        previous: null
      }
      newNode.previous = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        previous: null
      }
      newNode.next = this.head;
      this.head.previous = newNode
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let leftArrow = ''
      let rightArrow = '->'
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.previous !== null) {
          leftArrow = '<-'
        }
        if (currentNode.next == null) {
          rightArrow = ''
        }
        array.push(leftArrow + currentNode.value + rightArrow)
        currentNode = currentNode.next
      }
      return console.log(array);
    }
    traverseList(index) {
      let counter = 0
      let currentNode = this.head
  
      while (counter < index) {
        currentNode = currentNode.next
        counter++
      }
      return currentNode
    }
    insert(index, value) {
      if (index > this.length) {
        this.append(value)
        return this.printList()
      }
      if (index == 0) {
        this.prepend(value)
        return this.printList()
      }
      const insertedNode = {
        value: value,
        next: null,
        previous: null
      }
      const previousNode = this.traverseList(index - 1)
      insertedNode.next = previousNode.next
      insertedNode.previous = previousNode
      previousNode.next = insertedNode
      this.length++
      return this.printList();
    }
    remove(index) {
      if (index == 0) {
        const newHead = this.head.next
        this.head = newHead
        this.head.previous = null
        this.length--
        return this.printList()
      }
      const previousNode = this.traverseList(index - 1)
      const nodeToRemove = previousNode.next
      const nextNode = nodeToRemove.next
      previousNode.next = nextNode
      nextNode.previous = previousNode
      this.length--
      return this.printList()
    }
  }
  
  let myLinkedList = new DoublyLinkedList(10);
  console.log(myLinkedList)
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  console.log(myLinkedList)
  myLinkedList.insert(0, 4)
  // console.log(myLinkedList)
  myLinkedList.insert(2, 99)
  myLinkedList.insert(20, 88)
  myLinkedList.remove(3)
  myLinkedList.remove(0)
  