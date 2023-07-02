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
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.max = null;
    }

    count(){
        return this.size;
    }

    dequeue() {
        if(this.first === null){
            throw new Error("The queue is empty");
        }
        const item = this.first;
        if (this.first === this.last){
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return item.data;
    }

    enqueue(data) {
        let newItem = new Node(data);

        if (!this.first) {
            this.first = newItem;
            this.last = newItem;
        } else {
            this.last.next = newItem;
            this.last = newItem;
        }
        this.size++;
    }

    findMax(){
        let currentNode = this.first;
        this.max = currentNode.data;
        while (currentNode != null){
            if (this.max < currentNode.data){
                this.max = currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return this.max;
    }

    getLast(){
        if (this.last === null){
            throw new Error("The queue is empty");
        }
        return this.last;
    }

    isEmpty() {
        return this.first === null;
    }

    peek() {
        if (this.first === null) {
          throw new Error("The queue is empty");
        }
        return this.first;
    }

}







module.exports = {
  Node,
  Queue,
  Stack,
};
