const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top || null;
  }

push(data) {
  const newItem = new Node(data); 
  newItem.next = this.top; 
  this.top = newItem; 
}

size() {
  let count = 0;
  let node = this.top;

    while(node) {
    node = node.next;
    count++
  }
  return count++;
}

pop() {
  let popp = this.top;

  this.top = popp.next;
  return popp;
}

isEmpty() {
  return this.top === null;
}


peek() {
  return this.top;
}

findMin() {
  let min = this.top.data;
  let node = this.top;

    while(node) {
    if(node.data < min) {
       min = node.data;
    }
    node = node.next;
  }
    return min;
}

Arr() {
  const stackArr = [];
  let node = this.top;
    while (node) { 
    stackArr.push(node.data);
    node = node.next;
  }
  return stackArr;
}

clear() {
  this.top = null;
}

arrToStack(array) {
  for(let i = 0; i < array.length; i++) {
    this.push(array[i])
  }
}

sort() {
  const stackArr = this.Arr();

  stackArr.sort((a, b) => a > b ? -1 : a < b ? 1 : 0);

  console.log(stackArr);
  this.clear();
  this.arrToStack(stackArr);
  }
};



// CREATE A QUEUE WITH PORPERTIES
class Queue {
  constructor(value) {
    this.first = null
    this.last = null
    this.size = 0
    this.max = value;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if(!this.first) {
      this.first = newNode
    } else {
      this.last.next = newNode
    }  
    this.last = newNode;
    this.size++;
  }

  dequeue() {
    let New = this.first 
    this.first = this.first.next;
    this.size--;
    return New.data;
  }

  findMax() {
    let max = this.first.data;
    let node = this.first.next;
  
      while(node) {
      if(node.data > max) {
         max = node.data;
      }
      node = node.next;
    }
      return max;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first;
  }

  getLast() {
      return this.last;
  };

}


module.exports = {
  Node,
  Queue,
  Stack,
};
