const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
      this.data = data;
      this.next = null; 
  }
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let newcurrentNode = new Node(data);

    if (!this.first) {
      this.first = newcurrentNode;
      this.last = newcurrentNode;
    } else {
      this.last.next = newcurrentNode;
      this.last = newcurrentNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }
    const currentNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return currentNode.data;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  count() {
    let count = 0;
    let currentNode = this.first;
    while(currentNode) {
        count++;
        currentNode = currentNode.next;
    }
    return count; 
};


findMax() {
  if (this.top === null) {
    throw new Error("The Stack is Empty");
  }
  let currentNode = this.first;
  let max = currentNode.data;
  for(let i = 0; i < this.count(); i++) {
    if (currentNode.data > max) {
      max = currentNode.data;
    }
    currentNode = currentNode.next;
  }

  return max;
}

getLast() {
  return this.last
}

};

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newcurrentNode = new Node(data);
    newcurrentNode.next = this.top;
    this.top = newcurrentNode;
  }

  peek() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }
    return this.top;
  }

  pop() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }

    let currentNode = this.top;
    let newcurrentNode = currentNode.next;
    this.top = newcurrentNode;
    return currentNode;
  }

  size() {
      let count = 0;
      let currentNode = this.top;
      while(currentNode) {
          count++;
          currentNode = currentNode.next;
      }
      return count; 
  };

  findMin() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }

    let currentNode = this.top;
    let min = currentNode.data;

    for(let i = 0; i < currentNode.length; i++) {
      if (currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return min;
  }

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
}


module.exports = {
  Node,
  Queue,
  Stack,
};
