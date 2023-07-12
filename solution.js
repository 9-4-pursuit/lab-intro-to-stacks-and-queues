const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
/*
const dataArray = ["ham", "quick", "gerbil", "chinchilla", "barry"];
const newStack = new Stack();
for (let i = 0; i < dataArray.length; i++) {
  newStack.push(dataArray[i]);
}
// let printStack = (inspect(newStack, {colors: true, depth: 12}));
*/

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.length = 0;
  }
  push (data) {
    const newNode = new Node (data);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
  size () {
    return this.length;
  }
  pop () {
    const returnNode = this.top;
    this.top = this.top.next;
    this.length--;
    return returnNode;
  }
  isEmpty () {
    return (!this.top)
  }
  findMin () {
    if (!this.top) {
      return "No data in stack.  No minimum value"
    } else {
      let minVal = this.top.data;
      let currentNode = this.top;
      while (currentNode) {
        if (currentNode.data < minVal) {
          minVal = currentNode.data
        }
        currentNode = currentNode.next;
      }
      return minVal;
    }
    // Outside the "else" should never execute; either if executes with return
    // or else executes with return.
  }
  peek () {
    return this.top;
  }

  sort () {
    const holdingArray = [];
    while (this.top) {
      holdingArray.push(this.pop().data)
    }
    holdingArray.sort().reverse();
    for (let i = 0; i < holdingArray.length; i++) {
      this.push(holdingArray[i])
    }
  }

  // delete (value) {
  //   if (!this.top) {
  //     return "No stack found; cannot delete any value."
  //   } else {
  //     let currentNode = this.top;
  //     if (currentNode.data === value) {
  //       this.top = this.top.next;
  //     } else {
  //       let previousNode = null;
  //       while (currentNode) {
  //         if (currentNode.data === value) {
  //           previousNode.next = currentNode.next;
  //           break;
  //           // break to prevent multiple deletions and to prevent
  //           // clashing with post-if statement.
  //         }
  //         previousNode = currentNode;
  //         currentNode = currentNode.next;
  //       }
  //       return "Value not found in stack";
  //     }
  //   }
  // }
/*
Traditional recursion returns a value.  When using ".this" references, though,
.this modified directly (well, via delete() and sort())
Tail end recursion not used, so will probably crash for out of memory if
large stack used.  
*/

  // sort(toSortStack = this.top, localMinimum = this.findMin()) {
  //   if (toSortStack === null) {
  //     return;
  //   }
  //   this.delete(localMinimum);
  //   this.sort();
  //   this.push(localMinimum);
  // }
  // sort
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = this.findMax();
  }
  count() {
    return this.size;
  }
  dequeue() {
    this.size--;
    const returnNode = this.first;
    this.first = this.first.next;
    return returnNode.data;
  }
  enqueue(input) {
    this.size++;
    const newNode = new Node(input);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

  }
  findMax () {
    if (!this.first) {
      return "No data in queue.  No maximum value"
    } else {
      let maxVal = this.first.data;
      let currentNode = this.first;
      while (currentNode) {
        if (currentNode.data > maxVal) {
          maxVal = currentNode.data
        }
        currentNode = currentNode.next;
      }
      return maxVal;
    }
    // Outside the "else" should never execute; either if executes with return
    // or else executes with return.
  }
  getLast() {
    return this.last;
  }
  isEmpty() {
    return (!this.first)
  }
  peek() {
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
