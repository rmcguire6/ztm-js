class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value)
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
        next: null
      }
      const previousNode = this.traverseList(index - 1)
        insertedNode.next = previousNode.next
        previousNode.next = insertedNode
      this.length++
      return this.printList();
    }
    remove(index) {
      if (index == 0) {
        const newHead = this.head.next
        this.head = newHead
        this.length--
        return this.printList()
      }
      const previousNode = this.traverseList(index -1)
      const nodeToRemove = previousNode.next
      previousNode.next = nodeToRemove.next
      this.length--
      return this.printList()
    }
    reverse() {
        if (this.length == 1) {
          return this
        }
        let oldFirstNode = this.head
        let oldSecondNode = this.head.next
        this.tail = oldFirstNode
        this.tail.next = null
        let counter = 1
        while (counter < this.length) {
          console.log('head', this.head, 'tail', this.tail, 'secondNode', oldSecondNode, oldSecondNode.next)
          let thirdNode = oldSecondNode.next
          this.head = oldSecondNode
          this.head.next = oldFirstNode
          oldFirstNode = oldSecondNode
          oldSecondNode = thirdNode
          counter++
        }
        return this
      }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  // console.log(myLinkedList)
  myLinkedList.insert(0, 4)
  // console.log(myLinkedList)
  myLinkedList.insert(2, 99)
  myLinkedList.insert(20, 88)
  myLinkedList.remove(3)
  myLinkedList.remove(0)
  