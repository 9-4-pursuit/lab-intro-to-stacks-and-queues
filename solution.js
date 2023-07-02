const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

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

isEmpty() {
  return this.top === null;
}

push(data) {
  const newItem = new Node(data); 
  newItem.next = this.top; 
  this.top = newItem; 
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

}




}




module.exports = {
  Node,
  Queue,
  Stack,
};
