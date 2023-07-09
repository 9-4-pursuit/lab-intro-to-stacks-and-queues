const {nums, words} = require('./data/data.js')
const {inspect} = require('util')

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// - `push`
// - `size`
// - `pop`
// - `isEmpty` check if list is empty
// - `findMin` data value
// - `peek` top node
// - `sort` - sort the stack into ascending order. **CHALLENGE** only use stacks to achieve this (no arrays or objects etc.)
class Stack {
  constructor(top = null) {
    this.top = top
  }
  push(item) {
    const newItem = new Node(item)
    newItem.next = this.top
    this.top = newItem
  }
  pop() {
    if (!this.top) {
      throw new Error('Stack is empty')
    }
    let item = this.top
    if (item) {
      this.top = item.next
      return item
    }
  }
  size() {
    let count = 0
    let current = this.top
    while (current) {
      count++
      current = current.next
    }
    return count
  }
  isEmpty() {
    return this.top === null
  }
  findMin() {
    let current = this.top.next
    let min = this.top.data
    while (current) {
      if (min > current.data) {
        min = current.data
      }
      current = current.next
    }
    return min
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty.')
    }
    return this.top
  }
  toArray() {
    let current = this.top
    let arr = []
    while (current) {
      arr.push(current.data)
      current = current.next
    }
    return arr
  }
  sort() {
    let helperArray = this.toArray()
    helperArray.sort()
    this.top = null
    for (let i = helperArray.length - 1; i >= 0; i--) {
      this.push(helperArray[i])
    }

  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
    this.max = 0
  }
  enqueue(data) {
    let newItem = new Node(data)
    if (!this.first) {
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    return ++this.size
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('The queue is empty')
    }
    const item = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return item.data
  }

  count() {
    return this.size
  }
  isEmpty() {
    return this.first === null
  }
  peek() {
    if (!this.first) {
      throw new Error('The queue is empty')
    }
    return this.first
  }
  getLast() {
    if (!this.first) {
      throw new Error('The queue is empty')
    }
    return this.last
  }
  findMax() {
    let current = this.first.next
    this.max = this.first.data
    while (current) {
      if (current.data > this.max) {
        this.max = current.data
      }
      current = current.next
    }
    return this.max
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
}
