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
