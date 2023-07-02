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
    newItem.next = this.top
    this.top = newItem
  }

  // pop() {
  //   if (this.top === null) {
  //     throw new Error('The Stack is Empty')
  //   }else {
  //     let item = this.top
  //     this.top = this.top.next
  //     return item
  //   }
  // }

  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty")
    }
    let item = this.top;
    if(item) {
      let newItem = item.next
      this.top = newItem
      return item
    }
  }

  size() {
    let count = 0
    let currentItem = this.top
    // why does currentItem give us 1 extra
    while(currentItem) {
      count++
      currentItem = currentItem.next;
    }
    return count
  }

  isEmpty() {
    return this.top === null
  }

  peek() {
    if (this.top === null){
      throw new Error("The stack is empty")
    }
    return this.top
  }

  findMin() {

  }

};

class Queue {
  constructor(first = null) {
    this.first = first
    this.last = null
    this.size = 0
    this.max = 0
  }
}






module.exports = {
  Node,
  Queue,
  Stack,
};
