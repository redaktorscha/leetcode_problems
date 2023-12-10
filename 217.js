/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniques = new Set(nums);
  return uniques.size !== nums.length;
};
