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
  let node1 = l1;
  let node2 = l2;
  let carry = 0;

  const list = {
      val: null,
      next: null,
  };

  let current = list;

  while (node1 || node2 || carry) {
      let sum = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;

      carry = Math.floor(sum / 10);
      sum %= 10;

      node1 = node1?.next ?? null;
      node2 = node2?.next ?? null;

      current.next = {
          val: sum,
          next: null,
      };
      current = current.next;
  }

  return list.next;
  }

  return JSON.stringify(list.next);
};

// const list2 = {
//   val: 1,
//   next: {
//     val: 0,
//     next: {
//       val: 0,
//       next: {
//         val: 0,
//         next: {
//           val: 0,
//           next: {
//             val: 0,
//             next: {
//               val: 0,
//               next: {
//                 val: 0,
//                 next: {
//                   val: 0,
//                   next: {
//                     val: 0,
//                     next: {
//                       val: 0,
//                       next: {
//                         val: 0,
//                         next: {
//                           val: 0,
//                           next: {
//                             val: 0,
//                             next: {
//                               val: 0,
//                               next: {
//                                 val: 0,
//                                 next: {
//                                   val: 0,
//                                   next: {
//                                     val: 0,
//                                     next: {
//                                       val: 0,
//                                       next: {
//                                         val: 0,
//                                         next: {
//                                           val: 0,
//                                           next: {
//                                             val: 0,
//                                             next: {
//                                               val: 0,
//                                               next: {
//                                                 val: 0,
//                                                 next: {
//                                                   val: 0,
//                                                   next: {
//                                                     val: 0,
//                                                     next: {
//                                                       val: 0,
//                                                       next: {
//                                                         val: 0,
//                                                         next: {
//                                                           val: 0,
//                                                           next: {
//                                                             val: 0,
//                                                             next: {
//                                                               val: 0,
//                                                               next: null,
//                                                             },
//                                                           },
//                                                         },
//                                                       },
//                                                     },
//                                                   },
//                                                 },
//                                               },
//                                             },
//                                           },
//                                         },
//                                       },
//                                     },
//                                   },
//                                 },
//                               },
//                             },
//                           },
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const list1 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,

//       next: null,
//     },
//   },
// };
