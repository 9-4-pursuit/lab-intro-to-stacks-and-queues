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



//Queue
// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

class Queue {
constructor(first = null){
this.first = null
this.last = null
this.size = 0
}

enqueue(data){
  let newItem = new Node(data)
  if (!this.first){
    this.first = newItem
    this.last = newItem
    this.size++
  } else {
    this.last.next = newItem
    this.last = newItem
    this.size++
  }


}

dequeue(){

  const returnVal = this.first.data
  this.first = this.first.next
  this.size--

return returnVal

}

peek(){
return this.first
}

isEmpty(){
return this.first === null
}

count(){
  return this.size
}

getLast(){
  return this.last
}

findMax(){
  let currentNode = this.first
  let maxVal = currentNode
  while(currentNode){
    //comparing current value to max value and setting the maxvalue
    if(currentNode.data > maxVal.data){
      maxVal = currentNode 
    }
    //on to the nexrt node
    currentNode = currentNode.next
  }
  //returning the value (.data) of param maxVal
  return maxVal.data
}

//  1 2 4


}










module.exports = {
  Node,
  Queue,
  Stack,
};
