/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);

    if (nums[midIdx] === target) {
      return midIdx;
    }

    if (nums[midIdx] < target) {
      left = midIdx + 1;
    } else {
      right = midIdx - 1;
    }
  }

  return left;
};
