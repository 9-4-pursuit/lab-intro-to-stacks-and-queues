const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }
 

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if (this.top === null) {
      throw new Error("The Stack is Empty");
    }

    let item = this.top;
    let newItem = item.next;
    this.top = newItem;

    return item;
  }

  size() {
    let current = this.top;
    let size = 0
    while (current !== null) {
      size++;
      current = current.next
    }
    return size
  }

  isEmpty() {
    if(!this.top) {
      return true
    } else return false
  }

  peek() {
    return this.top
  }

  findMin() {
    let current = this.top
    let min = null
    while (current !== null){
      if(min === null) {
        min = current.data
      }
      if(current.data < min){
        min = current.data
      }
      current = current.next
    }
    return min
  }

  // sort() {
    // let current = this.top
    // let next = current.next
    // let prev = null
    // let sorted = null 
    
    
    // console.log("current",current)
    // console.log("next",next)

    // let newNode = new Node(current)
    // console.log("newNode",newNode)
    // while(current) {
      // let newNode = new Node(current)
      // 
      // let newNext = next

    //   while (newNext && newNode.data > newNext.data) {
    //    let temp = newNext.data
    //    newNext.data = newNode.data;
    //    newNode.data = temp

      // current =
        // newNode = new Node(newNext)
        // newNext = newNode.next
    //   }

    //   [0,9,10,8,7,6,5,4,3,2,1]
    //    [0,9,8,10,7,6,5,4,3,2,1]
      
        // current = 
        // next = next.next
    // }
    
//         return this;
//   }

}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size= 0;
    this.max = 0
 
  }

  enqueue(data) {
    let newItem = new Node(data);

    if( !this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    return ++this.size;
  }

  dequeue() {
    if ( this.first === null) {
      throw new Error("The queue is empty")
    } 
    const item = this.first;
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size--;
    return item.data
  }

  count() {
    return this.size
  }

  isEmpty() {
    if (this.count() === 0){
      return true
    } else {
      return false
    }
  }

  peek() {
    return this.first
  }

  getLast() {

    return this.last
  }

  findMax() {
    let max = null
    console.log(this)
    while(this.first && this.first.next) {
    if (this.first.data > this.first.next.data) {
      max = this.first.data
    }
    this.first = this.first.next
    this.next = this.first.next
  }
  return max

  }
}



let stack = new Stack()



for (i = 0; i< nums.length; i++) {
  stack.push(nums[i])
}




module.exports = {
  Node,
  Queue,
  Stack,
};
