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

function inorder(root)
{
  if(root !== null)
  {
    inorder(root.left);
    process.stdout.write(root.value.toString() + ' ');
    inorder(root.right);
  }
}

function createBSTRecur(root, key)
{
  if(root === null)
  {
    root = new TreeNode(key);
    return root;
  }

  if(key < root.value)
  {
    root.left = createBSTRecur(root.left, key);
  }
  else if (key > root.value)
  {
    root.right = createBSTRecur(root.right, key);
  }

  return root;
}

function createBST(arr)
{
  for(let a of arr)
  {
    root = createBSTRecur(root, a);
  }
}

function findLCA(root, n1, n2)
{
  if(root === null)
    return null;

  if(n1 > root.value && n2 > root.value)
    return findLCA(root.right, n1, n2);

  if(n1 < root.value && n2 < root.value)
    return findLCA(root.left, n1, n2);

  return root;
}

function computeDistance(lca, key)
{
  if(lca.value === key)
  {
    return 0;
  }

  else if(lca.value < key)
    return 1 + computeDistance(lca.right, key);
  else
    return 1 + computeDistance(lca.left, key);
}

function findDistanceBetweenNodes(root, n1, n2)
{
  if(root === null)
    return 0;

  let lca = findLCA(root, n1, n2);
  return computeDistance(lca, n1) + computeDistance(lca, n2);
}

createBST([20,10,5,15,30,25,35]);
//inorder(root);

// let lca = findLCA(root,5,15);
// if(lca)
//   console.log("LCA: ", lca.value);
// else
//   console.log("No LCA found");

console.log(findDistanceBetweenNodes(root, 20, 30));