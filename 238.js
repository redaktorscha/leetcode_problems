/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let zeroCount = 0;
  const maxProduct = nums.reduce((acc, cur) => {
    if (cur === 0) {
      zeroCount += 1;
      return acc;
    }
    return (acc *= cur);
  }, 1);

  if (zeroCount > 1) {
    return nums.map((n) => 0);
  }

  if (zeroCount) {
    return nums.map((n) => {
      if (n === 0) {
        return maxProduct;
      }
      return 0;
    });
  }

  return nums.map((n) => maxProduct / n);
};
