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
    this.min = [];
    this.stack = [];
  }

  push(data) {
    if (this.min.length === 0 || data <= this.min[this.min.length -1]) {
      this.min.push(data);
    }
    const newItem = new Node(data); 
    newItem.next = this.top; 
    this.top = newItem; 
    this.stack.push(data);
  }

  pop() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }
    let item = this.top;
    let newItem = item.next;
    this.top = newItem;
    return item;
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode != null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }
    return this.top;
  }

  findMin() {
    return this.min.length ? this.min[this.min.length - 1] : 0;
  }

  sort() {
    const tempStack = new Stack();
  
    while (!this.isEmpty()) {
      const temp = this.pop().data;
  
      while (!tempStack.isEmpty() && tempStack.peek().data > temp) {
        this.push(tempStack.pop().data);
      }
  
      tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop().data);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (!this.first) return null;

    const dequeuedData = this.first.data;
    this.first = this.first.next;

    if (!this.first) {
      this.last = null;
    }

    return dequeuedData;
  }

  count() {
    let count = 0;
    let currentNode = this.first;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first === null) {
      throw new Error("The Stack is Empty");
    }
    return this.first;
  }

  getLast() {
    if (!this.last) return null;

    return this.last;
  }

  findMax() {
    if (!this.first) return null;

    let max = this.first.data;
    let currentNode = this.first.next;

    while (currentNode) {
      if (currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return max;
  }
}




module.exports = {
  Node,
  Queue,
  Stack,
};
