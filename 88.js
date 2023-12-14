/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let firstEnd = n + m - 1;
  let secondEnd = n - 1;
  let mid = m - 1;

  while (secondEnd >= 0 && mid >= 0) {
    if (nums1[mid] > nums2[secondEnd]) {
      nums1[firstEnd] = nums1[mid];
      mid -= 1;
    } else {
      nums1[firstEnd] = nums2[secondEnd];
      secondEnd -= 1;
    }
    firstEnd -= 1;
  }

  while (secondEnd >= 0) {
    nums1[firstEnd] = nums2[secondEnd];
    secondEnd -= 1;
    firstEnd -= 1;
  }

  while (mid >= 0) {
    nums1[firstEnd] = nums1[mid];
    mid -= 1;
    firstEnd -= 1;
  }
};
