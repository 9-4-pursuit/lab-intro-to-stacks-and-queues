const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top=null) {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data); // creates a new nod
    newItem.next = this.top; // set next as the top or new stack
    this.top = newItem; // the top is now the new item
  }

  // size()
  // pop()
  // isEmpty(){
  //   return this.top
  // }
  // findMin()
  // peek()
  // sort() //*Bonus*/







}
class Queue {
  // constructor(first=null)
}














module.exports = {
  Node,
  Queue,
  Stack,
};
