const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top
  }

  isEmpty() {
    return this.top === null
  }//succesfully checks if stack is empty ; only worked after below implemented

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }//adds data, succesfull

  peek() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }
    return this.top;
  } //sucessful

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
    while (currentNode != null) 
    {
      count++;
      currentNode = currentNode.next
    }
    return count;
  }

  findMin() {
    let currentNode = this.top;
    let minimum = currentNode.data;

    for (let i = 0; i < currentNode.length; i++) {
      if (currentNode.data < minimum) {
        minimum = currentNode.data
      }
      currentNode = currentNode.next;
    }
    return minimum
  }

  sort() {
    let currentNode = this.top;
    let nextNode = currentNode;
    while (currentNode) {
      if (nextNode.data > currentNode.data) {
        nextNode = currentNode;
      }
      this.top = nextNode;
      currentNode = currentNode.next
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

  enqueue(data) {
    let newItem = new Node(data);

    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    }
    else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return this.size++;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }

    const item = this.first;
    if  (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }
}



module.exports = {
  Node,
  Queue,
  Stack,
};
