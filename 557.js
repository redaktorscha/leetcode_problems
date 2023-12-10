/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return s
    .split(' ')
    .map((el) => el.split('').reverse().join(''))
    .join(' ');
};
