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
    this.minNode = null;
    this.maxNode = null; // variable to track the minimum value
  }

  push(data) {
    const newItem = new Node(data); // creates a new node
    newItem.next = this.top; // set next as the top or new stack
    this.top = newItem; // the top is now the new item

    // Update the minimum value if necessary
    if (this.minNode === null || data < this.minNode) {
      this.minNode = data;
    }

    // Update the max value if necessary
    if (this.maxNode === null || data > this.maxNode) {
      this.maxNode = data;
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
  findMax() {
    if (this.maxNode === null) {
      throw new Error("The Stack is Empty");
    }
    return this.maxNode;
  }

  sort() {
    if (this.isEmpty()) {
      return "This is empty";
      console.log("Stack is empty");
    }

    const tempStack = new Stack(); //creating a new stack instance and assigning it to tempStack, you have a separate stack object to store elements temporarily, without affecting the original stack's state or integrity.
    while (!this.isEmpty()) {
      let current = this.pop(); //removes the top element of stack and then re-assigns the top where current holds the popped value.
      while (!tempStack.isEmpty() && tempStack.peek().data > current.data) {
        //checks if temp stack is not empty and if the top element is greater than the current element -- if both are met -- execute the loop to insert the current element onto the stack.
        this.push(tempStack.pop().data); //executing this line of code in a loop, the sorted elements are pushed back into the original stack, ensuring the desired sorting order.
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
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxNode = null;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error("The queue is empty");
    }

    const removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;

    if (removedNode.data === this.maxNode.data) {
      this.updateMaxNode();
    }

    return removedNode.data;
  }

  enqueue(data) {
    let newItem = new Node(data);
  
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
      this.maxNode = newItem; // Set maxNode to the first item
    } else {
      this.last.next = newItem;
      this.last = newItem;
  
      if (data > this.maxNode.data) {
        this.maxNode = newItem;
      }
    }
    this.size++;
    return this.size;
  }
  

  findMax() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty");
    }
    return this.maxNode.data;
  }

  getLast() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty");
    }
    return this.last.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty");
    }
    return this.first.data;
  }

  updateMaxNode() {
    if (this.isEmpty()) {
      this.maxNode = null;
    } else {
      let currentNode = this.first;
      let newMaxNode = currentNode;
      while (currentNode) {
        if (currentNode.data > newMaxNode.data) {
          newMaxNode = currentNode;
        }
        currentNode = currentNode.next;
      }
      this.maxNode = newMaxNode;
    }
  }
}

let queue = new Queue();
for (let i = 0; i < words.length; i++) {
  queue.enqueue(words[i]);
}
module.exports = {
  Node,
  Queue,
  Stack,
};
