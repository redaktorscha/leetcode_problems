/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  // v1
  // let reversedList = null;
  // let node = head;
  // while (node !== null) {
  //   const newNode = {
  //     val: node.val,
  //     next: reversedList,
  //   };
  //   node = node.next;
  //   reversedList = newNode;
  // }
  // let i = head;
  // let j = reversedList;
  // while (i !== j) {
  //   if (i.val !== j.val) {
  //     return false;
  //   }
  //   i = i.next;
  //   j = j.next;
  // }
  // return true;

  //v2

  let node = head;
  let prev = null;

  while (node !== null) {
    node.prev = prev;
    prev = node;
    node = node.next;
  }

  let i = head;
  let j = prev;

  while (i !== j) {
    if (i.val !== j.val) {
      return false;
    }

    i = i.next;
    j = j.prev;
  }

  return true;
};
