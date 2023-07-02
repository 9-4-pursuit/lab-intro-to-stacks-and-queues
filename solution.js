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
