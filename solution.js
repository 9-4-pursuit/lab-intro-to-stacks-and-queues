const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};

class Stack {
  constructor(top = null) {
    this.top = top;
  };

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top
    this.top = newItem
  }

  // pop() {
  //   if (this.top === null) {
  //     throw new Error('The Stack is Empty')
  //   }else {
  //     let item = this.top
  //     this.top = this.top.next
  //     return item
  //   }
  // }

  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty")
    }
    let item = this.top;
    if(item) {
      let newItem = item.next
      this.top = newItem
      return item
    }
  }

  size() {
    let count = 0
    let currentItem = this.top
    // why does currentItem give us 1 extra
    while(currentItem) {
      count++
      currentItem = currentItem.next;
    }
    return count
  }

  isEmpty() {
    return this.top === null
  }
  

  peek() {
    return this.top
  }


  findMin() {
    let currentItem = this.top;
    let dataValue = currentItem.data

    while (currentItem) {
      if (dataValue > currentItem){
        dataValue = currentItem
        currentItem = currentItem.next
      }else {
        currentItem = currentItem.next
      }
    }
    return dataValue
  }

  sort() {
    let sorted = new Stack();
    while (!this.isEmpty()) {
      let temp = this.pop();
      while (!sorted.isEmpty() && sorted.peek().data > temp.data) {
        this.push(sorted.pop().data)
      }
      sorted.push(temp.data)
    }
    while (!sorted.isEmpty()) {
      this.push(sorted.pop().data);
    }
  }
};

class Queue {
  constructor(first = null) {
    this.first = first
    this.last = null
    this.size = 0
    this.max = 0
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem
    }
    return this.size++
  };

  dequeue() {
    if (this.first === null) {
      throw new Error('The queue is empty')
    };
    let item = this.first;

    if(this.first === this.last) {
      this.last = null;
    };
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  count() {
    let count = 0;
    let currentItem = this.first;

    while (currentItem) {
      count++;
      currentItem = currentItem.next;
    };
    return count;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first === null) {
      throw new Error('The queue is empty');
    };
    return this.first;
  };

  getLast() {
    let currentItem = this.first;

    while (currentItem.next != null) {
      currentItem = currentItem.next;
    };
    return currentItem;
  };

  findMax() {
    let dataValue = this.first.data

    while (this.first) {
      if (dataValue < this.first.data) {
        dataValue = this.first.data;
        this.first = this.first.next;
      } else {
        this.first = this.first.next;
      }
    }
    return dataValue;
  }


}








module.exports = {
  Node,
  Queue,
  Stack,
};
