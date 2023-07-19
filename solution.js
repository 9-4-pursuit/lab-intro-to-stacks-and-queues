const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  push(data) {
    let newData = new Node(data);
    newData.next = this.top;
    this.top = newData;
  }

  pop() {
    if(this.top === null) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp;
  }

  size() {
    let size = 0;
    let currentNode = this.top;
    while (currentNode !== null) {
      size ++;
      currentNode = currentNode.next;
    }
    return size;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    if(this.top === null) {
      throw new Error("The Stack is Empty");
    }
    let currentNode = this.top;
    let min = currentNode.data;
    for (let i = 0; i <currentNode.length; i++) {
      if(currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return min;
  }

  toArray() {
    let array = [];
    let item = this.top;
    while(item) {
      array.push(item.data);
      item = item.next;
    }
    return array;
  }

  sort() {
    let stackArray = this.toArray();
    stackArray.sort((a, b) => {
      if (a < b) {
        return 1;
      } else {
        return -1;
      }
    });
    this.top = null;

    for (let val of stackArray) {
      this.push(val);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size =0;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (this.first === null) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }
  dequeue() {
    if (this.first === null) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    return temp.data;
  }
  getLast() {
    return this.last;
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }

  count() {
    let temp = this.first;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next
    }
    return count;
  }

  findMax() {
    if(this.first === null) {
      throw new Error("The Queue is Empty");
    }

    let current = this.first;
    let maxValue = current.data;

    while (current !== null) {
      if (current.data > maxValue) {
        maxValue = current.data;
      }
      current = current.next
    }
    return maxValue;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
