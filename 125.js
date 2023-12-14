/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const regex = /[a-zA-Z]/;
  const isEmpty = (char) => char === ' ';
  const isAlphaNumeric = (char) =>
    !isEmpty(char) && (regex.test(char) || !isNaN(Number(char)));

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
