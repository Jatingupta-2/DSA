class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let head = null;

function createSLL(arr) {
  head = new node(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new node(arr[i]);
    curr = curr.next;
  }
}

function traverseSLL() {
  let curr = head;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

function insertAtBegining(val) {
  let curr = new node(val);
  curr.next = head;
  head = curr;
}

function insertAtkthPosition(val, k) {
  let curr = head;

  while (--k) {
    curr = curr.next;
  }

  let temp = curr.next;
  curr.next = new node(val);
  curr = curr.next;
  curr.next = temp;
}

function insertAtEnd(val) {
  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = new node(val);
}

function deleteKthNode(k) {
  let curr = head;
  let prev = null;
  while (--k) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = curr.next;
  curr.next = null;
  delete curr;
}

function updatekthNode(val, k) {
  let curr = head;

  while (--k) {
    curr = curr.next;
  }
  curr.val = val;
}

function reverseList() {
  let curr = head;
  let prev = null,
    after = null;
  while (curr.next != null) {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
  }
  curr.next = prev;
  head = curr;
}

function findMiddleElLL() {
  // let sp = head;
  // let fp = head;

  // while(fp!=null && fp.next!=null){
  //     sp= sp.next;
  //     fp = fp.next;
  //     fp = fp.next;
  //     console.log('fp',fp!=null?fp.val:null)
  //     console.log('sp',sp.val)
  // }

  // return sp.val;
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next;
    if (fast != null) {
      fast = fast.next;
    }
  }
  console.log(slow.val);
}

function linkLastElto2() {
  let k = 3;
  let curr = head;
  let temp = null;

  while (--k) {
    curr = curr.next;
    temp = curr;
  }
  while (curr.next != null) {
    curr = curr.next;
  }
  
  curr.next = temp;
}
function findIfLLIsCircular() {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast !== null && slow.val === fast.val) {
      return true;
    }
  }
  return false;
}

function findStartPointOfIterationLL() {
  let slow = head,
    fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast !== null && slow.val === fast.val) {
        fast = head;
        while(slow.val!==fast.val){
            fast= fast.next;
            slow = slow.next;
        }
        return slow.val
        
      }
  }
  return -1;
}

// createSLL([1, 4, 55, 2, 8, 9]);
// // insertAtBegining(0)
// // insertAtkthPosition(2,2)
// // insertAtEnd(99);
// // deleteKthNode(2)
// // updatekthNode(22,2)

// traverseSLL();
// linkLastElto2();
// console.log(findIfLLIsCircular());
// console.log(findStartPointOfIterationLL());
// console.log(findMiddleElLL())
// reverseList();
// traverseSLL();


function a(){

  for(let i=0;i<6;i++){
    // (function (i){
      setTimeout(() => {
        console.log(i)
    }, 1000);
    // })(i);
    
  }

}

// a();

class Human{
  constructor(){
    this.eyes= 2
  }
}

class Employee extends Human{
  constructor(salary){
    super();
    this.salary = salary
  }
}

var jatin = new Employee(1000)

// console.log(jatin.salary)

[1,2] == [1,2]
[1,2] === [1,2]

// console.log([1,2] == [1,2])

function sum(...args){
  // console.log(args)
  // let sum = 0;
  // for(let arg of args){
  //   sum = (sum+arg).toFixed(2)
  // }
  // return sum;
  // for(let i=0;i<args.length;i++){

  
  // return (parseFloat(a)+parseFloat(b)).toFixed(2);
}

// console.log(sum(2.02,2.04,10,49))

// var p = {answer: 42};
// // An object using `p` as its prototype
// var o = Object.create(p);

// p.answer


// var p = {answer: 42};
// // An object using `p` as its prototype
// var o = Object.create(p);
// p.answer
// o.answer
// p[answer]
// p.hasOwnProperty("answer")
// o.hasOwnProperty("answer") 
// delete o.answer
// o.answer


// console.log(1);

// let p1 = new Promise((resolve,reject)=>{
//   console.log(2);
//   // setTimeout(() => {
//       console.log(3)
//       //this goes to MT queue and after that it will executed after the call stack so 
//       resolve();
//   // }, 0);
// })

// p1.then((resolve)=>{
//   console.log(4)
// })

// console.log(5);


// class Queue{
  
//   constructor(arr){
//     let emptyArr = [];

//   }
// }

// [1,5,3,6]

// [4,1,5,3,6]// stack
// [1,5,3,6]

// [1,5,3,6,4]// queue
// [5,3,6,4]







