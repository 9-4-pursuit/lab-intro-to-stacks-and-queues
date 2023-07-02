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

    size() {
      let count = 0;
      let current = this.top;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }
    
    




    pop() {
      if (this.top === null) {
        throw new Error("The Stack is Empty");
      }
  
      let item = this.top; // item = december
      let newItem = item.next; // newItem = november
      this.top = newItem; // this.top = november
      // this.top = this.top.next;
      return item;
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