/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let newList = null;

  let node = head;

  while (node !== null) {
    const newNode = {
      val: node.val,
      next: newList,
    };

    newList = newNode;
    node = node.next;
  }

  return newList;
};
