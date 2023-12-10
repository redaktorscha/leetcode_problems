/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[A-Za-z]|\d/;
  const isAlphaNumeric = (char) => regex.test(char);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left += 1;
      continue;
    }

    if (!isAlphaNumeric(s[right])) {
      right -= 1;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};
