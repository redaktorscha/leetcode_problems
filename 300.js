/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const lis = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        lis[i] = Math.max(lis[j] + 1, lis[i]);
      }
    }
  }
  return Math.max(...lis);
};
