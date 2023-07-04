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
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) throw new Error("The Stack is Empty");
    let currentNode = this.top;
    this.top = this.top.next;
    return currentNode;
  }

  size() {
    let currentNode = this.top;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }
  
  peek() {
    return this.top;
  }
  
  findMin() {
    if (this.isEmpty()) throw new Error("The Stack is Empty");
    let currentNode = this.top;
    let min = null;
    while (currentNode) {
      if (min === null || min > currentNode.data) min = currentNode.data;
      currentNode = currentNode.next;
    }
    return min;
  }

  sort() {
    if (this.isEmpty()) throw new Error("The Stack is Empty");
    //Bubble Sort Algorithm
    for (let i = 0; i < this.size(); i++) {
      let currentNode = this.top;
      for (let j = 0; j < this.size()-1; j++) {
        if (currentNode.data > currentNode.next.data) {
          [currentNode.data, currentNode.next.data] = [currentNode.next.data, currentNode.data];
        }
        currentNode = currentNode.next;
      }
    }
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (this.first === null) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return this.size++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("The Queue is Empty");
    const removedItem = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return removedItem.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.isEmpty()) throw new Error("The Queue is Empty");
    return this.first;
  }

  getLast() {
    if (this.isEmpty()) throw new Error("The Queue is Empty");
    return this.last;
  }

  findMax() {
    if (this.isEmpty()) throw new Error("The Queue is Empty");
    let currentNode = this.first;
    while (currentNode) {
      if (this.max === null || currentNode.data > this.max) {
        this.max = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return this.max;
  }
}


module.exports = {
  Node,
  Stack,
  Queue,
};