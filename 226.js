/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  const dfs = (node) => {
    if (node === null) {
      return null;
    }

    const temp = node.right;
    node.right = dfs(node.left);
    node.left = dfs(temp);

    return node;
  };

  dfs(root);

  return root;
};
