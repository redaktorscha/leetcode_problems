/**
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = (str) => {
  if (str.length < 2) {
    return '';
  }

  let i = 0;
  const midIdx = Math.floor(str.length / 2);
  while (str[i] === 'a' && i < midIdx) {
    i += 1;
  }

  if (i === midIdx) {
    return `${str.slice(0, -1)}b`;
  }

  return `${str.slice(0, i)}a${str.slice(i + 1)}`;
};
