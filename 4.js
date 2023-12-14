/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i += 1;
    } else {
      result.push(nums2[j]);
      j += 1;
    }
  }

  if (i < nums1.length) {
    result.push(...nums1.slice(i));
  }

  if (j < nums2.length) {
    result.push(...nums2.slice(j));
  }

  if (result.length % 2 === 0) {
    const midIdx1 = result.length / 2 - 1;
    const midIdx2 = result.length / 2;

    return (result[midIdx1] + result[midIdx2]) / 2;
  }

  const midIdx = Math.floor(result.length / 2);
  return result[midIdx];
};
