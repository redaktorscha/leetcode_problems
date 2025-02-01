/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = (nums) => {
  const isEven = (n) => n % 2 === 0;
  const isOdd = (n) => !isEven(n);

  const sameParity = (n, m) =>
    (isEven(n) && isEven(m)) || (isOdd(n) && isOdd(m));

  if (nums.length === 1) {
    return true;
  }

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (sameParity(nums[i], nums[i + 1])) {
      return false;
    }
  }

  return true;
};
