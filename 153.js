/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  const isMax = (arr, i) => arr[i + 1] < arr[i];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isMax(nums, mid)) {
      return nums[mid + 1];
    }

    if (nums[left] > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return nums[0];
};
