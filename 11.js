/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let curAmount = 0;
  let maxAmount = 0;

  while (left < right) {
    curAmount = (right - left) * Math.min(height[left], height[right]);
    maxAmount = Math.max(curAmount, maxAmount);
    if (height[right] < height[left]) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return maxAmount;
};
