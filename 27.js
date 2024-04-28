/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left += 1;
    }
    right += 1;
  }
  return left;
};
