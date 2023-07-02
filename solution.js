const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
    this.minNode = null
  }

  push(data){
    const newItem = new Node(data); //creates a new node

    newItem.next = this.top //set next as the top

    this.top = newItem //the top is now the new item
  }

  size(){
    let count = 0
    let currentNode = this.top
    while (currentNode != null) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  pop(){
    if(this.top === null){
      throw new Error("stack is null")
    }
    let item = this.top
    let newItem = item.next
    this.top = newItem
    return item;
  }

  isEmpty(){
    return this.top === null
  }

  toArray(){
    let current = this.top
    const array = []
    while (current) {
      array.push(current.data)
      current = current.next
    }
    return array
  }

  findMin(){
    let current = this.top
    let minNode = current
    while (current) {
      if(minNode.data > current.data){
        minNode = current
      }
      current = current.next
    }
    return minNode.data
   
  }

  peek(){
    if (this.top === null){
      throw new Error("The Stack is null")
    }
    return this.top
  }

  sort(){
if (this.isEmpty()){
  return "this is empty"
}
const tempStack = new Stack()
while (!this.isEmpty()){
  let current = this.pop() //removes the top element of stack and then reassign the top where current holds the popped value
  while(!tempStack.isEmpty() && tempStack.peek().data > current.data){
    this.push(tempStack.pop().data)
  }
  tempStack.push(current.data)
}
while(!tempStack.isEmpty()){
  this.push(tempStack.pop().data)
}
  }

}


const stack = new Stack
const stackSize = stack.size()


class Queue{
constructor(first = null){

}
}










module.exports = {
  Node,
  Queue,
  Stack,
};
