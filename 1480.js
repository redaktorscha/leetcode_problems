/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  const result = [];
  result[0] = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
};
