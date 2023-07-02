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

  // PUSH
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  };

  // POP
  pop() {
    if (this.top === null) {
      throw new Error("The stack doesn't exist")
    } else {
      let item = this.top;
      this.top = this.top.next;
      return item;
    };
  };

  // SIZE
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

  // IS EMPTY
  isEmpty() {
    return this.top === null;
  };

  // PEEK
  peek() {
    return this.top;
  }

  // FIND MIN
  findMin() {
    // let currentItem = this.top
    let dataValue = this.top.data;

    while (this.top) {
      // console.log(this.top, dataValue)
      if (dataValue > this.top.data) {

        dataValue = this.top.data
        this.top = this.top.next;
      } else {
        this.top = this.top.next;
      };
    };
    return dataValue;
  };

  // SORT
  sort() {
    let sorted = new Stack();
    while (!this.isEmpty()) {
      let temp = this.pop();
      while (!sorted.isEmpty() && sorted.peek().data > temp.data) {
        this.push(sorted.pop().data);
      }
      sorted.push(temp.data);
    }
    while (!sorted.isEmpty()) {
      this.push(sorted.pop().data);
    }
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
