const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  isEmpty() {
    return this.first == null
  }

  count() {
    let count = 0;
    let currentNode = this.first
    while (currentNode != null) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  peek() {
    return this.first
  }

  getLast() {
    return this.last
  }

  findMax() {
    let currentNode = this.first
    let maxNode = currentNode
    while (currentNode) {
      if (maxNode.data < currentNode.data) {
        maxNode = currentNode
      }
      currentNode = currentNode.next
    }
    return maxNode.data
  }
}

class Stack {
  constructor(top = null) {
    this.top = top
  }

  push(data) {
    const newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }

  pop() {
    if (this.top === null) {
      throw new Error("the stack is empty")
    }

    let item = this.top
    let newItem = item.next
    this.top = newItem
    return item
  }

  size() {
    let count = 0;
    let currentNode = this.top
    while (currentNode != null) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  isEmpty() {
    return this.top == null
  }

  peek() {
    return this.top
  }

  findMin() {
    let currentNode = this.top
    let minNode = currentNode
    while (currentNode) {
      if (minNode.data[0] > currentNode.data[0]) {
        minNode = currentNode
      }
      currentNode = currentNode.next
    }
    return minNode.data
  }

  sort() {
    let currentNode = this.top
    let minNode = currentNode
    while (currentNode) {
      if (minNode.data > currentNode.data) {
        minNode = currentNode
      }
      this.top = minNode
      currentNode = currentNode.next
    }
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
