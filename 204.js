/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const result = new Array(n).fill(0).map((el, i) => i);
  result[1] = 0;

  for (let i = 0; i < n; i += 1) {
    if (result[i] !== 0) {
      for (let j = i + i; j < n; j += i) {
        result[j] = 0;
      }
    }
  }

  return result.filter(Boolean).length;
};
