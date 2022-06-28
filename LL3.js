class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let head1 = null;
let head2 = null;

function createSLL1(arr) {
  head1 = new node(arr[0]);
  let curr = head1;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new node(arr[i]);
    curr = curr.next;
  }
}

function createSLL2(arr) {
  head2 = new node(arr[0]);
  let curr = head2;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new node(arr[i]);
    curr = curr.next;
  }
}

function createSLL(arr, head) {
  head = new node(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new node(arr[i]);
    curr = curr.next;
  }
  return head;
}

var list1 = new createSLL1([1, 2, 7, 4, 6]);
var list2 = new createSLL2([3, 5, 9]);

function traverseSLL(head) {
  let curr = head;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

function mergeLL(head1, head2) {
  let dummy = new node(0);
  let tail = dummy;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      tail.next = head1;
      tail = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      tail = head2;
      head2 = head2.next;
    }
  }

  tail.next = head1 ? head1 : head2;

  return dummy.next;
}

// function rotateKTimes(k){
//     let curr = head1;
//     --k;
//     while(--k){
//         curr = curr.next;
//     }

//     let tempTail = curr;
//     let tempHead = curr.next

//     while(curr.next!=null){
//         curr = curr.next
//     }

//     curr.next = head1;
//     tempTail.next = null;
//     head1 = tempHead;
// }

//Better way if rotation is more than the list length then above would not wordBreak:
function rotateKTimes(k) {
  let tail = head1;
  let n = 1;

  while (tail.next) {
    n++;
    tail = tail.next;
  }

  k %= n;
  if (k === 0) return head;
  tail.next = head1;
  let breakAt = n - k;
  while (breakAt--) {
    tail = tail.next;
  }
  let newHead = tail.next;
  tail.next = null;
  return newHead;
}

// let dummy = mergeLL(head1,head2)
// traverseSLL(head1)

// console.log("Rotate")
// traverseSLL(rotateKTimes(3))

function reverseLL(head) {
  let curr = head;
  let prev = null;
  let after = null;

  while (curr.next != null) {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
  }
  curr.next = prev;
  head = curr;
  return head;
}

function sum(head1, head2) {
  let dummy = new node(0);
  let curr = dummy;
  let reversedHead1 = reverseLL(head1);
  let reversedHead2 = reverseLL(head2);
  let carry = 0;

  while (reversedHead1 || reversedHead2 || carry) {
    let sum = carry;
    if (reversedHead1) {
      sum += reversedHead1.val;
      reversedHead1 = reversedHead1.next;
    }
    if (reversedHead2) {
      sum += reversedHead2.val;
      reversedHead2 = reversedHead2.next;
    }

    curr.next = new node(parseInt(sum % 10));
    carry = parseInt(sum / 10);
    curr = curr.next;
  }
  return reverseLL(dummy.next);
}

function difference(head1, head2) {
  let reveresedHead1 = reverseLL(head1);
  let reveresedHead2 = reverseLL(head2);
  let dummy = new node(0);
  let curr = dummy;
  let carry = 0;

  while (reveresedHead1 || reveresedHead2) {
    let differenceVar = 0;

    if (reveresedHead1) {
      if (reveresedHead1.val - carry > 0) {
        differenceVar = reveresedHead1.val - carry;
      } else {
        carry = 1;
        differenceVar = reveresedHead1.val - carry + 10;
      }

      reveresedHead1 = reveresedHead1.next;
    }
    if (reveresedHead2) {
      if (differenceVar - reveresedHead2.val > 0) {
        differenceVar -= reveresedHead2.val;
      } else {
        differenceVar = differenceVar - reveresedHead2.val + 10;
        carry = 1;
      }
      reveresedHead2 = reveresedHead2.next;
    }
    curr.next = new node(differenceVar);
    curr = curr.next;
  }

  return reverseLL(dummy.next);
}

function reverseKGroup(head, k) {
  if (head == null) {
    return null;
  }
  let curr = head;
  let kVal = k;
  while (--kVal) {
    curr = curr.next;
    if (curr.next == null) return head;
  }
  let after = curr.next;
  curr.next = null;
  reverseLL(head);
  head.next = reverseKGroup(after, k);
  return curr;
}

function traverseSLL3Positions(head, k) {
  let curr = head;

  while (--k) {
    curr = curr.next;
  }
  return curr;
}

function removeEl(curr) {
  if (curr.next != null) {
    curr.val = curr.next.val;
  } else {
    return null;
  }
  if (curr.next.next) {
    curr.next = curr.next.next;
  } else {
    curr.next = null;
  }
}

function findLength(head) {
  let curr = head;
  let length = 1;
  while (curr.next != null) {
    curr = curr.next;
    length++;
  }
  return length;
}

function findMeetingPoint(head1, head2) {
  let lengtHead1 = findLength(head1);
  let lengtHead2 = findLength(head2);
  if(lengtHead1>lengtHead2){
    let k = lengtHead1-lengtHead2 + 1;
    while(--k){
      head1 = head1.next
    }
  }
  else{
    let k = lengtHead2-lengtHead1;
    while(--k){
      head2 = head2.next
    }
  }

  while(head1 && head2){
    if(head1.val===head2.val){
      return head1.val
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  return -1;

}

function findPalindromeLL(head){

  let slow = head,fast = head;
  let curr = head;

  while(fast!= null && fast.next!= null&& fast.next.next!= null){
    fast = fast.next.next;
    slow = slow.next
  }
  let reversed2Half= reverseLL(slow.next)
  

  while(reversed2Half){
    if(reversed2Half.val!=curr.val){
      return false;
    }
    curr = curr.next;
    reversed2Half = reversed2Half.next;
  }
  return true;
  
}

let head4 = createSLL([9, 9, 9]);
let head5 = createSLL([9, 9, 8]);

// traverseSLL(reverseLL(head5))

// traverseSLL(sum(head4,head5))

let head6 = createSLL([8, 6, 7]);
let head7 = createSLL([9, 8]);

// traverseSLL(difference(head6,head7))

let head8 = createSLL([1, 2, 3, 4, 5, 6, 7, 8]);
// traverseSLL(reverseKGroup(head8,3))

// let curr = traverseSLL3Positions(head8, 5);

// console.log(curr.val);

// let head10 = createSLL([10, 11]);

// head10.next.next = curr;
// console.log(traverseSLL(head10))

// console.log(findMeetingPoint(head8, head10));

// removeEl(curr)
// traverseSLL(head8)

let head11 = createSLL(['M','A','L','A','Y','B','L','A','M'])

console.log(findPalindromeLL(head11))
