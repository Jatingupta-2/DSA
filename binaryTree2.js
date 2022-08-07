class Tree{
    constructor(val){
        this.val= val;
        this.left = null;
        this.right = null; 
    }
}

function insertIntoTree(i, arr){
    let curr = null;

    if(i<arr.length){
        curr = new Tree(arr[i]);
        curr.left = insertIntoTree(2*i + 1, arr)
        curr.right = insertIntoTree(2*i + 2, arr)
    }

    return curr;
}

function preOrder(head){

    if(head!=null){
        console.log(head.val)
        preOrder(head.left);
        preOrder(head.right)
    }

}

function postOrder(head){

    if(head!=null){
       
        postOrder(head.left);
        postOrder(head.right)
        console.log(head.val)
    }

}
function inOrder(head){

    if(head!=null){
       
        inOrder(head.left);
        console.log(head.val);
        inOrder(head.right);
        
    }

}

function levelOrderTraversal(head){
    let queue = [];
    queue.unshift(head)
    while(queue.length>0){
        let node = queue.shift();
        // console.log(node)
        console.log(node.val)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
}

function calculateHeight(root){

    if(root === null) return 0;

    let left = calculateHeight(root.left);
    let right = calculateHeight(root.right);

    if(left>right){
        return left+1
    }
    else{
        return right+1
    }

}

function mirrorTree(root){

    if(root===null) return null;

    let left = mirrorTree(root.left)
    let right = mirrorTree(root.right)

    root.left = right
    root.right = left;

    return root;
}



let head = insertIntoTree(0,[1,2,3,4,5])
// console.log(head.val)
// preOrder(head)
// postOrder(head)
inOrder(head)

// console.log(levelOrderTraversal(head))

// console.log(calculateHeight(head))


inOrder(mirrorTree(head))