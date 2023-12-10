/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }

  let digits = 9;
  let current = 9;
  let ans = 10;

  while (n > 1 && digits) {
    current *= digits;
    ans += current;
    digits -= 1;
    n -= 1;
  }
  return ans;
};
