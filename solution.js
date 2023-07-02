const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};

class Stack {
  constructor(top = null) {
    this.top = top;
  };

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  };

  pop() {
    if (this.top === null) {
      throw new Error("The stack doesn't exist")
    } else {
      let item = this.top;
      this.top = this.top.next;
      return item;
    };
  };

  size() {
    let count = 0;
    let currentItem = this.top;

    // console.log(this)
    while (currentItem) {
      count++;
      currentItem = currentItem.next;
      // console.log(count)
    };
    return count;
  };

  isEmpty() {
    return this.top === null;
  }

};




class Queue {
  constructor(first = null) {
    this.first = first;
    this.last = null;
    this.size = 0;
    this.max = 0;
  };
};




module.exports = {
  Node,
  Queue,
  Stack,
};
