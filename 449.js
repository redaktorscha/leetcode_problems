/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const iter = (node) => {
    if (!node) {
      return 'null';
    }
    return `${node.val}#${iter(node.left)}#${iter(node.right)}`;
  };

  return iter(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const createTreeNode = (val) => {
    return {
      val: val,
      left: null,
      right: null,
    };
  };

  const stack = data.split('#').reverse();

  const iter = () => {
    const curNodeVal = stack.pop();
    if (curNodeVal === 'null') {
      return null;
    }

    const curNode = createTreeNode(curNodeVal);
    curNode.left = iter();
    curNode.right = iter();
    return curNode;
  };

  return iter();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
