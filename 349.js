/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const set = new Set(nums1);
  const common = [];

  for (const n of nums2) {
    if (set.has(n)) {
      common.push(n);
      set.delete(n);
    }
  }

  return common;
};

// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
