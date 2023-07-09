const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


// let maxValueQUEUE
class Node {
  constructor(data){
    this.data=data;
    this.next=null;
  }
}


class Stack{

constructor(top=null){
this.top=top;
}

isEmpty(){
  return this.top === null;
}

push(data){
  const newStackItem = new Node(data);
  newStackItem.next=this.top;
  this.top=newStackItem
}

pop(){
  if(this.top == null){
    throw new Error ("No Pancakes in the Stack")
  }
  let item = this.top
  if (item){
    let newStackItem = item.next;
    this.top= newStackItem;
    return item;
  }
}

size(){

let counter = 0
let current = this.top
while(current){
  counter++
  current = current.next
}
return counter
}


findMin(){

if(this.isEmpty()){
  throw new Error ("No Pancakes in the Stack")
}

  let current = this.top.next
  let minValue = this.top.data
  while(current){


    if(minValue>current.data){
      minValue = current.data
    }
    current = current.next
  }
return minValue

}


peek(){

  if(this.top == null){
    throw new Error ("No Pancakes in the Stack");
  }

  return this.top

}

toArray(){
  let newArray = []
  let newItem = this.top;
  while (newItem){
    newArray.push(newItem.data)
    newItem = newItem.next;
  }
  return newArray
}

sort(){

  let stackArray = this.toArray();
  stackArray.sort()

  this.top =null //clears stack
  for (let i=(stackArray.length-1); i>=0 ;i--){
    this.push(stackArray[i])
  }
}


}

class Queue {

constructor(){
  this.first= null;
  this.last=null;
  this.size = 0;
  this.max = 0
}

enqueue(data){
  let newQueItem = new Node(data);
  if (!this.first){
    this.first = newQueItem
    this.last = newQueItem
    this.max = data
  }
  else{
    this.last.next = newQueItem;
  
    this.last = newQueItem
    if(this.max<data){
      this.max = data
    }
  }


return ++this.size;

}


dequeue(){

if(this.first == null){
  throw new Error ("The queue is empty")
}
const item = this.first;
if (this.first === this.last){ //1 item in list
  this.last =null
}
this.first = this.first.next;
this.size--;
return item.data;

}
isEmpty(){
  return this.first === null
}

peek(){
  if(this.first == null){
    throw new Error ("The queue is empty");
  }

  return this.first
}

getLast(){
  if(this.last == null){
    throw new Error ("The queue is empty");
  }
  return this.last
}

findMax(data){
//   console.log(data)
// let newArray = []
//   let current = this.first
//   let counter =1
//   console.log(this.size)
//   while(counter<=this.size){
//     console.log(current.data)

//     newArray.push(this.first.data)
//     current.next;
//     counter++
//   }


//   newArray.sort();
// console.log(newArray)
// return newArray[newArray.length-1]
// return maxValueQUEUE}
return this.max
}

count(){
  return this.size
}


}




module.exports = {
  Node,
  Queue,
  Stack,
};
