/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  let j = 0;
  let count = 1;

  for (let i = 1; i <= chars.length; i += 1) {
    if (chars[i] === chars[i - 1]) {
      count += 1;
    } else {
      chars[j] = chars[i - 1];
      j += 1;

      if (count > 1) {
        const strCount = String(count);
        for (const k of strCount) {
          chars[j] = k;
          j += 1;
        }
        count = 1;
      }
    }
  }
  return j;
};
