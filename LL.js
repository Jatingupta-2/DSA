class SLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = null;

function createSLL(arr) {
  head = new SLLNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new SLLNode(arr[i]);
    curr = curr.next;
  }
}

function traverseSLL() {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

function insertAtBegining(val) {
  let curr = new SLLNode(val);
  curr.next = head;
  head = curr;
}

function insertAtkthPosition(val, k) {
  let curr = head;
  while (--k) {
    curr = curr.next;
  }

  let node = new SLLNode(val);
  node.next = curr.next;
  curr.next = node;
}

function insertAtEnd(val) {
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next
  }
  curr.next = new SLLNode(val)
}

function deleteKthNode(k){
    let curr = head;
    let prev= null;
    while(--k){
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
    curr.next = null;
    delete curr;
}

function updatekthNode(val, k){
    let curr= head;
    while(--k){
        curr = curr.next;
    }
    curr.val = val
}

function reverseList(){
 let curr = head;
  let prev = null;
  let after = null

 while(curr.next!=null){
  after = curr.next
  curr.next = prev;
  prev = curr;
  curr = after;
 }
 curr.next = prev; 
 head = curr
}

function findMiddleElLL(){

  let sP = head
  let fP = head

  while(fP!=null && fP.next!=null && fP.next.next!=null){
    
    sP = sP.next;
    fP = fP.next.next;
  }
  return sP.val;

}

function linkLastElto2(){
  let curr = head;

  let el_2 = curr.next;
  if(curr.next!=null){
    curr = curr.next;
  }
  curr.next = el_2;
}

function findIfLLIsCircular(){
  let sP = head
  let fP = head

  while(fP!=null && fP.next!=null && fP.next.next!=null){
    
    sP = sP.next;
    fP = fP.next.next;
    if(fP.val===sP.val){
      return true
    }
  }
  return false;
}

function findStartPointOfIterationLL(){
  let sP = head
  let fP = head

  while(fP!=null && fP.next!=null && fP.next.next!=null){
    
    sP = sP.next;
    fP = fP.next.next;
    if(fP.val===sP.val){
      // return true
      fP = head;
      while(fP.next!=null){
        sP = sP.next;
        fP = fP.next;
        if(fP.val===sP.val){
          return fP.val
        }
      }

    }
  }
  return false;
}


createSLL([1, 4, 55, 2, 1]);
insertAtBegining(6);
insertAtkthPosition(7, 3);
insertAtEnd(99)
deleteKthNode(4)
updatekthNode(98,7)
traverseSLL();

// console.log("-----Reverse------")
// reverseList()
// traverseSLL();

console.log('ME',findMiddleElLL())

linkLastElto2()

console.log(findIfLLIsCircular())

console.log(findStartPointOfIterationLL())


function abc(){

}

let b = 'b'

console.log(b.__proto__)



















///LL1

// class SLLNode{
//   constructor(value){
//       this.value = value;
//       this.next = null;
//   }
// }

// let head = null;

// function createSLL(arr){
//   head = new SLLNode(arr[0])
//   let curr = head;

//   for(let i=1;i<arr.length;i++){
//       curr.next = new SLLNode(arr[i])
//       curr = curr.next;
//   }
// }

// function traveseSLL(){
//   let curr = head;
//   while(curr !== null){
//       console.log(curr.value)
//       curr = curr.next;
//   }
// }

// function insertAtBegining(num){
//   let node = new SLLNode(num)
//   node.next = head;
//   head = node;
  
// }

// function deleteKthNode(k){


//   //Delete the memory
//   curr.next= null;
//   delete curr;

// }

// //reverse Linked List
// // 1. create new Linked List o(n), O(n)
// // Stack -> n,n 
// // brute force -> n^2, 1
// // swap -> n^2, 1











// createSLL([1,4,5,2,1])

// // traveseSLL();

// insertAtBegining(6)
// traveseSLL();


// let curr = head;
// let prev = null;
// let after = null;
// while(curr.next !== null){
//   after = curr.next;
//   curr.next = prev;
//   prev= curr;
//   curr = after
// }
// curr.next = prev
// head = curr





















///////Instructor Code 

// class SLLNode
// {
//   constructor(value)
//   {
//     this.value = value;
//     this.next = null;
//   }
// }

// let head = null;

// function createSLL(arr)
// {
//   head = new SLLNode(arr[0]);
//   let curr = head;
//   for(let i = 1; i < arr.length; ++i)
//   {
//     curr.next = new SLLNode(arr[i]);
//     curr = curr.next;
//   }
// }

// function traverseSLL()
// {
//   let curr = head;
//   while(curr !== null)
//   {
//     console.log(curr.value);
//     curr = curr.next;
//   }
// }

// function insertAtBeginning(val)
// {
//   let node = new SLLNode(val);
//   node.next = head;
//   head = node;
// }

// function insertAtkthPosition(val, k)
// {
//   if(k < 0)
//     return;
//   if(k === 0)
//     return insertAtBeginning(val);
//   let curr = head;
//   while(--k)
//   {
//     if(curr === null)
//       return;
//     curr = curr.next;
//   }
//   let node = new SLLNode(val);
//   node.next = curr.next;
//   curr.next = node;  
// }

// function insertAtEnd(val)
// {
//   let curr = head;
//   while(curr.next !== null)
//   {
//     curr = curr.next;
//   }
//   let node = new SLLNode(val);
//   curr.next = node;
// }

// function deleteKthNode(k)
// {
//   if(k < 1)
//     return;

//   let curr = head;
//   let prev = null;
//   while(--k)
//   {
//     if(curr.next === null)
//       return;

//     prev = curr;
//     curr = curr.next;
//   }
//   prev.next = curr.next;
//   curr.next = null;
//   delete curr;
// }

// function updatekthNode(val, k)
// {
//   if(k < 1)
//     return;
//   let curr = head;
//   while(--k)
//   {
//     if(curr === null)
//       return;
//     curr = curr.next;
//   }
//   curr.value = val;
// }

// function reverseList()
// {
//   let prev = null, curr = head, after = null;
//   while(curr.next !== null)
//   {
//     after = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = after;  //curr = curr.next
//   }
//   curr.next = prev;
//   head = curr;
// }

// createSLL([2,8,10,15,33,45,60]);
// //traverseSLL();  // 2,8,10,15,33,45,60
// insertAtBeginning(1);
// //traverseSLL();  // 1,2,8,10,15,33,45,60

// insertAtkthPosition(6,2);
// //traverseSLL();  // 1,2,6,8,10,15,33,45,60

// insertAtEnd(81);
// //traverseSLL();  // 1,2,6,8,10,15,33,45,60,81

// deleteKthNode(4);
// //traverseSLL();  // 1,2,6,10,15,33,45,60,81

// updatekthNode(12,4);
// traverseSLL();  // 1,2,6,12,15,33,45,60,81



