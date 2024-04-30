/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const swap = (a, b, arr) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] !== 0) {
      swap(left, right, nums);
      left += 1;
    }
  }
};
