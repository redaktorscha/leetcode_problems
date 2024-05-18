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
  // let node = head;
  // let prev = null;
  // while (node !== null) {
  //   node.prev = prev;
  //   prev = node;
  //   node = node.next;
  // }
  // let i = head;
  // let j = prev;
  // while (i !== j) {
  //   if (i.val !== j.val) {
  //     return false;
  //   }
  //   i = i.next;
  //   j = j.prev;
  // }
  // return true;
  // v3
  // const result = [];
  // let node = head;
  // while (node !== null) {
  //   result.push(node.val);
  //   node = node.next;
  // }
  // let left = 0;
  // let right = result.length - 1;
  // while (left < right) {
  //   if (result[left] !== result[right]) {
  //     return false;
  //   }
  //   left += 1;
  //   right -= 1;
  // }
  // return true;
  // v4

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let last = null;

  while (slow !== null) {
    let temp = slow.next;
    slow.next = last;
    last = slow;
    slow = temp;
  }

  let i = head;
  let j = last;

  while (j) {
    if (i.val !== j.val) {
      return false;
    }
    i = i.next;
    j = j.next;
  }

  return true;
};

isPalindrome({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  },
});
