/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] in map) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
  }
};
