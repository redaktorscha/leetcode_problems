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
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [root];

  while (queue.length > 0) {
    const curLevel = [];

    const len = queue.length;

    for (let i = 0; i < len; i += 1) {
      const curNode = queue.shift();
      curLevel.push(curNode.val);
      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    if (result.length % 2 === 0) {
      result.push(curLevel);
    } else {
      result.push(curLevel.reverse());
    }
  }

  return result;
};
