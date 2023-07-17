const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.bottom = node; // RECALL
    } else {
      node.next = this.top; //RECALL
      this.top = node; // RECALL
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    let removedNode = this.top;
    this.top = this.top.next;

    this.length--;

    return removedNode;
  }

  isEmpty() {
    return this.size() > 0 ? false : true;
  }
  peek() {
    return this.top;
  }
  findMin() {
    if (!this.top) throw new Error("Empty Stack");
    let current = this.top;
    let minValue = current.data;
    while (current) {
      if (current.data < minValue) {
        minValue = current.data;
      }
      current = current.next;
    }
    return minValue;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    this.last.next = node;
    this.last = node;
    this.size++;
  }

  dequeue() {
    if (!this.first) return null;

    let removedNode = this.first;
    this.first = this.first.next;

    this.size--;
    return removedNode.data;
  }

  count() {
    return this.size;
  }
  isEmpty() {
    return this.count() == 0 ? true : false;
  }
  peek() {
    return this.first;
  }
  getLast() {
    return this.last;
  }
  findMax() {
    if (this.count() == 0) throw new Error("Empty Qeueue");
    let current = this.first;
    let maxVal = this.first.data;
    while (current) {
      if (maxVal < current.data) {
        maxVal = current.data;
      }
      current = current.next;
    }
    return maxVal;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
