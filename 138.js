/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
  const map = new Map();

  const iter = (node) => {
    if (node === null) {
      return null;
    }
    if (map.has(node)) {
      return map.get(node);
    }

    const newNode = {
      val: node.val,
    };

    map.set(node, newNode);
    newNode.next = iter(node.next);
    newNode.random = iter(node.random);

    return newNode;
  };

  return iter(head);
};
