/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  const result = [];
  let j = n;
  for (let i = 0; i < n; i += 1) {
    result.push(nums[i]);
    result.push(nums[j]);
    j += 1;
  }
  return result;
};
