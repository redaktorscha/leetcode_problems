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
  let n = 0;
  const dfs = (node, depth) => {
    if (node === null) {
      n = Math.max(n, depth);
      return;
    }

    const curDepth = depth;

    dfs(node.left, depth + 1);
    dfs(node.right, curDepth + 1);
  };

  dfs(root, n);

  return n;
};
