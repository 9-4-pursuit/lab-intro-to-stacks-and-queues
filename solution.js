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
  const count = 0;
  const node = this.top;

    while(node) {
    node = node.next;
    count++
  }
  return count++;
}

pop() {
  const popp = this.top;

  this.top = popp.next;
  return this.popp;
}

isEmpty() {
  return this.top === null;
}


peek() {
  return this.top;
}

findMin() {
  const minimum = this.top.data;

  const node = this.top;
    while(node) {
    if(node.data < minimum) {
       minimum = node.data 
    }
    node = node.next;
  }
    return minimum;
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

// sort() {
//   const stackArr = this.Arr();

//   stackArr.sort((a, b) => {
//     if(a > b) {
//       return -1;
//     } else if (a < b){
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(stackArr)
//   this.clear();
//   this.arrToStack(stackArr);
//   };

};





module.exports = {
  Node,
  Queue,
  Stack,
};
