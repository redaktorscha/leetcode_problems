/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = (arr, size) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (i - j < size) {
      i += 1;
    } else {
      result.push(arr.slice(j, i));
      j = i;
    }
  }
  if (j < arr.length) {
    result.push(arr.slice(j, arr.length));
  }

  return result;
};
