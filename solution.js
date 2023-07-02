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
      // O(1)
      const newItem = new Node(data); // Creta a new node
      newItem.next = this.top; // set 'next' on our new node to be the top of the stack
      this.top = newItem; // set the top of the stack to be our new node
    }


  }







  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  }






  module.exports = {
    Node,
    Stack
  };