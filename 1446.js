/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {
  let prevIdx = 0;
  let prevChar = s[0];
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === prevChar) {
      max = Math.max(max, i - prevIdx + 1);
    } else {
      prevChar = s[i];
      prevIdx = i;
    }
  }

  return max;
};
