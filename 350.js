/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const result = [];

  const map = nums1.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (const n of nums2) {
    if (n in map && map[n] > 0) {
      result.push(n);
      map[n] -= 1;
    }
  }

  return result;
};
