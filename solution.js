const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(top = null) {
        this.top = top
    }

    push(data) {
        const newItem = new Node(data); 
        newItem.next = this.top; 
        this.top = newItem; 
    }

    size() {
        let size = 0;
        let currentNode = this.top;
        while (currentNode !== null){
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }

    pop() {
        if (this.top === null){
            throw new Error("The Stack is Empty");
        }

        let item = this.top; 
        let newItem = item.next; 
        this.top = newItem; 
        return item;
    }

    isEmpty() {
        return this.top === null;
    }

    findMin() {
        let currentNode = this.top;
        let minValue = this.top.data;
        while (currentNode != null){
            if (minValue > currentNode.data){
                minValue = currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return minValue;
    }

    peek() {
        if (this.top === null){
            throw new Error("The Stack is Empty");
        }
        return this.top;
    }
}

class Queue {
    constructor() {
        
    }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
