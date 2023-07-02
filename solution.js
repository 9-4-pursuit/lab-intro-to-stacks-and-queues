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
    
    isEmpty() {
      // O(1)
      return this.top === null;
    }


    findMin() {
      // Check if the stack is empty
      if (this.top === null) {
        throw new Error("The Stack is Empty");
      }
    
      let current = this.top; // Start with the top node
      let minValue = current.data; // Assume the data of the top node is the minimum value
    
      while (current !== null) {
        // Compare the data value of the current node with the current minimum value
        if (current.data < minValue) {
          minValue = current.data; // Update the minimum value if a smaller value is found
        }
        current = current.next; // Move to the next node
      }
    
      return minValue; // Return the minimum value found in the stack
    }
    

    peek() {
      if (this.top === null) {
        throw new Error("The Stack is Empty");
      }
      return this.top;
    }

    sort() {
      // Check if the stack is empty or has only one element (already sorted)
      if (this.top === null || this.top.next === null) {
        return;
      }
    
      let stackSize = this.size(); // Get the size of the stack
    
      for (let i = 0; i < stackSize - 1; i++) {
        let current = this.top; // Start with the top node
        let nextNode = current.next; // Get the next node
    
        for (let j = 0; j < stackSize - i - 1; j++) {
          // Compare the data values of the current node and the next node
          if (current.data > nextNode.data) {
            // Swap the data values if they are not in ascending order
            let temp = current.data;
            current.data = nextNode.data;
            nextNode.data = temp;
          }
    
          current = nextNode; // Move to the next node
          nextNode = nextNode.next; // Move to the next next node
        }
      }
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