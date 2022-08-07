class TreeNode
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

function createBSTRecur(root,item){
  
  if(root===null){
    root = new TreeNode(item);
    return root;
  }

  if(item<root.value){
    root.left = createBSTRecur(root.left,item)
  }
  else if(item> root.value){
    root.right = createBSTRecur(root.right,item)
  }

  return root;

}



function createBST(arr)
{
 for(let a of arr){
  root = createBSTRecur(root,a)
 }
}

// function inorder(root)
// {
//   if(root !== null)
//   {
//     inorder(root.left);
//     process.stdout.write(root.value.toString() + ' ');
//     inorder(root.right);
//   }
// }

function inorder(head){
  if(head!=null){
    inorder(head.left)
    console.log(head.value)
    inorder(head.right)
  }
}

function findLCA(root, n1, n2){


  if(root === null)
    return null;

  if(n1>root.value && n2 > root.value){
    return findLCA(root.right, n1,n2)
  }

  if(n1 < root.value && n2< root.value){
    return findLCA(root.left, n1,n2)
  }

  return root.value;

}

// createBST([20,10,5,15,30,25,35,2,22]);
createBST([2,10,5,1,22,9])

console.log(findLCA(root,2,24))

// inorder(root);

