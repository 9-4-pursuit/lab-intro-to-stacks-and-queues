const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  pop() {
    if (this.top === null) {
      throw new Error("The stack doesn't exist")
    } else {
      let item = this.top;
      this.top = this.top.next;
      return item;
    };
  };
  

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if (!this.top) {
      return null;
    }
    let min = this.top.data;
    let current = this.top.next;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  peek() {
    return this.top;
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

class Queue {
  constructor(first = null) {
    this.first = first;
    this.last = null;
    this.size = 0;
    this.max = 0;
  };

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem
    } else {
      this.last.next = newItem;
      this.last = newItem
    };
    return this.size++
  };

  dequeue() {
    if (this.first === null) {
      throw new Error('The queue is empty');
    };
    const item = this.first;

    if (this.first === this.last) {
      this.last = null;
    };
    this.first = this.first.next;
    this.size--;
    return item.data;
  };

  count() {
    let count = 0;
    let currentItem = this.first;

    while (currentItem) {
      count++;
      currentItem = currentItem.next;
    };
    return count;
  };

  isEmpty() {
    return this.first === null;
  };

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
    let dataValue = this.first.data;

    while (this.first) {
      if (dataValue < this.first.data) {
        dataValue = this.first.data;
        this.first = this.first.next;
      } else {
        this.first = this.first.next;
      };
    };
    return dataValue;
  }

};
  


module.exports = {
  Node,
  Queue,
  Stack,
};
