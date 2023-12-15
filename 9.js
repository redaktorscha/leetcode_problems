/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  let reversedNumber = 0;

  let n = x;
  while (n !== 0) {
    reversedNumber *= 10;
    reversedNumber += n % 10;
    n = Math.floor(n / 10);
  }

  return reversedNumber === x;
};
