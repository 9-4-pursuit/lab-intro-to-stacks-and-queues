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
  }

  push(data) {
    if (this.min.length === 0 || data <= this.min[this.min.length -1]) {
      this.min.push(data);
    }
    const newItem = new Node(data); 
    newItem.next = this.top; 
    this.top = newItem; 
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


}




module.exports = {
  Node,
  // Queue,
  Stack,
};
