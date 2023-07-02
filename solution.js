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
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let count = 0;
    let currentNode = this.top;

    while (currentNode !== null) {  
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  pop() {
    if(!this.top) {
      throw new Error('The Stack is Empty')
    }
    let removedItem = this.top;
    this.top = this.top.next;
    return removedItem;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if(!this.top) {
      throw new Error('The Stack is Empty')
    }

    let minimumValue = Infinity;
    let currentNode = this.top;

    while (currentNode.next) {
      if (currentNode.data < minimumValue) {
        minimumValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return minimumValue;
  }

  peek() {
    return this.top ? this.top : console.log('The stack is empty')
  }

  sort() {
    let currentNode = this.top;
    let comparedNode = currentNode;
    while (currentNode) {
      if (comparedNode.data > currentNode.data) {
        comparedNode = currentNode;
      }
      this.top = comparedNode;
      currentNode = currentNode.next;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }

  dequeue() {
  
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
    this.size++;
  }

  findMax() {

  }

  getLast() {

  }

  isEmpty() {

  }

  peek() {

  }

}

module.exports = {
  Node,
  Queue,
  Stack,
};



