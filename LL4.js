class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = null;

function createSLL1(arr) {
    let curr = new node(arr[0])
    let head = curr;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new node(arr[i])
        curr = curr.next;
    }
    return head

}

function traverseSLL(head) {

    let curr = head;
    while (curr != null) {
        console.log(curr.val)
        curr = curr.next;
    }
}

function mergeLL(head1, head2) {

    let dummy = new node(0);
    let tail = dummy;


    while (head1 && head2) {
        if (head1.val < head2.val) {
            tail.next = head1;
            tail = tail.next
            head1 = head1.next
        }
        else {
            tail.next = head2;
            tail = tail.next
            head2 = head2.next
        }
    }

    tail.next = head1 ? head1 : head2;

    return dummy.next;


}

let sll1 = createSLL1([2, 5, 1, 4, 3, 7, 9])
// let sll1 = createSLL1([2,4,5,7])
let sll2 = createSLL1([1, 3, 8, 9])

// traverseSLL(sll1)
// console.log(first)
// traverseSLL(mergeLL(sll1,sll2))

function rotateKTimes(head, k) {
    if (k < 1) return head;

    let lengthLL = 1
    let currLast = head;

    while (currLast.next != null) {
        lengthLL++;
        currLast = currLast.next;
    }

    let rotation = k % lengthLL

    let curr = head;

    while (rotation--) {
        curr = curr.next
    }
    currLast.next = head;
    head = curr.next;
    curr.next = null;
    return head;
}

function reverseLL(head) {

    let curr = head;
    let after = null;
    let before = null;


    while (curr.next != null) {
        after = curr.next;
        curr.next = before;
        before = curr;
        curr = after;
        after = after.next
    }

    curr.next = before;

    return curr;
}

function sum(head1, head2) {

    let carry = 0;
    let reveresedHead1 = reverseLL(head1);
    let reveresedHead2 = reverseLL(head2);
    let dummy = new node(0);
    let curr = dummy


    while (reveresedHead1 || reveresedHead2) {
        let currSum = carry
        if (reveresedHead1) {
            currSum += reveresedHead1.val;
            reveresedHead1 = reveresedHead1.next
        }
        if (reveresedHead2) {
            currSum += reveresedHead2.val;
            reveresedHead2 = reveresedHead2.next
        }
        // curr.val = currSum%10;
        curr.next = new node(currSum % 10)
        carry = parseInt(currSum / 10);
        curr = curr.next;
    }
    // traverseSLL(dummy)
    return reverseLL(dummy.next)

}

function difference(head1, head2) {

    let carry = 0;
    let reveresedHead1 = reverseLL(head1);
    let reveresedHead2 = reverseLL(head2);
    let dummy = new node(0);
    let curr = dummy


    while (reveresedHead1 || reveresedHead2) {
        let currSum = 0
        if (reveresedHead1) {
            currSum += reveresedHead1.val - carry;
            reveresedHead1 = reveresedHead1.next
        }
        if (reveresedHead2) {
            currSum -= reveresedHead2.val;
            reveresedHead2 = reveresedHead2.next
        }
        if (currSum < 0) {
            carry = 1;
            currSum = 10 + currSum;
        }

        curr.next = new node(currSum % 10)
        // carry = parseInt(currSum/10);
        curr = curr.next;
    }

    return reverseLL(dummy.next)

}

function reverseKGroup(head, k) {

    if(head===null) return head;

    let curr =  head;
    let kVal = k;
    while(--kVal){
        if(curr.next==null) return head;
        curr = curr.next;
        
    }
    
    let tempNext = curr.next;
    curr.next = null
    reverseLL(head);
    head.next = reverseKGroup(tempNext,k)
    return curr;
}

let sll1_sum = createSLL1([9, 2])
let sll2_sum = createSLL1([1, 0, 5])

function createCll(head){
    let k=4;
    let curr = head;
    let temp = null;
    while(--k){
        curr = curr.next;
        
    }
    temp = curr;

    while(curr.next!=null){
        curr = curr.next
    }

    curr.next = temp;

    return head;

}

function findIntersection(head){
    let slowPtr = head;
    let fastPtr = head;

    while(fastPtr && fastPtr.next!=null && fastPtr.next.next!=null){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        if(slowPtr.val === fastPtr.val){
            let fastPtr = head;
            while(fastPtr.val!==slowPtr.val){
                slowPtr = slowPtr.next;
                fastPtr = fastPtr.next;
            }
            return slowPtr.val

        }

    }

    return -1;


}

function findPalindrome(head){
    let curr = head;

    let slowPtr = head,fastPtr = head;

    while(fastPtr!=null && fastPtr.next!=null){
        slowPtr=slowPtr.next
        fastPtr=fastPtr.next.next;
    }

    let revese2Half = reverseLL(slowPtr);

    while(revese2Half!=null){
        if(revese2Half.val!=curr.val){
            return false;
        }
        revese2Half=revese2Half.next
        curr = curr.next;
    }

    return true;
}



// traverseSLL(reverseLL(sll1))

// traverseSLL(rotateKTimes(sll1,9))

// traverseSLL(sum(sll1_sum,sll2_sum))
// traverseSLL(difference(sll2_sum,sll1_sum))
let sllRotate = createSLL1([1, 2, 3, 4,8, 2, 1])


// traverseSLL(reverseKGroup(sllRotate, 3))

// let cllList = createCll(sllRotate)

// console.log(findIntersection(cllList))

console.log(findPalindrome(sllRotate))


var deleteDuplicates = function(head) {
    
    let curr = head;
    
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            let temp = curr.next.next;
            curr.next.next = null;
            curr.next = temp;
            
        }
        curr = curr.next;
    }
    
    return head;
    
};

let sll12 = createSLL1([1,1,2,3,3])

traverseSLL(deleteDuplicates(sll12))

