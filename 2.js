/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const getListValues = (root) => {
    const res = [];

    let node = root;

    while (node !== null) {
      res.push(node.val);
      node = node.next;
    }

    return res;
  };

  const values1 = getListValues(l1);
  const values2 = getListValues(l2);

  console.log(values1);
  console.log(values2);

  let i = 0;
  let j = 0;

  let sumList = null;
  let tail = null;
  let carry = 0;
  let curSum;
  while (i < values1.length || j < values2.length) {
    curSum = (values1[i] ?? 0) + (values2[j] ?? 0);
    if (carry === 1) {
      curSum += carry;
      carry = 0;
    }
    if (curSum >= 10) {
      curSum -= 10;
      carry = 1;
    }

    if (sumList === null) {
      sumList = {
        val: curSum,
        next: null,
      };
      tail = sumList;
    } else {
      tail.next = {
        val: curSum,
        next: null,
      };
      tail = tail.next;
    }

    i += 1;
    j += 1;
  }

  if (carry) {
    tail.next = {
      val: carry,
      next: null,
    };
  }

  return sumList;
};
