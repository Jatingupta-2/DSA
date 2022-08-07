class TreeNode{
    constructor(val) {
        this.val = val;
        this.left= null;
        this.right = null;
    }
}

function insertIntoTree(i, arr){
    let curr = null
    
    if(i<arr.length){
        curr = new TreeNode(arr[i])
        curr.left = insertIntoTree(2*i + 1,arr)
        curr.right = insertIntoTree(2*i + 2,arr)
    }
    return curr;
}

function preorder(root){

    if(root!=null){
        console.log(root.val.toString()+' ')
        preorder(root.left)
        preorder(root.right)
    }

}

function postOrder(root){

    if(root!=null){
        
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.val.toString()+' ')
    }

}

function inOrder(root){

    if(root!=null){
        
        inOrder(root.left)
        console.log(root.val.toString()+' ')
        inOrder(root.right)
        
    }

}

function levelorder(root){
    let queue = [];
    
    queue.push(root);
    while(queue.length!=0){
        let node = queue.shift();
        process.stdout.write(node.val.toString()+' ');
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
}

function calculateHeight(root){
    if(root===null) return 0;

    let leftHeight = calculateHeight(root.left);
    let rightHeight = calculateHeight(root.right);

    if(leftHeight>rightHeight){
        return leftHeight + 1;
    }
    else{
        return rightHeight+1;
    }
}

function mirrorTree(root){

    if(root===null) return null;

    let leftTree = mirrorTree(root.left)
    let rightTree = mirrorTree(root.right)

   root.left = rightTree;
   root.right = leftTree;

   return root



}

let root = insertIntoTree(0,[1,2,3,4,5])
// preorder(root)
// console.log()
// postOrder(root)
// console.log()
// inOrder(root)
levelorder(root);
console.log()
root = mirrorTree(root)
levelorder(root);