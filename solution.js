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
    this.minNode = null; // variable to track the minimum value
  }

  push(data) {
    const newItem = new Node(data); // creates a new node
    newItem.next = this.top; // set next as the top or new stack
    this.top = newItem; // the top is now the new item

    // Update the minimum value if necessary
    if (this.minNode === null || data < this.minNode) {
      this.minNode = data;
    }
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

  pop() {
    if (this.top === null) {
      throw new Error("stack is null");
    }
    let item = this.top; // temp item for top
    let newItem = item.next;
    this.top = newItem;
    return item;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      throw new Error("stack is null");
    }
    return this.top;
  }

  // toArray() {
  //   let current = this.top;
  //   const array = [];
  //   while (current) {
  //     array.push(current.data);
  //     current = current.next;
  //   }
  //   return array;
  // }

  findMin() {
    if (this.minNode === null) {
      throw new Error("The Stack is Empty");
    }
    return this.minNode;
  }

  sort() {
    if (this.isEmpty()) {
      return "This is empty";
      console.log("Stack is empty")
    }

    const tempStack = new Stack();//creating a new stack instance and assigning it to tempStack, you have a separate stack object to store elements temporarily, without affecting the original stack's state or integrity.
    while (!this.isEmpty()) {
      let current = this.pop(); //removes the top element of stack and then re-assigns the top where current holds the popped value.
      while (!tempStack.isEmpty() && tempStack.peek().data > current.data) { //checks if temp stack is not empty and if the top element is greater than the current element -- if both are met -- execute the loop to insert the current element onto the stack.
        this.push(tempStack.pop().data);//executing this line of code in a loop, the sorted elements are pushed back into the original stack, ensuring the desired sorting order.
      }
      tempStack.push(current.data);
    }

    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop().data);
    }
  }
}

const stack = new Stack();
const stackSize = stack.size();

// Pushing elements onto the stack
for (let i = 0; i < nums.length; i++) {
  stack.push(nums[i]);
}

console.log("Minimum value:", stack.findMin());

class Queue {
  // constructor(first=null)
}

module.exports = {
  Node,
  Queue,
  Stack,
};
