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
 * @return {number}
 */
const maxDepth = (root) => {
  let result = 0;

  const dfs = (node, acc) => {
    if (node === null) {
      result = Math.max(result, acc);
      return;
    }

    dfs(node.left, acc + 1);
    dfs(node.right, acc + 1);
  };

  dfs(root, 0);

  return result;
};
