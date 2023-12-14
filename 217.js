/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const uniques = new Set(nums);
  return uniques.size !== nums.length;
};
