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
  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp;
  }

  size() {
    let temp = this.top;
    let count = 0;

    while (temp) {
      count++;
      temp = temp.next;
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
    if (this.isEmpty()) return null;
    let temp = this.top;
    let min = temp.data;
    while (temp) {
      if (temp.data < min) {
        min = temp.data;
      }
      temp = temp.next;
    }
    return min;
  }

  convertToArray() {
    let temp = this.top;
    let arr = [];
    while (temp) {
      arr.unshift(temp.data.toLowerCase());
      temp = temp.next;
    }
    return arr;
  }

  sort() {
    let stackArray = this.convertToArray();
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
    this.size = 0;
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
      temp = temp.next;
    }
    return count;
  }

  findMax() {
    let temp = this.first;
    let max = 0;
    while (temp) {
      if (temp.data > max) {
        max = temp.data;
      }
      temp = temp.next;
    }
    return max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
