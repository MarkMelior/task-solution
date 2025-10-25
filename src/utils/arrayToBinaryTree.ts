export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function arrayToBinaryTree(rootArray: (number | null)[], index = 0): TreeNode | null {
  if (index >= rootArray.length || rootArray[index] === null) {
    return null;
  }

  const node = new TreeNode(rootArray[index]);
  node.left = arrayToBinaryTree(rootArray, 2 * index + 1);
  node.right = arrayToBinaryTree(rootArray, 2 * index + 2);

  return node;
}
