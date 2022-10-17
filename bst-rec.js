class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    const findPlaceForValue = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          console.log(`current ${value} added to left?`, node);
        } else {
          console.log("Move left", node.left);
          findPlaceForValue(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
          console.log(` current ${value} added to right?`, node);
        } else {
          console.log("Move right", node.right);
          findPlaceForValue(node.right);
        }
      }
    };
    if (this.root === null) {
      this.root = newNode;
    } else {
      findPlaceForValue(this.root);
    }
  }
  lookup(value) {
    let currentNode = this.root;
    let notDone = true;
    let answer = null;
    while (notDone) {
      if (value === currentNode.value) {
        notDone = false;
        answer = value;
        // console.log(answer, "found at ", currentNode);
      }
      if (value < currentNode.value) {
        if (!currentNode.left) {
          //   console.log(
          //     "nothing found on currentNode left",
          //     "value ",
          //     value,
          //     "currentNode",
          //     currentNode
          //   );
          notDone = false;
          answer = null;
        } else {
          //   console.log(
          //     "something found on currentNode left",
          //     "value ",
          //     value,
          //     "currentNode",
          //     currentNode
          //   );
          currentNode = currentNode.left;
        }
      }
      if (value > currentNode.value) {
        if (!currentNode.right) {
          //   console.log(
          //     "nothing found on currentNode right",
          //     "value ",
          //     value,
          //     "currentNode",
          //     currentNode
          //   );
          notDone = false;
          answer = null;
        } else {
          //   console.log(
          //     "something found on currentNode right",
          //     "value ",
          //     value,
          //     "currentNode",
          //     currentNode
          //   );
          currentNode = currentNode.right;
        }
      }
    }
    return answer;
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log("lookup 9", tree.lookup(9));
console.log("lookup 1", tree.lookup(1));
console.log("lookup 20", tree.lookup(20));
console.log("lookup 4", tree.lookup(4));
console.log("lookup 6", tree.lookup(6));
console.log("lookup 15", tree.lookup(15));
console.log("lookup 170", tree.lookup(170));
console.log("lookup 5", tree.lookup(5));
