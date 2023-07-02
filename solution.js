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
        let sortStack = new Stack(new Node(this.pop().data));

        while(!this.isEmpty()){
            let currentNode = sortStack.top;
            console.log(currentNode)
            let value = new Node(this.pop().data);

            while(currentNode !== null){
                if (value.data < sortStack.top.data){
                    value.next = currentNode;
                    sortStack.top = value
                    currentNode = null;
                } else if (currentNode.next === null || currentNode.next.data > value.data){
                    value.next = currentNode.next;
                    currentNode.next = value
                    currentNode = null;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        this.top = sortStack.top;
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
        return this.last;
    }

}







module.exports = {
  Node,
  Queue,
  Stack,
};
